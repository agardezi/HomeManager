import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, View, Button, ScrollView, TextInput, Picker} from 'react-native';

// Take in module object as props
// createsbackup object incase user cancels edit without saving
// create fields for each attribute
// onSave makes updates global state of modules and sends new configFile to smartMirror

class EditModuleScreen extends Component {
    constructor(props){
    super(props);
    }
    state = {  }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerRow}>
                        <Button title="Cancel" color="#FF9500" onPress={()=>this.props.navigation.pop()}/>
                        <Button title="Save"  color="#FF9500"/>
                    </View>
                    <View style={{marginLeft:10, marginBottom: 10}}>
                        <Text style={styles.headerTitle}>{this.props.route.params.name}</Text>
                    </View>
                </View>
                <ScrollView   contentContainerStyle={styles.container}>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Header</Text>
                        <View style={styles.inputBox}>
                            <TextInput style={styles.fieldText} editable />
                        </View>

                        <Text style={styles.label}>Position</Text>
                        <View style={styles.inputBox}>
                            <Picker style={styles.fieldText}>
                            <Picker.Item label="Top Bar" value="Top Bar" />
                            <Picker.Item label="Bottom Bar" value="Bottom Bar" />
                            </Picker>   
                        </View>
                    </View>

                </ScrollView>           
            </View>
        );
    }
}

export default EditModuleScreen;

const styles = StyleSheet.create({
    backDrop:{
        backgroundColor: '#1C1C1C',
    },
    container:{
         flex:1,
        
        
         backgroundColor: '#1C1C1C',

    },
    formContainer: {
        marginTop:15,
        marginLeft: 20,
        marginRight:20,
        marginBottom: 20,
        
    },
    label:{
        color: '#ffffff',
        fontWeight:'500',
        fontSize: 16,
    },
    fieldText:{
        borderBottomColor: '#000000',
        fontSize:20,
        color: '#ffffff',
        marginBottom:5,
        marginTop:5,
        marginLeft:10,

    },
    header: {
        backgroundColor: '#232323',
    
    },
    headerRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10,
        marginTop:10,
        marginLeft:5,
        marginRight:5
    },
    headerTitle:{
        fontSize:34,
        fontWeight:'bold',
        color:"#FFFFFF"
        
    },
    inputBox:{
        backgroundColor: "#313134",
        marginTop:10,
        marginBottom:10,
        borderRadius:12,

    }
})