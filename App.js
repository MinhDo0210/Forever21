/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
// import * as React from 'react';
// import Login from './components/Login';
// import Home from './components/Home';
// import ProductList from './components/ProductList';
// import Product from './components/Product';
// import Wishlist from './components/Wishlist';
// import Bag from './components/Bag';
// import Test from './components/test';

// export default function App() {
//   //return <Login />;
//   //return <Home />;
//   //return <ProductList />;
//   return <Product />;
//   //return <Wishlist />;
//   //return <Bag />;
//   //return <Test />;
// }
import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import styles from './components/styles';

import Product from './components/Product';
import ProductList from './components/ProductList';
import Wishlist from './components/Wishlist';
import Bag from './components/Bag';
import Login from './components/Login';

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


const Home = ({ navigation }) => {
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
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <TouchableOpacity onPress={() => {
    //     navigation.navigate('Detail');
    //   }}>
    //     <Text style={{color: 'black'}}>Detail</Text>
    //   </TouchableOpacity>
    // </View>
    <View style={styles.container}>
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
                        <Text style={{
                          textAlign: 'center',
                          color: 'gray',
                          fontWeight: 'bold',
                          textDecorationLine: 'underline',
                          marginBottom: 10}}>
                            All Special Offers (7)
                        </Text>
                    </TouchableOpacity>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
            <View style={styles.MenuBar}>
                <TouchableOpacity
                  onPress={() => {
                  navigation.navigate('Product');}}
                >
                  <Icon1 style={styles.IconMenu} name="ios-home-outline" size={25} color="#FF8000" />
                  <Text style={{color: '#FF8000'}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                  navigation.navigate('Product List');}}
                >
                  <Icon1 style={styles.IconMenu} name="search-outline" size={25} color="gray" />
                  <Text style={styles.TextMenu}>Product</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                  navigation.navigate('WishList');}}
                >
                    <Icon style={styles.IconMenu} name="heart-o" size={25} color="gray" />
                    <Text style={styles.TextMenu}>Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                  navigation.navigate('Your Bag');}}
                >
                    <Icon style={styles.IconMenu} name="shopping-bag" size={25} color="gray" />
                    <Text style={styles.TextMenu}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                  navigation.navigate('Login');}}
                >
                    <Icon style={styles.IconMenu} name="user-o" size={25} color="gray" />
                    <Text style={styles.TextMenu}>Me</Text>
                </TouchableOpacity>
            </View>
      </View>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Product List" component={ProductList} />
        <Stack.Screen name="WishList" component={Wishlist} />
        <Stack.Screen name="Your Bag" component={Bag} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
