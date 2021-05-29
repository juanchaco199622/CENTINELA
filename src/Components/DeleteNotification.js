import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Subheading, List, Avatar, IconButton, Caption, Title} from 'react-native-paper';
import * as RNLocalize from "react-native-localize";
import moment from 'moment'
//import timezone from 'moment-timezone'


const SCREEN_WIDTH = Dimensions.get('window').width;

const DeleteNotification = (props) => {
    const timezoneActual = RNLocalize.getTimeZone();

    const leftSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp',
        });
        return (
        <TouchableOpacity style={{marginTop:'4%'}} onPress={props.handleDelete} activeOpacity={0.6}>
            <View style={styles.deleteBox}>
            <Animated.Text style={{transform: [{scale: scale}]}}>
                <IconButton
                    icon='delete'
                    color={'#fff'}
                    size={30}
                />
            </Animated.Text>
            </View>
        </TouchableOpacity>
        );
    };
    return (
        <Swipeable renderLeftActions={leftSwipe}>
            <View style={styles.container}>
                <View style={{flexDirection:'row', justifyContent:'space-between', width:'80%'}}>
                   
                    <View style={{flexDirection:'column'}}>
                        <Subheading style={{fontFamily:'ProductSans-Bold'}}> <Subheading>{props.data.title}</Subheading></Subheading>
                        
                    </View>    
                </View>
            </View>
        </Swipeable>
    );
};

export default DeleteNotification;

const styles = StyleSheet.create({
  container: {
    height: '25%',
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    padding:'3%',
    paddingRight:'15%',
    flex:1,
    marginTop:'4%',
    backgroundColor: '#f9f9f9',  
    elevation:4,
    shadowOpacity:10, 
  },
  deleteBox: {
    backgroundColor: '#f00e0e',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
});