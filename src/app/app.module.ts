import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './nav/nav.component';
import {MatInputModule} from '@angular/material/input';

import {MatMenuModule} from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { CoursComponent } from './cours/cours.component';
import { FooterComponent } from './footer/footer.component';
import { ListcoursComponent } from './listcours/listcours.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { VoirplusComponent } from './voirplus/voirplus.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    LoginComponent,
    CoursComponent,
    FooterComponent,
    ListcoursComponent,
    EnseignantsComponent,
    VoirplusComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
