import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, ScrollView, TextInput,TouchableWithoutFeedback} from 'react-native';

// Take in module object as props
// createsbackup object incase user cancels edit without saving
// create fields for each attribute
// onSave makes updates global state of modules and sends new configFile to smartMirror

class EditModuleScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: this.props.route.params.object,
            formField: null
        }
        this.getFormFields = this.getFormFields.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.getFormFields();
    }
    handleChange(index,value){
        let obj = this.state.form;
        obj[index].value = value
        this.setState({
            form: obj,

        })
        this.getFormFields();
        // ;
    }
    onSave(){
        this.props.route.params.handleClick(this.state.form,this.props.route.params.name);
        this.props.navigation.pop();
    }
    onCancel(){
        // revert changes
        this.props.navigation.pop(); 
    }

    getFormFields(){
        console.log("Running GetFormFields")
        let fields = [];
        let index = 0;
        for(let field in this.state.form){
            if(this.state.form[field].type == "drop-down"){
                let options = [];
                for(let option in this.state.form[field].options){
                    options.push(
                    // <Picker.Item 
                    //     key={option} 
                    //     id={option}
                    //     label={this.state.form[field].options[option]} 
                    //     value={this.state.form[field].options[option]}>
                    // }</Picker.Item>
                    <TouchableWithoutFeedback 
                        onPress={()=>{this.handleChange(field,this.state.form[field].options[option])}}
                        >
                        <View 
                            key={option}  
                            style={this.state.form[field].options[option] == this.state.form[field].value? styles.selectedTag:styles.tag}
                            >
                            <Text style={this.state.form[field].options[option] == this.state.form[field].value?styles.selectedButtonText:styles.buttonText}>{this.state.form[field].options[option]}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    )
                }
                fields.push(
                    <View key={field} >
                        <Text style={styles.label}>{this.state.form[field].name}</Text>
                        <View style={styles.tagContainer}>
                            {options}
                        </View>
                       
                    </View>
                )
            } else{
                fields.push(
                    <View key={field}>
                        <Text style={styles.label}>{this.state.form[field].name}</Text>
                        <View style={styles.inputBox} >
                            <TextInput
                                style={styles.fieldText} 
                                id={field}
                                name={this.state.form[field].name}
                                onChangeText={(value)=>{this.handleChange(field,value)}} 
                                value={this.state.form[field].value}
                            />
                        </View>
                    </View>
                )
            }
            this.setState({
                formField:fields
            })
        }
    }

    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerRow}>
                        <Button 
                            title="Cancel" 
                            color="#FF9500" 
                            onPress={()=>this.onCancel()}
                            />
                        <Button 
                            title="Save"
                            color="#FF9500" 
                            onPress={()=>this.onSave()}  
                            />
                    </View>
                    <View style={{marginLeft:10, marginBottom: 10}}>
                        <Text style={styles.headerTitle}>{this.props.route.params.name}</Text>
                    </View>
                </View>
                <ScrollView   contentContainerStyle={styles.container}>
                    <View style={styles.formContainer}>
                        {this.state.formField}
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

    },
    buttonText:{
        color:"#FFFFFF",
        fontSize:14,
        marginBottom:5,
        marginTop:5,
        marginLeft:10,
        marginRight:10,

    },
    selectedButtonText:{
        color:"#313134",
        fontSize:14,
        marginBottom:5,
        marginTop:5,
        marginLeft:10,
        marginRight:10,
    },
    tagContainer:{
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    tag:{
        textAlign:'center',
        marginRight:10,
        marginBottom:10,
        backgroundColor: "#232323",
        borderColor: "#313134",
        borderWidth: 1,
        borderRadius:12,
        opacity: 50
    },
    selectedTag:{
        marginRight:10,
        marginBottom:10,
        backgroundColor: "#FFFFFF",
        color:"#313134",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius:12,
    }
})