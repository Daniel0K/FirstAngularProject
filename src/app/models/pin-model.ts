import {bookings} from "./bookings-model";

export interface pin {
  id: number;
  x: number;
  y: number;
  name: string;
  address: string;
  desc: string;
  booked: bookings[];
}
