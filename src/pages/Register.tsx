import axios from 'axios';
import { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';
import '../css/Register.css'

const apiurl = "http://127.0.0.1:8000/api/register";

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setCFPassword] = useState("")
    const [firstName, setFName] = useState("")
    const [LastName, setLName] = useState("")
    const [phoneNumber, setPhone] = useState("")

    const [companyName, setCompanyName] = useState("")
    const [addressLine1, setAddressLine1] = useState("")
    const [addressLine2, setAddressLine2] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")

    const postData = async () => {


        try {
            axios.defaults.withCredentials = true;

            const resp = await axios.post(apiurl, {
                "username":username,
                "email":email,
                "password":password,
                "password_confirmation":confirmPassword,

                "customerName":companyName,
                "contactFirstName":firstName,
                "contactLastName":LastName,
                "phone":phoneNumber,
                "addressLine1":addressLine1,
                "addressLine2":addressLine2,
                "city":city,
                "state":state,
                "postalCode":postalCode,
                "country":country,
            })
            console.log(resp)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
    }, [username, email, password, firstName, LastName, phoneNumber, companyName, addressLine1, addressLine2, country, state, city, postalCode])

    return (
        <div className="Register">
            <div className='RegisterContainer'>
                <div className='Body'>
                    <div className='HeadContainer'>
                        <div className='Text'>
                            Create an account
                        </div>
                    </div>

                    <div className='InputContainer'>
                        <div className='InputField'>
                            <div className='HeadText'>
                                <div className='Text'>
                                    Account details
                                </div>
                            </div>
                            <div className='InputField'>
                                <InputField textL="username" textR="" />
                                <input className='Field' onChange={(e) => setUsername(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="email" textR="" />
                                <input className='Field' onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="password" textR="" />
                                <input className='PassWord ' onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="confirm password" textR="" />
                                <input className='PassWord' onChange={(e) => setCFPassword(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="first name" textR="" />
                                <input className='Field' onChange={(e) => setFName(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="last name" textR="" />
                                <input className='Field' onChange={(e) => setLName(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="phone number" textR="" />
                                <input className='Field' onChange={(e) => setPhone(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='InputField'>
                            <div className='HeadText'>
                                <div className='Text'>
                                    Company details
                                </div>
                            </div>
                            <div className='InputField'>
                                <InputField textL="company name" textR="" />
                                <input className='Field' onChange={(e) => setCompanyName(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="address line 1" textR="" />
                                <input className='Field' onChange={(e) => setAddressLine1(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="address line 2" textR="" />
                                <input className='Field' onChange={(e) => setAddressLine2(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="country" textR="" />
                                <input className='Field' onChange={(e) => setCountry(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="state" textR="" />
                                <input className='Field' onChange={(e) => setState(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="city" textR="" />
                                <input className='Field' onChange={(e) => setCity(e.target.value)}></input>
                            </div>
                            <div className='InputField'>
                                <InputField textL="postal code" textR="" />
                                <input className='Field' onChange={(e) => setPostalCode(e.target.value)}></input>
                            </div>
                        </div>
                    </div>

                    <div className='CreateAccContainer'>
                        <Button text={"Create Account"} icon={""} buttonColor={"black"} textColor={"white"} func={() => {
                            if (password === confirmPassword) {
                                postData()
                            } else {
                                alert("Password doesn't match")
                            }
                        }}></Button>
                    </div>
                    <div className='LoginAccContainer'>
                        <Link to='/login'>
                            <Button text={"Login"} icon={""} buttonColor={"whiteBorder"} textColor={"gray"} func={() => { }}></Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register