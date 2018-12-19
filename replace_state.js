// calling replaceSet() method
var FormComponent = React.createClass({
  getInitialState: function() {
    return {
      first_name: "michael",
      last_name: "jackson"
    };
  },
  handleClick: function() {
    this.replaceState({
      first_name: "michael",
      last_name: "jordan"
    });
  },
  render: function() {
    return <div onClick={this.handleClick}>
      Hi {this.state.first_name + " " + this.state.last_name}
    </div>
  }
});

React.render(
  <FormComponent />,
  document.body
);
