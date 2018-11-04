import React from 'react';
import Swiper from 'swiper';
import './index.css'
export default class Ten extends React.Component {
    componentDidUpdate() {
        console.log(this.props.data);
        var mySwiper= new Swiper('.swiper-container1', {
            freeMode : true,
            freeModeMomentum : false,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
           observeParents: true,
           autoplay:true
        },)
    }
    render() {
        return <div className="ten">
            <div className="inner">
                <div className="ten-title">十点一刻</div>
                <div className="swiper-container">
                    <div className="swiper-wrapper1 swiper-wrapper">
                        {this.props.data.data.tenfifteen.map((item, index) => {
                            return <a href={item.url} key={index} className="swiper-slide">
                                <div className="s-title">
                                    <span>今日话题</span>
                                </div>
                                <div className="big-title">{item.title}</div>
                                <div className="desc">{item.desc}</div>
                                <div className="imgs">  
                                    <div className="inner">
                                        <div className="h-img">
                                            {item.participantAvatar.splice(0,3).map((item,index)=>{
                                                return <div key={index} style={{zIndex:5-index}} className="tip">
                                                    <img src={item?item:"https://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48"} alt=""/>
                                                </div>
                                            })}
                                            <div className="tip">
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                            </div>
                                        </div>
                                        <div className="join">
                                            <span className="num">{item.participantNum}</span>
                                            <span className="person">人参与话题</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        })}
                    </div>
                </div>
            </div>
        </div>
    }
}