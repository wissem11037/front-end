import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { ListcoursComponent } from './listcours/listcours.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{path: 'main', component: MainComponent},
                        {path: '', component: MainComponent},
                        {path: 'cours', component: ListcoursComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'enseignants', component: EnseignantsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
