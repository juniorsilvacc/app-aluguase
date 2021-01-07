import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function House({cover}) {
 return (
   <View style={styles.container}>
       <View>
           <Image
           source={cover}
           style={styles.cover}
           />
       </View>

       <View style={styles.content}>
           <Text style={styles.description}>
               Casa para morar, show de bala mesmo!
            </Text>
            <Text style={styles.price}>
                R$ 954, 60
            </Text>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: 260,
        height: 70,
        backgroundColor: '#FFF',
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10,
    },
    cover:{
        borderRadius: 10,
        width: 60,
        height: 60,
    },
    content:{
        width: '65%',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        height: '100%',
    },
    description:{
        fontWeight: '500',
        fontSize: 10,
        color: '#4F4A4A',
    },
    price:{
        fontWeight: '700',
        fontSize: 12,
        marginTop: 3,
    }
});