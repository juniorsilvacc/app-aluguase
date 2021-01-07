import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

export default function Recommend() {
 return (
   <ImageBackground
   source={require('../assets/house1.jpg')}
   style={styles.container}
   blurRadius={2}
   >
       <Text  style={styles.house}>
           Casa Floripa
       </Text>
       <Text  style={styles.off}>
           25% OFF
       </Text>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container:{

    }
});