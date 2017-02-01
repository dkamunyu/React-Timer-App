const React = require('react');
let Clock = require('Clock');
let Controls = require('Controls');
let Timer = React.createClass({
    render: function(){
        return (
        <div>
        <p className="text-center">Timer</p>
         <Clock/> 
        <Controls/>
        </div>
        );
    }   
});

module.exports = Timer;
