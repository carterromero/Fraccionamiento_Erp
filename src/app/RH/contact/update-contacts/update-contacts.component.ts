import { Component, OnInit } from '@angular/core';
import { ContactsService } from "src/app/contacts.service";
import { Contacts } from "src/app/contacts";
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-update-contacts',
  templateUrl: './update-contacts.component.html',
  styleUrls: ['./update-contacts.component.scss']
})
export class UpdateContactsComponent implements OnInit {

  id: number;
  employees :  Observable<Employee[]>;
  contact: Contacts;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";




  constructor(private route: ActivatedRoute,private router: Router,
    private contactsService: ContactsService,private employeeService: EmployeeService) {}

  ngOnInit() {
    this.contact = new Contacts();
   this.reloadDatas();

    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.contact.contacts_status);
    this.contactsService.getContactO(this.id)
      .subscribe(data => {
        console.log(data);
        this.contact = data;
        this.contact.contacts_status = (String(this.contact.contacts_status) == "false") ? null:"false";
        console.log(this.contact.contacts_status);
      }, error => {
        console.log(error);
        
      });
      
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

  updateContact() {
    console.log(this.contact);
    console.log(this.id);
    

      this.contact.last_updated_by= 17;
      this.contactsService.updateContact(this.id, this.contact)
      .subscribe(data => {console.log(data);
        this.gotoList();  
            this.gotoList();
          }, 
        error => {
          console.log(error);       
        });
  
  }

  onSubmit() { 

    this.alertDisable = true;
    this.alertDisables = true;
  
   
      this.updateContact();    
  }

  gotoList() {
    this.router.navigate(['contacts-list']);
  }


}
