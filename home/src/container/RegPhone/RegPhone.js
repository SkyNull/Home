import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import LogoBar from "../../component/LogoBar/LogoBar.jsx";
import Input from "../../component/Input/Input";

export default class RegPhone extends React.Component{
    render(){
        return <div className="profile-ph">
            <LogoBar/>
           <div className="m-loginTypes">
            <div className="logo">
              手机号注册
            </div>
            <div className="view">
               <Input title="请输入手机号" msg="请输入短信验证码"/>
               <input type="text" placeholder="请输入密码"/>
               <ul className="login-all">
             <li>
             <Link to={"/loginphone"}>
                 <button className="button-one">
                     <span>注册</span>
                 </button>
            </Link>
             </li>
             <li className="agreen">
             <input id="color-input-green"  type="checkbox"/>
             <label htmlFor="color-input-green"></label>
                 <p>我同意
                     <a href="https://reg.163.com/agreement_mobile_wap.shtml?v=20171127" target="_blank">《服务条款》</a>和
                     <a href="https://reg.163.com/agreement_mobile_ysbh_wap.shtml?v=20171127" target="_blank">《网易隐私政策》</a>
                 </p>
             </li>
             <span className="quick">
                <a href="https://zc.reg.163.com/m/regInitialized?pd=yanxuan&pkid=QyOtTGv&pkht=you.163.com&tp=2&as=3&curl=http%3A%2F%2Fm.you.163.com%2Fucenter">邮箱账号注册>
                </a>
             </span>
           </ul>
           
            </div>
          </div>
        </div>
    }
}