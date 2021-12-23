import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PinsModule} from "../pins/pins.module";
import {PinsComponent} from "../pins/pins.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PinsModule
  ],
  exports: []
})
export class PinsFormModule {

}
