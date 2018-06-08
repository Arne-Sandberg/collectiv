import { Injectable } from '@angular/core';
import { Venue } from './venue.model';
import {venuelist} from './venue-list';

@Injectable()
export class VenueService {

  constructor() { }
  getVenues(){
    return venuelist;
  }
}
