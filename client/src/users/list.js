
import React, { Component } from 'react';

export class List extends Component {
    state={users:[]};
    componentDidMount(){
        fetch('/api/users').then(response=> response.json()).then(data=>{
            console.log(data);
            this.setState({users:data});
        });
    }
  render() {
      const listItems = this.state.users.map(user=>{
          return (<li key={user.username}>{user.username}</li>);
      });
    return (
      <ul>
            {listItems}
      </ul>
    );
  }
}
