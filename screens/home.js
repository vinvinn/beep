import * as React from "react";
import { Text, Button, View, TextInput } from "react-native";

class HomeScreen extends React.Component {
  state = { loggedIn: false, username: "", password: "" };

  LogInScreen() {
    return (
      <div>
        <Text style={{ fontSize: "22pt" }}>Log In</Text>
        <br />
        <TextInput
          placeholder='Username'
          onChangeText={(text) => this.setState({ username: text })}
        ></TextInput>
        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
        ></TextInput>
        <Button title='Log In' onPress={() => this.AttemptLogin()} />
      </div>
    );
  }
  LoggedInScreen() {
    return (
      <div>
        <div>Welcome to the beep home screen.</div>
        <Button
          title='Go to Your Rooms'
          onPress={() => this.props.navigation.navigate("Rooms")}
        />
      </div>
    );
  }
  AttemptLogin() {
    console.log(this.state.username);
    if (this.state.username == "admin" && this.state.password == "admin") {
      this.state.loggedIn = true;
    } else alert("Incorrect login credentials.");
    alert("Login:" + this.state.loggedIn);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {this.loggedIn ? this.LoggedInScreen() : this.LogInScreen()}
      </View>
    );
  }
}

export default HomeScreen;
