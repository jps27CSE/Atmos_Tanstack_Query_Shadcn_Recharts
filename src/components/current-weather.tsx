import { GeocodingResponse, WeatherData } from "@/api/types.ts";

interface CurrentWeatherProps {
  data: WeatherData;
  locationName?: GeocodingResponse;
}

const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
  return <div>CurrentWeather</div>;
};
export default CurrentWeather;
