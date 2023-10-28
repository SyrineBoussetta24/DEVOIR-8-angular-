import { Component } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { InstrumentService } from '../services/instrument.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
})
export class AddInstrumentComponent {
  newInstrument = new Instrument();
  types! : Type[];
  newIdTyp! : number;
  newType! : Type;
  constructor(private instrumentService: InstrumentService,
    private activatedRoute: ActivatedRoute,
  private router :Router,)
   { }
   ngOnInit() :void {
    this.types = this.instrumentService.listeTypes();
    }
  addInstrument(){
    this.newType=this.instrumentService.consulterType(this.newIdTyp);
    this.newInstrument.type=this.newType;
    this.instrumentService.ajouterInstrument(this.newInstrument);
    this.router.navigate(['instruments']);
    }
}
