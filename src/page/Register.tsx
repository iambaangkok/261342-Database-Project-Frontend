import { Link } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';
import '../css/Register.css'


function Register() {
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
                            <InputField textL="username" textR="" />
                            <InputField textL="email" textR="" />
                            <InputField textL="password" textR="" />
                            <InputField textL="confirm password" textR="" />
                            <InputField textL="first name" textR="" />
                            <InputField textL="last name" textR="" />
                            <InputField textL="phone number" textR="" />
                        </div>
                        <div className='InputField'>
                            <div className='HeadText'>
                                <div className='Text'>
                                    Company details
                                </div>
                            </div>
                            <InputField textL="company name" textR="" />
                            <InputField textL="address line 1" textR="" />
                            <InputField textL="address line 2" textR="" />
                            <InputField textL="country" textR="" />
                            <InputField textL="state" textR="" />
                            <InputField textL="city" textR="" />
                            <InputField textL="postal code" textR="" />
                        </div>
                    </div>

                    <div className='CreateAccContainer'>
                        <Button text={"Create Account"} icon={""} buttonColor={"yellow"} textColor={"black"} ></Button>
                    </div>
                    <div className='LoginAccContainer'>
                        <Link to='/login'>
                            <Button text={"Login"} icon={""} buttonColor={"yellow"} textColor={"black"} ></Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register