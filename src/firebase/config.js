// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyDM8DeKe1M5Yq8nkqaTa8sD7mIrE2r1jYg',
  authDomain: 'todo-vue3-f0b05.firebaseapp.com',
  projectId: 'todo-vue3-f0b05',
  storageBucket: 'todo-vue3-f0b05.appspot.com',
  messagingSenderId: '235865790312',
  appId: '1:235865790312:web:a6d81d1448f2a2c25768dd',
  measurementId: 'G-QJHYJ6FJML',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
