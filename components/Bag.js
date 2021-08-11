/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/SimpleLineIcons';

const DATA = [
    {
        id: '1',
        name: 'Ribbed Combo Sweater',
        price: '$40',
        code: '2000441274',
        image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw2df80fb1/1_front_750/00438830-03.jpg?sw=500&sh=750',
    },
];

export default function Bag() {
    const Item = ({ name, price, code }) => (
		<View style={{flex: 1}}>
			<Text style={{ fontSize: 18, padding: 10 }}>{name}</Text>
			<Text style={{ fontSize: 20, padding: 20}}>{price}</Text>
            <Text style={{ fontSize: 20 }}>{code}</Text>
		</View>
	);

    const renderItem = ({ item }) => (
        <View>
            <View style={styles1.Wishlist}>
                <Item name={item.name} />
                <View style={styles1.Product}>
                    <View style={styles1.ProLeft}>
                        <Image
                            style={{
                                height: 200,
                                resizeMode: 'center',
                                flex: 1,
                                padding: 50,
                            }}
                            source={{uri: item.image}}
                        />
                        <TouchableOpacity style={styles1.Button}>
                            <Text style={styles1.ButtonMove}>Move to Wishlist</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles1.Info}>
                        <View style={{ flex: 1.5 }}>
                            <Text style={{ fontSize: 18, paddingBottom: 5, fontWeight: 'bold'}}>$39.99</Text>
                            <Text style={{ fontSize: 16}}>SKU#:
                                <Text style={{fontWeight: 'bold' }}>2000441275
                                </Text>
                            </Text>
                            <Text style={{ fontSize: 16 }}>Color:
                                <Text style={{fontWeight: 'bold', textTransform: 'uppercase' }}>white/multi
                                </Text>
                            </Text>
                            <Text style={{ fontSize: 16 }}>Size:
                                <Text style={{fontWeight: 'bold', textTransform: 'uppercase'}}>m
                                </Text>
                            </Text>
                        </View>
                        <View style={styles1.Qty}>
                            <TouchableOpacity style={styles1.QtyIC}>
                                <Icon4 name="trash" size={20} color="black" />
                            </TouchableOpacity>
                            <Text style={{fontWeight: 'bold', padding: 3, fontSize: 16 }}>Qty: 1</Text>
                            <TouchableOpacity style={styles1.QtyIC}>
                                <Icon3 name="plus" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles1.Promo}>
                <Text style={styles1.TextPromo}>*Have a Promo?</Text>
                <View style={styles1.ApplyPromo}>
                    <TextInput style={{ flex: 3.5, padding: 10, fontSize: 16}} />
                    <TouchableOpacity style={{ flex: 1, height: 30, backgroundColor: '#D8D8D8', margin: 10, padding: 2 }}>
                        <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.Content}>
                <SafeAreaView style={styles.container}>
                    <View style={{flex: 7}}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles1.Btn}>
                        <TouchableOpacity style={styles1.BtnCheck}>
                            <Text style={styles1.TextBtn}>Checkout</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles1.BtnPay}>
                            <Text style={styles1.TextBtn}> <Icon name="apple" size={23} color="black" /> Pay</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
            <View style={styles.MenuBar}>
                <TouchableOpacity>
                    <Icon1 style={styles.IconMenu} name="ios-home-outline" size={25} color="gray" />
                    <Text style={styles.TextMenu}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.IconMenu} name="heart-o" size={26} color="gray" />
                    <Text style={styles.TextMenu}>Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.IconMenu} name="shopping-bag" size={25} color="#FF8000" />
                    <Text style={{color: '#FF8000' }}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.IconMenu} name="user-o" size={25} color="gray" />
                    <Text style={styles.TextMenu}>Me</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles1 = StyleSheet.create({
    Wishlist: {
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
        width: '100%',
        height: 330,
        flex: 1,
    },
    Product: {
        flex: 5,
        flexDirection: 'row',
        marginBottom:  20,
    },
    ProLeft: {
        flex: 2.5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    ButtonMove: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    Qty: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '65%',
        marginTop: 35,
    },
    QtyIC: {
        width: 30,
        height: 30,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
        padding: 4,
    },
    ApplyPromo: {
        width: '100%',
        height: 50,
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
    },
    Promo: {
        flex: 0.5,
        padding: 30,
    },
    TextPromo: {
        fontSize: 16,
        paddingBottom: 5,
    },
    Info: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 170,
    },
    Button: {
        flex: 0.5,
        justifyContent: 'space-around',
        width: '85%',
        backgroundColor: '#D8D8D8',
        margin: 10,
        marginLeft: 15,
    },
    Btn: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10 ,
    },
    BtnCheck: {
        width: '85%',
        height: 50,
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
    },
    BtnPay: {
        width: '85%',
        height: 50,
        justifyContent: 'space-around',
        borderColor: 'black',
        borderWidth: 1,
        },
    TextBtn: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
