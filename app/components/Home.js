import React from 'react';
import HomeAction from '../actions/HomeAction';
import HomeStore from '../stores/HomeStore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  
  componentDidMount() {
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }
  
  onChange(state) {
    this.setState(state);
  }
 
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Home;
