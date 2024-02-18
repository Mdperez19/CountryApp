import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, tap, map, catchError, of, delay} from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]>{
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(err => {
          console.log('Error: ', err);
          return of([])
        }),// Manejo de errores, of es un observable que emite un valor y luego se completa
        // Ejemplo de uso de tap y map
        /* tap(countries => console.log('paso por el tap ', countries)),
        map(countries => []),
        tap(countries => console.log('paso por el segundo tap ', countries)) */
        //delay(2000), // Simula un delay de 2 segundos
      );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiURL}/alpha/${code}`)
      .pipe(
        map((countries: Country[]) => countries.length > 0 ? countries[0] : null),
        catchError(err => {
          return of(null)
        }),
      );
  }

  searchCapital(term: string): Observable<Country[]>{
    const url = `${this.apiURL}/capital/${term}`;
    return this.getCountriesRequest(url);
  }

  searchCountry(term: string): Observable<Country[]>{
    const url = `${this.apiURL}/name/${term}`;
    return this.getCountriesRequest(url);
  }

  searchRegion(region: string): Observable<Country[]>{
    const url = `${this.apiURL}/region/${region}`;
    return this.getCountriesRequest(url);
  }

}
