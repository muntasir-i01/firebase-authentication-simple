
import './App.css';
import app from './firebase.init';
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const handleSignInButton = () =>  {
    console.log("clicked");
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })

    .catch(error => {
      console.log("error", error);
    })
  }
  return (
    <div className="App">
      <button onClick={handleSignInButton}>Google sign in</button>
    </div>
  );
}

export default App;
