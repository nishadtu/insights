import React, { createContext, useContext, useEffect, useState } from "react";
import { signInAnonymously, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const anonAuthContext = createContext();

export function AnonAuthContextProvider({ children }) {
	const [anonUser, setAnonUser] = useState({});

	function anonLogin() {
		return signInAnonymously(auth)
			.then(() => {
				// Signed in..
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ...
			});
	}

	function anonLogout() {
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
			setAnonUser(currentuser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return <anonAuthContext.Provider value={{ anonUser, anonLogin, anonLogout }}>{children}</anonAuthContext.Provider>;
}

export function useAnonAuth() {
	return useContext(anonAuthContext);
}
