import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  Platform,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import FlatListExample from '../../component/FlatListExample/index';
import HeaderButton from '../../component/HeaderButton/index';


const AcademicalPersonal = props => {

  return (
    <FlatListExample/>
  );
};

AcademicalPersonal.navigationOptions = navData => {
  return {
   
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AcademicalPersonal;