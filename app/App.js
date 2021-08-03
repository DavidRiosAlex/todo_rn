import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.appBackground}>
      <ScrollView style={styles.appBackground}>
        <View style={styles.appBackground} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: 'white',
  },
});

export default App;
