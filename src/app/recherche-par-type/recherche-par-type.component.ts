import { Type } from '../model/type.model';
import { InstrumentService } from '../services/instrument.service';
import { Instrument } from './../model/instrument.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
})
export class RechercheParTypeComponent implements OnInit {
  instruments! : Instrument[];
  types! : Type[];
  selectedTypeId! : number ;
  constructor(private instrumentService : InstrumentService){ }

  ngOnInit(): void {
    this.types = this.instrumentService.listeTypes();
    this.instruments = this.instrumentService.listeInstruments();

  }

  onChange(): void {
    console.log("Selected Type ID:", this.selectedTypeId);
    if (this.selectedTypeId) {
      this.instruments = this.instrumentService.rechercherParType(this.selectedTypeId);
      console.log("Filtered Instruments:", this.instruments);

}
}
}
