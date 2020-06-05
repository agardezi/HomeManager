import * as React from 'react';
import { Text, StyleSheet,View, Image, TouchableWithoutFeedback, Vibration, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ReactNativeHapticFeedback from "react-native-haptic-feedback";



const options = {
    enableVibrateFallback: true,
  };


export default function DeviceBox(props){
  
    return(
        <TouchableWithoutFeedback  onPress={()=>{
            props.handlePress &&
            props.handlePress();
            // ReactNativeHapticFeedback.trigger("impactLight",options)
            }}>
        <View style={styles.deviceBox} >

            <View style={styles.deviceBoxContainer}             
            animation="fadeIn"
            delay={props.delay && props.delay} >
                <View style={styles.icon}>
                    {props.iconPath && <Image style={styles.icon} source={require("../assets/images/mirror_icon.png")}/>}
                </View>
                <Text style={styles.label}>{props.label}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    deviceBox: {
        width:155,
        height:155,
        backgroundColor: '#212121',
        borderRadius: 12,
        opacity: .75,
    },
    deviceBoxContainer:{
        marginLeft:15,
        marginTop:15
    },
    label: {
        fontSize: 12,
        fontWeight: "500",
        color: "#FFFFFF",
        marginTop: 20
    },
    icon:{
        width:58,
        height:85
    }
})