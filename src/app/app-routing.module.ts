import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  { path: '',component:FirstComponent},
  {path: 'second',component:SecondComponent},
  {path:'form',component:ReactiveComponent},
  {path:'produit',component:ProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
