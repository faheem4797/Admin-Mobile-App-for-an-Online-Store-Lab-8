import React, { Componenet, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.first}>
      <TouchableOpacity
        style={styles.homebutton}
        onPress = {() => navigation.navigate("Products")}
      >
        <Text style={styles.homebuttontext}>Manage Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homebutton}
        onPress = {() => navigation.navigate("Employees")}
      >
        <Text style={styles.homebuttontext}>Manage Employees</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homebutton}
        onPress = {() => navigation.navigate("Orders")}
      >
        <Text style={styles.homebuttontext}>Manage Orders</Text>
      </TouchableOpacity>
    </View>
  );
}
const ManageProducts = ({navigation}) => {

  const [getProducts, setProducts] = useState([
    {name: "Sugar", price: 60, stock: 50},
    {name: "Rice", price: 120, stock: 79},
    {name: "Flour", price: 860, stock: 5},
    {name: "Eggs", price: 175, stock: 27},
    {name: "Milk", price: 110, stock: 10}
  ]);
  return (
    <View style={styles.first}>
      <ScrollView>
        <Text style={styles.newpageheading}>List of Products</Text>
        <View style={styles.productscrollview}>
          {getProducts.map((item) => 
            <TouchableOpacity 
              style={styles.scrollviewlist} 
              onPress = {() => navigation.navigate("ProductDetails", { name: item.name, price: item.price , stock: item.stock})}
            >
              {item.name}
            </TouchableOpacity>)}
        </View>
      </ScrollView>
    </View>
  );
}
const ManageEmployees = ({navigation}) => {
  const [getEmployees, setEmployees] = useState([
    {name: "Asghar", designation: "Manager", age: 50},
    {name: "Akbar", designation: "Engineer", age: 35},
    {name: "Faheem", designation: "Junior Engineer", age: 28},
    {name: "Zaeem", designation: "Office Boy", age: 23},
    {name: "Wasif", designation: "Peon", age: 34},
  ]);
  return (
    <View style={styles.first}>
      <ScrollView>
        <Text style={styles.newpageheading}>List of Employees</Text>
        <View style={styles.productscrollview}>
          {getEmployees.map((item) => 
            <TouchableOpacity 
              style={styles.scrollviewlist} 
              onPress = {() => navigation.navigate("EmployeeDetails", { name: item.name, designation: item.designation , age: item.age})}
            >
              {item.name}
            </TouchableOpacity>)}
        </View>
      </ScrollView>
    </View>
  );
}
const ManageOrders = ({navigation}) => {
  const [getOrders, setOrders] = useState([
    {orderNumber: Math.floor(Math.random() * 10000000), product: "Eggs", amount: 2500},
    {orderNumber: Math.floor(Math.random() * 10000000), product: "Rice", amount: 1956},
    {orderNumber: Math.floor(Math.random() * 10000000), product: "Milk", amount: 3482},
    {orderNumber: Math.floor(Math.random() * 10000000), product: "Flour", amount: 1874},
    {orderNumber: Math.floor(Math.random() * 10000000), product: "Sugar", amount: 9844},
  ]);
  return (
    <View style={styles.first}>
      <ScrollView>
        <Text style={styles.newpageheading}>List of Orders</Text>
        <View style={styles.productscrollview}>
          {getOrders.map((item) => 
            <TouchableOpacity 
              style={styles.scrollviewlist} 
              onPress = {() => navigation.navigate("OrderDetails", { orderNumber: item.orderNumber, product: item.product , amount: item.amount})}
            >
              {item.orderNumber}
            </TouchableOpacity>)}
        </View>
      </ScrollView>
    </View>
  );
}
const ProductPage = ({route}) => {
  return (
    <View style={styles.first}>
      <Text style={styles.newpageheading}>Product Details</Text>
      <Text style={{fontSize:18, fontWeight: 'bold', marginBottom: 5}}>   Name          Price           Stock</Text>
      <View>
      </View>
      <Text>{route.params.name}                   {route.params.price}                    {route.params.stock}</Text>
    </View>
  );
}
const EmployeePage = ({route}) => {
  return (
    <View style={styles.first}>
      <Text style={styles.newpageheading}>Employee Details</Text>
      <Text style={{fontSize:18, fontWeight: 'bold', marginBottom: 5}}>   Name          Designation           Age</Text>
      <View>
      </View>
      <Text>{route.params.name}                   {route.params.designation}                    {route.params.age}</Text>
    </View>
  );
}
const OrderPage = ({route}) => {
  return (
    <View style={styles.first}>
      <Text style={styles.newpageheading}>Employee Details</Text>
      <Text style={{fontSize:18, fontWeight: 'bold', marginBottom: 5}}>   Order Number          Product           Amount</Text>
      <View>
      </View>
      <Text>   {route.params.orderNumber}                             {route.params.product}                       {route.params.amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  first:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homebutton:{
    backgroundColor: "#4a46c7",
    padding: 10,
    margin: 25,
    borderRadius: 5,
    borderWidth: 3,
  },
  homebuttontext:{
    color: "#cabfff",
    fontWeight: "bold",
    fontSize: 25,
  },
  productscrollview:{
    
  },
  scrollviewlist:{
    padding: 15,
    paddingHorizontal: 115,
    marginBottom: 5,
    borderColor: '#425066',
    borderWidth: 1,
    backgroundColor: "#5380c9",
    fontSize: 18
  },
  newpageheading:{
    textAlign:'center', marginTop: 40, fontWeight: 'bold', fontSize: 30, marginBottom: 25
  }
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ManageProducts} />
        <Stack.Screen name="Employees" component={ManageEmployees} />
        <Stack.Screen name="Orders" component={ManageOrders} />
        <Stack.Screen name="ProductDetails" component={ProductPage} />
        <Stack.Screen name="EmployeeDetails" component={EmployeePage} />
        <Stack.Screen name="OrderDetails" component={OrderPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;