LoginSignup = React.createClass({
  componentDidMount() {
    const div = document.getElementById('LoginButtons');
    Blaze.renderWithData(Template.atForm, {align: 'right'}, div);
  },
  render() {
    return (
      <div id="LoginButtons">
      </div>
    );
  }
});
