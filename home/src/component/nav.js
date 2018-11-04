import React,{Component} from 'react'
import ReactDom,{render} from 'react-dom'
import {NavLink} from "react-router-dom"
import "./nav.css"
export default  class Nav extends Component{
   constructor(){
      super()
   }
   render(){
      return (
          <nav className = "buttom-nav">
            <NavLink to = "/" exact = {true}><i className ="iconfont icon-home"></i><span>首页</span></NavLink>
            <NavLink to = "/profile"><i className = "iconfont icon-chuangtougui"></i><span>分类</span></NavLink>
            <NavLink to = "/shiwu"><i className = "iconfont icon-fangxingtingzhi"></i><span>识物</span></NavLink>
            <NavLink to = "/3"><i className = "iconfont icon-gouwuche"></i><span>购物车</span></NavLink>
            <NavLink to = "/4"><i className = "iconfont icon-renyuan"></i><span>个人</span></NavLink>
          </nav>
      ) 
   }
}