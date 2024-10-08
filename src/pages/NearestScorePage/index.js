import React, { useState } from "react";
import MessageModal from "components/modals/MessageModal";
import Header from "components/headers/Header";
import NearestForm from "components/forms/scoreForm/NearestForm";
import routeNames from "routes/routeNames";
import { useNavigate } from 'react-router-dom';

const NearestScore= () => {

	const [modalData, setModalData] = useState({ error: false, text: "", header: "", modalWait: "", callback: undefined });
	const [modalIsOpen, setModalIsOpen] = React.useState(false);
	const navigate = useNavigate();
	const handleModalMessage = (message, isError, modaltext, cb) => {
		setModalData({
			error: isError,
			text: message,
			header: isError ? "Sorry" : "Success",
			modalWait: modaltext,
			callback: cb,
		});
		setModalIsOpen(true);
	};

	const handleCloseModal = () => {
		setModalIsOpen(false);
		// navigate(routeNames.nearest, { state: {} });
	}

	return (
		<div className="nearestScoreBg">
			<Header text="Scoring" title="Nearest The Pin | Insights Admin Dashboard" eventName="NEAREST THE PIN"/>
			<NearestForm handleModalMessage={handleModalMessage} />
			<MessageModal isOpen={modalIsOpen} handleClose={handleCloseModal} data={modalData} />
		</div>
	);
};

export default NearestScore;
