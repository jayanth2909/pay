import React, { useState } from "react";
import { StyleSheet,Alert,Image, Text, View,ImageBackground,ScrollView,TouchableOpacity,FlatList,
    TextInput,Button } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import RNSmtpMailer from "react-native-smtp-mailer";
//import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';

const Home= ({navigation}) => {

    const image = {uri:"https://cdn.vox-cdn.com/thumbor/OTaHOVtIR6t8L0doPD-Kq6XYqeA=/0x0:1754x1241/1200x800/filters:focal(737x481:1017x761)/cdn.vox-cdn.com/uploads/chorus_image/image/68040475/GettyImages_1060748862.0.jpg"};
    const [gallery, setgallery] = useState([
        {image: {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2psZScM1zyrYMY2OWF3JkF9uXHaVMdpBYiQ&usqp=CAU'},
        title:'Donate Blood',key:'1'},
        {image:{uri:'https://mln20h3bfyhh.i.optimole.com/zCP4PbE-AbeQGpnB/w:1000/h:564/q:auto/https://energyindustryreview.com/wp-content/uploads/2020/03/Donations-in-the-Fight-Against-COVID-19.jpg'},
        title:'Covid-19 Relief Fund',key:'2'},
        {image:{uri:'https://lh3.googleusercontent.com/proxy/-24WwE1KCE6jg4FbDK_EzCge4tlgrlhdjfhNmhCyobJezDwYGslCvOQOxrKjrbbHquADJvQ6T9YB-AFSctI51MZUrGKb6axyWmdOqvwC'},
        title:'Donate to Orphanage',key:'3'},
        {image:{uri:'https://images.click.in/classifieds/images/192/10_08_2016_12_41_16_j2mr3iv1qhuc1esu1508kfgmk5_ikmus160bn.jpg'},
        title:'Donate to Old Age Home',key:'4'},
    ]);
    const goToDonate = () =>{
        navigation.navigate('Donate')
    }
    return(
        <View style={{flexGrow:1,height:'100%'}}>
            <View>
                <ImageBackground source={image} style={{width:'100%',height:300}} imageStyle={{borderBottomRightRadius:65}}>
                    <TouchableOpacity style={{position:'absolute',left:12,top:25,padding:10,borderRadius:40,backgroundColor:'#ff6200',}}>
                        <Image source={require('../assests/me.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{position:'absolute',right:12,top:25,padding:10,borderRadius:40,backgroundColor:'#ff6200',}}>
                        <Image source={require('../assests/bell.png')}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <ScrollView>
                <View style={{padding:20}}>
                    <Text style={{fontSize:30,fontWeight:'bold'}}>
                        Donate 
                    </Text>
                </View>
                <View>
                <FlatList 
                horizontal={true} 
                data={gallery} 
                renderItem={({item}) =>{
                    return(
                        <View style={{paddingVertical:20,paddingLeft:16}}>
                            <TouchableOpacity onPress={goToDonate}>
                                <Image source={item.image} style={{width:150,marginRight:8,height:250,borderRadius:10}}/>
                                <View style={styles.ImageOverlay}> 
                                
                                    <Text style={styles.imageText}>{item.title}</Text>
                                </View>
                                
                                
                               
                            </TouchableOpacity>
                        </View>
                    )
                }}
                />
                </View>

            </ScrollView>
            <View style={styles.footer}>
            <TouchableOpacity onPress={goToDonate} style={styles.donatebtn}>
                <Text style={styles.btntext}>Donate Now</Text>
            </TouchableOpacity>
            </View>        
            </View>

    )
}
export default Home;

const styles=StyleSheet.create({
ImageOverlay:{
    width:150,
    height:250,
    marginRight:8,
    borderRadius:10,
    position:'absolute',
    backgroundColor:'#000',
    opacity:0.5
},
imageText:{
    position:'absolute',
    color:'white',
    fontWeight:'bold',
    opacity:1.0,
    marginTop:10,
    fontSize:16,
    left:15,
    bottom:10,
    },
donatebtn:{
    position:'absolute',
    backgroundColor:'#ff6200',
    width:'100%',
    height:50,
    justifyContent:'center',
    alignSelf:'center',
    top:25,
    borderRadius:30,
    marginLeft:15,
    marginRight:30,
    
},
btntext:{
    color:"white",
    fontWeight:"bold",
    justifyContent:"center",
    alignSelf:"center",
    fontSize:25
},
footer:{
    flex:1,
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:50,
    paddingHorizontal:30,
    justifyContent:"center"
}

})