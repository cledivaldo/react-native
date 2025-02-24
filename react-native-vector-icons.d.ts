declare module "react-native-vector-icons/Ionicons" {
	import { Component } from "react";
	import type { TextProps, StyleProp, TextStyle } from "react-native";

	export interface IconProps extends TextProps {
		name: string;
		size?: number;
		color?: string;
		style?: StyleProp<TextStyle>;
	}

	export default class Ionicons extends Component<IconProps> {}
}