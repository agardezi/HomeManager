import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import { Text, StyleSheet,View, Image, TouchableWithoutFeedback, Vibration } from 'react-native';

export default function ModuleBox(props){
    return(
        <TouchableWithoutFeedback onPress={()=>{props.handlePress && props.handlePress()}}>
            <Animatable.View
                animation="bounceIn"
                delay={props.delay && props.delay} 
                style={styles.container}>
                <Text style={styles.title}>{props.title}</Text>
                <Image style={styles.icon} source={require("../assets/images/chevron.png")}/>
            </Animatable.View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center', // vertically align
        backgroundColor:"#212121",
        borderRadius: 12,
        height:74,
        marginBottom:20,
        flexDirection: 'row', //puts things in row
        justifyContent: 'space-between', // spaces items apart
    },
    title:{
        marginLeft: 20,
        color:"#ffffff",
        fontSize:22,
        fontWeight:'600'

    },
    icon:{
        width:26,
        height:26,
        marginRight:20,
    }
})