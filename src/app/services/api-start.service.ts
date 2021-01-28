import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiStartService {

  constructor(private httpClient: HttpClient) {
  }
  public getAPI(): Observable<RootObject>{
    return this.httpClient.get<RootObject>('https://official-joke-api.appspot.com/jokes/general/random');
  }
  public getAPI1(): Observable<RootObject1>{
    return this.httpClient.get<RootObject1>('http://www.boredapi.com/api/activity?price');
  }
  public getAPI2(): Observable<RootObject2>{
    return this.httpClient.get<RootObject2>('http://localhost:8080/api/desktop/findByStatus');
  }

}

export interface RootObject {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}
export interface RootObject1 {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}
export interface DesktopList {
  id: number;
  name: string;
  status: string;
  preorder: string;
  condition: string;
}

export interface RootObject2 {
  desktopList: DesktopList[];
}





