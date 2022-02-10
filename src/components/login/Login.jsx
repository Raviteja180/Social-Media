import "./login.css"

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">
                        Ravi Social
                    </h3>
                    <span className="loginDesc">
                        Connect with friends and the world aorund you on LamaSocial
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Passwrod</span>
                        <button className="loginRegisterButton">Create a New</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
