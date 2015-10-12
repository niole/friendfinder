Map = React.createClass({
  propTypes: {
    userloc: React.PropTypes.object.isRequired,
    otheruserloc: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    Session.set('loaded', true);
  },
  mixins: [DrawPolyLineMixin, MakeMapMixin, ReactMeteorData],
  getMeteorData() {
    if(GoogleMaps.loaded() && Session.get('loaded')) {
      this.makeMap('gmap', this.props.userloc, this.props.otheruserloc);
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
