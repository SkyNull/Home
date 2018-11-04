import React from "react";
import "./index.css";
import Logined from "../Logined/Logined";
import SuperList from "../SuperList/SuperList";
import {Link} from "react-router-dom";

export default class extends React.Component{
    render (){
       return <div className="haslogin">
                <Logined/>
                <div className="haslogin-list">
                <div className="fl"><SuperList title="我的订单" pic="iconfont icon-order"/></div>
                <div className="fl"><SuperList title="周六一起拼" pic="iconfont icon-pintuangou"/></div>
                <div className="fl"><SuperList title="售后服务" pic="iconfont icon-money03"/></div>
                <div className="fl"><SuperList title="优惠券" pic="iconfont icon-sey-discount"/></div>
                <div className="fl"><SuperList title="我的红包" pic="iconfont icon-redpacket_light"/></div>
                <div className="fl"><SuperList title="优先购" pic="iconfont icon-pack"/></div>
                <div className="fl"><SuperList title="礼品卡" pic="iconfont icon-cardgiftcard"/></div>
                <div className="fl"><SuperList title="积分中心" pic="iconfont icon-jifen"/></div>
                <div className="fl"><SuperList title="会员俱乐部" pic="iconfont icon-huiyaun"/></div>
                <div className="fl"><SuperList title="地址管理" pic="iconfont icon-MAPPING"/></div>
                <div className="fl"><SuperList title="账号安全" pic="iconfont icon-anquan"/></div>
                <div className="fl"><SuperList title="帮助与客服" pic="iconfont icon-kefu"/></div>
                <div className="fl"><SuperList title="意见反馈" pic="iconfont icon-yijian"/></div>
                </div>
                <Link to="/home">
                <button>退出登录</button>
                </Link>
       </div>
    }
}