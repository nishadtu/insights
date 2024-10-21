import React, { useEffect, useState } from "react";
import { db } from "firebase-config";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { AdminTable } from "components/tables/AdminTable";
import HeaderAdmin from "components/headers/HeaderAdmin";
import { DB_NAME, UNSUBSCRIBE_DB_NAME } from "constants";
import LoadingSpinner from "components/LoadingSpinner";
import { Grid, Paper } from "@mui/material";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { filterList, tableList } from "data/tableHeaderText";
import { filterListCsv, tableListCsv } from "data/tableHeaderTextCsv";
import { QrModal } from "components/modals/QrModal";
import { qrEndpoint } from "routes/routeNames";
import { mkConfig, generateCsv, download } from 'export-to-csv';
import ExportModal from "components/modals/ExportModal";
import { isValidEmail } from "helpers";
import UserDataService from "services/services"

const paperBox = (theme) => ({
	margin: '10px 100px 60px',
	flexGrow: 1,
	borderRadius: '25px',
	[theme.breakpoints.down("lg")]: {
		marginLeft: '60px',
		marginRight: '60px',
		marginTop: '60px',
	},
	[theme.breakpoints.only("xs")]: {
		marginLeft: '30px',
		marginRight: '30px',
	},

});

const gridBox = (theme) => ({
	marginTop: "20px",
	justify: "flex-end",
	alignItems: "center",
	boxShadow: "0 0 20px rgba(0,0,0,0.2)",
	borderRadius: '25px'
});

const csvConfig = mkConfig({
	fieldSeparator: ',',
	decimalSeparator: '.',
	useKeysAsHeaders: true,
	columnHeaders: false,
});


const Admin = () => {
	const [users, loadingUsers, errorUsers] = useCollection(collection(db, DB_NAME));
	const [unsubscribed, loadingUnsub, errorUnsub] = useCollection(collection(db, UNSUBSCRIBE_DB_NAME));
	const [usersMapped, setUsersMapped] = useState([]);
	const [unsubscribedMapped, setUnsubscribedMapped] = useState([]);
	useEffect(() => {
		setUsersMapped(users?.docs?.map((doc) => ({ id: doc.id, ...doc.data() })));
		// console.log(usersMapped.length);
	}, [users]);


	useEffect(() => {
		setUnsubscribedMapped(unsubscribed?.docs?.map((doc) => doc.id));
	}, [unsubscribed]);

	const [qrUrl, setQrUrl] = useState("");
	const [qrModalOpen, setQrModalOpen] = React.useState(false);
	const openQrModal = (qrLink) => {
		setQrUrl(qrEndpoint + qrLink);
		setQrModalOpen(true);
	};
	const closeQrModal = () => setQrModalOpen(false);

	const [userRows, setUserRows] = useState("");
	const [exportFormat, setExportFortmat] = useState("");

	const [ExportModalIsOpen, setExportModalIsOpen] = React.useState(false);
	const [exportModalErrorMsg, setExportModalErrorMsg] = useState("");
	const handleCloseExportModal = () => { setExportModalIsOpen(false); }
	const handleSubmitEmailModal = () => { setExportModalIsOpen(true); };

	const handleExportModal = async (adminName, adminEmail) => {
		// function handleExportModal(adminName, adminEmail) {
		if (adminName === "" || adminEmail === "") {
			setExportModalErrorMsg("All fields must be completed to download the datas");
			setTimeout(() => { setExportModalErrorMsg(""); }, 2000);
			return;
		} 
		if (!isValidEmail(adminEmail)) {
			setExportModalErrorMsg("Please enter a valid email");
			setTimeout(() => { setExportModalErrorMsg(""); }, 2000);
			return;
		} 
		try {
			const userCount = usersMapped.length;
			UserDataService.sendExportEmail(adminName, adminEmail, userCount);
			{exportFormat == "pdf" ? handleExportPdf(userRows) : handleExportCSV(userRows)}
			
		} catch (err) {
			// setMessage({ error: true, msg: err.message });
		}
		setExportModalIsOpen(false);
	}

	

	const handleDelete = (id) => {
		deleteDoc(doc(db, DB_NAME, id), id)
			.then(() => console.log(`user ${id} deleted`))
			.catch((err) => console.log(`error deleting ${id}`));
	};

	const handleOpenEmailModalPdf = (rows) => {
		setUserRows(rows);
		setExportFortmat('pdf');
		setExportModalIsOpen(true);
	};

	const handleOpenEmailModalCsv = (rows) => {
		setUserRows(rows);
		setExportFortmat('csv');
		setExportModalIsOpen(true);
	};

	const handleExportPdf = (rows) => {
		const doc = new jsPDF("p", "pt", "a4");
		const columnData = filterList;
		let rowsMapped = [];
		for (const row of rows.map((row) => row.original)) {
			const rowMapped = [];
			for (const col of columnData.filter((col) => col !== "emailSent")) {
				rowMapped.push(row[col]);
			}
			rowMapped.push(row.emailSent ? "Yes" : "");
			rowsMapped.push(rowMapped);
		}
		autoTable(doc, {
			head: [tableList],
			body: rowsMapped,
			margin: {
				left: 15,
				right: 15,
			},
			headStyles: { fillColor: [1, 125, 195], textColor: 255, fontStyle: "bold" },
			styles: { overflow: "ellipsize", cellWidth: "wrap" },
			horizontalPageBreak: true,
			horizontalPageBreakRepeat: 0,
		});
		doc.save("southern_dashboard.pdf");
	};


	const handleExportCSV = (rows) => {
		const columnData = filterList;
		let rowsMapped = [tableList];
		for (const row of rows.map((row) => row.original)) {
			const rowMapped = [];
			for (const col of columnData.filter((col) => col !== "unique_id")) {
				rowMapped.push(row[col]);
			}
			rowMapped.push(row.unique_id && "\uFEFF" + row.unique_id);
			rowsMapped.push(rowMapped);
		}
		console.log(rowsMapped);

		// const rowData = rows.map((row) => row.original);
		const csv = generateCsv(csvConfig)(rowsMapped);
		download(csvConfig)(csv);

	};


	return (
		<div id="lb">
			<HeaderAdmin text="Dashboard" title="Dashboard | Southern Company" />
			<Paper sx={paperBox}	>
				<Grid container sx={gridBox}>
					<Grid item xs={12} >
						{!errorUsers && !errorUnsub && (loadingUsers || loadingUnsub) ? (
							<LoadingSpinner />
						) : (<AdminTable
							users={usersMapped}
							unsubscribed={unsubscribedMapped}
							onClickDelete={handleDelete}
							onClickExportPdf={handleOpenEmailModalPdf}
							// onClickExportPdf={handleExportPdf}
							onClickExportCSV={handleOpenEmailModalCsv}
							onClickQr={openQrModal}
						/>)}
					</Grid>
				</Grid>
			</Paper>
			<QrModal isOpen={qrModalOpen} qrUrl={qrUrl} handleClose={closeQrModal} />
			<ExportModal isOpen={ExportModalIsOpen} handleClose={handleCloseExportModal} sendDataToEmail={handleExportModal} errorMsg={exportModalErrorMsg} onChange={(e) => setExportModalErrorMsg('')} />

		</div>
	);
};

export default Admin;
