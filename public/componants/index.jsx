import React from "react";
import Email from "./Email";
import Password from "./password";
import './index.css'


function Index(){
    return(
        <div className="login-box">
        <Email/>
        <Password/>
        </div>
    )
}

export default Index