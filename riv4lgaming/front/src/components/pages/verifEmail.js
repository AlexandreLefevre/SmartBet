import React,  {Component} from 'react';
import Axios from 'axios';
import queryString from 'query-string'

class VerifEmail extends Component {
    async componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        await Axios.put(`http://localhost:4000/verifemail?email=${values.email}&token=${values.token}`);
        console.log('je suis créé', this.props.location.search);
        console.log(values);
    }
  render() {
     return (
         <div></div>
     );
  }
}

export default VerifEmail