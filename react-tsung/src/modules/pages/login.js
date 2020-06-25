import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "react-bootstrap"
// import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/login.css";


class Login extends React.Component {
    down = true;
    host = "https://imdsa106-app.herokuapp.com"    
    upDown() {

    }
    render() {
        return (
            <>
              
                <center>

                    <div id="logIn">

                        <h1>Welcome back!</h1>
                        <input type="text" placeholder="． 使用者名稱" id="loginId" />
                        <input type="password " placeholder="． 密碼" id="loginPsw" />
                        <button id="logInClick">登入</button>


                    </div>


                    <div id="signUp">
                        <div id="signUpClick">
                            <center>註冊</center>
                        </div>
                        <div id="signContnet">
                            <input type="text" placeholder=". 使用者帳號" id="signId" />
                            <input type="text" placeholder=". 使用者名稱" id="signName" />
                            <input type="text" placeholder="．信箱" id="signEmail" />
                            <input type="text " placeholder="．密碼" id="signPsw" />
                            <input type="text " placeholder="．重複輸入密碼" id="signRpsw" />
                            <button id="signup">Sing up</button>
                        </div>
                    </div>
                </center>
            </>
        );
    }
}

export default {
    routeProps: {
        path: '/',
        component: Login
    },
    name: '登入註冊',
}