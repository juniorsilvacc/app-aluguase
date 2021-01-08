import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import { ScrollView } from 'react-native-gesture-handler';

import SwiperComponent from '../components/Swiper';

export default function Datail() {
 return (
   <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent/>
      </View>

    <View style={styles.headerContent}>
          <View style={{width: '65%'}}>
              <Text>Casa de praia</Text>
          </View>

          <View style={{width: '35%'}}>
              <Text>Avaliações</Text>
          </View>
    </View>
      
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  swiperContent:{
    flexDirection: 'row',
    width: "100%",
    height: 340,
  }
});
