import firebase from 'firebase/app'
import 'firebase/analytics'

const config = {
  apiKey: process.env.REACT_APP_FB_APIKEY,
  authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER,
  appId: process.env.REACT_APP_APPLICATION_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

  firebase.initializeApp(config).analytics().logEvent('visit',{
    'new_visit':true,
    'username':'visitator'
  })
  export default firebase;