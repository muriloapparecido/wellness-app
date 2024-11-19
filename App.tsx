import React from 'react'; 
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native'; 

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground        //Use to add text on top of pic
          source={{
            uri: 'https://imageio.forbes.com/specials-images/imageserve/6532a388407b720effdbd589/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds'
          }}
          style={styles.image}>
          <View style={styles.cardInner}>           {/* Add margins */}
            <Text style={styles.name}>Rosa Parks</Text>
            <Text style={styles.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          </View>
        </ImageBackground>       {/*Can now add anything I want on top of pic */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {            //adjust where pic is
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },
  card: {
    width: '90%',             //% of screen that pic takes up 
    height: '70%',
    borderRadius: 10,         //corner curvature
    shadowColor: "#000",      //shadow (react native shadow generator)
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8.30,

    elevation: 13,
  },
  image: {
    width: '100%',            //How much of the card style is actually filled 
    height: '100%',
    borderRadius: 10,  
    overflow: 'hidden',
    
    justifyContent: 'flex-end', 

  },
  cardInner:{                 //Add margins
    padding: 10,
  },
  name:{                      //Styles the name
    fontSize: 30, 
    color: 'white', 
    fontWeight: 'bold', 
  }, 
  bio: {                      //Styles the bio
    fontSize: 15, 
    color: 'white', 
    lineHeight: 25, 
  }
});

export default App; 

