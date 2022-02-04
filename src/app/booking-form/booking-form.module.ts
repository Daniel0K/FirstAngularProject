import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinModule } from '../pin/pin.module';
import { BookingFormComponent } from './booking-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookingFormComponent],
  imports: [CommonModule, PinModule, ReactiveFormsModule],
  exports: [BookingFormComponent],
})
export class BookingFormModule {}
