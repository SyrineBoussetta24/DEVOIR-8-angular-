import { Injectable } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  instruments : Instrument[]; //un tableau d'instrument
  instrument! : Instrument;
  constructor (private router :Router,) {
    this.instruments = [
      { idInstrument : 1, nomInstrument : "Piano", prixInstrument: 3000.600, dateCreation: new Date("10/01/2022")},
      { idInstrument : 2, nomInstrument : "Violon", prixInstrument : 900, dateCreation : new Date("04/12/2023")},
      { idInstrument : 3, nomInstrument :"Oud", prixInstrument : 1200.000, dateCreation : new Date("02/20/2021")}
      ];

   }
  listeInstruments():Instrument[] {
    return this.instruments;
    }
  ajouterInstrument( inst: Instrument){
      this.instruments.push(inst);
      this.router.navigate(['instruments']);
    }
    supprimerInstrument( inst: Instrument){
      const index = this.instruments.indexOf(inst, 0);
      if (index > -1) {
      this.instruments.splice(index, 1);
      }
      //ou Bien
      /* this.instruments.forEach((cur, index) => {
      if(prod.idinstruments === cur.idinstruments) {
      this.instruments.splice(index, 1);
      }
      }); */
      }
      consulterInstrument(id:number): Instrument{
        this.instrument = this.instruments.find(i => i.idInstrument== id)!;
        return this.instrument;
        }

        updateInstrument(i:Instrument)
        {
            // console.log(i);
            this.supprimerInstrument(i);
            this.ajouterInstrument(i);
            this.trierInstruments();

        }
        trierInstruments(){
          this.instruments = this.instruments.sort((n1,n2) => {
          if (n1.idInstrument! > n2.idInstrument!) {
          return 1;
          }
          if (n1.idInstrument! < n2.idInstrument!) {
          return -1;
          }
          return 0;
          });
          }



}
