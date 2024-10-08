import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import routeNames from "routes/routeNames";
import MessageModal from "components/modals/MessageModal";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "firebase-config";
import { DB_NAME } from "constants";
import EditForm from "components/forms/EditForm";
import Header from "components/headers/Header";

const EditUser = () => {
	const navigate = useNavigate();
	const urlData = useParams();
	const id = urlData?.id?.substring(3);
	const [user, loading, error] = useDocument(doc(db, DB_NAME, id));

	const [modalData, setModalData] = useState({ error: false, text: "", header: "", callback: undefined });
	const [modalIsOpen, setModalIsOpen] = React.useState(false);
	const handleModalMessage = (message, isError, cb) => {
		setModalData({
			error: isError,
			text: message,
			header: isError ? "Sorry" : "Success",
			callback: cb,
		});
		setModalIsOpen(true);
	};

	const handleCloseModal = () => setModalIsOpen(false);
	const handleBack = () => navigate(routeNames.admin);

	return (
		<div className="longestScoreBg">
			<Header text="Edit" title="Registration | Insights Admin Dashboard" />
			{user && !loading && !error && <EditForm id={id} user={user} handleBack={handleBack} handleModalMessage={handleModalMessage} />}
			<MessageModal isOpen={modalIsOpen} handleClose={handleCloseModal} data={modalData} />
		</div>
	);
};

export default EditUser;
