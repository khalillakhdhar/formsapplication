import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  groupe=['Maher','Moayed','Sayf'];
  effectif=[
    {nom:"Lakhdhar",prenom:"Khalil",fonction:"directeur"},
    {nom:"Yaakoubi",prenom:"Mohamed",fonction:"développeur"},
    {nom:"Gmari",prenom:"Ines",fonction:"Consultante"},

  ]
}
