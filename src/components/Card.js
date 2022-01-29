import React, { Component } from 'react'
import { StyleSheet,  TouchableOpacity, View ,Share} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import VideoPlayer from 'react-native-video-player'
import { Color } from '../utils/color';
import ThemeUtils from '../utils/ThemeUtils';

export default function Card (props) {
  const  shareLink=()=>{
        Share.share(
            {
              message: props.url ,
              title: 'Share a Video',
              
            },
            {
              dialogTitle: 'Practical',
              subject:'Practical',
              excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
            },
          );
        };
    
        return (
            <View style={Styles.card}>
                <TouchableOpacity style={Styles.shareContiner} onPress={shareLink}>
                <Icon name="share-circle" size={45} color={Color.BLUE} />
                </TouchableOpacity>
                <VideoPlayer
                    video={{ uri: props.url }}
                    videoWidth={1500}                   
                    videoHeight={1000}
                    autoplay={false}
                    defaultMuted={false}
                    thumbnail={{ uri: props.thumbnail }}
                />               
            </View>
        )
    }


const Styles = StyleSheet.create({
    card: {      
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: "center",
        marginHorizontal:20,
        padding:ThemeUtils.relativeHeight(2),
        borderRadius:10,
        marginTop:10,
        
        
      },
    shareContiner:{alignSelf:'flex-end',padding:5}
})