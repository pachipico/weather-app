import React from "react";
import Loading from "./Loading";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import API_KEY from "./keys";

export default class extends React.Component {
	state = {
		isLoading: true,
	};

	getWeather = async (lat, lon) => {
		const { data } = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
		);
		console.log(data);
	};

	getLocation = async () => {
		try {
			await Location.requestForegroundPermissionsAsync();

			const {
				coords: { latitude, longitude },
			} = await Location.getCurrentPositionAsync({
				acuracy: Location.Accuracy.BestForNavigation,
			});

			console.log(latitude, longitude);
			this.getWeather(latitude, longitude);
			await this.setState({ isLoading: false });
		} catch (error) {
			Alert.alert("Can't find location", "So sad");
		}
	};
	componentDidMount() {
		this.getLocation();
	}
	render() {
		const { isLoading } = this.state;
		return isLoading ? <Loading /> : null;
	}
}
