import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import FormButton from "components/buttons/FormButton";
import FormTextField from "components/formElements/FormTextField";
import UserDataService from "services/services";
import userImg from "images/user.png";
import qrImg from "images/qr.png";
import { Scanner } from "components/Scanner";
import { useNavigate } from "react-router-dom";
import routeNames from "routes/routeNames";

const VideoQrForm = ({ handleModalMessage, sendCloseModal }) => {
	const navigate = useNavigate();
	const [unique_ids, setUniqueId] = useState("");
	const [score, setScore] = useState("");
	const [decodedValue, setDecodedValue] = useState("");
	const [scannerType, setScannerType] = useState("QR");

	const handleSubmit = async (event) => {
		event.preventDefault();
		if ((unique_ids === "" || isNaN(score))) {
			handleModalMessage("Please scan the QR code", true,);
			return
		} else {
			handleModalMessage("The page redirected to video recording", false,);
			return
		}
	};

	useEffect(() => {
		if (decodedValue) {
			getUser(decodedValue);
		}
	}, [decodedValue]);



	const getUser = async (id) => {
		const docSnap = await UserDataService.getUser(id);
		if (docSnap.data()) {
			const unique_id = docSnap.data().unique_id;
			setUniqueId(docSnap.data().unique_id);
			handleModalMessage("This QR code is verified. ", false);
			navigate(routeNames.record, { state: { unique_id: unique_id} });

		} else {
			handleModalMessage("This QR code is not valid. Please scan another QR code.", true);
		}
	};

	return (
		<Paper sx={{ margin: 'auto', maxWidth: "75%", width: 750, flexGrow: 1, boxShadow: 'none', marginTop: '5px', background: 'transparent' }}	>
			<form method="post" className="" >
				<Grid container spacing={1} style={{ marginTop: '5vh' }}>
					<Grid item xs={12} sx={{ marginTop: '10px' }}></Grid>

					<Grid item xs={12} style={{ display: "none" }}>
						<FormTextField type={'text'} user={userImg} label="Unique ID" value={unique_ids} onChange={(e) => setUniqueId(e.target.value)} marginTop="0" />
					</Grid>
					<Grid item xs={3} ></Grid>
					
					<Grid item xs={12} sx={{ textAlign: 'center', marginTop: '30px' }}>
						<FormButton type={"button"} handleClick={handleSubmit} style={{ marginTop: '20px' }} text={"Submit"} />
					</Grid>
				</Grid>
			</form>
		</Paper>

	);
};

export default VideoQrForm;
