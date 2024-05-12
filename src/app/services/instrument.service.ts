import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Instrument } from '../model/instrument.model';
import { Type } from '../model/type.model';
import { TypeWrapper } from '../model/typeWrapped.model';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class InstrumentService {


  apiURLTyp: string = 'http://localhost:8081/instruments/typ';
  apiURL: string = 'http://localhost:8081/instruments/api';

  instruments! : Instrument[]; //un tableau de produits
  //types : Type[];
  constructor(private http : HttpClient,
              private authService : AuthService) {

    /* this.types = [{ idTyp: 1, nomTyp: "instruments à cordes" },
    { idTyp: 2, nomTyp: "instruments à vent" }, { idTyp: 3, nomTyp: "instruments à percussion" }];

    this.instruments = [
      { idInstrument: 1, nomInstrument: "Violon", prixInstrument: 3000.600, dateCreation: new Date("10/01/2022"), type: { idTyp: 1, nomTyp: "instruments à cordes" } },
      { idInstrument: 2, nomInstrument: "Saxophones", prixInstrument: 900, dateCreation: new Date("04/12/2023"), type: { idTyp: 2, nomTyp: "instruments à cordes" } },
      { idInstrument: 3, nomInstrument: "batterie", prixInstrument: 1200.000, dateCreation: new Date("02/20/2021"), type: { idTyp: 3, nomTyp: "instruments à percussion" } }
    ];
                    */

  }

  listeInstrument(): Observable<Instrument[]>{

     return this.http.get<Instrument[]>(this.apiURL+"/all");

    }

     ajouterInstrument( intr: Instrument):Observable<Instrument>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.post<Instrument>(this.apiURL+"/addintr", intr, {headers:httpHeaders});
      }


   
  supprimerInstrument(id : number) {
       const url = `${this.apiURL}/delintr/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.delete(url,  {headers:httpHeaders});
        }

   consulterInstrument(id: number): Observable<Instrument> {
          const url = `${this.apiURL}/getbyid/${id}`;
          console.log(url);
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<Instrument>(url,{headers:httpHeaders});
          }

    updateInstrument(intr :Instrument) : Observable<Instrument>    {
       console.log("intr "+intr);
        console.log(intr.type);
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.put<Instrument>(this.apiURL+"/updateintr", intr, {headers:httpHeaders});
          }



       listetypes():Observable<TypeWrapper>{
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return  this.http.get<TypeWrapper>(this.apiURLTyp,{headers:httpHeaders});

            }

      rechercherParType(idTyp: number): Observable<Instrument[]> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
          const url = `${this.apiURL}/intrstyp/${idTyp}`;
          return this.http.get<Instrument[]>(url,{headers:httpHeaders});
         }

  rechercherParNom(nom: string):Observable< Instrument[]> {
    const url = `${this.apiURL}/intrsByName/${nom}`;
    return this.http.get<Instrument[]>(url);
    }

    ajouterType( typ: Type):Observable<Type>{
      return this.http.post<Type>(this.apiURLTyp, typ, httpOptions);
      }



}
