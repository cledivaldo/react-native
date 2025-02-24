// src/screens/HomeScreen.tsx
import MyFloatingButton from "@/components/myFloatingButton.tsx/MyFloatingButton";
import LoginSection from "@/components/signIn/LoginSection";
import type { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, Text, View, useWindowDimensions } from "react-native";

// Defina os tipos das telas de navegação
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

// Tipando o parâmetro navigation
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { width, height } = useWindowDimensions(); // Atualiza dinamicamente os valores da tela
  return (
    <>
      <View
        style={{
          flex: 1,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
        }}
      >
        <Text>Welcome to Home Screen!</Text>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate("Login")}
        />
        <View
          style={{
            position: "relative",
            width: "80%",
            height: "20 %",
            backgroundColor: "#CFC142FF",
            margin:10,
            borderRadius: "6%"
          }}
        >
          <LoginSection height={height } width={width } />
        </View>
      </View>
      <MyFloatingButton
        position="bottomCenter"
        iconName="star"
        onPress={() => {console.log("skdfjlsjdf")}}
      />
    </>
  );
};

export default HomeScreen;
