import './style.css'
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import { firebaseConfig } from './config';
import {collection, getFirestore} from "firebase/firestore";
import { renderMessages } from './render';
import { initializeApp } from "firebase/app";



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const messagesCollection = collection(database, "messages");


renderMessages(messagesCollection);
