import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import LogoBar from "../../component/LogoBar/LogoBar.jsx";
import Input from "../../component/Input/Input";

export default class LoginPhone extends React.Component{
    render(){
        return <div className="profile-ph">
            <LogoBar/>
           <div className="m-loginTypes">
            <div className="logo">
              <img src={"http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"}/>
            </div>
            <div className="view">
               <Input title="请输入手机号" msg="请输入短信验证码"/>
               <div className="question">
                  <p className="ques-o">遇到问题?</p>
                  <p className="ques-t">使用密码验证登录</p>
               </div>
               <ul className="login-all">
             <li>
             <Link to={"/loginphone"}>
                 <button className="button-one">
                     <span>登录</span>
                 </button>
            </Link>
             </li>
             <li>
             <Link to={"/profile"}>
                 <button className="button-two">
                     <span>其他登录方式</span>
                 </button>
            </Link>
             </li>
             <Link to={"/regphone"}>
             <span className="quick">注册账号></span>
             </Link>
           </ul>
           
            </div>
          </div>
        </div>
    }
}