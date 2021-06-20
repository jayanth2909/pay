import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,Alert,Image, Text, View,ImageBackground,ScrollView,TouchableOpacity,FlatList,TextInput } from 'react-native';

//import FontAwesome from 'react-native-vector-icons/FontAwesome';



const Success= () => {

return(
<View style={{flex:1,width:'100%',height:'100%',backgroundColor:"#2980B9"}}>
    <View style={styles.card}>
        <Image
        source={require('../assests/tick.png')}  
        style={styles.image}/>
        <Text style={styles.text}>
            Thank You for Donating 
        </Text>
    </View>
</View>
);
}

const styles=StyleSheet.create({
card:{
    backgroundColor:'#ffffff',
    height:300,
    marginLeft:50,
    marginRight:50,
    marginTop:220,
    borderRadius:20,
    alignItems:'center'
},image:{
    width:65,
    height:65,
    marginTop:60
},
text:{
    fontSize:25,
    paddingTop:40,
    fontWeight:'bold',
    color:'#1CAF41',
    
}
})

export default Success;
