import { Injectable } from '@angular/core';
import { Pin } from '../models/pin';

@Injectable({
  providedIn: 'root',
})
export class PinsService {
  houses: Pin[] = [
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

  activePin: Pin = {} as Pin;
  activeX: number = 999;
  activeY: number = 999;
  additionalHousesCookies: Pin[] = [];

  getCurrentHouses(): Pin[] {
    this.houses.forEach((x) => {
      x.isActive = false;
    });
    return this.houses;
  }

  getActivePin(): Pin {
    return this.houses.find((x) => x.isActive);
  }

  setActivePin(p: Pin) {
    this.houses.find((x) => x.id === p.id).isActive = true;
    this.houses
      .filter((x) => x.id !== p.id)
      .forEach((x) => {
        x.isActive = false;
      });
  }

  addPin(p: Pin) {
    this.houses.push(p);
    this.additionalHousesCookies.push(p);
    document.cookie = `pin=${JSON.stringify(this.additionalHousesCookies)}`;
  }
}
