// MyFloatingButton.tsx
import type React from "react";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type ViewStyle,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; 

interface MyFloatingButtonProps {
  position:
    | "topLeft"
    | "topRight"
    | "topCenter"
    | "bottomLeft"
    | "bottomRight"
    | "bottomCenter"
    | "middleLeft"
    | "middleRight"
    | "middleCenter";
  size?: number;
  borderRadius?: number;
  onPress: () => void;  
  textColor?: string;
  backgroundColor?: string;
  iconName: string; // Agora o nome do ícone será passado como uma propriedade
  iconColor?: string; // A cor do ícone pode ser definida aqui
}

const MyFloatingButton: React.FC<MyFloatingButtonProps> = ({
  position,
  borderRadius = 50,
  size = 28,
  onPress,
  textColor = "#FFF",
  backgroundColor = "#6200EE",
  iconName,
  iconColor = "#FFF", // Cor padrão do ícone
}) => {
  

  const getPositionStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      position: "absolute",
      zIndex: 1000,
    };

    switch (position) {
      case "topLeft":
        return { ...baseStyle, top: 20, left: 20 };
      case "topRight":
        return { ...baseStyle, top: 20, right: 20 };
      case "topCenter":
        return {
          ...baseStyle,
          top: 20,
          left: "50%",
          transform: [{ translateX: -size }],
        };
      case "bottomLeft":
        return { ...baseStyle, bottom: 20, left: 20 };
      case "bottomRight":
        return { ...baseStyle, bottom: 20, right: 20 };
      case "bottomCenter":
        return {
          ...baseStyle,
          bottom: 20,
          left: "50%",
          transform: [{ translateX: -size  }],
        };
      case "middleLeft":
        return {
          ...baseStyle,
          top: "50%",
          left: 20,
          transform: [{ translateY: -size }],
        };
      case "middleRight":
        return {
          ...baseStyle,
          top: "50%",
          right: 20,
          transform: [{ translateY: -size }],
        };
      case "middleCenter":
        return {
          ...baseStyle,
          top: "50%",
          left: "50%",
          transform: [
            { translateX: (-size ) as number },
            { translateY: (-size ) as number },
          ],
        };
      default:
        return baseStyle;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getPositionStyle(),
        {
          width: size * 1.8,
          height:size * 1.8,
          borderRadius: size,
          backgroundColor: backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      <Ionicons
        name={iconName} // Nome do ícone
        size={size * 0.8 } // Tamanho do ícone
        color={iconColor} // Cor do ícone
        style={{justifyContent:"center", alignItems:"center",}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 11,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});

export default MyFloatingButton;
