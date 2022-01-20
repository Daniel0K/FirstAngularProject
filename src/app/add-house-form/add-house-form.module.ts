import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHouseFormComponent } from './add-house-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddHouseFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AddHouseFormComponent],
})
export class AddHouseFormModule {}
