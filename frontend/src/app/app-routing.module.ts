import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamesCreateComponent } from './components/exames/exames-create/exames-create.component';
import { ExamesCrudComponent } from './views/exames-crud/exames-crud.component';
import { HomeComponent } from './views/home/home.component';

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
