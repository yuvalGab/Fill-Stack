import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class TopicService {
  public list:Subject<any> = new Subject();

  constructor(private http:Http) { }

  getAll(subjectId:string) {
    return this.http.get(`/api/topic/getAll/${subjectId}`).map(res => res.json())
    .subscribe(results => {
      this.list.next(results);
    });
  }

  getOne(topicId:string) {
    return this.http.get(`/api/topic/getOne/${topicId}`).map(res => res.json());
  }

  add(newTopic:object) {
    return this.http.post('/api/topic/add', newTopic).map(res => res.json());
  }

  edit(id:number, topicDetails:object) {
    return this.http.put('/api/topic/edit', { id, topicDetails }).map(res => res.json());
  }

  delete(topicId:number) {
    return this.http.delete(`/api/topic/delete/${topicId}`).map(res => res.json());
  }
}
