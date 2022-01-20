import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PinsComponent} from './pins.component';

@NgModule({
  declarations: [PinsComponent],
  imports: [CommonModule],
  exports: [PinsComponent],
  providers: [],
})
export class PinsModule {
}
