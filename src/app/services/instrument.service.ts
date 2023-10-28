import { Injectable } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { Router } from '@angular/router';
import { Type } from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  instruments : Instrument[]; //un tableau d'instrument
  instrument! : Instrument;
  types : Type[];
  constructor (private router :Router,) {
    this.types = [ {idTyp : 1, nomTyp : "instruments à cordes"},
{idTyp : 2, nomTyp : "instruments à vent"}, {idTyp : 3, nomTyp : "instruments à percussion"}];

    this.instruments = [
      { idInstrument : 1, nomInstrument : "Violon", prixInstrument: 3000.600, dateCreation: new Date("10/01/2022"),type:{idTyp :1,nomTyp:"instruments à cordes"}},
      { idInstrument : 2, nomInstrument : "Saxophones", prixInstrument : 900, dateCreation : new Date("04/12/2023"),type:{idTyp :2,nomTyp:"instruments à cordes"}},
      { idInstrument : 3, nomInstrument :"batterie", prixInstrument : 1200.000, dateCreation : new Date("02/20/2021"),type:{idTyp :3,nomTyp:"instruments à percussion"}}
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

          listeTypes():Type[] {
            return this.types;
            }
            consulterType(id:number): Type{
            return this.types.find(typ => typ.idTyp == id)!;
            }

}
