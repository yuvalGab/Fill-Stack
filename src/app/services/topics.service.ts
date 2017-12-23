import { Injectable } from '@angular/core';

const mockListTopics = [
  {
    id: 1,
    title: 'loops',
    zone: 'client side',
    subject: '1',
    importance: 3,
    control: 2
  },
  {
    id: 2,
    title: 'npm',
    zone: 'server side',
    subject: '2',
    importance: 3,
    control: 1
  },
  {
    id: 3,
    title: 'commit',
    zone: 'both sides',
    subject: '3',
    importance: 2,
    control: 2
  },
  {
    id: 4,
    title: 'images',
    zone: 'both sides',
    subject: '4',
    importance: 1,
    control: 3
  },
  {
    id: 5,
    title: 'tags',
    zone: 'client side',
    subject: '5',
    importance: 3,
    control: 2
  },
  {
    id: 6,
    title: 'collections',
    zone: 'server side',
    subject: '6',
    importance: 2,
    control: 3
  },
  {
    id: 7,
    title: 'schema',
    zone: 'server side',
    subject: '6',
    importance: 3,
    control: 2
  }
];

@Injectable()
export class TopicsService {

  constructor() { }

  getTopics(subjectId:string) {
    return mockListTopics.filter(i => i.subject === subjectId);
  }

}
