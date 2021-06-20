import React, { useState } from "react";
import { Button, StyleSheet, View ,TextInput,Text,TouchableOpacity} from "react-native";
import RazorpayCheckout from 'react-native-razorpay';
import RNSmtpMailer from "react-native-smtp-mailer";

const Donate= ({navigation}) => {
  const [fname, onChangeName] = useState(null);
  const [gmail, onChangeEmail] = useState(null);
  const [num, onChangeNum] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const goToSuccess = () =>{
    navigation.navigate("Success")
  }
  const sendEmail = (data) =>{
    
    
    let variable1 = data.razorpay_payment_id;
    let date =  data.razorpay_created_at;
    let a= number;
    let gmail1 = gmail;
    let phone = num;
    RNSmtpMailer.sendMail({
      mailhost: "smtp.gmail.com",
      port: "465",
      ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
      username: "jayanthutukuri8@gmail.com",
      password: "ntewxuvamgfhmlzm",
      fromName: "jayanthutukuri8@gmail.com", // optional
      replyTo: "jayanthutukuri8@gmail.com", // optional
      recipients: gmail1,
     
      subject: "invoice",
      htmlBody: `<div style="text-align: center;padding: 40px 0;background: #EBF0F5;">
		
      <div style="width:600;height:500;background: white;padding-top: 5px;border-radius: 4px;box-shadow: 0 2px 3px #C8D0D8;display: inline-block;margin: 0 auto;">
      <h2 style="color: #484946;font-family: Nunito Sans, Helvetica Neue, sans-serif;font-weight: 500;font-size: 30px;margin-bottom: 10px;"">Little Heart Foundation</h2>
    <div style="border-radius:200px; height:50px; width:50px; background: #b3e764; margin:0 auto;">
      <i style="color: #ffffff;font-size: 30px;line-height: 50px;margin-left:-10px;">✓</i>
      </div>
        <p style="font-size: 30px;font-weight: bold;top: -50px;">₹${a}</p>
      <h4 style="top:-30px;color: #88B04B;font-family: Nunito Sans, Helvetica Neue, sans-serif;font-weight: 300;font-size: 25px;margin-bottom: 10px;">Paid Successfully</h3>
      <p style="font-size: 22px;color: #8a8a8a;">Your Payment is Successful with Payment Id: ${variable1}  on  20-06-2021</p>
      <p style="font-size: 22px;color: #8a8a8a;">Mobile Number : ${phone}</p>
      <p style="font-size: 22px;color: #8a8a8a;">Email : ${gmail1}</p>
      </div>
      </div>` ,
      // optional
      
     attachmentNames: [
        "image.jpg",
        "firstFile.txt",
        "secondFile.csv",
        "pdfFile.pdf",
        "zipExample.zip",
        "pngImage.png"
      ], // required in android, these are renames of original files. in ios filenames will be same as specified in path. In a ios-only application, no need to define it
    })
      .then(success =>console.log(success))
      .catch(err =>console.log(err) );
  }
  
    
    onPressButton =  () =>{
    let  amount =( number * 100);
    var options = {
         description: 'Together We Can',    
         image: 'https://thumbs.dreamstime.com/b/heart-hands-health-charity-logo-label-vector-illustration-heart-hands-health-charity-logo-label-vector-167621556.jpg',
         currency: 'INR',
         key: 'rzp_test_ktOvJfDTM9D7pQ',
         amount: amount,
         name: 'Little Heart Foundation',
         prefill: {
           email: gmail,
           contact: num,
           name: fname
          },
      theme: {color: '#53a20e'}  }      
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        sendEmail(data);
        navigation.navigate("Success")
  
    
        
      }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
                
    }
    
   

    return (
      <View style={styles.container}>
        <View style={styles.regform}>
          <Text style={styles.header}>Donate</Text>
          <TextInput style={styles.textinput} placeholder="Enter your Name" underlineColorAndroid={'transparent'}
          onChangeText={(val)=>onChangeName(val)}
          value={fname}
          />
          <TextInput style={styles.textinput} placeholder="Enter your Email" underlineColorAndroid={'transparent'}
          onChangeText={(val)=>onChangeEmail(val)}
          value={gmail}
          />
          <TextInput style={styles.textinput} placeholder="Enter your Mobile Number" underlineColorAndroid={'transparent'}
          onChangeText={(val)=>onChangeNum(val)}
          value={num} keyboardType="numeric"
          />
          <TextInput style={styles.textinput} placeholder="Enter Amount" underlineColorAndroid={'transparent'}
          onChangeText={(val)=>onChangeNumber(val)}
          value={number} keyboardType="numeric"/>
          <View style={styles.footer}>
            <TouchableOpacity onPress={this.onPressButton} style={styles.donatebtn}>
                <Text style={styles.btntext}>Donate Now</Text>
            </TouchableOpacity>
          </View> 
        </View>
      </View>
    );
}

export default Donate;

const styles = StyleSheet.create({
  regform:{
    alignSelf:'stretch'
  },
  header:{
    fontSize:30,
    color:'#ffffff',
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor:'#199187',
    borderBottomWidth:1
  },
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#36485f',
    paddingLeft:60,
    paddingRight:60
  },
  textinput:{
    alignSelf:'stretch',
    height:40,
    marginBottom:30,
    color:'#ffffff',
    borderRadius:100,
    borderWidth:1,
    borderColor:'#f8f8f8',
    paddingLeft:20
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
  
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  paddingVertical:50,
  paddingHorizontal:30,
  justifyContent:"center"
}

})