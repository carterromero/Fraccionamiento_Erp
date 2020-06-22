import { Component, OnInit } from '@angular/core';
import { WorkplacesService } from 'src/app/workplaces.service';
import { Workplaces } from 'src/app/workplaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-workplaces',
  templateUrl: './create-workplaces.component.html',
  styleUrls: ['./create-workplaces.component.scss']
})
export class CreateWorkplacesComponent implements OnInit {
  
  workplace: Workplaces = new Workplaces();
  submitted = false;

  constructor(private workplaceService: WorkplacesService,
    private router: Router) { }

  ngOnInit() {
    //code
  }

  newWorkplace(): void {
    this.submitted = false;
    this.workplace = new Workplaces();
  }

  save() {
    this.workplace.last_update_by=3;
    console.log(this.workplace);
    this.workplace.create_by=1;
    console.log(this.workplace);
    this.workplaceService.createWorkplace(this.workplace)
      .subscribe(data => console.log(data), 
      error => {
        console.log(error);
       // localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });
    this.workplace = new Workplaces();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['workplaces-list']);
  }
}