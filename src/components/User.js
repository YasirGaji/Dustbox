import { Component } from 'react';
import classes from './User.module.css';


class User extends Component {
  render() {
    return (
      <div className={classes.user}>
        {this.props.name}
      </div>
    );
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
