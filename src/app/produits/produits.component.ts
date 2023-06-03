import { Component } from '@angular/core';
import { Produit } from '../classes/produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
  produit=new Produit();
  produits:Produit[]=[];
ajout()
{
this.produits.push(this.produit);
console.log('liste',this.produits)
this.produit=new Produit();

}
}
