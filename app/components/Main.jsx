let React = require('react');
let Nav=require('Nav');

let Main =React.createClass({
   render: function () {
       return(
           <div>

               <div>
                   <div >
                       <Nav/>
                       {this.props.children}
                   </div>
               </div>

           </div>
       );
   }
});

module.exports = Main;