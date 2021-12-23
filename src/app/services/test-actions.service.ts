import { Injectable } from '@angular/core';

export interface Pin {
  id: number;
  x: number;
  y: number;
  name: string;
  address: string;
  desc: string;
}

@Injectable({
  providedIn: 'root'
})

export class TestActionsService {
  houses: Pin[]= [
    {id:0,y:885,x:150,name:'Россия',address:'Лучший',desc:'Самое топовое место в мире '},
    {id:1,y:797,x:300,name:'Саудовская Аравия',address:'Лучший',desc:''},
    {id:2,y:300,x:150,name:'Канада',address:'Лучший',desc:''},
    {id:3,y:1100,x:500,name:'Австралия',address:'Лучший',desc:''},
    {id:4,y:455,x:427,name:'Бразилия',address:'Лучший',desc:''},
    {id:5,y:453,x:601,name:'Мадагаскар',address:'Лучший',desc:''}
  ]
  activePin: Pin ={} as Pin;
  activeX:number = 999;
  activeY:number = 999;

  log(): void {
    console.log("test");
  }

  getActivePin():Pin {
    return this.activePin;
  }

  setActivePin(p:Pin) {
    this.activePin=p;
  }

  addPin(p:Pin) {
    this.houses.push(p);
    this.setCookie(`pin{$p.id}`,JSON.stringify(p));


  }

  getCookie(name: string) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  setCookie(name:string, value:string) {
    let updatedCookie:string =`${name}:${value}`;
    document.cookie = updatedCookie;
  }

  constructor() {

  }

}
