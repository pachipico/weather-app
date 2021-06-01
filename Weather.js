import React from "react";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
	Thunderstorm: {
		iconName: "weather-lightning",
		color: ["#434343", "#000000"],
		title: "Lightning Everywhere!",
		subTitle: "Look Out!",
	},
	Drizzle: {
		iconName: "weather-rainy",
		color: ["#928DAB", "#00d2ff"],
		title: "It's Drizzling...",
		subTitle: "Let's Just Stay Home",
	},
	Rain: {
		iconName: "weather-pouring",
		color: ["#292E49", "#536976", "#BBD2C5"],
		title: "It's Raining...",
		subTitle: "I Hate Rain...",
	},
	Snow: {
		iconName: "weather-snowy-heavy",
		color: ["#EAEAEA", "#DBDBDB", "#F2F2F2", "#ADA996"],
		title: "It's Snowing...",
		subTitle: "Use Metro, Not Bus.",
	},
	Clear: {
		iconName: "weather-sunny",
		color: ["#B2FEFA", "#0ED2F7"],
		title: "Let's Go Out!",
		subTitle: "Feels Good!",
	},
	Clouds: {
		iconName: "weather-cloudy",
		color: ["#3E5151", "#DECBA4"],
		title: "It's Cloudy..",
		subTitle: "Nah, I Don't Care.",
	},
	Fog: {
		iconName: "weather-fog",
		color: ["#636363", "#a2ab58"],
		title: "Foggggggy",
		subTitle: "Watch Your Steps!",
	},
};

function Weather({ temp, condition }) {
	return (
		<LinearGradient
			colors={weatherOptions[condition].color}
			style={styles.container}
		>
			<StatusBar barStyle='light-content' />
			<View style={styles.containerInside}>
				<MaterialCommunityIcons
					name={weatherOptions[condition].iconName}
					size={96}
					color='white'
				/>
				<Text style={styles.temp}>{temp}º</Text>
			</View>
			<View style={styles.containerInside}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subTitle}>
					{weatherOptions[condition].subTitle}
				</Text>
				<Button onPress title='Button' />
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	temp: {
		fontSize: 42,
		color: "white",
	},
	containerInside: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	title: {
		color: "white",
		fontWeight: "300",
		fontSize: 40,
	},
	subTitle: {
		color: "white",
		fontSize: 25,
	},
});

export default Weather;
