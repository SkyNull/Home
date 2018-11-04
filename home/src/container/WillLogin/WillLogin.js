import React from "react";
import "./index.css";
import LogoBar from "../../component/LogoBar/LogoBar.jsx";
import {Link} from "react-router-dom";

export default class extends React.Component{
    componentDidMount(){
        //通过在生命周期函数内部写JS方法来获取一屏幕高度；
        let clieH = document.documentElement.clientHeight || document.body.clientHeight;
        this.hign.style.height = clieH - 133.4/2 + 'px';
    }
    render(){
        return <div className="profile">
            <LogoBar/>
           <div className="m-loginTypes"  ref={x=>{this.hign=x}}>
            <div className="imgPro-box">
              <img src={"http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"}/>
            </div>
           <ul className="login-all">
             <li>
             <Link to={"/loginphone"}>
                 <button className="button-one">
                     <i className="iconfont icon-iphone"></i>
                     <span>手机号码登录</span>
                 </button>
            </Link>
             </li>
             <li>
             <Link to={"/loginemail"}>
                 <button className="button-two">
                     <i className="iconfont icon-email"></i>
                     <span>邮箱账号登录</span>
                 </button>
            </Link>
             </li>
             <Link to={"/regphone"}>
             <span className="quick">手机号快捷注册></span>
             </Link>
           </ul>
           
           <div className="threeWrap">
             <div className="itemwrap">
                 <i className="iconfont icon-wechat"></i>
                 <span className="info">微信</span>
             </div>
             <div  className="itemwrap">
                 <i className="iconfont icon-qq"></i>
                 <span  className="info">QQ</span>
             </div>
             <div  className="itemwrap">
                 <i className="iconfont icon-weibo"></i>
                 <span  className="info">微博</span>
             </div>
           </div>
           </div>
        </div>
    }
}