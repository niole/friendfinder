Map = React.createClass({
  mixins: [DrawPolyLineMixin, GetDirectionsMixin, MakeMapMixin],
  componentDidMount() {
    if(GoogleMaps.loaded()) {

    }
  },
  render() {
    return <div id='gmap'/>;
  }
});
