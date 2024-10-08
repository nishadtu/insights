import { MaterialReactTable } from "material-react-table";
import UserDataService from "services/services";



const centerAln = {
	muiTableHeadCellProps: { align: "center" },
	muiTableBodyCellProps: { align: "center" },
};


export const EmailTable = ({ users }) => {


	const checkStatus = (unique_id) => {
		var current_date = new Date();
		const timestampCurrent = current_date.valueOf() / 1000;
		const timestampReg = unique_id / 1000;
		const minute = (timestampCurrent - timestampReg) / 60;
		console.log("Minutes " + minute);
		if(minute > 60){
			UserDataService.sendUserEmail(unique_id);
		}
	};


	var total = 1
	return (
		users && (
			// <ThemeProvider theme={defaultMaterialTheme}>
			<MaterialReactTable
				columns={[
					{ header: "Rank", accessorKey: "rank", maxSize: "20px", ...centerAln },
					{ header: "Unique ID", accessorKey: "unique_id", maxSize: "20px", ...centerAln },
					{ header: "First Name", accessorKey: "first_name", maxSize: "100px", ...centerAln },
					{ header: "Last Name", accessorKey: "last_name", maxSize: "100px", ...centerAln },
					{ header: "Total", accessorKey: "totalScore", maxSize: "100px", ...centerAln },
					{ header: "Email Sent", accessorKey: "emailSent", maxSize: "100px", ...centerAln },
					{ header: "Date", accessorKey: "date", maxSize: "100px", ...centerAln },
				]}

				data={users.map((doc, index, arr) => ({
					slno: index + 1,
					...doc,
					date: doc.register_date,
					rank: index === 0 ? <>{1}</> : (arr[index - 1].score !== arr[index].score ? <>{++total}</> : <>{total}</>),
					emailSent: (doc.emailSent) ? "Yes" : checkStatus(doc.unique_id, doc.emailSent),
				}))}
				enableFullScreenToggle={false}
				enableDensityToggle={false}
				visibleInShowHideMenu={false}
				enableHiding={false}
				enableColumnFilters={false}
				enableColumnActions={false}
				enableFilterMatchHighlighting={false}


			/>
			// </ThemeProvider>
		)
	);
};
