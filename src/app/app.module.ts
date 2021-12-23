import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MapComponent} from "./Map/map.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PinsComponent } from './pins/pins.component';
import { PinsFormComponent } from './pins-form/pins-form.component';
import { AddHouseFormComponent } from './add-house-form/add-house-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CookieModule } from 'ngx-cookie';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    FooterComponent,
    PinsComponent,
    PinsFormComponent,
    AddHouseFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CookieModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
