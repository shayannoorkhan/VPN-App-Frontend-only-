import React, { Component } from 'react'
import { Image,ScrollView,StyleSheet} from 'react-native'
import{Block,Text,Button,Utils} from "expo-ui-kit";

import {images,theme} from "../constants";
const {background} = images;

const {rgba} =Utils;
const{SIZES,COLORS} =theme;

const backgrounds=[
    {
        title:"Secured,forever.",
        description:"Someone intruding into your data,NO MORE!",
        img:background.welcome,

    },
    {
        title:"Secured,forever.",
        description:"Someone intruding into your data,NO MORE!",
        img:background.encrypted,

    },
    {
        title:"Secured,forever.",
        description:"Someone intruding into your data,NO MORE!",
        img:background.privacy,

    },
];

export default class Welcome extends Component {
    renderImages(){
    return(
        <ScrollView horizontal pagingEnabled scrollEnabled showsHorizontalScrollIndicator={false} decelerationRate={0} scrollEventThrottle={16} snapToAlignment="center">
        {backgrounds.map((item,index) =>(
            <Block 
            center 
            bottom 
            key={`img-${index}`}
            style={{width:SIZES.width}}>         
        <Image source={item.img} resizeMode="contain" style ={{
        width:SIZES.width / 1.5
        }}/>
        </Block >
        ))}
         
         </ScrollView >
    )
    }

    renderDots(){
        return(
            <Block flex={false} row center middle margin={[20,0,40,0]}>
            <Block
            radius={8} 
            flex={false} 
            margin={[0,5]} 
            color={(COLORS.gray)}
            style={{width:6,height:6}}
            />
            <Block
            radius={8} 
            flex={false} 
            margin={[0,5]} 
            color={rgba(COLORS.gray,0.5)}
            style={{width:6,height:6}}
            />
            <Block
            radius={8} 
            flex={false} 
            margin={[0,5]} 
            color={rgba(COLORS.gray,0.5)}
            style={{width:6,height:6}}
            />
            </Block>
        )
    }
    render() {
        const{navigation}=this.props;
        return (
            <Block safe>
            <Block center middle>
           {this.renderImages()}
            </Block>
            <Block flex={false} center bottom margin={60}>
            <Text h3 semibold>Secured,forever.</Text>
            <Text center caption gray margin ={[10,0]}>
             Someone intruding into your data,NO MORE!
            </Text>
            {this.renderDots()}
                <Button 
                theme={theme}
                primary
                onPress={() => navigation.navigate("Vpn")}                
                // style={{borderRadius:30}}
                 >
                    <Text center white caption bold margin={[6,26]}>Get Started</Text>
                </Button>
            </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({});
