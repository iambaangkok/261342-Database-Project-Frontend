import InputField from "../components/InputField";
import '../css/Navbar.css'
import '../css/Login.css'
import Button from "../components/Button";

function Login() {
    return (
        <div className={"Login"}>
            <div className={"LoginContainer"}>
                <div className="Body">
                    <div className="HeaderContainer">
                        <div className="Text">
                            Login
                        </div>
                    </div>
                    <InputField textL="email" textR="" />
                    <InputField textL="password" textR="forgot password?" />
                    <div className="SignInButtonContainer">
                        <Button text={"Sign in"} icon={""} buttonColor={"yellow"} textColor={"black"} ></Button>
                    </div>
                    <div className="CreateAccContainer">
                        <Button text={"Create an Account"} icon={""} buttonColor={"yellow"} textColor={"black"} ></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login