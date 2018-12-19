/* declaration of React component with initial values and the
changed value to be set in the update function */
var Component1 = React.createClass ({
  getInitialState:function(){
    return {
      name: 'hi',
      id: 1
    };
  },
  update: function(e) {
    this.setState({name: e.target.value});
  },
  render:function(){
    /* The render method returns the Component2 with props name and
    the value to be called on update method */
    return (
      <div>
        < Component2 name={this.state.name} update={this.update}/>
      </div>
    );
  }
});
/* Declaration of Component2 which calls update function when
onChange method is called. */
var Component2 = React.createClass({
  render:function(){
    return(
      <div>
        <input type="text" onChange={this.props.update} />
        <br />
        <b>{this.props.name}</b>
      </div>
    );
  }
});
ReactDOM.render(< Component1 name="this is the text property" />,
document.getElementById('myApp'));