import { ExamesCreateComponent } from './components/exames/exames-create/exames-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ExamesCrudComponent} from './views/exames-crud/exames-crud.component';

const routes: Routes = [
  {
  path:"",
  component:HomeComponent,
},{
  path:"Exames",
  component:ExamesCrudComponent

},{
  path:"exames/create",
  component: ExamesCreateComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
