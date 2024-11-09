import { GoogleAuthProvider } from "firebase/auth/web-extension";


const Login = () => {


    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        console.log('hello world')
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn border-gray-400 btn-accent">Login With Google</button>      
        </div>
    );
};

export default Login;