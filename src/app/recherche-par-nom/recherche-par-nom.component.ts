import { InstrumentService } from './../services/instrument.service';
import { Instrument } from './../model/instrument.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent {
  nomInstrument!: string;
  searchTerm!: string ;
  allInstruments!: Instrument[];
  instruments!: Instrument[] ;

  constructor(private instrumentService: InstrumentService) {}

  ngOnInit(): void {
   // this.Instruments = this.instrumentService.listeInstruments();
     this.loadAllInstruments();
  }


  private loadAllInstruments(): void {
    this.instrumentService.listeInstrument().subscribe((instruments) => {
      this.instruments = instruments;
    });
  }

  rechercherInstrs(){
    this.instrumentService.rechercherParNom(this.nomInstrument).
    subscribe(instrs => {
      this.instruments=instrs;});
  }

  onKeyUp(filterText : string){
    this.instruments = this.allInstruments.filter(item =>
    item.nomInstrument!.toLowerCase().includes(filterText));
    }

}
