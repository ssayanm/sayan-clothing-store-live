import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA8lvSp5F4FFIAk972MHIW80kAAeEn-dV4",
    authDomain: "clothing-db-293a6.firebaseapp.com",
    databaseURL: "https://clothing-db-293a6.firebaseio.com",
    projectId: "clothing-db-293a6",
    storageBucket: "clothing-db-293a6.appspot.com",
    messagingSenderId: "755992088711",
    appId: "1:755992088711:web:08e32355f214870cf66822"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if(!snapShot.exists){
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try{
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		}catch(error){
			console.log('error creting user', error.message)
		}
	}
	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
