import { Component, OnInit } from '@angular/core';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {

  constructor(public nav:NavService) { }

  ngOnInit(): void {
    this.nav.show();
    
  }

}
