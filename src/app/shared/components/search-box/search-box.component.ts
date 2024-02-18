import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit{

  private debouncer: Subject<string> = new Subject<string>(); // Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.

  @Input()
  placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300), // The debounceTime operator is used to delay the values emitted by the source Observable for a specified time period, then emit the latest value from the source Observable.
        distinctUntilChanged() // The distinctUntilChanged operator is used to compare each value emitted by the source Observable with the previous value, and only emit if the current value is different from the last.
      )
      .subscribe( value => {
        this.onDebounce.emit(value);
      })
  }

  emitValue(value: string){
    this.onValue.emit(value);
  }

  // Debounce: is a technique used to improve the performance of a web application by delaying the execution of a function until the user has stopped typing.
  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }


}
