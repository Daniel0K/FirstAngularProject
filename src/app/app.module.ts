import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { AddHouseFormModule } from './add-house-form/add-house-form.module';
import { BookingFormModule } from './booking-form/booking-form.module';
import { PinModule } from './pin/pin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CookieModule.forRoot(),
    AddHouseFormModule,
    BookingFormModule,
    PinModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
