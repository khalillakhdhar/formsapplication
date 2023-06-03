export class Produit {
  titre!:string; /* ! => required */
  poid?:number /* ?=> not required */
  quantite=1;
  prix!:number /* ?=> not required */
  photo?:string
}
