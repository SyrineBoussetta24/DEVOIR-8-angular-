import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { AddInstrumentComponent } from './add-instrument/add-instrument.component';
import { FormsModule } from '@angular/forms';
import { UpdateInstrumentComponent } from './update-instrument/update-instrument.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentsComponent,
    AddInstrumentComponent,
    UpdateInstrumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
