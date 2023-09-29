// --------------------
//  Initial setup 
// ---------------------
// 1. visit: console.log.firebase.google.com
// 2. create project ( skip google analytics)
// 3. register app ( create config )
// 4. install firebase: npm install firebase
// 5. add config file to your project 
// 6. DANGER: Do not publish or make firebase config to public by pushing those to github 
// --------------------
//  integration
// ---------------------
// 7. Go to Docs > Build > Authentication > Web > Get Started 
// 8. export app from the Firebase.config.com.js file: export default app 
// 9. Login.jsx: import getAuth from firebase/auth; 
// --------------------
//  provider setup
// ---------------------
// 10. create const auth = getAuth(app)
// 11. import { GoogleAuthProvider } from "firebase/auth" and create a new provider 
// 12. user signInWithPopUp and pass auth and ProviderId 
// 13. activate sign-in method ( gogole , facebook, github)
// 14. [vite] change 127.0.0.1 to localhost 

// more auth 
// ---------------------
// 1. activate the auth provider ( create app, provide redirect url , click secrect) 