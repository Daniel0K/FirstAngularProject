import {Injectable} from "@angular/core";
import {bookings, TestActionsService} from "./test-actions.service";
import {generate} from "rxjs";
import {jest} from '@jest/globals'

describe('test-actions-service', () => {
  let service: TestActionsService;
  let fakePin = {
    id:0,
    y:100,
    x:100,
    name:'Тестовандия',
    address:'Тестовый',
    desc:'Тестовая среда',
    booked:[]
  }
  beforeEach( () => {service = new TestActionsService();})

  it ('should will houses be increased to one more', () => {
    let defaultLenght:number = service.houses.length;
    service.addPin(fakePin);
    expect(service.houses.length).toBe(defaultLenght+1);
  })

  it ('should return false if doesnt crossing', () => {
    let newBooking = {} as bookings;
    let prevBookings = [];
    let tempBook = {} as bookings;

    newBooking.startDate = new Date(2021,5,21);
    newBooking.endDate = new Date(2021,5,22);
    tempBook.startDate = new Date(2021,5,25);
    tempBook.endDate = new Date(2021,5,26);
    prevBookings.push(tempBook);
    tempBook.startDate = new Date(2021,5,27);
    tempBook.endDate = new Date(2021,5,28);
    prevBookings.push(tempBook);
    expect(service.checkCrossings4DatesPeriod(newBooking,prevBookings)).toBeFalsy();
  })

  it ('should return true if crossing', () => {
    let newBooking = {} as bookings;
    let prevBookings = [];
    let tempBook = {} as bookings;

    newBooking.startDate = new Date(2021,5,20);
    newBooking.endDate = new Date(2021,5,28);

    tempBook.startDate = new Date(2021,5,25);
    tempBook.endDate = new Date(2021,5,26);
    prevBookings.push(tempBook);

    tempBook.startDate = new Date(2021,5,27);
    tempBook.endDate = new Date(2021,5,28);
    prevBookings.push(tempBook);

    expect(service.checkCrossings4DatesPeriod(newBooking,prevBookings)).toBeTruthy();
    // console.log(newBooking)
    // console.log(prevBookings)
  })

  // it('should be getcookie', () => {
  //
  //   const spy = jest.spyOn(service,'getCookie').mockReturnValue(undefined);
  //
  //   let test = service.getCookie('pin');
  //   expect(spy).toHaveBeenCalled();
  //   // expect(test).toBeTruthy();
  // })
  // it ('should became on 1 more', () => {
  //   let de = service.getActivePin();
  // })

  it('should return activepin',()=> {

  })

})
