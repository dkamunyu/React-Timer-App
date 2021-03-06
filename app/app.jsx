const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
let Timer = require('Timer');
let Main = require('Main');
let Countdown = require('Countdown');


//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//Load CSS

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>       
        <Route path="/" component={Main}>      
            <Route path="/countdown" component={Countdown}/>
            <IndexRoute component={Timer}/>                
        </Route>    
        
    </Router>,
    document.getElementById('app')
);


