const React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = () => {
        return (
        <div className="top-bar">
                <div className="top-bar-left">
               <ul className="menu">
                   <li className="menu-text">Timer App</li>
                   <li><IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
                   <li><Link to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link></li>  
                   
               </ul>
           </div>
                <div className="top-bar-right">
                    <ul className="menu">
                       <li className="menu-text">Created by <a href="https://github.com/dkamunyu" target="_blank">Dorina Kamunyu</a></li>
                   </ul>
                    
           </div>
        </div>
        );
    };

module.exports = Nav;


