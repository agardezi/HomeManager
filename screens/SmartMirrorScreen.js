import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, Platform, StyleSheet, Text, View, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ModuleBox from '../components/ModuleBox';
import { connect } from 'react-redux';
import { updateModule } from '../stores/smartMirror/SmartMirrorAction'



function SmartMirrorScreen(props){
    return(
        <View style={styles.container}> 
        <ScrollView>
            <View style={styles.modulesContainer}>
            <Text style={styles.title}>
                Modules
            </Text>
            <Text style={styles.caption}>
                Customize the different modules that apear on your smart mirror
            </Text>
            <GetCards 
                handleClick={props.updateModule} 
                array={props.modules} 
                navigation={props.navigation}
            />
            
            </View>
            </ScrollView>
        </View>
    )
}
function GetCards(props){
    let cards = [];
    let mods = props.array;
    for(let mod in mods){
        cards.push(
            <ModuleBox
                key={mod}
                title={mods[mod].name}
                handlePress={()=>props.navigation.push("EditModule",{
                    name:mods[mod].name,
                    object:mods[mod].attributes,
                    handleClick:props.handleClick

                }
            )}                
            />
        )
    }
    return cards
}

SmartMirrorScreen.propTypes = {
    updateModule: PropTypes.func,
    config: PropTypes.object,
    modules: PropTypes.array,
    isLoading: PropTypes.bool,
};

const mapStateToProps = state =>({
    config: state.global.config,
    modules: state.global.modules,
    isLoading: state.global.isLoading,
})

export default connect(mapStateToProps, {updateModule})(SmartMirrorScreen)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        backgroundColor: '#006592',
    },
    modulesContainer: {
        marginTop:15,
        marginLeft: 20,
        marginRight:20,
        marginBottom: 20
    },
    title: {
        fontSize:20,
        fontWeight:'500',
        color: '#FFFFFF',
    },
    caption: {
        color: '#FFFFFF',
        marginBottom:10,
    }
    
})