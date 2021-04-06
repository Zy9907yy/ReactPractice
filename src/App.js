// import logo from './logo.svg';
import './App.css';
// 此页面未显示出来
import React,{Component } from 'react'
class App extends Component {
  render(){
      return (
        <div className='App'>
          <p className='App-title'>子组件App</p>
          {/* <button onClick={() => useToggle()}>Toggle</button> */}
          <ul className="lists">
            <li>{true?"zy":"哈哈"}</li>
            <li>简单学react</li>
          </ul>
        </div>
      )
      }
}

export default App;



