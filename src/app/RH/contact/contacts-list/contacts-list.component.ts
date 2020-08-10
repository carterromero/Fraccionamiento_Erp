import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeService } from "src/app/employee.service";
import { Employee } from "src/app/employee";
import { ContactsService } from 'src/app/contacts.service'
import { Contacts } from 'src/app/contacts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  employees: Observable<Employee[]>;
  contact: Contacts = new Contacts();
  contacts: Observable<Contacts[]>;
  
  elements: any = [];
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private contactsService :ContactsService, private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {    

    this.reloadDatas();

  }

  reloadDatas(){
    this.contactsService.getContact().subscribe(
      data => {
        console.log(data);
        this.contacts = this.contactsService.getContact();
      },
      error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertMessage = error['statusText'];          
        }
      }
    );      
  }
 
  deleteContact(id: number) {
    this.contactsService.deleteContact(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadDatas();
        },
        error => {
          console.log(error);
          localStorage.setItem('token', "");
          this.router.navigate(['auth/signin']);
        });
  }

  contactDetails(id: number){
    console.log(id);
    this.router.navigate(['contacts-details', id]);
  }

  updateContact(id: number){
    console.log(id);
    this.router.navigate(['update-contacts', id]);
  }

  goEmployee(){

    this.router.navigate(['employees-list']);
  }
}