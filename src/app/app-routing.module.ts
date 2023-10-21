import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentsComponent } from './instruments/instruments.component';
import { AddInstrumentComponent } from './add-instrument/add-instrument.component';
import { UpdateInstrumentComponent } from './update-instrument/update-instrument.component';
const routes: Routes = [
  {path: "instruments", component : InstrumentsComponent},
  {path: "add-instrument", component : AddInstrumentComponent},
  { path: "", redirectTo: "instruments", pathMatch: "full" },
  {path: "updateInstrument/:id", component: UpdateInstrumentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
