/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';

const DATA = [
    {
        id: '1',
        name: 'Raw-Cut Cropped Plaid Shirt',
        price: '$40',
        code: '2000441274',
        image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe43a07bc/1_front_750/00443877-04.jpg?sw=500&sh=750',
    },
    {
        id: '2',
        name: 'Ribbed Longline Cardigan Sweater',
        price: '$38',
        code: '2000441275',
        image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwbd52d7ca/1_front_750/00441275-06.jpg?sw=500&sh=750',
    },
];

export default function Wishlist() {
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
                <View style={{flex: 5, flexDirection: 'row'}}>
                    <Image
                        style={{
                            height: 200,
                            resizeMode: 'center',
                            flex: 1,
                            padding: 50,
                        }}
                        source={{uri: item.image}}
                    />
                    <View style={styles1.Info}>
                        <View style={{ flex: 1.5 }}>
                            <Text style={{ fontSize: 18, paddingBottom: 5, fontWeight: 'bold'}}>$39.99</Text>
                            <Text style={{ fontSize: 16}}>SKU#:
                                <Text style={{fontWeight: 'bold'}}>2000441275
                                </Text>
                            </Text>
                        </View>
                        <TouchableOpacity style={styles1.Button}>
                            <Text style={styles1.Text}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles1.Button}>
                            <Text style={styles1.Text}>Remove from Wishlist</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.Content}>
                <SafeAreaView>
                    <View>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </SafeAreaView>
            </View>
            <View style={styles.MenuBar}>
                <TouchableOpacity>
                    <Icon1 style={styles.IconMenu} name="ios-home-outline" size={25} color="gray" />
                    <Text style={styles.TextMenu}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.IconMenu} name="heart-o" size={26} color="#FF8000" />
                    <Text style={{color: '#FF8000' }}>Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.IconMenu} name="shopping-bag" size={25} color="gray" />
                    <Text style={styles.TextMenu}>Cart</Text>
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
        height: 280,
        flex: 1,
    },
    Info: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 170,
    },
    Button: {
        flex: 1,
        justifyContent: 'space-around',
        width: '90%',
        height: 40,
        backgroundColor: '#D8D8D8',
        marginBottom: 10,
    },
    Text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
