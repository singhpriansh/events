import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BACK_URL = environment.apiUrls;

export interface Events {
  _id: Number,
  name: String,
  description: String,
  date: Date
}

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private _eventsUrl = BACK_URL+ "events";
  private _specialEventsUrl = BACK_URL+ "special";

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventsUrl);
  }

  getSpecialEvents(){
    return this.http.get<any>(this._specialEventsUrl)
  }
}
