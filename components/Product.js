/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, FlatList, Image, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import styles from './styles';
import Swiper from 'react-native-swiper';

const DATA = [
	{
		id: '1',
		image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw9d874c5a/1_front_750/00440840-01.jpg?sw=500&sh=750',
	},
];

export default function product() {
    
    
    return (
        <View style={styles.container}>
            <View style={styles.Content}>
                <SafeAreaView style={styles.container}>
                    <ScrollView style={{flex: 1 }}>
                        <Swiper flex={1} height={470} style={styles.wrapper} showsButtons={false}>
                        <View style={styles.slide1}>
                            <Image
                            style={{height: 470, width: '100%'}}
                            source={{
                                uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw4a930ab3/1_front_750/00444268-01.jpg?sw=500&sh=750',
                            }}
                            />
                        </View>
                        <View style={styles.slide1}>
                            <Image
                            style={{height: 470, width: '100%'}}
                            source={{
                                uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw4acbddf1/2_side_750/00444268-01.jpg?sw=500&sh=750',
                            }}
                            />
                        </View>
                        <View style={styles.slide1}>
                        <Image
                            style={{height: 470, width: '100%'}}
                            source={{
                                uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw65e250f4/3_back_750/00444268-01.jpg?sw=500&sh=750',
                            }}
                        />
                        </View>
                        <View style={styles.slide1}>
                        <Image
                            style={{height: 470, width: '100%'}}
                            source={{
                            uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe9c5de6f/5_detail_750/00444268-01.jpg?sw=500&sh=750',
                            }}
                        />
                        </View>
                    </Swiper>
                    <View>
                        <View style={styles1.Info1}>
                            <View style={styles1.PricePro}>
                                <View style={{ flex: 1, flexDirection: 'row'}}>
                                    <Text style={styles1.Price1}>đ520,600</Text>
                                    <Text style={styles1.Price2}>đ312,500</Text>
                                </View>
                                <Text style={styles1.NamePro}>Reason Striped-Trim Swim Trunks</Text>
                            </View>
                            <View style={styles1.Vote}>
                                <View style={styles1.Star}>
                                    <Icon name="star" size={18} color="#FF8000" />
                                    <Icon name="star" size={18} color="#FF8000" />
                                    <Icon name="star" size={18} color="#FF8000" />
                                    <Icon name="star-o" size={18} color="#FF8000" />
                                    <Icon name="star-o" size={18} color="#FF8000" />
                                </View>
                                <Text style={{marginLeft: 10, fontSize: 14, color: 'gray'}}>(3)</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column'}}>
                        <View style={styles1.Info2}>
                            <Text style={styles1.InfoTitle}>Product infomation</Text>
                        </View>
                        <View style={styles1.Info2}>
                            <Text style={styles1.Text1}>Detailt</Text>
                            <Text style={{paddingLeft: 15}}>If this button doesn't look right for your app, you can build your own button using TouchableOpacity or TouchableWithoutFeedback</Text>
                            <Text style={styles1.Text1}>Content + Care</Text>
                            <Text style={styles1.Text2}>- 100% polyester</Text>
                            <Text style={styles1.Text2}>- Machine wash cold</Text>
                            <Text style={styles1.Text1}>Size + Fit</Text>
                            <Text style={styles1.Text2}>- Model is 6'1" and wearing a Medium</Text>
                            <Text style={styles1.Text1}>Product Code: 2000439612</Text>
                        </View>
                        <View style={styles1.Info2}>
                            <Text style={styles1.InfoTitle}>Size Guide</Text>
                        </View>
                        <View style={styles1.Info2}>
                            <View style={styles1.Reviews}>
                                <Text>Reviews (3) </Text>
                                <View style={styles1.Star}>
                                    <Icon name="star" size={18} color="#FF8000" />
                                    <Icon name="star" size={18} color="#FF8000" />
                                    <Icon name="star" size={18} color="#FF8000" />
                                    <Icon name="star-o" size={18} color="#FF8000" />
                                    <Icon name="star-o" size={18} color="#FF8000" />
                                </View>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                    <View style={styles1.AddCart}>
                        <View style={styles1.CartTop}>
                            <View style={styles1.Line} />
                        </View> 
                        <View style={styles1.CartBot}>
                            <View style={styles1.Circle}>
                                <View style={styles1.CircleIn}>
                                    <View style={styles1.CircleOut} />
                                </View>
                                <Text style={styles1.NameColor}>lightblue/</Text>
                            </View>
                            <TouchableOpacity style={styles1.ButtonAdd}>
                                <Text style={styles1.TextAdd}>add to cart</Text>
                            </TouchableOpacity>
                            <View style={styles1.HeartAdd}>
                                <TouchableOpacity>
                                    <Icon style={styles1.ICHeartAdd} name="heart" size={30} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
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

const styles1 = StyleSheet.create({
    Info1: { 
        height: 80, 
        flex: 1, 
        flexDirection: 'row', 
        borderBottomColor: '#D8D8D8', 
        borderBottomWidth: 10,
    },
    Info2: { 
        borderBottomColor: '#D8D8D8', 
        borderBottomWidth: 1,
    },
    InfoTitle: {
        padding: 15,
    },
    PricePro: { 
        flex: 2, 
        flexDirection: 'column', 
        padding: 10,
    },
    Price1: { 
        color: 'black', 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginRight: 5, 
        textDecorationLine: 'line-through', 
        textDecorationColor: 'black', 
    },
    Price2: { 
        color: 'red', 
        fontSize: 18, 
        fontWeight: 'bold', 
    },
    NamePro: {
        flex: 1, 
        color: 'gray', 
        fontSize: 16, 
    },
    Vote: { 
        flex: 1, 
        flexDirection: 'row', 
        padding: 10,
    },
    Star: { 
        flex: 1, 
        flexDirection: 'row', 
        padding: 2, 
    },
    Text1: {
        padding: 15, 
        fontWeight: 'bold', 
        fontSize: 16,
    },
    Text2: {
        paddingLeft: 20,
        color: 'gray',
    },
    Reviews: { 
        flex: 1, 
        flexDirection: 'row', 
        padding: 15,
    },
    AddCart: {
        flex: 0.17, 
        flexDirection: 'column', 
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#D8D8D8',
    },
    CartTop: { 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    Line: { 
        width: 60, 
        height: 4, 
        backgroundColor: 'gray', 
        borderRadius: 25, 
        marginTop: 7, 
    },
    CartBot: { 
        width: '100%', 
        height: 50, 
        flex: 4, 
        flexDirection: 'row',  
        justifyContent: 'space-around', 
        padding: 10,
    },
    Circle: { 
        flex: 1.5, 
        flexDirection: 'column',
    },
    CircleIn: {
        alignItems: 'center', 
        borderWidth: 3, 
        borderColor: 'black',
        height: 40, 
        width: 40, 
        borderRadius: 50 / 2, 
        justifyContent: 'center', 
        marginLeft: 8,
    },
    CircleOut: { 
        backgroundColor: 'lightblue', 
        borderWidth: 3, 
        borderColor: 'white', 
        height: 36, 
        width: 36, 
        borderRadius: 36 / 2, 
    },
    NameColor: { 
        fontSize: 10, 
        marginTop: 5,
        textTransform: 'uppercase',
    },
    ButtonAdd: { 
        flex: 5, 
        width: '100%', 
        height: 55, 
        backgroundColor: 'yellow',
    },
    TextAdd: { 
        textAlign: 'center', 
        textTransform: 'uppercase', 
        fontWeight: 'bold', 
        fontSize: 16, 
        color: 'black', 
        padding: 15,
    },
    HeartAdd: { 
        flex: 1, 
    },
    ICHeartAdd: { 
        marginLeft: 14, 
        lineHeight: 50,
    },
});




