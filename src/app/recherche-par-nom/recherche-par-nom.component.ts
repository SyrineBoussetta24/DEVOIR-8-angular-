import { InstrumentService } from './../services/instrument.service';
import { Instrument } from './../model/instrument.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent {
  nomInstrument!: string;
  instruments: Instrument[] = [];
  searchTerm!: string;
  allInstruments: Instrument[] = [];

  constructor(private instrumentService: InstrumentService) {}

  ngOnInit(): void {
    this.allInstruments=this.instrumentService.listeInstruments() ;
     }

  rechercherInstrs() {
    this.allInstruments=this.instrumentService.rechercherParNom(this.nomInstrument);
  }

  onKeyUp(filterText: string) {
    this.instruments = this.allInstruments.filter(item =>
      item.nomInstrument!.toLowerCase().includes(filterText)
    );
  }
}
