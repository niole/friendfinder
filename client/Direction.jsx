Direction = React.createClass({
  propTypes: {
    step: React.PropTypes.object.isRequired,
    key: React.PropTypes.string.isRequired
  },
  showStep(step, key) {
    let dist = step.distance.text;
    let dur = step.duration.text;
    let end = step.end_location;
    let start = step.start_location;

    return (
      <div key={key} className="ui orange segment">
        <p dangerouslySetInnerHTML={{__html: step.html_instructions}} />
      </div>
    );
  },
  render() {
    return (
      <div>
        {this.showStep(this.props.step, this.props.key)}
      </div>
    );
  }
});
