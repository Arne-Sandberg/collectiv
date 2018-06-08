import { Component, OnInit } from '@angular/core';
import { Venue } from '../venue.model';
import { Location } from '@angular/common';
import { ActivatedRoute, Params} from '@angular/router';
import { VenueService } from '../venue.service';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.scss'],
  providers: [VenueService]
})
export class VenueDetailComponent implements OnInit {
  venueId: number;
  venueDisplayed: Venue;

  constructor(private route:ActivatedRoute, private location:Location, private venueService:VenueService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=> {
      this.venueId = parseInt(urlParameters['id'])
    });
    this.venueDisplayed = this.venueService.getVenueById(this.venueId);
  }
  goBack(){
    this.location.back();
  }
}
