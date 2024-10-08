import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid, Box } from "@mui/material";


const gridBox = (theme) => ({
	marginTop: '-30px',
	justify: "flex-end",
	alignItems: "center",
	minHeight: '50vh',
});


export default function LoadingSpinner() {
	return (
		<Grid container  sx={gridBox}>
			<Box sx={{ display: "flex", mx: "auto" }}>
				<CircularProgress sx={{ mx: "auto", color: "#006bb6" }} />
			</Box>
		</Grid>

	);
}
