import { useEffect, useState } from "react"
import initializeAuthentication from "../../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     console.log(user);
        //     setUser(result.user)
        // })
        // .catch(error => {
        //     setError(error.message);
        // })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    return {
        user,
        error,
        logout,
        signInUsingGoogle

    }
}
export default useFirebase;