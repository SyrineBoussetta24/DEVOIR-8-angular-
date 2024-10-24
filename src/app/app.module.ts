import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { AddInstrumentComponent } from './add-instrument/add-instrument.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateInstrumentComponent } from './update-instrument/update-instrument.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    InstrumentsComponent,
    AddInstrumentComponent,
    UpdateInstrumentComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParTypeComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeTypesComponent,
    UpdateTypeComponent,
    RegisterComponent,
    VerifEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  // providers: [ AuthService,],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
     ],

  bootstrap: [AppComponent]
})
export class AppModule { }
