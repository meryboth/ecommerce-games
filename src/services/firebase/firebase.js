import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCt4lInMVLmFOFc0fD6cUIHW2_T6yvg2_E',
  authDomain: 'ecommerce-game-7d4d6.firebaseapp.com',
  projectId: 'ecommerce-game-7d4d6',
  storageBucket: 'ecommerce-game-7d4d6.appspot.com',
  messagingSenderId: '525656754719',
  appId: '1:525656754719:web:0affdfad202f267b27232a',
  measurementId: 'G-5GFCRBCCNM',
};

/* Inicializacion de la app de Firebase*/
const app = initializeApp(firebaseConfig);
/* Conecto con Firestore */
export const firestoresDb = getFirestore(app);
