import { Injectable } from '@angular/core';
import { TurfSample } from './turf-sample';

@Injectable({
  providedIn: 'root'
})
export class TurfingService {

  protected turfSampleList: TurfSample [] = [
    {
      "id": 0,
      "name": "Summer-55",
      "oz": "55 Oz",
      "pileHeight":"pile height 1.25\"",
      "photo": "/assets/summer-55.jpg",
      "availableRolls": 20,
      "rollSize13": true,
      "rollSize15": false
      },
      {
        "id": 1,
        "name": "Ventura-75",
        "oz": "75 Oz",
        "pileHeight": "pile height 1.57\"",
        "photo": "/assets/ventura-75.jpg",
        "availableRolls": 44,
        "rollSize13": true,
        "rollSize15": false
      },
      {
        "id": 2,
        "name": "Malibu-85",
        "oz": "85 Oz",
        "pileHeight": "pile height 1.57\"",
        "photo": "/assets/malibu-85.jpg",
        "availableRolls": 64,
        "rollSize13": true,
        "rollSize15": true
      },
      {
        "id": 3,
        "name": "Sunrise-85",
        "oz": "85 Oz",
        "pileHeight": "pile height 1.77\"",
        "photo": "/assets/sunrise-85.jpg",
        "availableRolls": 58,
        "rollSize13": true,
        "rollSize15": true
      },
      {
        "id": 4,
        "name": "Oasis-92",
        "oz": "92 Oz",
        "pileHeight": "pile height 1.97\"",
        "photo": "/assets/oasis-92.jpg",
        "availableRolls": 33,
        "rollSize13": false,
        "rollSize15": true
      },
      {
        "id": 5,
        "name": "PalmSpring-102",
        "oz": "102 Oz",
        "pileHeight": "pile height 2\"",
        "photo": "/assets/palmSpring-102.jpg",
        "availableRolls": 42,
        "rollSize13": false,
        "rollSize15": true
      },
      {
        "id": 6,
        "name": "California-120",
        "oz": "120 Oz",
        "pileHeight": "pile height 2\"",
        "photo": "/assets/california-120.jpg",
        "availableRolls": 19,
        "rollSize13": false,
        "rollSize15": true
      },
      {
        "id": 7,
        "name": "PuttingGreen-73",
        "oz": "73 Oz",
        "pileHeight": "height .5\"",
        "photo": "/assets/putting-73.jpg",
        "availableRolls": 24,
        "rollSize13": true,
        "rollSize15": false
      },
      {
        "id": 8,
        "name": "Oakland",
        "oz": "80 Oz",
        "pileHeight": "1.60\"",
        "photo": "/assets/oakland-80.jpg",
        "availableRolls": 10,
        "rollSize13": true,
        "rollSize15": false
      },
      {
        "id": 9,
        "name": "Portland",
        "oz": "70 Oz",
        "pileHeight": "1.75\"",
        "photo": "/assets/portland-70.jpg",
        "availableRolls": 6,
        "rollSize13": true,
        "rollSize15": false
      }
  ];

  constructor() { }

  getAllTurfingSamples() : TurfSample[] {
    return this.turfSampleList;
  }

  getHousingLocationById(id: Number): TurfSample | undefined {
    return this.turfSampleList.find(turfSample => turfSample.id === id);
  }
  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
  }
}

