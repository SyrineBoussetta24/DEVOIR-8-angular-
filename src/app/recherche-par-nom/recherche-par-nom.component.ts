import { InstrumentService } from './../services/instrument.service';
import { Instrument } from './../model/instrument.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent  {
  nomInstrument! : string;
  instruments! : Instrument[];
  searchTerm! : string ;
  constructor(){  }
  ngOnInit() : void {
  }
  rechercherInstrs(){
   /*  this.InstrumentService.rechercherParNom(this.nomInstrument).
subscribe(instrs => {
this.instruments = instrs;
console.log(instrs)}); */
  }
}
