import { Component, OnInit } from '@angular/core';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public nav:NavService) { }

  ngOnInit(): void {
  this.nav.show();
 
  }

}
