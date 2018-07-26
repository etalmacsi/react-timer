let React = require('react');
let Clock = require('Clock');

let Countdown= React.createClass({
    render:function () {
        return(
            <div>
                <h1>Countdown</h1>
                <Clock totalSeconds={129}/>
            </div>


        );
    }
});

module.exports=Countdown;