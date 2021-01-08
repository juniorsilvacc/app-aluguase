import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Recommend({cover, house, off}) {
 return (
   <ImageBackground
   source={cover}
   style={styles.container}
   blurRadius={4}
   
   >
       <Text  style={[styles.house, styles.shadow]}>
           {house}
       </Text>
       <Text  style={[styles.off, styles.shadow]}>
           {off} OFF
       </Text>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container:{
        width: 230,
        height: 140,
        marginRight: 20,
        marginBottom: 40,
        opacity: 0.8,
        backgroundColor: '#000',
        marginLeft: 3,
        padding: 12,
        marginTop: 20,
    },
    house:{
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 15,
    },
    off:{
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 12,
    },
    shadow:{
        textShadowOffset: {width: 1, height: 2},
        textShadowRadius: 3,
        textShadowColor: '#000'
    }
});