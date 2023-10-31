import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdBrbTptDeZBz-6DjFDIAJ957q7cyHvUk",
  authDomain: "test-b2b-8262d.firebaseapp.com",
  databaseURL:
    "https://test-b2b-8262d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-b2b-8262d",
  storageBucket: "test-b2b-8262d.appspot.com",
  messagingSenderId: "994516986555",
  appId: "1:994516986555:web:2cb4f9ab8d587482ec179e",
  measurementId: "G-M5QMZSHX3L",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Initialize other Firebase services
const storage = getStorage(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { storage, auth, database };
