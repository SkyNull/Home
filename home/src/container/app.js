import React,{Component} from 'react'
import Nav from "../component/nav"

export default  class  extends Component{
   constructor(){
      super()
   }
   render(){
     console.log(window.location.hash)
      return (
          <div>
            {this.props.children}
            {!/#\/(shoppingcar|profile|loginphone|loginemail|reg|search)$/.test(window.location.hash)?<Nav></Nav>:null}
          </div>
         
      )
   }
}