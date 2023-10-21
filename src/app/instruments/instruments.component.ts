import { Component } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { InstrumentService } from '../services/instrument.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html'})
export class InstrumentsComponent  {
  instruments : Instrument[]; //un tableau d'instrument

  constructor(private instrumentService: InstrumentService){
    this.instruments = instrumentService.listeInstruments();
  }

  supprimerInstrument( i: Instrument)
{
    //console.log(i);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.instrumentService.supprimerInstrument(i);
}

}
