'use strict';


class HelloButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'Hello World.';
    }

    return React.createElement(
      'button',
      { onClick: () => this.setState({ clicked: true }) },
      'Push Me!'
    );
  }
}

const domContainer = document.querySelector('#container');
ReactDOM.render(React.createElement(HelloButton), domContainer);