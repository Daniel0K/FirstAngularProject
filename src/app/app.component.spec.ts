import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Pin, TestActionsService} from "./services/test-actions.service";
import {AddHouseFormComponent} from "./add-house-form/add-house-form.component";
import {PinsComponent} from "./pins/pins.component";
import {PinsFormComponent} from "./pins-form/pins-form.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service:TestActionsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PinsComponent,
        AddHouseFormComponent,
        PinsFormComponent
      ], providers:[{ provide: TestActionsService }]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    service = fixture.debugElement.injector.get(TestActionsService);
    deleteAllCookies();
  });

  const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set active pin by value',()=> {
      let testPin:Pin = {} as Pin;
      testPin = {
          id:0,
          y:100,
          x:100,
          name:'Тестовандия',
          address:'Тестовый',
          desc:'Тестовая среда',
          booked:[]
        }
      component.onClickPin(testPin);
      expect(service.activePin).toBe(testPin);
  })

  it('should set active pin by value',()=> {
    let e:MouseEvent = new MouseEvent('mousemove',
      {clientX: 50, clientY: 150, buttons: 1})
    component.onClickMap(e);
    expect(service.activeX).toBe(50);
    expect(service.activeY).toBe(140);
  })

  it('should push new pins to service houses',()=> {
    document.cookie='pin=[{"id":6,"x":82,"y":675,"name":"sdfsdfs","address":"jhkjhkj","desc":"jkhjkhkjhk","booked":[]},{"id":7,"x":311,"y":84,"name":"sdfsdfs","address":"jhkjhkj","desc":"jkhjkhkjhk","booked":[]}]'
    component.checkPinCookies();
    expect(service.houses[6]).toBeTruthy();
    expect(service.houses[7]).toBeTruthy();
    deleteAllCookies();
  })

  it('should update houses at service from updatedCookies',()=> {
    document.cookie='updatedPins=[{"id":0,"y":885,"x":150,"name":"Не россия","address":"Лучший","desc":"Самое топовое место в мире ","booked":[{"startDate":"2021-12-27","endDate":"2021-12-28"}]},{"id":1,"y":797,"x":300,"name":"Саудовская Аравия","address":"Лучший","desc":"","booked":[]},{"id":2,"y":300,"x":150,"name":"Канада","address":"Лучший","desc":"","booked":[]},{"id":3,"y":1100,"x":500,"name":"Австралия","address":"Лучший","desc":"","booked":[]},{"id":4,"y":455,"x":427,"name":"Бразилия","address":"Лучший","desc":"","booked":[]},{"id":5,"y":453,"x":601,"name":"Мадагаскар","address":"Лучший","desc":"","booked":[]}]'
    component.checkUpdatedPinCookies();
    expect(service.houses[0].name).toBe('Не россия');
    //deleteAllCookies();
  })

});
