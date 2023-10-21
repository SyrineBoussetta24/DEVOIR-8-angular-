import { Component } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { InstrumentService } from '../services/instrument.service';

@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
})
export class AddInstrumentComponent {
  newInstrument = new Instrument();

  constructor(private instrumentService: InstrumentService) { }
  addInstrument(){
    //console.log(this.newInstrument);
    this.instrumentService.ajouterInstrument(this.newInstrument);
    }
}
