import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../services/instrument.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrument } from '../model/instrument.model';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-instrument',
  templateUrl: './update-instrument.component.html',
})
export class UpdateInstrumentComponent implements OnInit{
  currentInstrument= new Instrument();
  types! : Type[];
  updatedTypId! : number;
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
          private instrumentService: InstrumentService) { }
ngOnInit() {
// console.log(this.route.snapshot.params.id);
/* this.types=this.instrumentService.listeTypes();

this.currentInstrument = this.instrumentService.consulterInstrument(this.activatedRoute.snapshot. params['id']);
this.updatedTypId=this.currentInstrument.type.idTyp; */
this.instrumentService.listetypes().
subscribe(typs => {this.types = typs._embedded.types;
console.log(typs);
});


this.instrumentService.consulterInstrument(this.activatedRoute.snapshot.params['id']).
subscribe( instr =>{ this.currentInstrument = instr;
  this.updatedTypId =   this.currentInstrument?.type?.idTyp;

} ) ;
}
updateInstrument()
{ //console.log(this.currentInstrument);
  /* this.currentInstrument.type = this.instrumentService.consulterType(this.updatedTypId);

this.instrumentService.updateInstrument(this.currentInstrument);
this.router.navigate(['instruments']);
 */
this.currentInstrument.type = this.types.find(typ => typ.idTyp == this.updatedTypId)!;
this.instrumentService.updateInstrument(this.currentInstrument).subscribe(instr => {
this.router.navigate(['instruments']); }
);
}


}

