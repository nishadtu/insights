import React, { useState, useEffect } from "react";
import "css/Main.css";
import MessageModal from "components/modals/MessageModal";
import Header from "components/headers/Header"
import AddForm from "components/forms/AddForm";
import { useLocation, useNavigate } from 'react-router-dom';
import routeNames from "routes/routeNames";
import { isValidEmail } from "helpers";
import TermsModal from "components/modals/TermsModal";
import EmailModal from "components/modals/EmailModal";
import UserDataService from 'services/services'

const RegisterPage = () => {
	const [modalData, setModalData] = useState({ error: false, text: "", header: "", modalWait: "", callback: undefined });
	const [modalIsOpen, setModalIsOpen] = React.useState(false);
	const handleModalMessage = (message, isError, header, modaltext, cb) => {
		setModalData({
			error: isError,
			text: message,
			header: header,
			modalWait: modaltext,
			callback: cb,
		});
		setModalIsOpen(true);
	};
	const handleCloseModal = () => setModalIsOpen(false);
	const [events, setEvent] = useState("");
	const [eventName, setEventName] = useState("");
	const locationUrl = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (locationUrl.state === null) { navigate(routeNames.nearest); } else { setEvent(locationUrl.state.events); console.log(locationUrl.state.events); }
	}, [locationUrl.state, navigate]);

	useEffect(() => {
		(events === "nearest" ? setEventName("NEAREST THE PIN") : setEventName("LONGEST DRIVE"))
	}, [events]);

	const [TermsModalIsOpen, setTermsModalIsOpen] = React.useState(true);
	const [EmailModalIsOpen, setEmailModalIsOpen] = React.useState(false);
	const [EmailModalErrorMsg, setEmailModalErrorMsg] = useState("");

	const handleCloseTermsModal = () => setTermsModalIsOpen(false);
	const handleCloseEmailModal = () => { setEmailModalIsOpen(false); setTermsModalIsOpen(true); }
	const handleSubmitDisagreeModal = () => { setTermsModalIsOpen(false); setTimeout(() => setTermsModalIsOpen(true), 500); };
	const handleSubmitEmailModal = () => { setTermsModalIsOpen(false); setEmailModalIsOpen(true); };

	function handleEmailModal(clientName, clientEmail) {
		if (clientName === "" || clientEmail === "") {
			setEmailModalErrorMsg("All fields must be completed to receive terms and condition email");
			setTimeout(() => { setEmailModalErrorMsg(""); }, 2000);
			return;
		}
		if (!isValidEmail(clientEmail)) {
			setEmailModalErrorMsg("Please enter correct email");
			setTimeout(() => { setEmailModalErrorMsg(""); }, 2000);
			return;
		}
		try {
			UserDataService.sendTermsEmail(clientName, clientEmail);
		} catch (err) {
			// setMessage({ error: true, msg: err.message });
		}
		setEmailModalIsOpen(false);
		setTermsModalIsOpen(true);
	}


	return (
		<div className={events + "Bg"}>
			<Header text="Registration" title="Registration | Insights Admin Dashboard" eventName={eventName} />
			<AddForm handleModalMessage={handleModalMessage} sendCloseModal={handleCloseModal} eventName={events} />
			<MessageModal isOpen={modalIsOpen} handleClose={handleCloseModal} data={modalData} />
			<TermsModal isOpen={TermsModalIsOpen} handleClose={handleCloseTermsModal} handleSubmitAgree={handleCloseTermsModal} handleSubmitDisagree={handleSubmitDisagreeModal} handleSubmitEmail={handleSubmitEmailModal} />
			<EmailModal isOpen={EmailModalIsOpen} handleClose={handleCloseEmailModal} sendDataToEmail={handleEmailModal} errorMsg={EmailModalErrorMsg} onChange={(e) => setEmailModalErrorMsg('')} />

		</div>
	);
};

export default RegisterPage;
