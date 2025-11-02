export interface User {
  id: number;
  name: string;
  location: {
    lat: number;
    lon: number;
  };
  interests: string[];
}
