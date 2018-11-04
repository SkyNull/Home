import React,{Component} from 'react'
import ReactDom,{render} from 'react-dom'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "./test.css"


export default  class Test extends Component{
   constructor(){
      super()
   }
   componentDidMount(){
     new Swiper(this.x,{
      slidesPerView:3,
      spaceBetween:30,
     }

     )
   }
   render(){
     return <div className ="swiper-container" ref = {x=>{this.x= x}}>
         <ul className ="swiper-wrapper">
                <li className = "active swiper-slide">推荐</li>
                <li className = "swiper-slide">居家</li>
                <li className = "swiper-slide">鞋包配饰</li>
                <li className = "swiper-slide">服装</li>
                <li className = "swiper-slide">电器</li>
                <li className = "swiper-slide">洗护</li>
                <li className = "swiper-slide">饮食</li>
                <li className = "swiper-slide">餐厨</li>
                <li className = "swiper-slide">婴童</li>
                <li className = "swiper-slide">文体</li>
                <li className = "swiper-slide">特色区</li>
            </ul>
     </div>
   }
}