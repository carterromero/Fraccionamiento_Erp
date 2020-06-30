import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService } from '../../../../../authentication.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() { }

  logout() {
    
    localStorage.setItem('id','0');
    localStorage.setItem('rol', '0');
    localStorage.setItem('condominums', '0');
    this.router.navigate(['auth/signin']);
  }
}
