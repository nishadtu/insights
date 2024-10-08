import React, { useState, useEffect } from "react";
import MessageModal from "components/modals/MessageModal";
import Header from "components/headers/Header";
import UserLoginForm from "components/forms/UserLoginForm";
import { useLocation, useNavigate } from 'react-router-dom';
import routeNames from "routes/routeNames";


const UserLoginPage = () => {

	const [modalData, setModalData] = useState({ error: false, text: "", header: "", modalWait: "", callback: undefined });
	const [modalIsOpen, setModalIsOpen] = React.useState(false);
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
	const handleCloseModal = () => setModalIsOpen(false);

	const [events, setEvent] = useState("");
	const [eventName, setEventName] = useState("");
	const locationUrl = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (locationUrl.state === null) { navigate(routeNames.nearest); } else { setEvent(locationUrl.state.events); console.log(locationUrl.state.events); }
	}, [locationUrl.state, navigate]);

	useEffect(() => {
		(events == "nearest" ? setEventName("NEAREST THE PIN") : setEventName("LONGEST DRIVE"))
	}, [events]);

	return (
		<div className={events + "Bg"}>
			<Header text="Login" title="Login | Insights Admin Dashboard" eventName={eventName}/>
			<UserLoginForm handleModalMessage={handleModalMessage} />
			<MessageModal isOpen={modalIsOpen} handleClose={handleCloseModal} data={modalData} />

		</div>

	);
};

export default UserLoginPage;
