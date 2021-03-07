import React, {useEffect} from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import CustomText from '../Components/customText';
// import CustomImgCon from '../Components/customImgCon';
import CustomTouchCard from '../Components/customTouchCard';
import { MaterialIcons, FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
// import {HeaderButton, HeaderButtons , Item} from 'react-navigation-header-buttons';
// import CustomHeaderButton from '../Components/HeaderButton';


export default function Dashboard(props) {
  const {navigation} = props;

  // React.useEffect(() => {
  //   navigation.setOptions({ 
  //     headerLeft : () => 
  //       <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
  //         <Item title='Menu' iconName="md-menu" onPress={() => navigation.toggleDrawer() }/>
  //       </HeaderButtons>
  //   })
  // }, [navigation]);
  
  return (
    <ScrollView>
          <Image source={require("../assets/images/logo_white.png")} style={style.img} resizeMode='cover'/>
    <View style={style.container}>

      <CustomTouchCard>
        <TouchableOpacity style={[style.touchable, { backgroundColor: "red" }]} onPress={() => props.navigation.navigate('Statics')}>
          <View style={style.imgCon}>
          <FontAwesome name="bar-chart" size={50} color="black" />
          </View>
          <CustomText style={{ textAlign: 'center' }}>Statics</CustomText>
        </TouchableOpacity>
      </CustomTouchCard>

      <CustomTouchCard>
        <TouchableOpacity style={[style.touchable, { backgroundColor: "green" }]} onPress={() => props.navigation.navigate('Wiki')}>
          <View style={style.imgCon}>
          <AntDesign name="questioncircle" size={50} color="black" />
          </View>
          <CustomText style={{ textAlign: 'center' }}>Wiki</CustomText>
        </TouchableOpacity>
      </CustomTouchCard>

      <CustomTouchCard>
        <TouchableOpacity style={[style.touchable, { backgroundColor: "yellow" }]} onPress={() => props.navigation.navigate('Map')}>
          <View style={style.imgCon}>
          <MaterialCommunityIcons name="earth" size={50} color="black" />
          </View>
          <CustomText style={{ textAlign: 'center' }}>Map</CustomText>
        </TouchableOpacity>
      </CustomTouchCard>

      <CustomTouchCard>
        <TouchableOpacity style={[style.touchable, { backgroundColor: "blue" }]} onPress={() => props.navigation.navigate('About Me')}>
          <View style={style.imgCon}>
          <MaterialIcons name="info" size={50} color="black" />
          </View>
          <CustomText style={{ textAlign: 'center' }}>About Me</CustomText>
        </TouchableOpacity>
      </CustomTouchCard>

      <CustomTouchCard>
        <TouchableOpacity style={[style.touchable, { backgroundColor: "gray" }]} onPress={() => props.navigation.navigate('Contact Me')}>
          <View style={style.imgCon}>
          <MaterialIcons name="contact-mail" size={50} color="black" />
          </View>
          <CustomText style={{ textAlign: 'center' }}>Contact Me</CustomText>
        </TouchableOpacity>
      </CustomTouchCard>

      <CustomTouchCard>
        <TouchableOpacity style={[style.touchable, { backgroundColor: "white" }]} onPress={() => props.navigation.navigate('Support Me')}>
          <View style={style.imgCon}>
          <MaterialCommunityIcons name="heart-multiple" size={50} color="black" />
          </View>
          <CustomText style={{ textAlign: 'center' }}>Support Me!</CustomText>
        </TouchableOpacity>
      </CustomTouchCard>

    </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  touchable: {
    textAlign: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 10
  },
  imgCon : {
    marginRight : 'auto',
    marginLeft : 'auto',
    marginBottom : 10
  },
  img : {
    width: "70%",
    height: 85,
    marginRight : 'auto',
    marginLeft : 'auto',
    marginTop : 15,
    marginBottom : 15,
    backgroundColor : 'white'
  }
})


