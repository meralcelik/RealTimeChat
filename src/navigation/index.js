import * as React from "react";
import {
  Alert,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { NavigationContainer,useNavigation } from "@react-navigation/native";
import { LogOutUser } from "../network";
import { clearAsyncStorage } from "../asyncStorage";
import {
  Login,
  SignUp,
  Dashboard,
  Splash,
  ShowFullImg,
  Chat,
  AcademicalPersonal,
  
} from "../container";
import { color } from "../utility";

function CustomDrawerContent(props) {
  const navigation = useNavigation(); 
  const logout = () => {
    LogOutUser()
      .then(() => {
        clearAsyncStorage()
          .then(() => {
            navigation.navigate("Login")
            //navigation.navigate('SignUp')

            console.log('girdi')
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => alert(err));
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() =>    Alert.alert(
              "Logout",
              "Are you sure to log out",
              [
                {
                  text: "Yes",
                  onPress: () => logout(),
                },
                {
                  text: "No",
                },
              ],
              { cancelable: false }
            )}  />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const DrawerStackScreen = () => {
  
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Acaddemic" component={AcademicalPersonal}  options={{ headerShown: true }} />
      <Drawer.Screen name="Mesaj" component={ChatStackScreen}  />
    </Drawer.Navigator>
  );
};
const ChatStack = createStackNavigator();
const ChatStackScreen = (props) => {
  return (
    <ChatStack.Navigator {...props}>
      <ChatStack.Screen
        name={"Dashboard"}
        component={Dashboard}
        options={{ headerShown: true }}
      />
      <ChatStack.Screen name={"ShowFullImg"} component={ShowFullImg} />
      <ChatStack.Screen name={"Chat"} component={Chat} />
      
    </ChatStack.Navigator>
  );
};
const AuthStack = createStackNavigator();
const AuthenticationStack = (props) => {
  console.log(props);
  return (
    <AuthStack.Navigator
      // initialRouteName="Splash"
      // screenOptions={{
      //   headerStyle: { backgroundColor: color.DARK_GRAY },
      //   headerTitleStyle: {
      //     fontWeight: "bold",
      //     fontSize: 20,
      //   },
      //   headerTintColor: color.WHITE,
      //   headerTitleAlign: "center",
      // }}
    >
      <AuthStack.Screen name={"Splash"} component={Splash} options={{ headerShown: false }} />
      <AuthStack.Screen name={"Login"} component={Login} options={{ headerShown: false }} />
      <AuthStack.Screen name={"SignUp"} component={SignUp} options={{ headerShown: false }}/>
      

    </AuthStack.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootStackScreen = (props) => {///if yazılacak
  return (
    <RootStack.Navigator headerMode="none" {...props}>
      <RootStack.Screen name="Splash" component={AuthenticationStack} />
      <RootStack.Screen name={"Dashboard"} component={DrawerStackScreen} />
    </RootStack.Navigator>
  );
};

const AnaNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default AnaNavigator;
