import { Component } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { InstrumentService } from '../services/instrument.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html'})
export class InstrumentsComponent  {
  instruments? : Instrument[]; //un tableau d'instrument
  apiurl:string='http://localhost:8081/instruments/api';
  constructor(private instrumentService: InstrumentService,
    public authService: AuthService){
   // this.instruments = instrumentService.listeInstruments();
   this.chargerInstruments();
  }
  /* chargerInstruments() {
    this.instrumentService.listeInstrument().subscribe(instrs => {
        this.instruments = instrs;

        this.instruments.forEach((instr) => {
            console.log(instr); // Log the instrument object

            if (instr.image) {
                console.log('Image found:', instr.image); // Log the image object
                instr.imageStr = 'data:' + instr.image.type + ';base64,' + instr.image.image;
                if (instr.image.type && instr.image.image) {
                }
            }
        });
    });
} */
    chargerInstruments(){
      this.instrumentService.listeInstrument().subscribe(instrs => {
      this.instruments = instrs;
      });
      }

   supprimerInstrument( i: Instrument)
{
    //console.log(i);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.instrumentService.supprimerInstrument(i.idInstrument!).subscribe(() => {
      console.log("instrument supprimé");
      this.chargerInstruments();
      });   ;
}

}
