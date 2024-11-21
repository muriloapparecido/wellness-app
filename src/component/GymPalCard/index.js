import React from 'react'
import {Text, ImageBackground, View, StyleSheet} from 'react-native'; 

const Card = ({user}) =>{
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

const styles = StyleSheet.create({
    card: {
      width: '90%',             //% of screen that pic takes up 
      height: '70%',
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
    }
  });

export default Card; 