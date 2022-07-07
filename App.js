import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import Confirmation from './screens/Confirmation';
export default class App extends React.Component {
render(){

return(
<View>
<AppHeader/>
<AppContainer />

</View>

)


}
}
var AppNavigator= createSwitchNavigator({
    HomeScreen : HomeScreen ,
    Confirmation : Confirmation
})

const AppContainer=createAppContainer(AppNavigator)