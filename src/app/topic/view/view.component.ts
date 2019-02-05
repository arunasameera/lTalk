  import { Component, OnInit } from '@angular/core';
  import {LocalDataSource, Ng2SmartTableModule} from 'ng2-smart-table';
  import {Router} from '@angular/router';
  import {TopicService} from '../topic.service';

  @Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
  })
  export class ViewComponent implements OnInit {

    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    settings={};
    topics: any[]=[];
    source: LocalDataSource;

    constructor(private router: Router, private topicViewService: TopicService) { }

    ngOnInit(){
      this.setSettings();
      this.loadTopics();
    }

    addNewTopics(){
      this.router.navigateByUrl('/submit');
    }

    setSettings(){
       this.settings = {
          columns: {
            name: {
              title: 'Topic',
              filter: false
            },
            description: {
              title: 'Topic Description',
              filter: false
            }
          },
          actions: false
       };
    }

    loadTopics(){
        this.topicViewService.getUpcomingTopics().subscribe(response => {
              let result = {};
              result = response;
              this.topics = Object.assign(result);
              this.source = new LocalDataSource(this.topics);
              console.log('Upcoming Topics:', this.topics);
        }, error => {
             console.log('FAILED TO LOAD UPCOMING TOPICS');
             console.log(error);
        });
    }

  }
