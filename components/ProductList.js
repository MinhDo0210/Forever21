/* eslint-disable prettier/prettier */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import styles from './styles';

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
	{
		id: '3',
		name: 'Ribbed Combo Sweater',
		price: '90$',
		image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw2df80fb1/1_front_750/00438830-03.jpg?sw=500&sh=750',
	},
	{
		id: '4',
		name: 'Open-Front Cardigan Sweater',
		price: '70$',
		image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw8472f32f/1_front_750/00440927-05.jpg?sw=500&sh=750',
	},
	{
		id: '5',
		name: 'Aaliyah Graphic Tee',
		price: '70$',
		image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw4a930ab3/1_front_750/00444268-01.jpg?sw=500&sh=750',
	},
	{
		id: '6',
		name: 'Floral & Praying Hands Graphic Pullover',
		price: '70$',
		image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw6bd4b953/1_front_750/00440417-01.jpg?sw=500&sh=750',
	},
];

export default function ListScreen() {

	const { height, width } = Dimensions.get('window');
	const itemWidth = (width - 15) / 2;
	const Item = ({ name, price }) => (
		<View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
			<Text style={{ fontSize: 16, marginTop: 10 }}>{name}</Text>
			<Text style={{ fontSize: 16, marginTop: 10 }}>{price}</Text>
		</View>
	);
	const renderItem = ({ item }) => (
		<View style={{ width: itemWidth, flex: 1, margin: 5}}>
			<View>
				<Image
					style={{ height: 300, width: '100%' }}
					source={{
						uri: item.image,
					}}
				/>
				<View style={{
					position: 'absolute', top: 15, right: 15, alignItems: 'center',
					backgroundColor: 'white', height: 40, width: 40, borderRadius: 40 / 2, justifyContent: 'center',
				}}>
					<Icon style={styles.IconMenu} name="heart-o" size={25} color="black" />
				</View>
			</View>
			<View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{
						alignItems: 'center', marginTop: 10, borderWidth: 3, borderColor: 'black',
						backgroundColor: 'orange', height: 40, width: 40, borderRadius: 40 / 2, justifyContent: 'center',
					}}>
						<View style={{ backgroundColor: 'orange', borderWidth: 3, borderColor: 'white', height: 36, width: 36, borderRadius: 36 / 2 }} />
					</View>

					<View style={{
						alignItems: 'center', marginTop: 10, marginLeft: 10,
						backgroundColor: 'grey', height: 36, width: 36, borderRadius: 40 / 2, justifyContent: 'center',
					}} />
				</View>
				<Item name={item.name} />
				<Item price={item.price} />
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<View style={styles.Content}>
				<SafeAreaView style={styles.container}>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1 }}>
							<Text>Sort By</Text>
							<Text style={{ fontWeight: 'bold', fontSize: 18 }}>Relevance</Text>
						</View>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
							<Icon name="filter" size={20} color="black" />
							<Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 4 }}>Filter</Text>
						</View>
					</View>
					<FlatList
						style={{ marginTop: 10 }}
						data={DATA}
						renderItem={renderItem}
						keyExtractor={item => item.id}
						numColumns={2}
					/>
			</SafeAreaView>
			</View>
			<View style={styles.MenuBar}>
                <TouchableOpacity>
                    <Icon1 style={styles.IconMenu} name="ios-home-outline" size={25} color="#FF8000" />
                    <Text style={{color: '#FF8000'}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.IconMenu} name="heart-o" size={25} color="gray" />
                    <Text style={styles.TextMenu}>Wishlist</Text>
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
