import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }


  getUpcomingTopics= (): Observable<{}> => {
      return new Observable(obs => {
          this.http.get(environment.API.TOPIC + '/getTopic' ).subscribe((res) => {
             let result: any = res;
             let resultJson = {};
             resultJson = result;
             //let result: string = res['body'];
            // let topics = {};
             console.log('Upcoming Topics:', resultJson);
            // topics = result;
             obs.next(resultJson);
             obs.complete();
          }, error => {
             obs.error(error);
             obs.complete();
          });
      });
  }

  public addNew(topicObj: any): Observable<any> {
    return this.http.post(environment.API.TOPIC + '/save', topicObj);
  }
}
