import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  col!: Collegue

  constructor() { }

  ngOnInit(): void {
  }

}
