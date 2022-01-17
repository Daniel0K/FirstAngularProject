import { Injectable } from '@angular/core';

export interface Pin {
  id: number;
  x: number;
  y: number;
  name: string;
  address: string;
  desc: string;
  booked: bookings[];
}

export interface bookings {
  startDate: Date;
  endDate: Date;
}

@Injectable({
  providedIn: 'root'
})

export class TestActionsService {

  constructor() {

  }

  houses: Pin[]= [
    {id:0,y:885,x:150,name:'Россия',address:'Лучший',desc:'Самое топовое место в мире ',booked:[]},
    {id:1,y:797,x:300,name:'Саудовская Аравия',address:'Лучший',desc:'',booked:[]},
    {id:2,y:300,x:150,name:'Канада',address:'Лучший',desc:'',booked:[]},
    {id:3,y:1100,x:500,name:'Австралия',address:'Лучший',desc:'',booked:[]},
    {id:4,y:455,x:427,name:'Бразилия',address:'Лучший',desc:'',booked:[]},
    {id:5,y:453,x:601,name:'Мадагаскар',address:'Лучший',desc:'',booked:[]}
  ]
  activePin: Pin ={} as Pin;
  activeX:number = 999;
  activeY:number = 999;
  additionalHousesCookies: Pin[]= [];
  submittedBooking:bookings = {} as bookings;

  log(): void {
    console.log("test");
  }

  getCurrentHouses():Pin[] {
    return this.houses;
  }



  getActivePin():Pin {
    return this.activePin;
  }

  setActivePin(p:Pin) {
    this.activePin=p;
  }

  addPin(p:Pin) {
    this.houses.push(p);
    this.additionalHousesCookies.push(p);
    document.cookie = `pin=${JSON.stringify(this.additionalHousesCookies)}`
    //
    // console.log("TET")
    // console.log(this.additionalHousesCookies);
  }

  updatedCookies(): void {

  }



  addPinToCookie (p:Pin) {

  }

  getCookie(name: string) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  setCookie(name:string, value:string) {
    let updatedCookie:string =`${name}=${value}`;
    document.cookie = updatedCookie;
  }

  checkCrossings4DatesPeriod(currentBooking:bookings,existBookings:bookings[]): boolean {

    for (let i=0;i<existBookings.length;i++) {
      if (currentBooking.startDate <= existBookings[i].endDate && existBookings[i].startDate <= currentBooking.endDate) {
        return true;
        // console.log("пересекаются")
      }else {
        // console.log("не пересекаются")
        continue;
      }
    }
    return false;
    //
    //
    //
    //
    // console.log(StartDate1)
    // console.log(EndDate1)
    // console.log(StartDate2)
    // console.log(EndDate2)
  }


}
