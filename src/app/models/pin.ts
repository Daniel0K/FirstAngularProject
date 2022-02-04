import { Bookings } from './bookings';

export interface Pin {
  id: number;
  x: number;
  booked: Bookings[];
  isActive?: boolean;
  isPreDefined?: boolean;
  y: number;
  name: string;
  address: string;
  desc: string;
}
