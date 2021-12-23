import {Component, Input, OnInit} from '@angular/core';
import {Pin, TestActionsService} from "../services/test-actions.service";

@Component({
  selector: 'app-pins-form',
  templateUrl: './pins-form.component.html',
  styleUrls: ['./pins-form.component.scss']
})
export class PinsFormComponent implements OnInit {
  @Input() housesData!: Pin
  constructor(public TestActionsService: TestActionsService) {

  }

  ngOnInit(): void {

  }



}
