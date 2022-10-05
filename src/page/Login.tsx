import InputBar from "../components/InputBar";

function Login(){
    return (
        <div className="flex-col">
            <div className="justify-center">
                <h1>Login</h1>
            </div> 
            <InputBar text1="email" text2=" " text3=" "/>
            <InputBar text1="password" text2=" " text3="forgot password?"/>
        </div>
        
    );
}

export default Login