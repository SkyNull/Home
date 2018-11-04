import React,{Component} from 'react'
import ReactDom,{render} from 'react-dom'
import "./swiperlist.css"
import Swiper, { Autoplay } from "swiper"
import "swiper/dist/css/swiper.css"
import Loading from "../../../component/loading"

export default  class Swiperlist extends Component{
   constructor(){
      super()
   }
   componentDidMount(){
       setTimeout(()=>{
        new Swiper(this.x,{
            slidesPerView: "auto",
        })
       },1000)

   }

   render(){
       console.log(this.props.list,"===================")
      return (  
          <div className = "home-swiperlist">
           {this.props.list.title?(
            <div className = "home-swiperlist">
               <div className = "home-swiper-list-top">
                    <a>
                        <p>{this.props.list.title}</p> 
                        <div>查看全部 &gt;</div>
                    </a>
               </div>
               <div className ="home-swiper-list-buttom swiper-container swiper-container-horizontal swiper-container-autoheight" ref={x=>{this.x =x}}>
                   <ul className ="swiper-wrapper">

                        {this.props.list.shopping.map((item,index)=>{
                           return (
                               <li key = {index} className ="swiper-slide">
                                   <img src = {item.img}></img>
                                   <div>
                                        {item.type.length >=1?item.type.map((temp,aindex)=>{
                                            if(temp.type == 1){
                                                return <span key = {aindex} className = "classone">{temp.content}</span>
                                            }else if(temp.type ==2){
                                                return <span key = {aindex} className = "classtwo">{temp.content}</span>
                                            }
                                        }):null}
                                    </div>
                                    <div className = "name">{item.title}</div>
                                    <div className = "descName">{item.subTitle}</div>
                                    <div className ="productPrice">{`￥${item.price}.00`}</div>
                               </li>
                           )
                       })}
                   </ul>
               </div>
            </div>
           ):<Loading></Loading>}
            <div className = "home-swiper-list-top">
            <a>
                <p>新品首发</p>
                <div>查看全部 &gt;</div>
            </a>
            </div>
            <div className ="home-swiper-list-buttom swiper-container swiper-container-horizontal swiper-container-autoheight" >
                <ul className ="swiper-wrapper">
                    <li className ="swiper-slide">
                        <img src = "http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330"></img>
                        <div>
                            <span className = "classone">严选明星日</span>
                            <span className = "classtwo">满赠</span>
                        </div>
                        <div className = "name"><span>网易智造低压海盐热敷腰带</span></div>
                        <div className = "descName"><span>古法热敷，研磨艾绒，专业的身体调理</span></div>
                        <div className ="productPrice">￥199.00</div>
                    </li>
                    <li className ="swiper-slide">
                        <img src = "http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330"></img>
                        <div>
                            <span className = "classone">严选明星日</span>
                            <span className = "classtwo">满赠</span>
                        </div>
                        <div className = "name"><span>网易智造低压海盐热敷腰带</span></div>
                        <div className = "descName"><span>古法热敷，研磨艾绒，专业的身体调理</span></div>
                        <div className ="productPrice">￥199.00</div>
                    </li>
                    <li className ="swiper-slide">
                        <img src = "http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330"></img>
                        <div>
                            <span className = "classone">严选明星日</span>
                            <span className = "classtwo">满赠</span>
                        </div>
                        <div className = "name"><span>网易智造低压海盐热敷腰带</span></div>
                        <div className = "descName"><span>古法热敷，研磨艾绒，专业的身体调理</span></div>
                        <div className ="productPrice">￥199.00</div>
                    </li>
                    <li className ="swiper-slide">
                        <img src = "http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330"></img>
                        <div>
                            <span className = "classone">严选明星日</span>
                            <span className = "classtwo">满赠</span>
                        </div>
                        <div className = "name"><span>网易智造低压海盐热敷腰带</span></div>
                        <div className = "descName"><span>古法热敷，研磨艾绒，专业的身体调理</span></div>
                        <div className ="productPrice">￥199.00</div>
                    </li>
                    <li className ="swiper-slide">
                        <img src = "http://yanxuan.nosdn.127.net/f8a1351045e3a4848b81c3036d229c1c.png?imageView&quality=65&thumbnail=330x330"></img>
                        <div>
                            <span className = "classone">严选明星日</span>
                            <span className = "classtwo">满赠</span>
                        </div>
                        <div className = "name"><span>网易智造低压海盐热敷腰带</span></div>
                        <div className = "descName"><span>古法热敷，研磨艾绒，专业的身体调理</span></div>
                        <div className ="productPrice">￥199.00</div>
                    </li>
                </ul>
            </div>
          </div>
      )
   }
}