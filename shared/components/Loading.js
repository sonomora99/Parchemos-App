import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Dialog, Portal, Text } from 'react-native-paper';

export default function Loading({close, visible}) {

  return (
    <Portal>
      <Dialog onDismiss={close} visible={visible} dismissable={false } style={{paddingTop:0, paddingBottom:0, height:'110%', backgroundColor: 'white', width: '110%', marginLeft: -9}}>
        <Dialog.Content style={styles.container}>    
          <View >
            <View style={styles.loadingContainer}>
              <Image style={[{resizeMode:'contain', height:'65%'}]} source={require('../../assets/logo.png')}/>
              <Text style={styles.loadingText}>Cargando...</Text>
            </View>
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginTop:0,
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  loadingContainer: {
    marginBottom:'auto',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});