import React from "react";
import "./index.css";
 export default class Input extends React.Component{
     render(){
         return <div className="input-box">
            <div className="number">
              <input type="text" placeholder={this.props.title}/>
            </div>
             <div className="message">
                 <input type="text" placeholder={this.props.msg}/>
                 {this.props.title==="请输入手机号"?<a href="">获取验证码</a>:null}
             </div>
         </div>
     }
 }