import { db } from "firebase-config";
import { collection, getDocs, getDoc, setDoc, updateDoc, deleteDoc, doc, addDoc } from "firebase/firestore";
import { DB_NAME, EMAIL_DB_NAME } from "../constants";
import { qrEndpoint } from "routes/routeNames";

const userCollectionRef = collection(db, DB_NAME);

class UserDataService {
	addUser = (newUser) => {
		const docRef = doc(db, DB_NAME, newUser.email);
		return setDoc(docRef, newUser);
	};

	addSurvey = (unique_id, newUser) => {
		const docRef = doc(db, 'survey', unique_id);
		return setDoc(docRef, newUser);
	};

	addHole = (newUser) => {
		const docRef = doc(db, 'hole', newUser.unique_id);
		return setDoc(docRef, newUser);
	};

	updateUser = (id, updatedUser) => {
		const userDoc = doc(db, DB_NAME, id);
		return updateDoc(userDoc, updatedUser);
	};

	deleteUser = (id) => {
		const userDoc = doc(db, DB_NAME, id);
		return deleteDoc(userDoc, id);
	};

	getAllUsers = () => {
		return getDocs(userCollectionRef);
	};

	getUser = (id) => {
		const userDoc = doc(db, DB_NAME, id);
		return getDoc(userDoc);
	};

	unSubscribeUser = (newUser) => {
		const docRef = doc(db, "unsubscribe", newUser.email);
		return setDoc(docRef, newUser);
	};

	sendEmail(unique_id) {
		return new Promise((resolve, reject) => {
			console.log("Email sending");
			const userDoc = doc(db, DB_NAME, unique_id);
			getDoc(userDoc).then((doc) => {
				if (doc.exists()) {
					const user = doc.data();
					const email = user.email;
					addDoc(collection(db, EMAIL_DB_NAME), {
						to: [email],
						template: {
							name: `userEmail`,
							data: {
								...user,
							},
						},
					})
						.then((res) => {
							resolve("Email sent to user with id: ", unique_id)
							this.updateUser(unique_id, { emailSent: "Yes" });
						})
						.catch((error) => reject(error));
				}
			});
		});
	}

	sendTermsEmail(clientName, clientEmail) {
		return new Promise((resolve, reject) => {
			console.log("Terms Email sending");
			addDoc(collection(db, EMAIL_DB_NAME), {
				to: [clientEmail],
				template: {
					name: `insightsTermsEmail`,
					data: {
						clientName,
						clientEmail
					},
				},
			})
				.then((res) => {
					resolve("Email sent to user with id: ", clientEmail)
				})
				.catch((error) => reject(error));

		});
	}

	sendExportEmail(adminName, adminEmail, totalEntries) {
		return new Promise((resolve, reject) => {
			console.log("Export Email sending");
			var date = new Date().toLocaleString("en-US", { timeZone: "Europe/London" });
			addDoc(collection(db, EMAIL_DB_NAME), {
				to: ['aiden@provisiondesign.co.uk'],
				template: {
					name: `insightsExportEmail`,
					data: {
						adminName,
						adminEmail,
						date,
						totalEntries
					},
				},
			})
				.then((res) => {
					resolve("Email sent to user with id: ", adminEmail)
				})
				.catch((error) => reject(error));

		});
	}


}
// eslint-disable-next-line
export default new UserDataService();
