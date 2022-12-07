import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<Image
    style={styles.user_icon}
    source={{uri: item.user_icon}}
   />
<Text style={styles.user_name}>{item.user_name}</Text>
<Image
    style={styles.song_cover}
    source={{uri: item.song_cover}}
    />
<Text style={styles.song_name}>{item.song_name}</Text>
<Text style={styles.hashtag}>{item.hashtag}</Text>
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'user_icon': {
        'width': '12vw',
        'height': '12vw',
        'margin': 5,
        'borderRadius': 50
    },
    'user_name': {
        'color': '#0b0909',
        'fontSize': 18,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'song_cover': {
        'width': '95vw',
        'height': '55vw',
        'marginTop': 5,
        'alignSelf': 'center'
    },
    'song_name': {
        'color': '#0b0a0a',
        'fontSize': 18,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'hashtag': {
        'color': '#817e7e',
        'fontSize': 18,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});