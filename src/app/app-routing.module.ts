import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  { path: '',component:FirstComponent},
  {path: 'second',component:SecondComponent},
  {path:'form',component:ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
