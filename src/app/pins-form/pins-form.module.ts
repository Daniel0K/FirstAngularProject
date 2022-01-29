import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinModule } from '../pin/pin.module';
import { PinsFormComponent } from './pins-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PinsFormComponent],
  imports: [CommonModule, PinModule, ReactiveFormsModule],
  exports: [PinsFormComponent],
})
export class PinsFormModule {}
