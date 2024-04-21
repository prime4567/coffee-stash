import React from 'react';
import { StyleSheet, View, ImageBackground, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Dummy Data
import { stashData } from '../data/data';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start',  
        alignItems: 'center',
        backgroundColor: '#CFC1B2'
    },
    titleContainer: {
        flex: 1, 
        justifyContent: 'center', 
    },
    contentContainer: {
        flex: 3, 
        width: '100%',
    },
    surfaceContainer: {
        flex: 1,
        padding: 10,
    },
    labelImage: {
        width: '100%', 
        height: 200,
        justifyContent: 'flex-end'
    },
    labelText: {
        backgroundColor: '#CFC1B2c0',
    }
  }
);

export default function MyStashScreen() {
    const insets = useSafeAreaInsets();

    const RenderItem = ({title, image}) => {
        return (
            <View style={styles.surfaceContainer}>
                <ImageBackground source={image} style={styles.labelImage}>
                    <Text style={styles.labelText}>{title}</Text>
                </ImageBackground>
            </View>
        )
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <View style={styles.titleContainer}>
                <Text variant="headlineLarge">My Coffee Stash</Text>
            </View>
            
            <View style={styles.contentContainer}>
                <FlatList
                    data={stashData}
                    renderItem={({item}) => <RenderItem title={item.title} image={item.image} />}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
        </View>
    );
}