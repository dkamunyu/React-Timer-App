const React = require('react');

let Controls = React.createClass({
    render: function(){
        return (
        <div className="text-center">
          <button className="button">Start</button>  
                <button className="button">Stop</button>  
            
        </div>
        
        );        
    }
});

module.exports = Controls;