import React from 'react';
import Swiper from 'swiper';
import './index.css'
import 'swiper/dist/css/swiper.min.css'
export default class Middleswiper extends React.Component {
    render() {
        return <div className="middle-swiper">
            <div className="swiper-container2 swiper-container-horizontal swiper-container-free-mode">
                <div className="swiper-wrapper heng">
                {this.props.data.data.column.map((item, index) => {
                        return <a href={item.schemeUrl} key={index} className="column">
                            <div className="column-img" style={{ backgroundImage:'url(' + item.picUrl + ')'}}></div>
                            <div className="top-num">{item.articleCount}</div>
                            <div className="title">{item.title}</div>
                        </a>
                    })}   
                </div>
            </div>
        </div>
    }
}