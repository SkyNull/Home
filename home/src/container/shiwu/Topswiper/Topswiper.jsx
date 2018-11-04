import React from 'react';
import Swiper from 'swiper';
import './index.css'
import 'swiper/dist/css/swiper.min.css'
export default class Topswiper extends React.Component {
    componentDidUpdate() {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
        })
    }
    render() {
        return <div className="top-swiper">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.props.data.data.banner.map((item, index) => {
                        return <div className="swiper-slide" key={index}>
                            <a href={item.schemeUrl} >
                                <img src={item.picUrl} alt="" />
                                {item.subTitle ? <div className="content">
                                    <div className="sub-title">{item.subTitle}</div>
                                    <div className="title">{item.title}</div>
                                    <div className="desc">{item.desc}</div>
                                </div> : null}
                            </a>

                        </div>
                    })}
                </div>
            </div>
        </div>
    }
}