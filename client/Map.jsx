Map = React.createClass({
  propTypes: {
    directions: React.PropTypes.object.isRequired,
    userloc: React.PropTypes.object.isRequired,
    otheruserloc: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    Session.set('loaded', true);
  },
  mixins: [DrawPolyLineMixin, MakeMapMixin, ReactMeteorData],
  getMeteorData() {

    let coordArray = null;
    if (this.props.directions) {
      coordArray = [this.props.userloc, this.props.otheruserloc];
    }

    if(GoogleMaps.loaded() && Session.get('loaded')) {
      this.makeMap(coordArray, 'gmap', this.props.userloc, this.props.otheruserloc);
    }
    return {};
  },
  render() {
    return (
      <div>
        <div id='gmap'>
        </div>
      </div>
    );
  }
});
