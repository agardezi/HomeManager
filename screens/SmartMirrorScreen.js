import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ModuleBox from '../components/ModuleBox'


export default function SmartMirrorScreen(props){
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
            <ModuleBox
                title="Clock"
                handlePress={()=>props.navigation.push("EditModule",{
                    name:"Clock"
                }
            )}
            />
            <ModuleBox
                title="Current Weather"
                handlePress={()=>props.navigation.push("EditModule",{
                    name:"Current Weather"
                }
            )}
            />            
            </View>
            </ScrollView>
        </View>
    )
}

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