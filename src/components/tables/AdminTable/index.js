import { Button, Box, Link, Typography, Grid } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { editEndpoint } from "routes/routeNames";
import TableButton from "components/buttons/TableButton";
import csvButton from "images/csv.png";
import searchButton from "images/search.png";
import searchOffButton from "images/search-off.png";
import coloumButton from "images/coloum.png";
import pdfButton from "images/pdf.png";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { bodyActiveIcons } from "components/Styles";
import QrCodeIcon from '@mui/icons-material/QrCode';
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";



const centerAln = {
	muiTableHeadCellProps: { align: "center" },
	muiTableBodyCellProps: { align: "center" },
};

const QrLink = ({ url, didClick }) =>
	url ? (
		<QrCodeIcon onClick={(e) => didClick(url)} sx={{ cursor: 'pointer' }} />
	) : (
		<div></div>
	);



export const AdminTable = ({
	users,
	unsubscribed,
	onClickDelete,
	onClickExportPdf,
	onClickExportCSV,
	onClickQr,
}) => {

	const checkIfUnsubscribed = (email) => {
		if (!unsubscribed) return false;
		return unsubscribed.includes(email);
	};


	return (
		users && (
			// <ThemeProvider theme={defaultMaterialTheme}>
			<MaterialReactTable
				columns={[
					{ header: "Sl No.", accessorKey: "slno", width: "40px", minSize: '50px', ...centerAln },
					{ header: "First Name", accessorKey: "first_name", minSize: '50px', ...centerAln },
					{ header: "Last Name", accessorKey: "last_name", minSize: '50px', ...centerAln },
					{ header: "Email", accessorKey: "email", ...centerAln },
					{ header: "Gender", accessorKey: "gender", ...centerAln },
					{ header: "Nearest the Pin", accessorKey: "scoreText", ...centerAln },
					{ header: "Longest Drive", accessorKey: "longest", ...centerAln },
					{ header: "Date", accessorKey: "register_date", ...centerAln  },
					{ header: "Actions", accessorKey: "action", minSize: '100px', ...centerAln },
				]}
				data={users.map((doc, index) => ({
					slno: index + 1,
					...doc,
					action: (
						<>
							<Link href={editEndpoint(doc.id)}>
								<Button
									variant="contained"
									className="editBtn"
									sx={{ marginRight: "15px", minWidth: "20px", padding: "5px", marginBottom: "5px" }}
								>
									<EditIcon style={{ color: "grey",  }} />
								</Button>
							</Link>
							<Button
								variant="contained"
								color="error"
								onClick={(e) => {
									if (window.confirm("Delete the item?")) {
										onClickDelete(doc.id);
									}
								}}
								sx={{
									marginRight: "15px",
									minWidth: "20px",
									padding: "5px",
								}}
							>
								<DeleteIcon />
							</Button>
						</>
					),
				}))}
				enableFullScreenToggle={false}
				enableDensityToggle={false}
				visibleInShowHideMenu={false}
				enableHiding={true}
				enableColumnFilters={false}
				enableColumnActions={false}
				enableFilterMatchHighlighting={false}
				enableMultiSort={true}
				renderTopToolbarCustomActions={({ table }) => (
					<Box
						sx={{
							display: "flex",
							gap: "16px",
							padding: "8px",
							flexWrap: "wrap",
						}}
					>
						<Button
							//export all rows, including from the next page, (still respects filtering and sorting)
							disabled={table.getPrePaginationRowModel().rows.length === 0}
							onClick={() => onClickExportCSV(table.getPrePaginationRowModel().rows)}
						>
							<TableButton buttonTexts="CSV" iconBtn={csvButton} />
						</Button>
						<Button
							//export all rows, including from the next page, (still respects filtering and sorting)
							disabled={table.getPrePaginationRowModel().rows.length === 0}
							onClick={() => onClickExportPdf(table.getPrePaginationRowModel().rows)}
						>
							<TableButton buttonTexts="PDF" iconBtn={pdfButton} />
						</Button>

					</Box>
				)}
				muiTablePaperProps={{
					elevation: 0,
				}}
				icons={{
					//change sort icon, connect internal props so that it gets styled correctly
					ViewColumnIcon: (props) => <TableButton buttonTexts="Columns" iconBtn={coloumButton} />,
					SearchIcon: (props) => <TableButton buttonTexts="Search" iconBtn={searchButton} />,
					SearchOffIcon: () => <TableButton buttonTexts="Search" iconBtn={searchOffButton} />,
				}}
			/>
			// </ThemeProvider>
		)
	);
};
