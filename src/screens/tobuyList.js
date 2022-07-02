import React, { Component } from 'react';
import {
    ScrollView,
    SafeAreaView,
    TextInput,
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native'
import configs from '../utils/configs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchTextBox from '../ui_components/search_text_box';

class ToBuyList extends Component {
    state = {
        search_value: '',
        to_buy_data: [
            {
                id: 1,
                item_name: "Hair Spray",
            },
            {
                id: 2,
                item_name: "Lotion",
            },
            {
                id: 3,
                item_name: "Nature Pack"
            }
        ]
    }

    render() {
        return (
            <SafeAreaView style={styles.body}>
                {/* Search Bar component */}
                <View style={styles.search_component}>

                    {/* <TextInput
                        style={styles.search_text_box}
                        placeholder='Search'
                        value={this.state.search_value}
                        onChangeText={this.onHandleChangeSearchTextBox}
                    /> */}

                    <SearchTextBox search_value={this.state.search_value} onHandleChangeSearchTextBox={this.onHandleChangeSearchTextBox} />
                    <MaterialIcons name="add" size={40} onPress={this.addToBuyList} />

                </View>
                {/* Item List Component */}
                {/* <ScrollView> */}
                    {/* {
                        this.getFilterData(this.state.to_buy_data, this.state.search_value).map((value) => {
                            return <View key={value.id} style={{
                                padding: 10,
                                borderBottomWidth: 1,
                                // why do I use configs.grayColor? because we are developing this project with team, so with the help of configs.grayColor code, the project would be specfic design. 
                                borderBottomColor: configs.grayColor
                            }}>
                                <Text>{value.item_name}</Text>
                            </View>
                        })
                    } */}
                    {/* </ScrollView> */}
                    
                    <FlatList
                        data={this.getFilterData(this.state.to_buy_data, this.state.search_value)}
                        keyExtractor={item => item.id}
                        renderItem={({item})=>{
                            console.log(item)
                            return <View key={item.id} style={{
                                padding: 10,
                                borderBottomWidth: 1,
                                // why do I use configs.grayColor? because we are developing this project with team, so with the help of configs.grayColor code, the project would be specfic design. 
                                borderBottomColor: configs.grayColor
                            }}>
                                <Text>{item.item_name}</Text>
                            </View>
                        }}
                    />
                
            </SafeAreaView>
        )
    }

    // Adding new Random Item 
    addToBuyList = () => {
        var rdItemText = this.generateRandomText();
        this.setState({
            to_buy_data: [
                ...this.state.to_buy_data,
                {
                    id: this.state.to_buy_data.length + 1,
                    item_name: rdItemText,
                }
            ]
        })
    }

    // Retrieve data that matches the search value 
    getFilterData = (data, value) => {
        let filteredData = data.filter((item) => {
            // console.log(item.item_name.toLowerCase().includes(value))
            item_name = item.item_name.toLowerCase();
            return item_name.includes(value.toLowerCase());
        });

        return filteredData;
    }

    // catching the search value to the state of this component
    onHandleChangeSearchTextBox = (value) => {
        this.setState({
            search_value: value,
        });

    }

    // generate random item name 
    generateRandomText = () => {
        var result = '';
        var length = Math.floor((Math.random() * 10) + 1);
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    search_component: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: configs.grayColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search_text_box: {
        borderWidth: 1,
        borderColor: configs.grayColor,
        flex: 1,
        paddingHorizontal: 10,
    }
})

export default ToBuyList;