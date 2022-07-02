import React from 'react';
import { StyleSheet, TextInput, } from 'react-native';
import configs from '../utils/configs';

const SearchTextBox = (props) =>{
    return <TextInput
    style={styles.search_text_box}
    placeholder='Search'
    value={props.search_value}
    onChangeText={props.onHandleChangeSearchTextBox}
/>
}

const styles = StyleSheet.create({
    search_text_box: {
        borderWidth: 1,
        borderColor: configs.grayColor,
        flex: 1,
        paddingHorizontal: 10,
    }
})

export default SearchTextBox;