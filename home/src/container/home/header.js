import React,{Component} from 'react'
import ReactDom,{render} from 'react-dom'

export default  class Header extends Component{
   constructor(){
      super()
   }
   componentDidMount(){
       this.props.drag(this.x)
   }
   render(){
      return (
          <div className = "home-header">
            <div className = "line">
                <a className = "logo"></a>
                <div className = "topSearch">
                    <i className = "iconfont icon-sousuo"></i>
                    <span>搜索商品, 共16955款好物</span>
                </div>
            </div>
            <div className = "nav-all">
            <ul className ="nav-list" ref = {x=>{this.x = x}}>
                <li className = "active">推荐</li>
                <li>居家</li>
                <li>鞋包配饰</li>
                <li>服装</li>
                <li>电器</li>
                <li>洗护</li>
                <li>饮食</li>
                <li>餐厨</li>
                <li>婴童</li>
                <li>文体</li>
                <li>特色区</li>
            </ul>
            </div>
          </div>
      )
   }
}