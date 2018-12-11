import React, { Component } from 'react';
import { View, StyleSheet, Alert, Input} from 'react-native';
import { Container, Button, Header, Footer, FooterTab, 
  Left, Body, Right, Icon, Title, Content, Text
} from 'native-base';
import FilePickerManager from 'react-native-file-picker';
import UsersList from '../../components/home/usersList';

class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
      users: [
        {
          id:'0',
          firstName: 'Tejaswi',
          lastName: 'Chava',
          email:'tejaswi.chava@omniwyse.com',
          phone: '8186869897'
        },
        {
          id:'1',
          firstName: 'Rajesh',
          lastName: 'Chava',
          email:'rajeshchava@gmail.com',
          phone: '8186869897'
        },
        {
          id:'2',
          firstName: 'Anvesh',
          lastName: 'Chava',
          email:'anveshchava@gmail.com',
          phone: '8186869897'
        }
      ],
      user: {}
      
    }

  }
  addUser() {
    this.props.navigation.navigate('AddUser');
  }
  updateUser() {
    const {user} = this.state;
   this.props.navigation.navigate('AddUser',{'user': user});
  }
  onSelectUserHandler(user) {
    let currentUser = Object.assign({}, this.state.user);
    currentUser.id = user.id;
    currentUser.firstName = user.firstName;
    currentUser.lastName = user.lastName;
    currentUser.email = user.email;
    currentUser.phone = user.phone;
    this.setState({user:currentUser});
  }

  importUsers() {
    FilePickerManager.showFilePicker(null, (response) => {
      Alert.alert('Response = ', response);
    
      if (response.didCancel) {
        Alert.alert('User cancelled file picker');
      }
      else if (response.error) {
        console.log('FilePickerManager Error: ', response.error);
      }
      else {
        // this.setState({
        //   file: response
        // });
      }
    });
  }
  render() {
    return(
      <Container>
        <Content>
          <View>
            <UsersList data={this.state.users}
              onSelectUser = {(user) => this.onSelectUserHandler(user)}
            ></UsersList>
          </View>

        </Content>
        <Footer style={{backgroundColor: 'white'}}>
            <Button
              onPress={() => this.addUser()}
            
              >
              <Text>Add User</Text>
            </Button>
            <Button
              onPress={() => this.updateUser()}
              style={{marginLeft:10}}
            >
              <Text>Update</Text>
            </Button>
            <Button
              onPress={() => this.removeUser()}
              style={{marginLeft:10}}
            >
              <Text>Remove</Text>
            </Button>
        
        </Footer>
        <Footer style={{backgroundColor: 'white'}}>
            <Button
              onPress={() => this.importUsers()}
              style={{ width: 290,  justifyContent:'center'}}
            >
              <Text>Import Users</Text>
            </Button>
        </Footer>
      </Container>
     
   
      
    )
  }

}

export default Home;
