import React from "react";
import "./index.css";
import SuperList from "../SuperList/SuperList";

export default class Logined extends React.Component{
    render(){
        return <div className="ucenter">
            <div className="users">
              <div className="g-row">
                 <div className="left">
                     <img src="http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" />
                   <div className="info">
                     <p className="nickname">lilynull</p>
                     <p className="member">普通用户</p>
                   </div>
                 </div>
                 <div className="right">
                   <i className="iconfont icon-shandian"></i>
                   <div className="word">
                      <div className="line">超级会员</div>
                      <div className="line1">立即试用</div>
                   </div>
                 </div>
              </div>
              <div className="umiddle">
                <SuperList/>
                 {/* <ul className="list">
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>我的订单</span>
                   </li>
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>周六一起拼</span>
                   </li>
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>售后服务</span>
                   </li>
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>优惠券</span>
                   </li>
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>我的红包</span>
                   </li>
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>优先购</span>
                   </li>
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>礼品卡</span>
                   </li>
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>积分中心</span>
                   </li>
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>会员俱乐部</span>
                   </li>
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>地址管理</span>
                   </li>
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>账号安全</span>
                   </li>
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>帮助与反馈</span>
                   </li>
                   <li>
                      <i className="iconfont icon-"></i>
                      <span>意见反馈</span>
                   </li>
                 </ul> */}
              </div>
              <div className="g-row"></div>

            </div>

        </div>
    }
}