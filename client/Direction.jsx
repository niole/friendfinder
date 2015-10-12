Direction = React.createClass({
  propTypes: {
    step: React.PropTypes.object.isRequired,
    key: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <li>{this.props.step}</li>
    );
  }
});
