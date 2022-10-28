import InputField from "../components/InputField";
import '../css/Navbar.css'
import '../css/Login.css'
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://127.0.0.1:8000/api/login";
const geturl = "http://127.0.0.1:8000/api/login";
const logouturl = "http://127.0.0.1:8000/api/logout";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [check, setcheck] = useState(true);
    let pdata: string| null;



    const [token, setToken] = useState<string| null>(localStorage.getItem("Token"));

    const postData = async () => {
        try {
            const resp = await axios.post(url, {
                username: username,
                password: password
            });
            console.log(resp)
            var data = resp.data
            setToken(data)
            localStorage.setItem('Token', JSON.stringify(data))
        } catch (e) {
            console.log(e)
            alert("post Data fail")
        }
    }

    const postLogout = async () => {
        try {
            const resp = await axios.post(logouturl, {
                token:token
            });
            console.log(resp)
            setToken(null)
            localStorage.removeItem('Token')
        } catch (e) {
            console.log(e)
            alert("Logout fail")
        }
    }

    const fetchData = async () => {
        // try {
        //     const resp1 = await axios.get(geturl);
        //     const data = await resp1.data;
        //     setToken(data);
        //     window.location.href = "/products"
        // } catch (e) {
        //     console.log(e)
        //     alert("get Token fail")
        // }
    }


    useEffect(() => {
    }, [setToken,token])


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
                        <div className="InputField">
                            <div className='InputField'>
                                <InputField textL="email" textR="" />
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
                                        // fetchData()  
                                    // } else {
                                        // alert("Invalid email or password")
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
                                Welcome
                            </div>
                        </div>
                        <div className="SubHeaderContainer">
                            <div className="Text">
                                Username: sssssss
                            </div>
                            <div className="Text">
                                Email: ssssssss@gmail.com
                            </div>
                        </div>
                        <div className="CreateAccContainer">
                            <Button text={"Logout"} icon={""} buttonColor={"black"} textColor={"white"} func={() => { 
                                postLogout()
                            }}></Button>
                        </div>
                    </div>
                    }
            </div>
        </div>
    );
}

export default Login