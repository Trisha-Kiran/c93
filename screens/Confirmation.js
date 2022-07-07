import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
export default class Confirmation extends React.Component {


displayAlert=()=>{
alert("complete the task")
}

gotofinalscreen=()=>{
    this.props.novigation.navigate
}

render(){

return(
<View>
    
<AppHeader/>

<Text>Have you completed the task?</Text>

<TouchableOpacity onPress={this.gotofinalscreen}>
    <Text>yes</Text>
</TouchableOpacity>

<TouchableOpacity onPress={this.displayAlert}>
    <Text>no</Text>
</TouchableOpacity>

</View>

)


}
}