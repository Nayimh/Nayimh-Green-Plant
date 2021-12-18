import { useState, useEffect } from "react";
import initializeFirebase from "../FirebaseSetup/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";


initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [authError, setAuthError] = useState('');

 

    const auth = getAuth();
  const registerUser = (email, password, name) => {
    setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           
          setAuthError('');
          
          const newUser = { email, displayName: name }
          setUser(newUser)

          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
           
          })
          .catch((error) => {
            setAuthError(error.message);
          
          
          })
          .finally(() => setIsloading(false));
        
  }
  
  // login
  const loginUser = (email, password) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setAuthError('');
  })
  .catch((error) => {
    
    setAuthError(error.message);
  })
      .finally(() => setIsloading(false));
  }

    // observer
    useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
             
          
            } else {
                setUser({});
      }
      setIsloading(false);
    });
      return () => unsubscribe;
    } ,[auth])

  const logOut = () => {
    setIsloading(true);
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          })
          .finally(() => setIsloading(false));
    }





    return {
        user,
        registerUser,
        loginUser,
        logOut,
      isLoading,
      authError
        
    }
}

export default useFirebase;