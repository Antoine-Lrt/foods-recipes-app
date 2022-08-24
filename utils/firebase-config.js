import { initializeApp} from "firebase/app"
import { 
  REACT_APP_APIKEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID
   } from "@env"


// Authentication
import {getAuth,} from "firebase/auth"
// import {getFirestore} from "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: REACT_APP_APIKEY, 
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId:REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT_ID,
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Export auth //
  export const authentication = getAuth(app)

  // export const db = getFirestore(app)

