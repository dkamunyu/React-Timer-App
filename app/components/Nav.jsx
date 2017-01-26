const React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = React.createClass ({
    render: function() {
        return (
        <div className="top-bar">
                <div className="top-bar-left">
               <ul className="menu">
                   <li className="menu-text">Timer App</li>
                   <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>One</IndexLink></li>
                   <li><Link to="two" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Two</Link></li>  
                   <li><Link to="three" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Three</Link></li>
               </ul>
           </div>
                <div className="top-bar-right">
                    <a href="https://github.com/dkamunyu">Created by Dorina Kamunyu</a>
           </div>
        </div>
        )
    }
});

module.exports = Nav;


