import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Session {
  id: string;
  title: string;
  speaker: string;
  speakerId: string;
  room: string;
  slot: number;
  content: string;
  url: string;
}

interface Slot {
  id: number;
  start: string;
  end: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.simple.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  private sessionsUrl = 'http://localhost:8080/sessions?full'
  private slotsUrl = 'http://localhost:8080/slots'

  public sessions: Session[];
  public slots: Slot[];

  constructor(private http: HttpClient) { }

  public async ngOnInit() {
    const sessionsPromise = this.http.get<Session[]>(this.sessionsUrl).toPromise();
    const slotsPromise = this.http.get<Slot[]>(this.slotsUrl).toPromise();

    const results = await Promise.all([sessionsPromise, slotsPromise]);
    this.sessions = results[0];
    this.slots = results[1];
  }

  public getSessionsOfSlot(slotID: number) {
    return this.sessions
        .filter(se => se.slot === slotID)
        .sort((s1, s2) => s1.room < s2.room ? -1 : 1);
  }
}
