import React,{Component} from 'react'
import "./brand.css"
import { timingSafeEqual } from 'crypto';
import Loading from "../../../component/loading"

export default  class Brand extends Component{
   constructor(){
      super()
   }
   render(){
      return (
          <div className = "home-brand">
            <header className = "hd">
              <a>
                <span>{this.props.list.navTitle}</span>
                <i className = "iconfont icon-arrow-circle-o-right"></i>
              </a>
            </header>
            <ul className ="list">
            {this.props.list.container?this.props.list.container.map((item,index)=>{
                return (
                  <li key = {index}>
                  <div className ="textall">
                    <div>{item.title}</div>
                    <div>{`${item.price}元起`}</div>
                    {item.description?<div className = "iconfont icon-mojitianqishangxinbiaoqian"></div>:null}
                  </div>
                  <img src ={item.img}></img>
                  </li>
                )
              }):<Loading></Loading>}
            </ul>
              <div className = "home-zhanwei" style = {{height:`${20/75}rem`}}></div>
          </div>
      )
   }
}