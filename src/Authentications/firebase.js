import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB-fwlcqQdbdhjRoTtVlwFGxJa6-_FxcRE",
    authDomain: "final-project-dts-c3524.firebaseapp.com",
    projectId: "final-project-dts-c3524",
    storageBucket: "final-project-dts-c3524.appspot.com",
    messagingSenderId: "213476961533",
    appId: "1:213476961533:web:6e9c157cad63ffd30e6294"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {auth};