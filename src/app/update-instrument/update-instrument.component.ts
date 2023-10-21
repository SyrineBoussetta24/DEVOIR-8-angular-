import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../services/instrument.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrument } from '../model/instrument.model';

@Component({
  selector: 'app-update-instrument',
  templateUrl: './update-instrument.component.html',
})
export class UpdateInstrumentComponent implements OnInit{
  currentInstrument= new Instrument();
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
          private instrumentService: InstrumentService) { }
ngOnInit() {
// console.log(this.route.snapshot.params.id);
this.currentInstrument = this.instrumentService.consulterInstrument(this.activatedRoute.snapshot. params['id']);
console.log(this.currentInstrument);
}
updateInstrument()
{ //console.log(this.currentInstrument);
this.instrumentService.updateInstrument(this.currentInstrument);
this.router.navigate(['instruments']);

}


}

