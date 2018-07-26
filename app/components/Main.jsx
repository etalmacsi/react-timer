let React = require('react');
let Nav=require('Nav');

let Main =React.createClass({
   render: function () {
       return(
           <div>
               <Nav/>
               <div className="row">
                   <div className="column small-centered medium-6 large-4">

                       {this.props.children}
                   </div>
               </div>

           </div>
       );
   }
});

module.exports = Main;