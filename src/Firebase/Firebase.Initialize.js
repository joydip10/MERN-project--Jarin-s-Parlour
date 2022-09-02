import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const firebaseInitialize=()=>{
    initializeApp(firebaseConfig);
}

export default firebaseInitialize;