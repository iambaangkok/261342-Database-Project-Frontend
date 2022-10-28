import InputField from "../components/InputField";
import '../css/Navbar.css'
import '../css/Login.css'
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://127.0.0.1:8000/api/login";
const geturl = "http://127.0.0.1:8000/api/login";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [check, setcheck] = useState(true);
    const data = localStorage.getItem("Token")
    let pdata;
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');

    if (data) {
        pdata = JSON.parse(data)
    } else {
        pdata = [];
    }
    const [token, setToken] = useState(pdata);

    const postData = async () => {
        try {
            const resp = await axios.post(url, {
                username: username,
                password: password
            });
            console.log(resp)

        } catch (e) {
            console.log(e)
            alert("post Data fail")
        }
    }

    const fetchData = async () => {
        try {
            const resp1 = await axios.get(geturl);
            const data = await resp1.data;
            setToken(data);
            window.location.href = "/products"
        } catch (e) {
            console.log(e)
            alert("get Token fail")
        }
    }

    useEffect(() => {
        localStorage.setItem('Token', JSON.stringify(token))
    }, [setToken, token])

    return (
        <div className={"Login"}>
            <div className={"LoginContainer"}>
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
                                if (check && username.length !== 0 && password.length !== 0) {
                                    postData()
                                    // fetchData()  
                                } else {
                                    alert("Invalid email or password")
                                }
                            }
                        }}></Button>
                    </div>
                    <div className="CreateAccContainer">
                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            <Button text={"Create an Account"} icon={""} buttonColor={"whiteBorder"} textColor={"gray"} func={() => { }}></Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login