import {Component, Input, OnInit} from '@angular/core';
import {bookings, Pin, TestActionsService} from "../services/test-actions.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Conditional} from "@angular/compiler";
// import {MyValidators} from "../services/myValidators";

@Component({
  selector: 'app-pins-form',
  templateUrl: './pins-form.component.html',
  styleUrls: ['./pins-form.component.scss']
})
export class PinsFormComponent implements OnInit {
  @Input() housesData!: Pin
  activePin:Pin = {} as Pin;

  form: FormGroup;
  constructor(private TestActionsService: TestActionsService) {
    this.form = new FormGroup({
      startDate: new FormControl('',[Validators.required]),
      endDate: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    // this.TestActionsService.checkCrossings4DatesPeriod(new Date(2021,0,1),new Date(2021,0,10),new Date(2021,0,8),new Date(2021,0,19));
  }

  ngOnChanges () {
  }

  ngDoCheck() {
    this.activePin = this.TestActionsService.getActivePin();
  }

  submit() {
    this.TestActionsService.submittedBooking = {startDate:this.form.value['startDate'],endDate:this.form.value['endDate']};
    if (this.TestActionsService.checkCrossings4DatesPeriod(this.TestActionsService.submittedBooking,this.TestActionsService.houses[this.TestActionsService.activePin.id].booked)) {
        console.log("Бронирование пересекается");
    } else {
      this.TestActionsService.houses[this.TestActionsService.activePin.id].booked.push(this.TestActionsService.submittedBooking);
      this.TestActionsService.setCookie("updatedPins","");
      document.cookie = `updatedPins=${JSON.stringify(this.TestActionsService.houses)}`
      console.log("Бронирование не пересекается");
    }

    console.log(this.TestActionsService.houses[this.TestActionsService.activePin.id].booked)


    //
    // this.checkCrossings4DatesPeriod(this.submittedBooking,this.TestActionsService.houses[this.TestActionsService.activePin.id].booked);
    // this.TestActionsService.houses[this.TestActionsService.activePin.id].booked.push(this.submittedBooking);

  }
}
