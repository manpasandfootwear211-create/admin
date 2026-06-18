import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUHPF2bo6_inWIY4hiHEwNg3rVQq_D2Ew",
  authDomain: "v-fashion-hub-b7419.firebaseapp.com",
  projectId: "v-fashion-hub-b7419",
  storageBucket: "v-fashion-hub-b7419.firebasestorage.app",
  messagingSenderId: "826405117227",
  appId: "1:826405117227:web:f8497f3c11fbee991f396e"
};

// ... upar ka code waisa hi rehne do
const app = initializeApp(firebaseConfig); // Yahan se 'export' hatao ya rehne do
export { app }; // Niche alag se export kar do
export const db = getFirestore(app);
export const storage = getStorage(app);