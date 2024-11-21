import React from 'react'; 
import { View, StyleSheet, Text, Dimensions, ImageBackground, Button} from 'react-native';     //component path
import users from '../../assets/data/users.js';           //dummy data
import Animated, {
  useSharedValue,         //Shared value to track animated state
  useAnimatedStyle,       //Hook to create animated styles
  withSpring,             //Spring for smooth transitions
} from 'react-native-reanimated'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'; 

//Screen dimensions
const {width, height} = Dimensions.get('window'); 

const App = () => {
  const navigation = useNavigation<any>(); 
  const translateX = useSharedValue(0);     //tracks horizontal swipe
  const translateY = useSharedValue(0);     //tracks vertical  swipe
  const userIndex = useSharedValue(0);    //tracks user displayed

  const gesture = Gesture.Pan()
  .onUpdate((event) => {
    //update shared value as user swipes
    translateX.value = event.translationX; 
    translateY.value = event.translationY; 
  })
  .onEnd( () => {
    //Check if swipe is strong enough to remove card
    if(Math.abs(translateX.value) > 100){
      translateX.value = withSpring(translateX.value > 0 ? width : -width, {}, () =>{
          //Reset position and load next card
          translateX.value = 0; 
          translateY.value = 0; 
          userIndex.value = (userIndex.value + 1) % users.length; //loops through users
      });
    } else{
      //swipe is too weak and return to center
      translateX.value = withSpring(0); 
      translateY.value = withSpring(0); 
    }
  }); 

  //Animate styles
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: translateX.value},     //move card horizontally
      {translateY: translateY.value},     //move card vertically
      {rotate: '${translateX.value / 30}deg'}
    ], 
  })); 

type User = {
    id: string; 
    name: string; 
    image: string; 
    bio: string; 
};

  const Card = ({user}: {user:User}) =>{
    const {name = '', image = '', bio = ''} = user;           

    return (
        <View style={styles.card}>
            <ImageBackground        //Use to add text on top of pic
                source={{uri: image}}
                style={styles.image}
                imageStyle={styles.imageBorder}
                >
                <View style={styles.cardInner}>                         {/* Add margins */}
                    <Text style={styles.name}>{name}</Text>             {/*curly brackets to use variable*/}
                    <Text style={styles.bio}>{bio}</Text>
                </View>
            </ImageBackground>       {/*Can now add anything I want on top of pic */}
        </View>
    );
};


  return (
    <View style={styles.container}>
    {/* Profile button */}
    <Button 
      title="Go to Profile" 
      onPress={() => navigation.navigate('Profile')}  //Navigate to Profile screen
    />

    {/* Render cards */}
    {users
      .slice(0,2) //Only render the top two cards
      .reverse()  //Reverse to show top card last
      .map((user,index) => {
        if (index< userIndex.value) return null; //skips cards that have been swiped
        const isTopCard = index == userIndex.value; //Allows top card to be interactive

        return (
            <GestureDetector 
                key={user.id} 
                gesture={isTopCard ? gesture : Gesture.Simultaneous()}
            >
                <Animated.View 
                    style={[styles.card, isTopCard && animatedStyle]}                
                >
                    <Card user={user} />
                </Animated.View>
            </GestureDetector>
            );
          })
        }             
    </View>
  );
};

const styles = StyleSheet.create({
  container: {            //adjust where pic isfix
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },
  profileButton: {
    position: 'absolute', 
    top: 40, 
    right: 20, 
    backgroundColor: '#007AFF', 
    padding: 10, 
    borderRadius: 20, 
  }, 
  profileButtonText:{
    color: 'white', 
    fontWeight: 'bold', 
  }, 
  card: {
    width: '90%',             //% of screen that pic takes up 
    height: '700%',
    borderRadius: 15,         //corner curvature
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
    justifyContent: 'flex-end', 

  },
  imageBorder: {
    borderRadius: 15,
  },
  cardInner:{                 //Add margins
    padding: 10,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15, 
  },
  name:{                      //Styles the name
    fontSize: 30, 
    color: 'white', 
    fontWeight: 'bold', 
    marginBottom: 5, 
  }, 
  bio: {                      //Styles the bio
    fontSize: 15, 
    color: 'white', 
    lineHeight: 22, 
  },
});

export default App; 

