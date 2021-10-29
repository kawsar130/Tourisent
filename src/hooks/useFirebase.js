import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState("");

    const auth = getAuth();

    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        // console.log(email, password);
        if (password.length < 8) {
            setError("Password must be at least 8 Characters!");
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Password must contain at least ONE upper case!");
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError("Password must contain at least ONE special character!");
            return;
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Password must contain at least TWO digits!");
            return;
        }

        isLogin
            ? processLogin(email, password)
            : registerNewUser(email, password);
    };

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            })
            .finally(() => setIsLoading(false))
            .catch((error) => {
                console.log(error.message, error.code);
            });
    };

    // Observing user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {})
            .finally(() => setIsLoading(false));
    };

    return {
        user,
        error,
        isLoading,
        isLogin,
        setIsLoading,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
    };
};

export default useFirebase;
