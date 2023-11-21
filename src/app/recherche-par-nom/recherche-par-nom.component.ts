import { InstrumentService } from './../services/instrument.service';
import { Instrument } from './../model/instrument.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent {
  nomInstrument!: string;
  searchTerm: string = '';
  allInstruments: Instrument[] = [];
  Instruments: Instrument[] = [];


  constructor(private instrumentService: InstrumentService) {}

  ngOnInit(): void {
    this.Instruments = this.instrumentService.listeInstruments();
  }


}
