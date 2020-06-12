import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/categories';
import { CategoriesService } from 'src/app/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent implements OnInit {
employee: Categories = new Categories();
  submitted = false;

  constructor(private employeeService: CategoriesService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Categories();
  }

  save() {

    this.employee.last_update_by=3;
    console.log(this.employee);
    


    this.employeeService.createEmployee(this.employee)
      .subscribe(data => 
        {
          console.log(data);
          this.gotoList();    
        }, 
      error => {
        console.log(error);    
      });

  }

  onSubmit() 
  {
    this.submitted = true;
    this.save();    
  }

  gotoList() 
  {
    this.router.navigate(['categories-list']);
  }

}
