import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "firebase-config";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
	const [user, setUser] = useState({});

	function adminLogin(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function signUp(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}
	function adminLogout() {
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
			setUser(currentuser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return <userAuthContext.Provider value={{ user, adminLogin, signUp, adminLogout }}>{children}</userAuthContext.Provider>;
}

export function useAdminAuth() {
	return useContext(userAuthContext);
}
