import { Component, OnInit } from '@angular/core';
import {ApiStartService, RootObject, RootObject1, RootObject2} from '../../services/api-start.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  name: string;
  rootObject: RootObject;
  rootObject1: RootObject1;
  rootObject2: RootObject2;
  result: string;
  constructor(private apiStartService: ApiStartService) {

  }

  ngOnInit(): void {
    this.apiStartService.getAPI().subscribe(value => {
      this.rootObject = value;
    });
    this.apiStartService.getAPI1().subscribe(value => {
      this.rootObject1 = value;
    });
    this.apiStartService.getAPI2().subscribe(value => {
      this.rootObject2 = value;
    });
  }

  check(value: number) {
    if (value >= 100){
      this.result = ' Może być. Podziękował';
    }
  else if (value < 100){
    this.result = 'Dobry żart..postaraj się bardziej';
    }

  }
}
