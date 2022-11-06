import InputField from "../components/InputField";
import '../css/Navbar.css'
import '../css/Login.css'
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PopUp from "../components/PopUp";

const url = "http://127.0.0.1:8000/api/login";
const logouturl = "http://127.0.0.1:8000/api/logout";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [check, setcheck] = useState(true);
    let pdata: string | null;

    const [isOpen, setIsOpen] = useState(false)

    const [alertText, setAlert] = useState("")

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }



    const [token, setToken] = useState<string | null>(localStorage.getItem("Token"));

    const postData = async () => {

            const resp = await axios.post(url, {
                username: username,
                password: password
            }).then((resp) => {
            console.log(resp)
            var data = resp.data
            setToken(data)
            localStorage.setItem('Token', JSON.stringify(data))
            }).catch((error) => {
                setAlert(error.response.data.message)
                togglePopup()
                console.log(error)
            })
            
    }

    const postToken = async () => {
        const resp = await axios.post(logouturl, {
            token: token
        }).then(() => {
            setToken(null)
            localStorage.removeItem('Token')
        }).catch((error) => {
            setAlert(error.response.data.message)
            togglePopup()
            console.log(error)
        })
    }


    useEffect(() => {
    }, [setToken, token])


    return (
        <div className={"Login"}>
            <div className={"LoginContainer"}>
                {token === null ?
                    <div className="Body">
                        <div className="HeaderContainer">
                            <div className="Text">
                                Login
                            </div>
                        </div>

                        {isOpen && <PopUp handleClose={togglePopup} headText="Login Fail" contentText={alertText}></PopUp>}

                        <div className="InputField">
                            <div className='InputField'>
                                <InputField textL="username or email" textR="" />
                                <input className='Field' onChange={(e) => setUsername(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="password" textR="forgot password?" />
                                <input className='PassWord' onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="SignInButtonContainer">
                            <Button text={"Sign in"} icon={""} buttonColor={"black"} textColor={"white"} func={() => {
                                {
                                    // if (check && username.length !== 0 && password.length !== 0) {
                                    postData()
                                    // } 
                                }
                            }}></Button>
                        </div>
                        <div className="CreateAccContainer">
                            <Link to="/signup" style={{ textDecoration: 'none' }}>
                                <Button text={"Create an Account"} icon={""} buttonColor={"whiteBorder"} textColor={"gray"} func={() => { }}></Button>
                            </Link>
                        </div>
                    </div>
                    :
                    <div className="Body">
                        <div className="HeaderContainer">
                            <div className="Text">
                                You are logged in.
                            </div>
                        </div>
                        {/* <div className="SubHeaderContainer">
                            <div className="Text">
                                Username: sssssss
                            </div>
                            <div className="Text">
                                Email: ssssssss@gmail.com
                            </div>
                        </div> */}
                        <div className="CreateAccContainer">
                            <Button text={"Logout"} icon={""} buttonColor={"black"} textColor={"white"} func={() => {
                                postToken()
                            }}></Button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Login