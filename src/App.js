import React, { Component } from 'react'
import {Head} from './component/head'
import {fetchData} from './component/Api'
import './App.css'
import {Chart} from './component/Chart'
import { Countrypicker } from './component/Countrypicker'
class App extends Component{
  constructor(){
    super()
    this.state = {
      data: {},
      country : ""
    }
  }
  async componentDidMount(){
    const fdata = await fetchData()
    this.setState({
      data: fdata
    })
  }
  changehandler = async (country) =>{
    const fdata = await fetchData(country)
    this.setState({
      data: fdata,
      country: country
    })
  }
  render(){
    const a = this.state.data
    return(
      <div>
         <Countrypicker data={a} change={this.changehandler}/>
        <Head data={a} country={this.state.country} />
        
        <Chart  data={a} country={this.state.country}/>

      </div>
    )
  }
}

export default App



// import React, { Component } from 'react'
// import {Compo} from './Compo'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Compo />
//       </div>
//     )
//   }
// }
