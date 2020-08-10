import { Component, OnInit } from '@angular/core';
import { BankAccounts } from '../../../bankAccounts';
import { ActivatedRoute, Router } from '@angular/router';
import { BankAccountsService } from '../../../bank-accounts.service';
import { ManageBanks } from '../../../manageBank';
import { ManageBanksService } from '../../../manage-banks.service';
import { Observable } from 'rxjs';
import { AccountsService } from "src/app/services/gl/accounts.service";
import { Accounts } from "src/app/services/gl/accounts";
import { PaymentDocuments} from "src/app/paymentDocuments";
import { PaymentDocumentsService } from "src/app/payment-documents.service";

@Component({
  selector: 'app-bank-accounts-details',
  templateUrl: './bank-accounts-details.component.html',
  styleUrls: ['./bank-accounts-details.component.scss']
})
export class BankAccountsDetailsComponent implements OnInit {
  id: number;
  employee: BankAccounts;
  manages : Observable<ManageBanks[]>;
  accounts : Observable<Accounts[]>;
  documents : Observable<PaymentDocuments[]>;


  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: BankAccountsService, private manageBanks:ManageBanksService, private accountService:AccountsService,private paymentService:PaymentDocumentsService) { }
    reloadDatas() 
    {
  
      this.manageBanks.getEmployeeList().subscribe(
        data => {
          console.log(data);
          this.manages = this.manageBanks.getEmployeeList();
        },
        error => {
          console.log(error);
        }
      );      
    }
  
    reloadData() 
    {
  
      this.accountService.getEmployeeList().subscribe(
        data => {
          console.log(data);
          this.accounts = this.accountService.getEmployeeList();
        },
        error => {
          console.log(error);
        }
      );      
    }
    reloadData1() 
    {
  
      this.paymentService.getEmployeeList().subscribe(
        data => {
          console.log(data);
          this.documents = this.paymentService.getEmployeeList();
        },
        error => {
          console.log(error);
        }
      );      
    }
    
  ngOnInit() {
    this.reloadDatas();
    this.reloadData();
    this.reloadData1();
    this.employee = new BankAccounts();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => {
        console.log(error);
        //localStorage.setItem('token', "");
        //this.router.navigate(['auth/signin']);
      });


  }
 
  

}
