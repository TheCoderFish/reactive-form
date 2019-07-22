import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyInternService {

  interns = [{
    name: 'Nurali Hasan Khoja',
    qualification: 'BE Electronics',
    experience: true,
    experienceDetails: {
      company: 'Cognizant',
      years: 1
    },
    domain: 'Angular'
  },
  {
    name: 'Kalrav Shah',
    qualification: 'BE IT',
    experience: false,
    experienceDetails: {
      company: '',
      years: null
    },
    domain: 'Angular'
  }];

  getDummyIntern() {
    return of(this.interns[Math.floor(Math.random() * this.interns.length)]);
  }

  constructor() { }
}
