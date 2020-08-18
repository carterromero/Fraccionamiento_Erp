import { Component, OnInit } from '@angular/core';
import { SupportChartData1} from './chart/support-chart-data-1';
import { SupportChartData2} from './chart/support-chart-data-2';
import { SeoChart1 } from './chart/seo-chart-1';
import { SeoChart2 } from './chart/seo-chart-2';
import { SeoChart3 } from './chart/seo-chart-3';
import { PowerCardChart1 } from './chart/power-card-chart-1';
import { PowerCardChart2 } from './chart/power-card-chart-2';
import { ModalService } from '../_modal';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/admin/user.service';
import { User } from 'src/app/services/admin/user';
declare var jQuery: any;




@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss']
})
export class DashDefaultComponent implements OnInit {
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
  private modalService: ModalService;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  general: Observable<User[]>;
  gen:User[] = [];
  url: string = "https://angular.io/api/router/RouterLink";
  urlSafe: SafeResourceUrl;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor(public sanitizer: DomSanitizer,
    private generalService: UserService) {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
    
  }

  ngOnInit() {
    //console.log(this.generalService.listUserWithToken());
    this.reloadData();
    (function($) {
      $(document).ready(function() {
          var $chatbox = $('.chatbox'),
              $chatboxTitle = $('.chatbox__title'),
              $chatboxTitleClose = $('.chatbox__title__close'),
              $chatboxCredentials = $('.chatbox__credentials');
          $chatboxTitle.on('click', function() {
              $chatbox.toggleClass('chatbox--tray');
          });
          $chatboxTitleClose.on('click', function(e) {
              e.stopPropagation();
              $chatbox.addClass('chatbox--closed');
          });
          $chatbox.on('transitionend', function() {
              if ($chatbox.hasClass('chatbox--closed')) $chatbox.remove();
          });
          
      });
  })(jQuery);
  }

  
  reloadData() {

    this.generalService.listUserWithToken().subscribe(
      data => {
        //this.general = this.generalService.listUserWithToken();
        this.gen = data;
        console.log(this.gen);
        //console.log(this.general);
      },
      error => {
        console.log(error);   
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }

  openModal(id: string) {
    
    this.modalService.open(id);
  }

  openFrame(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
