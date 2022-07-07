import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
export default class HomeScreen extends React.Component {

gotoconfirmation=()=>{
this.props.navigation.navigate('Confirmation')
}
    
    render(){

return(
<View>
<AppHeader/>
<TouchableOpacity onPress={this.gotoconfirmation}>
    <Text>schedule1</Text>
</TouchableOpacity>

</View>

)


}
}