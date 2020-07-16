import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { ContactsService } from 'src/app/contacts.service'
import { Contacts } from 'src/app/contacts';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {

  id: number;
  employees: Observable<Employee[]>;
  contact: Contacts = new Contacts();
  contacts: Observable<Contacts[]>;

 
  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService, private contactsService :ContactsService) {
     }

     

  ngOnInit() {
    this.contact = new Contacts(); 
    this.reloadData();   
    //this.id = this.route.snapshot.params['id'];
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    this.contactsService.getContactO(this.id).subscribe(data => {
        console.log(data);
        this.contact = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });
  }


  reloadData() {

    this.employeeService.getEmployeeList().subscribe(
      data => {
        console.log(data);
        this.employees = this.employeeService.getEmployeeList();
      },
      error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['login']);     
      });
  
  }

  list(){
    this.router.navigate(['contacts-list']);
  }
}
