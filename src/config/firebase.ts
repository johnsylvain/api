import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: process.env.FIRESBASE_API_KEY,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.FIREBASE_PROJECT_ID
});

export const db = firebase.firestore();
