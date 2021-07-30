import { Component, Input, OnInit, Output } from '@angular/core';
import collegueMock from '../mock/collegues.mock';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col!: Collegue;

  constructor() { }

  ngOnInit(): void{
    
    this.col = collegueMock;
  }

  modify() {
    console.log("click click click modification collègue");
  }

  newCollegue() {
    console.log("Un collègue va être créer !")
  }

}
