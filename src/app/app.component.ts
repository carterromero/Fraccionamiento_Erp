import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import  {  MessagingService  }  from  "./messaging.service" ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  message;
  constructor(private router: Router, private  messagingService : MessagingService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    const userId = localStorage.getItem('id');
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }
}
