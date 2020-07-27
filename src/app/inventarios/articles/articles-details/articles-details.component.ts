import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from 'src/app/articles';
import { ArticlesService } from 'src/app/articles.service';
import { Observable } from 'rxjs';
import { SubCategories } from 'src/app/subcategories';
import { UnitOfMeasures } from 'src/app/unit-of-measures';
import { SubCategoriesService } from 'src/app/subcategories.service';
import { UnitOfMeasuresService } from 'src/app/unit-of-measures.service ';

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.scss']
})
export class ArticlesDetailsComponent implements OnInit {
  condimiun_id: number;
  p_condominiuns_id:number;

  id: number;
  employee: Articles = new Articles();
  submitted = false;
  employeee: Observable<[Articles]>;
  addresses: Observable<[SubCategories]>;
  addresses1: Observable<[UnitOfMeasures]>;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: ArticlesService,
    private addressService: SubCategoriesService,
    private address1Service: UnitOfMeasuresService
    
    ) { }

    ngOnInit() {
      this.employee.admin_condominiuns_id=localStorage.getItem('condominums');
      this.reloadDatas();
      this.id = this.route.firstChild.snapshot.params['id']
      this.p_condominiuns_id=parseInt(localStorage.getItem('condominums'));
      this.employeeService.getEmployee(this.id,this.p_condominiuns_id)
      
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }

      });
    }
  

    reloadData() { 
      this.employeeService.getEmployeeList(parseInt(localStorage.getItem('condominums'))).subscribe(
        data => {
          console.log(data);
          this.employeee = this.employeeService.getEmployeeList(parseInt(localStorage.getItem('condominums')));
        },
        error => {
          console.log(error);   
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        });
  
        
    }


    reloadDatas() 
    {
      this.employee.admin_condominiuns_id=localStorage.getItem('condominums');
      this.addressService.getEmployeeListcombo_sub().subscribe(
        data => {
          console.log(data);
          this.addresses = this.addressService.getEmployeeListcombo_sub();
        },
        error => {
          console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        }
      );   
      
      this.address1Service.getEmployee1Listcombo().subscribe(
        data => {
          console.log(data);
          this.addresses1 = this.address1Service.getEmployee1Listcombo();
        },
        error => {
          console.log(error);
          let coins = [];
          for (let key in error) {
            this.alertDisable = false;
            this.alertMessage = error['statusText'];          
          }
        }
      );   
    }
}
