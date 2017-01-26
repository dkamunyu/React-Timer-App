const React = require('react');
let Clock = require('Clock');
let Controls = require('Controls');
let Timer = React.createClass({
    render: function(){
        return (
        <div>
         <Clock/> 
        <Controls/>
        </div>
        );
    }   
});

module.exports = Timer;
