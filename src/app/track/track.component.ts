import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.spotify
        .getTrack(this.id)
        .subscribe((res: any) => this.renderTrack(res));
  }

}
