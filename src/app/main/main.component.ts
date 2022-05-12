import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Cours } from '../Models/cours';
import { ApisService } from '../service/apis.service';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listCours!: Cours  ;
  constructor(public nav:NavService,public apisService:ApisService) { }

  ngOnInit(): void {
  this.nav.show();
 this.apisService.getCours()
      .subscribe(data => this.listCours = data);
      
      console.log(this.listCours.duree)
  }

}
