import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import "./scss/style.scss"
const App = () => {
  const [open,SetOpen] = useState(false)
  const Change = () => {
    SetOpen(!open)
  }
  return (
    <div className="container">
        <div className="navbar">
    <div className="logo">
    <img src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-128.png" alt="" />
    <h3 className="title">REACT</h3>
    </div>
    <div className="search">
    <p className="icon"><i class="fas fa-search"></i></p>
    <input type="text" placeholder="Search..."/>
    </div>
    <div className="links">
    <ul className={open ? "nav-menu active" : "nav-menu"} id="nav">
      <li><a href="">Docs</a></li>
      <li><a href="">Tutorial</a></li>
      <li><a href="">Blog</a></li>
      <li><a href="">Community</a></li>
    </ul>
    </div>
    <div className="button">
    <div onClick={Change} className={open ? "change" : ".box1, .box2, .box3"} id="open">
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3"></div>
    </div>
    </div>
    </div>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
