let React = require('react');
let Clock = require('Clock');
let CountdownForm = require('CountdownForm');

let Countdown= React.createClass({
    getInitialState:function(){
        return{
            count:0,
            countdownStatus:'stopped',
        }
    },

    handleSetCountdown:function(seconds){
        this.setState({
            count:seconds,
            countdownStatus:'started',
        });

    },

    componentDidUpdate:function(prevProps,prevState){
        if(this.state.countdownStatus !== prevState.countdownStatus ){
            switch (this.state.countdownStatus){
                case 'started':
                this.startTimer();
                break;
            }
        }
    },


    startTimer:function(){
      this.timer = setInterval(()=>{
          let newCount =this.state.count-1;
        this.setState({
           count:newCount >= 0 ? newCount : 0,
        });
          },1000);

    },

    render:function () {
        let {count}=this.state;

        return(
            <div>
                <h1 className="text-center">Countdown</h1>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>


        );
    }
});

module.exports=Countdown;