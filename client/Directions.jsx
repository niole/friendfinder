Directions = React.createClass({
  propTypes: {
    directions: React.PropTypes.object.isRequired
  },
  showOverview(directions) {
    if (directions) {
        return <OverView
                endAddress={directions.endAddress}
                distance={directions.distance}
                duration={directions.duration}
                startAddress={directions.startAddress}
                />;
    }
  },
  showDirections(directions) {
    if (directions) {
      return _.map(directions.steps, (step,i) => {
        return <Direction key={"step-"+i} step={step}/>;
      });
    }
  },
  render() {
    if (this.props.directions) {
      console.log(this.props.directions);
    }
    return (
      <div>
        {this.showOverview(this.props.directions)}
        <ul>
          {this.showDirections(this.props.directions)}
        </ul>
      </div>
    );
  }
});
