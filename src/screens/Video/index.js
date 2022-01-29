import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, FlatList, ScrollView, Button, TouchableOpacity, BackHandler, StatusBar, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card';
import { Color } from '../../utils/color';
import Icon from 'react-native-vector-icons/Ionicons'
import Loader from '../../components/Loader';
import { fetchVideoData } from '../../Redux/action'
import { Styles } from './style';
import ThemeUtils from '../../utils/ThemeUtils';
function Video(props) {
    const dispatch = useDispatch()
    const Videos = useSelector((state) => state.VideoData)
    const [videos, setVideos] = useState(Videos)
    const loading = useSelector((state) => state.loading)
    const flatList = useRef();

    useEffect(() => {
        setVideos(Videos)
        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    });
    const handleRefresh = () => {
        dispatch(fetchVideoData())
    }
    const backAction = () => {
        BackHandler.exitApp()
        return true;
    };
    const moveToTop = () => flatList.current.scrollToIndex({ index: 0 });
    const loadMore = () => {
        setVideos(...videos + videos)


    }
    return (
        <SafeAreaView style={Styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={Color.VIDEO_BACKGROUND}
                barStyle={'dark-content'}
            />
            {loading && videos.length == 0 && <Loader />}
            {videos.length > 0 &&
                <View style={Styles.secondContainer}>
                    <Text style={Styles.title}>Videos</Text>
                    <FlatList
                        data={videos}
                        ref={flatList}
                        onRefresh={handleRefresh}
                        refreshing={false}
                        keyExtractor={(index) => `${index}`}
                        renderItem={(item) => {
                            return (
                                <Card thumbnail={item.item.thumbnail_url} url={item.item.video_url} />
                            )
                        }}
                        onEndReached={loadMore}
                    />
                </View>
            }
            <TouchableOpacity onPress={moveToTop}
                style={Styles.stickBtn}>
                <Icon name="share-sharp" size={45} color={Color.RED} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}


export default Video;
