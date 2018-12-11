import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, CheckBox } from 'react-native';
// import { 
//   CheckBox 
//   } from 'native-base';
// import { CheckBox
//   } from 'native-base';

class User extends Component {
  constructor(props) {
    super (props)
    this.state = {
      checked: false
    }
  }
selectUser(user) {
this.setState({checked: !this.state.checked});
this.props.onSelectUser(user);
}
render(){
  const  {user} = this.props;
return(
  <View style={{flex: 1, flexDirection: 'row'}}>
      {/* <CheckBox checked={this.state.checked}
     onPress={() => this.setState({checked: !this.state.checked})}/> */}
    <CheckBox
      value={this.state.checked}
      onValueChange={() => this.selectUser(user)}
    />
      <Text>{user.firstName}</Text>
  </View>

)
}

}

export default User;