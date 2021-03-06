import React, {Component} from 'react';
import List from './List';
import McMaklerApi from '../models/McMaklerApi';

import '../style/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      status: 'loading'
    };
  }
  componentDidMount() {
    let mcMaklerApi = new McMaklerApi();
    mcMaklerApi
      .fetchFakeAds(10)
      .then(adsList => {
        this.setState({
          items: adsList,
          status: 'ok'
        });
      })
      .catch(ex => {
        this.setState({
          status: 'error',
          items: []
        });
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.status === 'ok'
          ? <List items={this.state.items} />
          : <div className="error-message">Oops, something went wrong!</div>}
      </div>
    );
  }
}

export default App;
