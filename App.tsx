import React from 'react'; 
import { View, StyleSheet} from 'react-native'; 
import Card from './src/component/GymPalCard';        //component path
import users from './assets/data/users'


const App = () => {
  return (
    <View style={styles.pageContainer}>
      <Card user={users[2]} />          {/* Component created here and then moved all code to index.js in GymPalCard */}                 
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {            //adjust where pic is
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },
});

export default App; 

