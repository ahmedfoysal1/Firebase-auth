import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebaseInit";
import { useState } from "react";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setUser(null);
        console.log(error);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("sign out done");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      console.log(result.user)
      setUser(result.user)

    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div>
      {user ? (
        <button
          onClick={handleGoogleSignOut}
          className="btn border-gray-400 btn-accent"
        >
          Sign OUt
        </button>
      ) : (
        <div>
          <button
          onClick={handleGoogleSignIn}
          className="btn border-gray-400 btn-accent"
        >
          Login With Google
        </button>
        <button onClick={handleGithubSignIn} className="btn">Login With Github</button>
        </div>
      )}

      {user && (
        <div>
          <h4>Name : {user.displayName}</h4>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
