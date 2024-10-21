import React from "react";
import { useParams } from "react-router-dom";
import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "firebase-config";
import { DB_NAME } from "constants";
import LongestCardForm from 'components/forms/LongestCardForm'
import HeaderCard from "components/headers/HeaderCard";

const LongestCard = () => {
	const { id } = useParams();
	const [user, loading, error] = useDocument(doc(db, DB_NAME, id));

	return (
		<>
		<HeaderCard title="Nearest Share"/>
			{user && !loading && !error && <LongestCardForm id={id} user={user} />}
		</>
	);
};

export default LongestCard;