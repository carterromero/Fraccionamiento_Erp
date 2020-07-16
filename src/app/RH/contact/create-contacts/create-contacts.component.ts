import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service'
import { Contacts } from 'src/app/contacts';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-create-contacts',
  templateUrl: './create-contacts.component.html',
  styleUrls: ['./create-contacts.component.scss']
})
export class CreateContactsComponent implements OnInit {
  
  contact: Contacts = new Contacts();
  employees :  Observable<Employee[]>;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;
  dato:String;

  constructor(private employeeService: EmployeeService,  private contactsService :ContactsService,
     private router: Router) { 
    
    }

  ngOnInit() {
    //code
    this.reloadDatas();
  }


  reloadDatas() 
  {

    this.employeeService.getNames().subscribe(
      data => {
        console.log(data);
        this.employees = this.employeeService.getNames();
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


  save(){
    this.contactsService.createContact(this.contact)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
       // this.router.navigate(['auth/signin']);
      });
    this.contact = new Contacts();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['contacts-list']);
  }
}