import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAdddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAdddTask = !this.showAdddTask;
    this.subject.next(this.showAdddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
