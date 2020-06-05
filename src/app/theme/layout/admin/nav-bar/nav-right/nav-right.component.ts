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
    
    this.authenticationService.logout()
      .subscribe(data => {
        console.log(data);
        localStorage.setItem('token', "");
        this.router.navigate(['auth/signin']);
      }, error => console.log(error));            
  }
}
