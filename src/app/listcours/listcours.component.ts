import { Component, OnInit } from '@angular/core';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-listcours',
  templateUrl: './listcours.component.html',
  styleUrls: ['./listcours.component.css']
})
export class ListcoursComponent implements OnInit {


  constructor(public nav:NavService) { }

  ngOnInit(): void {
    this.nav.show()
  }

}
