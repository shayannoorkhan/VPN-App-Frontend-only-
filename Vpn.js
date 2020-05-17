import React, { Component,useState} from 'react';
import {StyleSheet,Image, ImageStore, Modal,ScrollView} from 'react-native';
import{Block,Text,Button,Utils} from "expo-ui-kit";


import {images,servers,theme} from '../constants';
const{icons} = images;

const {rgba} =Utils;
const{SIZES,COLORS} =theme;

export default class Vpn extends Component {

    state={
        connected:false,
        server:null,
        show:false,
        automatic:{
            name:"Pakistan",
            icon:icons.pakistan
        }
    };

    handleConnect(){
        const {connected} = this.state;
        this.setState({connected:!connected});
    }

    handleServer(server){
        this.setState({ server,connected:false,show:false});
    }

    renderServer(){
        const{server,automatic}=this.state;
        const connection=server || automatic;
        return(
            <Block flex={false} row center middle>
            <Image 
            style={styles.icons}
            source={connection.icon}/>
            <Text margin={[0,10,0,20]}>{connection.name}</Text>
            <Image 
            style={styles.icons}
            source={images.icons.dropdown}/>
            </Block>
        )
    }

    renderServers(){
        const{show,server,automatic}=this.state;
        const connection = server || automatic;

        return(
            <Modal visible={show} animationType="fade" transparent> 
            <Block bottom color={rgba(COLORS.gray,-2)}>
            <Block flex={false} white middle padding={[SIZES.padding,0]}>
            <Text subtitle center gray>Pick your Server</Text>
            <ScrollView>
                {servers.map(item => {
                   const isconnected= connection.name === item.name;
                   const isChecked = icons[isconnected ? "checked" : "unchecked"];
                    return(
                        <Button transparent key={`server-${item.name}`} onPress={() => this.handleServer(item)}>
                        <Block flex ={false} row center space="between" margin={[SIZES.padding,SIZES.padding]}>
                        <Block flex ={false} row center>
                            <Image source={item.icon} />
                            <Text padding={[0,SIZES.h3]}>{item.name}</Text>
                            </Block>
                            <Image source={isChecked} />
                            </Block>
                        </Button>
                    )
                })}
            </ScrollView>
            </Block>
            </Block>
            </Modal>
        )
    }
    render() {

        const{connected}=this.state;
        return (
            <Block safe center space="between">
            <Block flex={false} padding={[SIZES.h3,0]}>
                <Text title semibold> Vpn </Text>
            </Block>

            <Block center flex={false}>
            <Block flex={false} row center middle white shadow radius={SIZES.radius} padding={[SIZES.base,SIZES.padding]}>
            <Text theme={theme}subtitle semibold gray height={SIZES.h3}>{connected?"Connected":"Disconnected"}</Text>
            <Block flex={false} radius={SIZES.base} color={connected? COLORS.success : rgba(COLORS.gray,0.5)}
            style={styles.status}  />
            </Block>
            <Image 
            style={styles.image}
             source={images.icons[connected ?"online":"offline"]} />
             <Button
             theme={theme}
             color={COLORS.success}
              outlined={!connected}  
              style={styles.connect && connected && styles.connected}
              onPress={()=>this.handleConnect()}>
                 <Text caption center bold white={connected} margin={[SIZES.padding / 2,0]}>{connected?"DISCONNECT":"CONNECT NOW"}</Text>
             </Button>
            </Block>
            

            <Block flex={false} middle white shadow style={styles.servers}>
            <Button transparent onPress={() => {this.setState({show:true})}}>
            {this.renderServer()}
            </Button>
            </Block>
            {this.renderServers()}
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    stretch: {
        width: 300,
        height: 300,
        resizeMode: 'stretch',
      },
      connect:{
          width:SIZES.width/2
      },
      connected:{
      borderColor:COLORS.black
      },
      image:{
          width:180,
          height:180,
          marginVertical:20,
      },
      status:{
        width:SIZES.base,
        height:SIZES.base,
        marginLeft:10
      },
      servers:{
          width:SIZES.width,
          height:SIZES.base * 9,
          shadowOpacity:0.05,
          shadowRadius:SIZES.base/2,
          shadowOffset:{
              width:0,
              height:-5,
          }
      },
      icons:{
          width:20,
          height:20
      }
})
