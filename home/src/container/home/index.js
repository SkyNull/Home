import React,{Component} from 'react'
import {connect} from "react-redux"
import Header from "./header"
import Swiper from "./swiper"
import "./index.css"
import Loading from "../../component/loading"
import Brand from "./list/brand"
import {drag} from "../../base/fn/drag"



 class Home extends Component{
   constructor(){
      super()
   }
   componentWillMount(){
    this.props.dispatch({type:"home/getBannerAPI"})
    this.props.dispatch({type:"home/getBrandListAPI"})
   }
   render(){

      return (
          <div className = "home-all">
          <Header drag = {drag}> </Header>

          <div className ="content">
          {this.props.banner.length?<Swiper data = {this.props.banner}></Swiper>:<Loading></Loading>}
             <Brand list = {this.props.index.list}></Brand>
          </div>
          </div>
      )
   }
}
export default connect((state)=>({...state.home}))(Home)