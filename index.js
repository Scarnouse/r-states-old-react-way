/* React component MyBrowserDimension, with nativeEvent attribute
which is needed for manipulating the underlying broser
events(windos.innerWidth, window.innerHeight) . */
var MyBrowserDimension = React.createClass({
  getInitialState:function(){
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  update: function(){
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  },

  //componentDidMount is called after the component is mounted and
  //has a DOM presentation. This is often a place where we will
  //attch generic DOM events.
  componentDidMount:function(){
    window.addEventListener('resize', this.update);
    window.addEventListener('resize', this.update);
  },

  componentWillUnmount:function(){
    window.removeEventListener('resize', this.update);
    window.removeEventListener('resize', this.update);
  },

  render:function() {
    return <div>
      <p>My Browser Window current Inner Width is: {this.state.width} pixels</p>
      <p>My Browser Window current height is: {this.state.height} pixels</p>
    </div>;
  }
});

ReactDOM.render(<MyBrowserDimension />,
  document.getElementById('myApp'));