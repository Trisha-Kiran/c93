import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class AppHeader extends React.Component{
render(){
return(
<View style={styles.container}>
<Text style={styles.text}>SCHEDULER</Text>
</View>

)

}

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "blue",
    padding: 8,
    },
    text:{
    color:"white",
    textAlign:'center',
    fontweight:'bold',
    fontSize:20,
    padding:20
    }
    }
    )