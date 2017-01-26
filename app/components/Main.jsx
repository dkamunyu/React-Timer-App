const React = require('react');
let Nav = require('Nav');

let Main = (props) => {
    return(
        <div>
           <Nav/>
            <div >
                <div >
                    <h1 className="text-center page-title">Timer</h1>
                    {props.children}  
                </div>            
            </div>
        </div>
    ) ;
}

module.exports = Main;