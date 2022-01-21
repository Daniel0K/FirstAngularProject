import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinsModule } from '../pins/pins.module';
import { PinsFormComponent } from './pins-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PinsFormComponent],
  imports: [CommonModule, PinsModule, ReactiveFormsModule],
  exports: [PinsFormComponent],
})
export class PinsFormModule {}
