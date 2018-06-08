import { Component, OnInit } from '@angular/core';
import { Venue } from '../venue.model';
import { Router } from '@angular/router';
import { VenueService } from '../venue.service';
import { venuelist } from '../venue-list'

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss'],
  providers: [VenueService]
})
export class VenuesComponent implements OnInit {
  venuelist: Venue[];
  constructor(private router: Router, private venueService: VenueService) { }

  ngOnInit() {
    this.venuelist = this.venueService.getVenues();
  }

  goToDetailPage(clickedVenue: Venue){
    this.router.navigate(['venues',clickedVenue.id])
  };
}
