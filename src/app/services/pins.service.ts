import { Injectable } from '@angular/core';
import {pin} from "../models/pin-model";
import {bookings} from "../models/bookings-model";

@Injectable({
  providedIn: 'root',
})
export class PinsService {

  houses: pin[] = [
    {
      id: 0,
      y: 885,
      x: 150,
      name: 'Россия',
      address: 'Лучший',
      desc: 'Самое топовое место в мире ',
      booked: [],
    },
    {
      id: 1,
      y: 797,
      x: 300,
      name: 'Саудовская Аравия',
      address: 'Лучший',
      desc: '',
      booked: [],
    },
    {
      id: 2,
      y: 300,
      x: 150,
      name: 'Канада',
      address: 'Лучший',
      desc: '',
      booked: [],
    },
    {
      id: 3,
      y: 1100,
      x: 500,
      name: 'Австралия',
      address: 'Лучший',
      desc: '',
      booked: [],
    },
    {
      id: 4,
      y: 455,
      x: 427,
      name: 'Бразилия',
      address: 'Лучший',
      desc: '',
      booked: [],
    },
    {
      id: 5,
      y: 453,
      x: 601,
      name: 'Мадагаскар',
      address: 'Лучший',
      desc: '',
      booked: [],
    },
  ];

  activePin: pin = {} as pin;
  activeX: number = 999;
  activeY: number = 999;
  additionalHousesCookies: pin[] = [];
  submittedBooking: bookings = {} as bookings;

  getCurrentHouses(): pin[] {
    return this.houses;
  }

  getActivePin(): pin {
    return this.activePin;
  }

  setActivePin(p: pin) {
    this.activePin = p;
  }

  addPin(p: pin) {
    this.houses.push(p);
    this.additionalHousesCookies.push(p);
    document.cookie = `pin=${JSON.stringify(this.additionalHousesCookies)}`;
  }
}
