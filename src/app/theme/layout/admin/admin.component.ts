import { Component, NgZone, OnInit } from '@angular/core';
import { NextConfig } from '../../../app-config';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public flatConfig: any;
  public navCollapsed: boolean;
  public navCollapsedMob: boolean;
  public windowWidth: number;
 


  constructor(private zone: NgZone, private location: Location, private route: ActivatedRoute, private router: Router) {


  

    this.flatConfig = NextConfig.config;
    let currentURL = this.location.path();
    const baseHerf = this.location['_baseHref'];
    if (baseHerf) {
      currentURL = baseHerf + this.location.path();
    }

    this.windowWidth = window.innerWidth;

    if (currentURL === baseHerf + '/layout/collapse-menu'
      || currentURL === baseHerf + '/layout/box'
      || (this.windowWidth >= 992 && this.windowWidth <= 1024)) {
      this.flatConfig.collapseMenu = true;
    }

    this.navCollapsed = (this.windowWidth >= 992) ? this.flatConfig.collapseMenu : false;
    this.navCollapsedMob = false;

  }

  ngOnInit() {

    if (this.windowWidth < 992) {
      this.flatConfig.layout = 'vertical';
      setTimeout(() => {
        document.querySelector('.pcoded-navbar').classList.add('menupos-static');
        (document.querySelector('#nav-ps-flat-able') as HTMLElement).style.maxHeight = '100%'; // 100% amit
      }, 500);      
    }   

//#region 
    //validar token para restringir acceso a la master page

    
    
    if(localStorage.getItem('id') == "" || localStorage.getItem('condominums')== "" || localStorage.getItem('rol')== "")
      {       
        this.router.navigate(['auth/signin']); 
      
      }
      else if(localStorage.getItem('id')== "0" || localStorage.getItem('condominums')== "" || localStorage.getItem('rol')== "" )
      {
        this.router.navigate(['auth/signin']); 
      }
      else if(localStorage.getItem('id') == null || localStorage.getItem('condominums')== null || localStorage.getItem('rol')== null){

        this.router.navigate(['auth/signin']); 
      }
     
      
      
    

//#endregion

  }

  navMobClick() {
    if (this.windowWidth < 992) {
      if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
        this.navCollapsedMob = !this.navCollapsedMob;
        setTimeout(() => {
          this.navCollapsedMob = !this.navCollapsedMob;
        }, 100);
      } else {
        this.navCollapsedMob = !this.navCollapsedMob;
      }
    }
  }

}