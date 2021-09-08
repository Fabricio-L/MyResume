import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAT6mV4R21BJvSRz7M_mhHjsmardrphltc",
    authDomain: "myresume-b9b45.firebaseapp.com",
    projectId: "myresume-b9b45",
    storageBucket: "myresume-b9b45.appspot.com",
    messagingSenderId: "233139304234",
    appId: "1:233139304234:web:46cce281999cd01f795053",
    measurementId: "G-Q5L348VHHV"
}
  
// Initialize Firebase
export const AppFile = initializeApp(firebaseConfig)
const analytics = getAnalytics(AppFile)