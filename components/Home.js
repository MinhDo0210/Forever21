/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const DATA = [
	{
		id: '2',
		image: 'https://i.pinimg.com/originals/67/38/84/6738847d23e69690940107bb99c33dc4.jpg',
	},
	{
		id: '3',
		image: 'https://giaonhanquocte247.com/wp-content/uploads/2018/05/mua-hang-tren-forever-21-tai-viet-nam-1000x550.jpg',
	},
	{
		id: '4',
		image: 'https://i.insider.com/5d94f5724175320cd27b0dd1?width=960&format=jpeg',
	},
	{
		id: '5',
		image: 'https://www.gannett-cdn.com/presto/2020/08/14/USAT/67e86ef4-6733-4b42-99c9-84eba6094680-Nordstrom-Womens.png?crop=1593,897,x0,y0&width=1600&height=800&fit=bounds',
	},
	{
		id: '6',
		image: 'https://www.elle.vn/wp-content/uploads/2018/08/26/elle-viet-nam-thoi-trang-quan-vot-9-730x410.jpg',
	},
	{
		id: '7',
		image: 'https://blog.tomorrowmarketers.org/wp-content/uploads/2019/10/forever21-pha-san.jpg',
	},
];

const Home = () => {
//     const [images, setimages] = useState([
//         {src:require('../Images/Banner5.jpg'),key:'1'},
//         {src:require('../Images/Banner4.jpg'),key:'2'},
//         {src:require('../Images/Banner6.jpg'),key:'3'},
//         {src:require('../Images/Banner2.jpg'),key:'4'},
//         {src:require('../Images/Banner3.jpg'),key:'5'},
//         {src:require('../Images/Banner1.jpg'),key:'6'},
//         {src:require('../Images/Banner2.jpg'),key:'7'},
//         {src:require('../Images/Banner3.jpg'),key:'8'},
// ]);
    const renderItem = ({ item }) => (
        <View>
            <Image
                style={{ height: 230, width: '100%', marginBottom: 15 }}
                    source={{
                    uri: item.image,
                }}/>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <View style={styles.Menu}>
                    <TouchableOpacity>
                        <Icon name="list-ul" size={25} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.Title}>
                    <Text style={styles.Text}>forever 21</Text>
                </View>
            </View>
            <View style={styles.Search}>
                <View style={styles.SearchBar}>
                    <TouchableOpacity style={styles.icons}>
                        <Icon name="search" size={25} color="black" />
                    </TouchableOpacity>
                    <TextInput style={styles.textSearch} placeholder="Search" />
                    <TouchableOpacity style={styles.icons}>
                        <Icon name="microphone" size={25} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons}>
                        <Icon name="qrcode" size={25} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Content}>
                <SafeAreaView style={styles.container}>
                {/* <FlatList
                    data={images}
                    renderItem={({ item }) => (
                        <Image 
                            source={item.src}
                            style={{
                                width: '100%',
                                height: 230,
                                marginBottom: 15,
                            }}
                        />
                    )}
                /> */}
                    <TouchableOpacity>
                        <Text style={{ textAlign: 'center', color: 'gray', fontWeight: 'bold', textDecorationLine: 'underline', marginBottom: 10}}>All Special Offers (7)</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
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
};

export default Home;
