import React from "react";
import Loading from "./Loading";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import API_KEY from "./keys";
import Weather from "./Weather";

export default class extends React.Component {
	state = {
		isLoading: true,
	};

	getWeather = async (lat, lon) => {
		const { data } = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
		);
		this.setState({
			isLoading: false,
			temp: Math.round(data.main.temp),
			condition: data.weather[0].main,
		});
	};

	getLocation = async () => {
		try {
			await Location.requestForegroundPermissionsAsync();

			const {
				coords: { latitude, longitude },
			} = await Location.getCurrentPositionAsync({
				acuracy: Location.Accuracy.BestForNavigation,
			});

			this.getWeather(latitude, longitude);
		} catch (error) {
			Alert.alert("Can't find location", "So sad");
		}
	};
	componentDidMount() {
		this.getLocation();
	}
	render() {
		const { isLoading, temp, condition } = this.state;
		return isLoading ? (
			<Loading />
		) : (
			<Weather condition={condition} temp={temp} />
		);
	}
}
