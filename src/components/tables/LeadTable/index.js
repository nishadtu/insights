import { MaterialReactTable } from "material-react-table";

const centerAln = {
	muiTableHeadCellProps: { align: "center" },
	muiTableBodyCellProps: { align: "center" },
};


export const LeadTable = ({ users, onClickImage, onClickDelete }) => {
	var total = 1
	return (
		users && (
			// <ThemeProvider theme={defaultMaterialTheme}>
			<MaterialReactTable
				columns={[
					{ header: "Rank", accessorKey: "rank", maxSize: "20px", ...centerAln },
					{ header: "First Name", accessorKey: "first_name", maxSize: "100px", ...centerAln },
					{ header: "Last Name", accessorKey: "last_name", maxSize: "100px", ...centerAln },
					{ header: "Nearest the Pin", accessorKey: "score", maxSize: "100px", ...centerAln },
				]}

				data={users.map((doc, index, arr) => ({
					slno: index + 1,
					...doc,
					score: doc.scoreText,
					rank: index === 0 ? <>{1}</> : (arr[index - 1].score !== arr[index].score ? <>{++total}</> : <>{total}</>),
					
				}))} 
				enableFullScreenToggle={false}
				enableDensityToggle={false}
				visibleInShowHideMenu={false}
				enableHiding={false}
				enableColumnFilters={false}
				enableColumnActions={false}
				enableSorting= {false}
				enableFilterMatchHighlighting={false}
				enableGlobalFilterModes
				initialState={{
					showGlobalFilter: true,
				}}
				positionGlobalFilter="left"
				muiSearchTextFieldProps={{
					placeholder: `Search`,
					sx: { minWidth: '500px', width : '600px' },
					variant: 'outlined',
				}}

			/>
			// </ThemeProvider>
		)
	);
};
