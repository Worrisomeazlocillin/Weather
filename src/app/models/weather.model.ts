export interface Weather {
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
}

export interface ForecastItem {
  dt_txt: string;
  main: Main;
  weather: Weather[];
}

export interface Forecast {
  list: ForecastItem[];
}
