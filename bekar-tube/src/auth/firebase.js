import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { redirect } from "react-router-dom";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "bekar-tube.firebaseapp.com",
    projectId: "bekar-tube",
    storageBucket: "bekar-tube.firebasestorage.app",
    messagingSenderId: "130376488545",
    appId: "1:130376488545:web:aa173aba739fe2590abc20",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const logInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        return { user, token };
    } catch (error) {
        console.error("❌ Login error:", error);
        return null;
    }
};


const logout = async () => {
    try {
        await signOut(auth);
        console.log("✅ Logged out");
        redirect('/')
    } catch (error) {
        console.error("❌ Logout error:", error);
    }
};

export { auth, logInWithGoogle, logout };

