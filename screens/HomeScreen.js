import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DeviceBox from '../components/DeviceBox'

import { MonoText } from '../components/StyledText';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView  contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>

          <Text style={styles.title}>Home</Text>

          <View style={styles.primaryButton}>
            <Button color="#ffffff"title="Setup New Device"/>
          </View>
  
          <Text style={styles.subHeader}>Devices</Text>
          <View style={styles.row}>
          <DeviceBox
              label="Smart Mirror"
              iconPath="../assets/images/mirror_icon.png"
              handlePress={()=>props.navigation.push("Smart Mirror")}
              delay={3}
            />
          <DeviceBox
              label="Honeywell Fan"
              delay={3}
            />
          </View>
          <View style={styles.row}>
          <DeviceBox
              label="LED Lightstrip"
              delay={3}
            />
          <DeviceBox
              label="Smart Table"
              delay={30}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#006592',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'System'
  },
  subHeader: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginBottom:15,
    fontFamily: 'System'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'left',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    marginTop:15,
    marginLeft: 20,
    marginRight:20,
    marginBottom: 20
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:10,
  },
  primaryButton: {
    justifyContent: 'center',
    backgroundColor:"#007AFF",
    borderRadius: 8,
    height:50,
    marginTop:20,
    marginBottom:20,


  }
});
