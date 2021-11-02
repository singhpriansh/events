import { Component, OnInit } from '@angular/core';
import { Events, EventService } from '../event.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {

  specialEvents: Events[] = [];
  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    this._eventService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res,
        err => console.log(err)
      );
  }

}
