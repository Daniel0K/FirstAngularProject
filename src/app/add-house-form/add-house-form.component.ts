import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {TestActionsService, Pin} from "../services/test-actions.service";

@Component({
  selector: 'app-add-house-form',
  templateUrl: './add-house-form.component.html',
  styleUrls: ['./add-house-form.component.scss']
})
export class AddHouseFormComponent implements OnInit {

  form:FormGroup;
  addHousePin:Pin = {} as Pin;



  constructor(private TestActionsService: TestActionsService) {
    this.form = new FormGroup({
    country: new FormControl('',[Validators.minLength(6),Validators.required]),
    street: new FormControl('',[Validators.minLength(6),Validators.required]),
    desc: new FormControl('',[Validators.minLength(6),Validators.required])
    })
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form)
    console.log(this.form.value['country'])
    console.log(this.TestActionsService.activeX + "TESTTEST")
    this.addHousePin = {id:this.TestActionsService.houses.length-1, x:this.TestActionsService.activeY, y:this.TestActionsService.activeX,name:this.form.value['country'],address:this.form.value['street'],desc:this.form.value['desc']}
    this.TestActionsService.addPin(this.addHousePin);


  }
}
