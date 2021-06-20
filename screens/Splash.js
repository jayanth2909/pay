import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
export default class Splash extends React.Component {
performTimeConsumingTask = async() => {
return new Promise((resolve) =>
setTimeout(
() => { resolve('result') },
1000 )
)
}
async componentDidMount() {
const data = await this.performTimeConsumingTask();
if (data !== null) {
this.props.navigation.navigate('Home');
}
}
render() {
return (
<ImageBackground
style={{ flex: 1 }}
source={
require('../assests/charity.jpg')
}
>
    <Text style={styles.TextStyle}>Little Heart Foundation</Text>
</ImageBackground>
);
}
}
const styles = StyleSheet.create({
MainContainer: {
flex: 1,
alignItems: 'center',
},
TextStyle: {
color: '#0250a3',
textAlign: 'center',
alignItems:'center',
fontSize: 30,
fontFamily:"Lucida Console",
fontWeight:'bold',
marginTop: 350,
},
});