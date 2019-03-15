import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseurl: string="http://localhost:3000";

  constructor() { }
}
