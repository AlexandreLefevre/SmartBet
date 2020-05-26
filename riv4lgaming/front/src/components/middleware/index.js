import { CookiesProvider, Cookies } from 'react-cookie'
import axios from 'axios'
import React,  {Component} from 'react'
import { connect } from "react-redux"

class Middleware extends Component {
  componentDidMount(){
    const cookies = new Cookies()
    const token = cookies.get('token')
    console.log(token)
      if (token) {
        axios({
        method: 'get',
        url: `http://35.180.238.11:4000/verifToken?token=${token}`,
      })
    .then((response) => {
      console.log(response);
      this.props.dispatch({
        type: "loginUser", 
        data: response.data.decoded,
      })        
})
    .catch(r => {
    if (r.response){
        this.setState({
        error: r.response.data
        })
      }
    })
  }
}

  render() {
  return (<div>{
      this.props.children
      }</div>)
  }
}
const mapDispatchToProps = dispatch => {
    return {dispatch}
}

export default connect (null, mapDispatchToProps) (Middleware);
