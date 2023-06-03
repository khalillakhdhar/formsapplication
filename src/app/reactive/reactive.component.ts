import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  nom="";
  prenom="";
  age=20;
  message="";
  evaluate() {
    if(this.age>=18)
    this.message="majeur"
    else
    this.message="mineur"
  }
}
