import { Component, OnInit } from '@angular/core';
import {Venue} from '../venue.model';
import { Location } from '@angular/common';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.scss']
})
export class VenueDetailComponent implements OnInit {
  venueId: number = null;

  constructor(private route:ActivatedRoute, private location:Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=> {
      this.venueId = parseInt(urlParameters['id'])
    });
  }

}
