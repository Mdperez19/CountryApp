import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, catchError,of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

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
    return this.http.get<Country[]>(`${this.apiURL}/capital/${term}`)
      .pipe(

        catchError(err => {
          console.log('Error: ', err);
          return of([])
        }), // Manejo de errores, of es un observable que emite un valor y luego se completa
        // Ejemplo de uso de tap y map
        /* tap(countries => console.log('paso por el tap ', countries)),
        map(countries => []),
        tap(countries => console.log('paso por el segundo tap ', countries)) */
      );
  }

  searchCountry(term: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/name/${term}`)
      .pipe(

        catchError(err => {
          console.log('Error: ', err);
          return of([])
        }),
      );
  }

  searchRegion(region: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiURL}/region/${region}`)
      .pipe(

        catchError(err => {
          console.log('Error: ', err);
          return of([])
        }),
      );
  }

}
