import React from 'react'
import {Text, ImageBackground, View, StyleSheet} from 'react-native'; 

const Card = (props) =>{
    const {name, image, bio} = props.user;           // props.name, etc. 
    return (
        <View style={styles.card}>
            <ImageBackground        //Use to add text on top of pic
                source={{uri: image}}
                style={styles.image}
                >
                <View style={styles.cardInner}>                         {/* Add margins */}
                    <Text style={styles.name}>{name}</Text>             {/*curly brackets to use variable*/}
                    <Text style={styles.bio}>{bio}</Text>
                </View>
            </ImageBackground>       {/*Can now add anything I want on top of pic */}
        </View>
    );
};

const styles = StyleSheet.create({
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

export default Card; 