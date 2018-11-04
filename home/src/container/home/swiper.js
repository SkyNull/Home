import React,{Component} from 'react'

import ReactSwipe from 'react-swipe';

export default  class Swiper extends Component{
   constructor(){
      super()
   }
   render(){
    return (
        <div className ="home-banner">
        <div className ="home-swiper">
        <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:3000}}>
            {this.props.data.map((item,index)=>{
                return <div key = {index} >
                    <img src = {item}></img>
                </div>
            })}
        </ReactSwipe>
        </div>
        <div className = "home-description">
            <ul className ="home-grow">
                <li>
                    <i className = "iconfont icon-dui"></i>
                    <span>网易自营品牌</span>
                </li>
                <li>
                    <i className = "iconfont icon-dui"></i>
                    <span>30天无忧退货</span>
                </li>
                <li>
                    <i className = "iconfont icon-dui"></i>
                    <span>48小时快速退款</span>
                </li>
            </ul>
        </div>
        <div className= "home-zhanwei"></div>
        </div>
    );
   }
}