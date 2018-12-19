/* React component EventBox is declared which shows the different
functions it fires in response of different Synthetic events. */
var EventBox = React.createClass({

  getInitialState:function(){
    return {e: 'On initial page load'}
  },

	update: function(e) {
    this.setState({e: e.type});
  },

  render:function(){
		/* Following are the various events (on the left hand side). In
		response of all these events then the update function is called.*/
		return(
      <div>
				<textarea
					onKeyDown={this.update}
					onKeyPress={this.update}
					onKeyCopy={this.update}
					onFocus={this.update}
					onBlur={this.update}
					onDoubleClick={this.update}
					/>
					<h1>{this.state.e}</h1>
			</div>
    );
  }
});

ReactDOM.render(<EventBox />,
	document.getElementById('myApp')
	);