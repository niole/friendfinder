OverView = React.createClass({
  propTypes: {
    endAddress: React.PropTypes.string.isRequired,
    distance: React.PropTypes.object.isRequired,
    duration: React.PropTypes.object.isRequired,
    startAddress: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div className="ui horizontal segments">
        <div className="ui segment">
          <p>start: {this.props.startAddress}</p>
        </div>
        <div className="ui segment">
          <p>end: {this.props.endAddress}</p>
        </div>
        <div className="ui segment">
          <p>{this.props.duration.text}</p>
        </div>
        <div className="ui segment">
          <p>{this.props.distance.text}</p>
        </div>
      </div>
    );
  }
});


