import React from "react";
import "./index.css";
import {NavLink} from "react-router-dom";
export default class Nav extends React.Component{
    render(){
        return <div className="m-tabBar">
        <NavLink to={"/"} exact={true}>
          <i className="iconfont icon-home"></i>
          <span>首页</span>
        </NavLink>
        <NavLink to={"/shiwu"}>
          <i className="iconfont icon-shu"></i>
          <span>识物</span>
       </NavLink>
       <NavLink to={"/fenlei"}>
         <i className="iconfont icon-yijian"></i>
         <span>分类</span>
       </NavLink>
       <NavLink to={"/shoppingcar"}>
         <i className="iconfont icon-gouwuche"></i>
         <span>购物车</span>
       </NavLink>
       <NavLink to={"/profile"}>
         <i className="iconfont icon-renyuan"></i>
         <span>个人</span>
       </NavLink>
    </div>
    }
}