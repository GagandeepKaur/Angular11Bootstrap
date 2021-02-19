import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "contact-create", component: ContactCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
