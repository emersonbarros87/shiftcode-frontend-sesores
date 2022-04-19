export class SensorRequest {
  id: number;
  status: string;
  date: string;
  weather: string;
  volume: number;
  alert: string;
  address:  string;
  district: string;
  cep: number
}

export class HeaderData {
  routeUrl: string;
}
