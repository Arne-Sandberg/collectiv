import { Injectable } from '@angular/core';
import { Venue } from './venue.model';
import {venuelist} from './venue-list';

@Injectable()
export class VenueService {

  constructor() { }
  getVenues(){
    return venuelist;
  }
  getVenueById(venueId:number){
    for(var i = 0; i<= venuelist.length - 1; i++){
      if (venuelist[i].id === venueId){
        return venuelist[i];
      }
    }
  }
}
