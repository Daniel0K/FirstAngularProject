import {Bookings} from "./bookings";

export interface Pin {
  id: number;
  x: number;
  y: number;
  name: string;
  address: string;
  desc: string;
  booked: Bookings[];
}
