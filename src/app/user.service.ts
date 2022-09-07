import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getData(){
    return [
      'Ann',
      'Bon',
      'Clare',
      'Dylan'
      ];
  }
}
