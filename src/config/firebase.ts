import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: process.env.FIRESBASE_API_KEY,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: "1:681688956673:web:7c59db5e2a994f8134e500",
  measurementId: "G-ZJBEHNRT11"
});

export const db = firebase.firestore();