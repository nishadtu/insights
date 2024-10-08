import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routeNames from "routes/routeNames";
import { LoginForm } from "components/forms/LoginForm";
import { useAdminAuth } from "services/UserAuthContext";
import MessageModal from "components/modals/MessageModal";
import Header from "components/headers/Header";

const LoginPage = () => {
	const { adminLogin } = useAdminAuth();
	const navigate = useNavigate();

	const handleLogin = (useremail, password) => {
		adminLogin(useremail, password)
			.then(() => navigate(routeNames.admin))
			.catch((err) => {
				handleModalMessage("The username or password are wrong. Please try again", true);
			});
	};

	const [modalData, setModalData] = useState({ error: false, text: "", header: "", callback: undefined });
	const [modalIsOpen, setModalIsOpen] = React.useState(false);
	const handleCloseModal = () => setModalIsOpen(false);

	const handleModalMessage = (message, isError, cb) => {
		setModalData({ error: isError, text: message, header: "Sorry", callback: cb });
		setModalIsOpen(true);
	};

	return (
		<div className="longestScoreBg">
			<Header text="Login" title="Login | Insights Admin Dashboard" eventName=""/>
			<LoginForm handleModalMessage={handleModalMessage} handleLogin={handleLogin} />
			<MessageModal isOpen={modalIsOpen} handleClose={handleCloseModal} data={modalData} />
		</div>
	);
};

export default LoginPage;
