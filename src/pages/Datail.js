import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import SwiperComponent from '../components/Swiper';
import Stars from 'react-native-stars';

export default function Datail() {
 return (
   <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent/>
      </View>

    <View style={styles.headerContent}>
          <View style={{width: '65%'}}>
              <Text style={styles.house}>Casa de praia</Text>
          </View>

          <View style={{width: '35%'}}>
              <Text style={styles.rating}>Avaliações</Text>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <Stars
                default={4}
                count={5}
                half={true}
                starSize={20}
                fullStar={<Ionicons name="md-star" size={24} style={styles.myStartStyle} />}
                emptyStar={<Ionicons name="md-star-outline" size={24} style={styles.myStartStyle} />}
                halfStar={<Ionicons name="md-star-half" size={24} style={styles.myStartStyle} />}
                />
              </View>
          </View>

    </View>

    <Text style={styles.price}>
      R$ 1.200, 20
    </Text>
    <Text style={styles.description}>
      Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.
    </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 20, marginTop: 20}}>
      <View style={styles.slide}>
        <Image 
        style={{width: 100, height: 100, borderRadius: 8}}
        source={require("../assets/house2.jpg")}
        />
      </View>

      <View style={styles.slide}>
        <Image 
        style={{width: 100, height: 100, borderRadius: 8}}
        source={require("../assets/house1.jpg")}
        />
      </View>

      <View style={styles.slide}>
        <Image 
        style={{width: 100, height: 100, borderRadius: 8}}
        source={require("../assets/house6.jpg")}
        />
      </View>

      <View style={styles.slide}>
        <Image 
        style={{width: 100, height: 100, borderRadius: 8}}
        source={require("../assets/house3.jpg")}
        />
      </View>

      <View style={styles.slide}>
        <Image 
        style={{width: 100, height: 100, borderRadius: 8}}
        source={require("../assets/house4.jpg")}
        />
      </View>

      
    </ScrollView>
      
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
  },
  headerContent:{
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  house:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4F4A4A',
  },
  rating:{
    fontWeight: '600',
    fontSize: 10,
    color: '#4F4A4A',
  },
  myStartStyle:{
    color: '#E7A74E',
    backgroundColor: 'transparent',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  price:{
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    marginTop: 20,
  },
  description:{
    paddingHorizontal: 20,
    fontWeight: '600',
    fontSize: 14,
    color: '#B3aeae',
    marginTop: 5
  },
  slide:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 8
  }
});
