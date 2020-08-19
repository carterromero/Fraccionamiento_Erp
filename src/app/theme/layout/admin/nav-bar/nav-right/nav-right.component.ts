import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService } from '../../../../../authentication.service';
import {Router } from '@angular/router';
import { UserService } from 'src/app/services/admin/user.service';
import { User } from 'src/app/services/admin/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {
  general: Observable<User[]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  token : string;

  constructor(private authenticationService: AuthenticationService,
    private generalService: UserService,
    private router: Router) { }

  ngOnInit() { }

  logout() {
    localStorage.setItem('id','0');
    localStorage.setItem('rol', '0');
    localStorage.setItem('condominums', '0');
    this.router.navigate(['auth/signin']);
    this.deleteGeneral();
  }

  deleteGeneral() {
    this.token = localStorage.getItem("Token")
    this.generalService.deleteToken(this.token)
      .subscribe(
        data => {
          console.log(data);
          console.log(this.token);
          //this.reloadData();
          this.alertDisables = false;
          this.alertMessages ="El token eliminado correctamente";
        },
        error => {console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        }
      );
  }
}
