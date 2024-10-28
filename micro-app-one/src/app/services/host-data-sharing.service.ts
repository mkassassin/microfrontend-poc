import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HostDataSharingService {
  private accountDataSubject = new Subject<any>();
  data$ = this.accountDataSubject.asObservable();

  constructor() {}

  setAccountData(data: any) {
    this.accountDataSubject.next(data);
  }
}
