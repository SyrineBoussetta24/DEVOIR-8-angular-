import { Instrument } from './model/instrument.model';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentsComponent } from './instruments/instruments.component';
import { AddInstrumentComponent } from './add-instrument/add-instrument.component';
import { UpdateInstrumentComponent } from './update-instrument/update-instrument.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { InstrumentGuard } from './instrument.guard';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
const routes: Routes = [
  {path: "instruments", component : InstrumentsComponent},
  {path: "add-instrument", component : AddInstrumentComponent, canActivate:[InstrumentGuard]},
  { path: "", redirectTo: "instruments", pathMatch: "full" },
  {path: "updateInstrument/:id", component: UpdateInstrumentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "rechercheParType", component : RechercheParTypeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
