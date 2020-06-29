import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent} from './theme/layout/auth/auth.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddressListComponent } from './address/address-list/address-list.component';
import { CreateAddressComponent } from './address/create-address/create-address.component';
import { AddressDetailsComponent } from './address/address-details/address-details.component';
import { UpdateAddressComponent } from './address/update-address/update-address.component';
import { GeneralListComponent } from './general/general-list/general-list.component';
import { CreateGeneralComponent } from './general/create-general/create-general.component';
import { GeneralDetailsComponent } from './general/general-details/general-details.component';
import { UpdateGeneralComponent } from './general/update-general/update-general.component';



import { CreditorListComponent } from './AP/ap_creditor/creditor-list/creditor-list.component';
import { CreateCreditorComponent } from './AP/ap_creditor/create-creditor/create-creditor.component';
import { CategoriesListComponent } from './inventarios/categories/categories-list/categories-list.component';
import { CreateLegalsComponent } from './admin/legals/create-legals/create-legals.component';
import { LegalsDetailsComponent } from './admin/legals/legals-details/legals-details.component';
import { UpdateLegalsComponent } from './admin/legals/update-legals/update-legals.component';

import { SubCategoriesListComponent } from './inventarios/sub_categories/sub-categories-list/subcategories-list.component';


import { CreateCategoriesComponent } from './inventarios/categories/create-categories/create-categories.component';


import { UpdateCategoriesComponent } from './inventarios/categories/update-categories/update-categories.component';

import { CategoriesDetailsComponent } from './inventarios/categories/categories-details/categories-details.component';
//gl/Catalogs/periods
import { PeriodsListComponent } from './gl/catalogs/periods/periods-list/periods-list.component';
import { CreatePeriodsComponent } from './gl/catalogs/periods/create-periods/create-periods.component';
import { PeriodsDetailsComponent } from './gl/catalogs/periods/periods-details/periods-details.component';
import { UpdatePeriodsComponent } from './gl/catalogs/periods/update-periods/update-periods.component';

import { SupplierListComponent } from './po/supplier/supplier-list/supplier-list.component';
import { CreateSupplierComponent } from './po/create-supplier/create-supplier.component';
import { SupplierDetailsComponent } from './po/supplier-details/supplier-details.component';
import { UpdateSupplierComponent } from './po/update-supplier/update-supplier.component';
import { LegalsListComponent } from './admin/legals/legals-list/legals-list.component';
import { UpdateCreditorComponent } from './AP/ap_creditor/update-creditor/update-creditor.component';
import { CreditorDetailsComponent } from './AP/ap_creditor/creditor-details/creditor-details.component';
import { CondominumsListComponent } from './admin/condominus/condominums-list/condominums-list.component';
import { CreateCondominumsComponent } from './admin/condominus/create-condominums/create-condominums.component';
import { CondominumsDetailsComponent } from './admin/condominus/condominums-details/condominums-details.component';
import { UpdateCondominumsComponent } from './admin/condominus/update-condominums/update-condominums.component';

import { PaytmentListComponent } from './po/payterms/paytment-list/paytment-list.component';
import { CreatePaytmentComponent } from './po/payterms/create-paytment/create-paytment.component';
import { PaymentDetailsComponent } from './po/payterms/payment-details/payment-details.component';
import { UpdatePaymentComponent } from './po/payterms/update-payment/update-payment.component';

import { CreatePaymentDocumentsComponent } from './treasury/paymentDocuments/create-payment-documents/create-payment-documents.component';
import { PaymentDocumentsDetailsComponent } from './treasury/paymentDocuments/payment-documents-details/payment-documents-details.component';
import { PaymentDocumentsListComponent } from './treasury/paymentDocuments/payment-documents-list/payment-documents-list.component';
import { UpdatePaymentDocumentsComponent } from './treasury/paymentDocuments/update-payment-documents/update-payment-documents.component';

import { CreateTransfersComponent } from './treasury/transfers/create-transfers/create-transfers.component';
import { TransfersDetailsComponent } from './treasury/transfers/transfers-details/transfers-details.component';
import { TransfersListComponent } from './treasury/transfers/transfers-list/transfers-list.component';
import { UpdateTransfersComponent } from './treasury/transfers/update-transfers/update-transfers.component';

import { BankCodesListComponent } from './treasury/bankCodes/bank-codes-list/bank-codes-list.component';
import { CreateBankCodesComponent } from './treasury/bankCodes/create-bank-codes/create-bank-codes.component';
import { BankCodesDetailsComponent } from './treasury/bankCodes/bank-codes-details/bank-codes-details.component';
import { UpdateBankCodesComponent} from './treasury/bankCodes/update-bank-codes/update-bank-codes.component';
import { ManageBanksListComponent } from './treasury/manageBaks/manage-banks-list/manage-banks-list.component';
import { CreateManageBanksComponent } from './treasury/manageBaks/create-manage-banks/create-manage-banks.component';
import { ManageBanksDetailsComponent } from './treasury/manageBaks/manage-banks-details/manage-banks-details.component';
import { UpdateManageBanksComponent} from './treasury/manageBaks/update-manage-banks/update-manage-banks.component';
import { SubcategoriesDetailsComponent } from './inventarios/sub_categories/subcategories-details/subcategories-details.component';
import { UpdateSubcategoriesComponent } from './inventarios/sub_categories/update-subcategories/update-subcategories.component';

import { CreateRolComponent } from './admin/rol/create-rol/create-rol.component';
import { RolDetailsComponent } from './admin/rol/rol-details/rol-details.component';
import { RolListComponent } from './admin/rol/rol-list/rol-list.component';
import { UpdateRolComponent } from './admin/rol/update-rol/update-rol.component';
import { CreatePermissionsComponent } from './admin/permissions/create-permissions/create-permissions.component';
import { PermissionsDetailsComponent } from './admin/permissions/permissions-details/permissions-details.component';
import { PermissionsListComponent } from './admin/permissions/permissions-list/permissions-list.component';
import { UpdatePermissionsComponent } from './admin/permissions/update-permissions/update-permissions.component';
import { CreateUserComponent } from './admin/user/create-user/create-user.component';
import { UserDetailsComponent } from './admin/user/user-details/user-details.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { UpdateUserComponent } from './admin/user/update-user/update-user.component';

import { CreateBankAccountsComponent } from './treasury/bankAccounts/create-bank-accounts/create-bank-accounts.component';
import { BankAccountsDetailsComponent } from './treasury/bankAccounts/bank-accounts-details/bank-accounts-details.component';
import { UpdateBankAccountsComponent } from './treasury/bankAccounts/update-bank-accounts/update-bank-accounts.component';
import { BankAccountsListComponent } from './treasury/bankAccounts/bank-accounts-list/bank-accounts-list.component';


//RH
import { CreateDepartmentsComponent } from './RH/catalogs/departments/create-departments/create-departments.component';
import { DepartmentsListComponent } from './RH/catalogs/departments/departments-list/departments-list.component';
import { UpdateDepartmentsComponent } from './RH/catalogs/departments/update-departments/update-departments.component';
import { DepartmentsDetailsComponent } from './RH/catalogs/departments/departments-details/departments-details.component';
import { TransactionListComponent } from './admin/transaction/transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from './admin/transaction/transaction-details/transaction-details.component';
import { UpdateTransactionComponent } from './admin/transaction/update-transaction/update-transaction.component';



import { CreateWorkplacesComponent } from './RH/catalogs/workplaces/create-workplaces/create-workplaces.component';
import { WorkplacesListComponent } from './RH/catalogs/workplaces/workplaces-list/workplaces-list.component';
import { UpdateWorkplacesComponent } from './RH/catalogs/workplaces/update-workplaces/update-workplaces.component';
import { WorkplacesDetailsComponent } from './RH/catalogs/workplaces/workplaces-details/workplaces-details.component';
import { PurcharseListModule } from './purcharse/purcharse-list/purcharse-list.module';
import { PurcharseListComponent } from './purcharse/purcharse-list/purcharse-list.component';
import { CreatePurcharseComponent } from './purcharse/create-purcharse/create-purcharse.component';

import { CreateBilltopayComponent } from './AP/ap_billtopay/create-billtopay/create-billtopay.component';
import { BilltopayDetailsComponent } from './AP/ap_billtopay/billtopay-details/billtopay-details.component';
import { UpdateBilltopayComponent } from './AP/ap_billtopay/update-billtopay/update-billtopay.component';

import { CreateUserdashboardComponent } from './admin/userdashboard/create-userdashboard/create-userdashboard.component';
import { UpdateUserdashboardComponent } from './admin/userdashboard/update-userdashboard/update-userdashboard.component';
import { UserdashboardDetailsComponent } from './admin/userdashboard/userdashboard-details/userdashboard-details.component';
import { UserdashboardListComponent } from './admin/userdashboard/userdashboard-list/userdashboard-list.component';

import { SubinventarysListComponent } from './inventarios/sub_inventarys/subinventarys-list/subinventarys-list.component';
import { SubinventarysDetailsComponent } from './inventarios/sub_inventarys/subinventarys-details/subinventarys-details.component';
import { UpdateSubinventarysComponent } from './inventarios/sub_inventarys/update-subinventarys/update-subinventarys.component';
import { CreateSubcategoriesComponent } from './inventarios/sub_categories/create-subcategories/create-subcategories.component';
import { CreateSubinventarysComponent } from './inventarios/sub_inventarys/create-subinventarys/create-subinventarys.component';
import { BilltopayListComponent } from './AP/ap_billtopay/billtopay-list/billtopay-list.component';
import { PaymentRecordListComponent } from './AP/ap_payment-record/payment-record-list/payment-record-list.component';
import { CreatePaymentRecordComponent } from './AP/ap_payment-record/create-payment-record/create-payment-record.component';
import { PaymentRecordDetailsComponent } from './AP/ap_payment-record/payment-record-details/payment-record-details.component';
import { UpdatePaymentRecordComponent } from './AP/ap_payment-record/update-payment-record/update-payment-record.component';

//AR
import { collectionListComponent } from './collection/collection-list/collection-list.component';
import { CreatecollectionComponent } from './collection/create-collection/create-collection.component';



const routes: Routes = [
  /* Default page */
  {
    path: '',
    redirectTo: 'auth/signin',
   //redirectTo: 'dashboard/default',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule)
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./demo/pages/core-maps/core-maps.module').then(module => module.CoreMapsModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
      {
        path: '',
        component: ProfileComponent,
        children: [
          {
            path: 'profile',
            loadChildren: () => import('./user/profile/profile.module').then(module => module.ProfileModule)
          }
        ]
      },
      {
        path: '',
        component: EmployeeListComponent,
        children: [
          {
            path: 'employee-list',
            loadChildren: () => import('./employee/employee-list/employee-list.module').then(module => module.EmployeeListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateEmployeeComponent,
        children: [
          {
            path: 'create-employee',
            loadChildren: () => import('./employee/create-employee/create-employee.module').then(module => module.CreateEmployeeModule)
          }
        ]
      },
      {
        path: '',
        component: EmployeeDetailsComponent,
        children: [
          {
            path: 'employee-details/:id',
            loadChildren: () => import('./employee/employee-details/employee-details.module').then(module => module.EmployeeDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateEmployeeComponent,
        children: [
          {
            path: 'update-employee/:id',
            loadChildren: () => import('./employee/update-employee/update-employee.module').then(module => module.UpdateEmployeeModule)
          }
        ]
      },
      {
        path: '',
        component: CreateDepartmentsComponent,
        children: [
          {
            path: 'create-departments',
            loadChildren: () => import('./RH/catalogs/departments/create-departments/create-departments.module').then(module => module.CreateDepartmentsModule)

          }
        ]

      },
      {
        path: '',
        component: UpdateDepartmentsComponent,
        children: [
          {
            path: 'update-departments',
            loadChildren: () => import('./RH/catalogs/departments/update-departments/update-departments.module').then(module => module.UpdateDepartmentsModule)

          }
        ]

      },
      {
        path: '',
        component: DepartmentsListComponent ,
        children: [
          {
            path: 'departments-list',
            loadChildren: () => import('./RH/catalogs/departments/departments-list/departments-list.module').then(module => module.DepartmentsListModule)
          }
        ]
      },
      {
        path: '',
        component: DepartmentsDetailsComponent,
        children: [
          {
            path: 'departments-details/:id',
            loadChildren: () => import('./RH/catalogs/departments/departments-details/departments-details.module').then(module => module.DepartmentsDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: CreateWorkplacesComponent,
        children: [
          {
            path: 'create-workplaces',
            loadChildren: () => import('./RH/catalogs/workplaces/create-workplaces/create-workplaces.module').then(module => module.CreateWorkplacesModule)

          }
        ]
      },
      {
        path: '',
        component: UpdateWorkplacesComponent,
        children: [
          {
            path: 'update-workplaces/:id',
            loadChildren: () => import('./RH/catalogs/workplaces/update-workplaces/update-workplaces.module').then(module => module.UpdateWorkplacesModule)

          }
        ]
      },
      {
        path: '',
        component: WorkplacesListComponent ,
        children: [
          {
            path: 'workplaces-list',
            loadChildren: () => import('./RH/catalogs/workplaces/workplaces-list/workplaces-list.module').then(module => module.WorkplacesListModule)
          }
        ]
      },
      {
        path: '',
        component: WorkplacesDetailsComponent,
        children: [
          {
            path: 'workplaces-details/:id',
            loadChildren: () => import('./RH/catalogs/workplaces/workplaces-details/workplaces-details.module').then(module => module.WorkplacesDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: AddressListComponent,
        children: [
          {
            path: 'address-list',
            loadChildren: () => import('./address/address-list/address-list.module').then(module => module.AddressListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateAddressComponent,
        children: [
          {
            path: 'create-address',
            loadChildren: () => import('./address/create-address/create-address.module').then(module => module.CreateAddressModule)
          }
        ]
      },
      {
        path: '',
        component: AddressDetailsComponent,
        children: [
          {
            path: 'address-details/:id',
            loadChildren: () => import('./address/address-details/address-details.module').then(module => module.AddressDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateAddressComponent,
        children: [
          {
            path: 'update-address/:id',
            loadChildren: () => import('./address/update-address/update-address.module').then(module => module.UpdateAddressModule)
          }
        ]
      },
      {
        path: '',
        component: GeneralListComponent,
        children: [
          {
            path: 'general-list',
            loadChildren: () => import('./general/general-list/general-list.module').then(module => module.GeneralListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateGeneralComponent,
        children: [
          {
            path: 'create-general',
            loadChildren: () => import('./general/create-general/create-general.module').then(module => module.CreateGeneralModule)
          }
        ]
      },
      {
        path: '',
        component: GeneralDetailsComponent,
        children: [
          {
            path: 'general-details/:id',
            loadChildren: () => import('./general/general-details/general-details.module').then(module => module.GeneralDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateGeneralComponent,
        children: [
          {
            path: 'update-general/:id',
            loadChildren: () => import('./general/update-general/update-general.module').then(module => module.UpdateGeneralModule)
          }
        ]
      },
      {
        path: '',
        component: PeriodsListComponent,
        children: [
          {
            path: 'periods-list',
            loadChildren: () => import('./gl/catalogs/periods/periods-list/periods-list.module').then(module => module.PeriodsListModule)
          }
        ]
      },
      {
        path: '',
        component: CreatePeriodsComponent,
        children: [
          {
            path: 'create-periods',
            loadChildren: () => import('./gl/catalogs/periods/create-periods/create-periods.module').then(module => module.CreatePeriodsModule)
          }
        ]
      },
      {
        path: '',
        component: PeriodsDetailsComponent,
        children: [
          {
            path: 'periods-details/:id',
            loadChildren: () => import('./gl/catalogs/periods/periods-details/periods-details.module').then(module => module.PeriodsDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdatePeriodsComponent,
        children: [
          {
            path: 'update-periods/:id',
            loadChildren: () => import('./gl/catalogs/periods/update-periods/update-periods.module').then(module => module.UpdatePeriodsModule)
          }
        ]
      },
      {
        path: '',
        component: LegalsListComponent,
        children: [
          {
            path: 'legals-list',
            loadChildren: () => import('./admin/legals/legals-list/legals-list.module').then(module => module.LegalsListModule)
          }
        ]
      },
      {
        path: '',

        component: CreditorListComponent,
        children: [
          {
            path: 'creditor-list',
            loadChildren: () => import('./AP/ap_creditor/creditor-list/creditor-list.module').then(module => module.CreditorListModule)
          }
        ]
      },
      {
        path: '',

        component: CreateCreditorComponent,
        children: [
          {
            path: 'create-creditor',
            loadChildren: () => import('./AP/ap_creditor/create-creditor/create-creditor.module').then(module => module.CreateCreditorModule)
          }
        ]
      },
      {
        path: '',

        component: UpdateCreditorComponent,
        children: [
          {
            path: 'update-creditor/:id',
            loadChildren: () => import('./AP/ap_creditor/update-creditor/update-creditor.module').then(module => module.UpdateCreditorModule)
          }
        ]
      }
     ,
     {
      path: '',

      component: CreditorDetailsComponent,
      children: [
        {
          path: 'creditor-details/:id',
          loadChildren: () => import('./AP/ap_creditor/creditor-details/creditor-details.module').then(module => module.CreditorDetailsModule)
        }
      ]
    },
    {
      path: '',

      component: BilltopayListComponent,
      children: [
        {
          path: 'billtopay-list',
          loadChildren: () => import('./AP/ap_billtopay/billtopay-list/billtopay-list.module').then(module => module.BilltopayListModule)
        }
      ]
    },
    
    {
      path: '',

      component: CreateBilltopayComponent,
      children: [
        {
          path: 'create-billtopay',
          loadChildren: () => import('./AP/ap_billtopay/create-billtopay/create-billtopay.module').then(module => module.CreateBilltopayModule)
        }
      ]
    },
    {
      path: '',

      component: BilltopayDetailsComponent,
      children: [
        {
          path: 'billtopay-details/:id',
          loadChildren: () => import('./AP/ap_billtopay/billtopay-details/billtopay-details.module').then(module => module.BilltopayDetailsModule)
        }
      ]
    },
    {
      path: '',

      component: UpdateBilltopayComponent,
      children: [
        {
          path: 'update-billtopay/:id',
          loadChildren: () => import('./AP/ap_billtopay/update-billtopay/update-billtopay.module').then(module => module.UpdateBilltopayModule)
        }
      ]
    }
      ,
      {
        path: '',
  
        component: PaymentRecordListComponent,
        children: [
          {
            path: 'payment-record-list',
            loadChildren: () => import('./AP/ap_payment-record/payment-record-list/payment-record-list.module').then(module => module.PaymentRecordListModule)
          }
        ]
      },
      
      {
        path: '',
  
        component: CreatePaymentRecordComponent,
        children: [
          {
            path: 'create-payment-record',
            loadChildren: () => import('./AP/ap_payment-record/create-payment-record/create-payment-record.module').then(module => module.CreatePaymentRecordModule)
          }
        ]
      },
      {
        path: '',
  
        component: PaymentRecordDetailsComponent,
        children: [
          {
            path: 'payment-record-details/:id',
            loadChildren: () => import('./AP/ap_payment-record/payment-record-details/payment-record-details.module').then(module => module.PaymentRecordDetailsModule)
          }
        ]
      },
      {
        path: '',
  
        component: UpdatePaymentRecordComponent,
        children: [
          {
            path: 'update-payment-record/:id',
            loadChildren: () => import('./AP/ap_payment-record/update-payment-record/update-payment-record.module').then(module => module.UpdatePaymentRecordModule)
          }
        ]
      }
      ,
      {
      path: '',

        component: CategoriesListComponent,
        children: [
          {
            path: 'categories-list',
            loadChildren: () => import('./inventarios/categories/categories-list/categories-list.module').then(module => module.CategoriesListModule)
          }
        ]
      },
      {
        path: '',
  
          component: SubinventarysListComponent,
          children: [
            {
              path: 'sub_inventarys-list',
              loadChildren: () => import('./inventarios/sub_inventarys/subinventarys-list/subinventarys-list.module').then(module => module.SubinventarysListModule)
            }
          ]
        },
      {
        path: '',
        component: UpdateCategoriesComponent,
        children: [
          {
            path: 'update-categories/:id',
            loadChildren: () => import('./inventarios/categories/update-categories/update-categories.module').then(module => module.UpdateCategoriesModule)
          }
        ]
      },
        {
        path: '',
        component: CreateLegalsComponent ,
        children: [
          {
            path: 'create-legals',
            loadChildren: () => import('./admin/legals/create-legals/create-legals.module').then(module => module.CreateLegalsModule)

          }
        ]

      },
      {
        path: '',
        component: CreateCategoriesComponent,
        children: [
          {
            path: 'create-categories',
            loadChildren: () => import('./inventarios/categories/create-categories/create-categories.module').then(module => module.CreateCategoriesModule)

          }
        ]

      },
      {
        path: '',
        component: CreateSubcategoriesComponent,
        children: [
          {
            path: 'subcategories-create',
            loadChildren: () => import('./inventarios/sub_categories/create-subcategories/create-subcategories.module').then(module => module.CreateSubcategoriesModule)

          }
        ]

      },
      {
        path: '',
        component: CreateSubinventarysComponent,
        children: [
          {
            path: 'subinventarys-create',
            loadChildren: () => import('./inventarios/sub_inventarys/create-subinventarys/create-subinventarys.module').then(module => module.CreateSubinventarysModule)

          }
        ]

      },
      {
        path: '',
        component: SubCategoriesListComponent,
        children: [
          {
            path: 'sub_categories-list',
            loadChildren: () => import('./inventarios/sub_categories/sub-categories-list/subcategories-list.module').then(module => module.SubCategoriesListModule)
          }
        ]
      },
      {
        path: '',
        component: CategoriesDetailsComponent,
        children: [
          {
            path: 'categories-details/:id',
            loadChildren: () => import('./inventarios/categories/categories-details/categories_details.module').then(module => module.CategoriesDetailsModule)
          }
        ]
      },


      {
        path: '',
        component: LegalsDetailsComponent,
        children: [
          {
            path: 'legals-details/:id',
            loadChildren: () => import('./admin/legals/legals-details/legals_details.module').then(module => module.LegalsDetailsModule)
          }
        ]
      },

      {
        path: '',
        component: UpdateLegalsComponent,
        children: [
          {
            path: 'update-legals/:id',
            loadChildren: () => import('./admin/legals/update-legals/update-legals.module').then(module => module.UpdateLegalsModule)
          }
        ]
      },

      {
        path: '',
        component: collectionListComponent,
        children: [
          {
            path: 'collection-list',
            loadChildren: () => import('./collection/collection-list/collection-list.module').then(module => module.collectionListModule)
          }
        ]
      },
      {
        path: '',
        component: CreatecollectionComponent,
        children: [
          {
            path: 'create-collection',
            loadChildren: () => import('./collection/create-collection/create-collection.module').then(module => module.createcollectionModule)
          }
        ]
      },
      {
        path: '',
        component: CondominumsListComponent ,
        children: [
          {
            path: 'condominus-list',
            loadChildren: () => import('./admin/condominus/condominums-list/condominums-list.module').then(module => module.CondominumsListModule)
          }
        ]
      }
,

{
  path: '',
  component: CreateCondominumsComponent ,
  children: [
    {
      path: 'create-condominums',
      loadChildren: () => import('./admin/condominus/create-condominums/create-condominums.module').then(module => module.CreateCondominumsModule)
    }
  ]
},

{
  path: '',
  component: CondominumsDetailsComponent,
  children: [
    {
      path: 'condominums-details/:id',
      loadChildren: () => import('./admin/condominus/condominums-details/condominums-details.module').then(module => module.CondominumsDetailsModule)
    }
  ]
},


{
  path: '',
  component: UpdateCondominumsComponent,
  children: [
    {
      path: 'update-condominums/:id',
      loadChildren: () => import('./admin/condominus/update-condominums/update-condominums.module').then(module => module.UpdateCondominumsModule)
    }
  ]
}


      ,

  {
    path: '',
  component: SupplierListComponent,
   children: [
     {
        path: 'supplier-list',
       loadChildren: () => import('./po/supplier/supplier-list/supplier-list.module').then(module => module.SupplierListModule)
      }
    ]



  }
  ,

  {
    path: '',
  component: CreateSupplierComponent,
   children: [
     {
        path: 'supplier-create',
       loadChildren: () => import('./po/create-supplier/supplier-create.module').then(module => module.SupplierCreateModule)
      }
    ]



      }
      ,
      {
        path: '',
        component: SupplierDetailsComponent,
        children: [
          {
            path: 'supplier-details/:id',
            loadChildren: () => import('./po/supplier-details/supplier-details.module').then(module => module.SupplierDetailsModule)
          }
        ]
      }  ,
      {
        path: '',
        component: UpdateSupplierComponent,
        children: [
          {
            path: 'update-supplier/:id',
            loadChildren: () => import('./po/update-supplier/supplier-update.module').then(module => module.SupplierUpdateModule)
          }
        ]
      }

      ,{
        path: '',
      component: PaytmentListComponent,
       children: [
         {
            path: 'payment_terms-list',
           loadChildren: () => import('./po/payterms/paytment-list/paytment-list.module').then(module => module.PaymentListModule)
          }
        ]

      },
      {
        path: '',
      component: CreatePaytmentComponent,
       children: [
         {
            path: 'payment-create',
           loadChildren: () => import('./po/payterms/create-paytment/paytment-create.module').then(module => module.PaytmentCreateModule)
          }
        ]

          },
          {
            path: '',
            component: PaymentDetailsComponent,
            children: [
              {
                path: 'payment-details/:id',
                loadChildren: () => import('./po/payterms/payment-details/payment-details.module').then(module => module.PaymentDetailsModule)
              }
            ]
          }
          ,
          {
            path: '',
            component: UpdatePaymentComponent,
            children: [
              {
                path: 'update-payment/:id',
                loadChildren: () => import('./po/payterms/update-payment/payment-update.module').then(module => module.PaymentUpdateModule)
              }
            ]
          }


///
,

  {
    path: '',
  component: BankCodesListComponent,
   children: [
     {
        path: 'bank-codes-list',
       loadChildren: () => import('./treasury/bankCodes/bank-codes-list/bank-codes-list.module').then(module => module.BankCodesListModule)
      }
    ]



  }
  ,

  {
    path: '',
  component: CreateBankCodesComponent,
   children: [
     {
        path: 'bank-codes-create',
       loadChildren: () => import('./treasury/bankCodes/create-bank-codes/bank-codes-create.module').then(module => module.BankCodesCreateModule)
      }
    ]



  }
  ,
      {
        path: '',
        component: BankCodesDetailsComponent,
        children: [
          {
            path: 'bank-codes-details/:id',
            loadChildren: () => import('./treasury/bankCodes/bank-codes-details/bank-codes-details.module').then(module => module.BankCodesDetailsModule)
          }
        ]
      }  ,
      {
        path: '',
        component: UpdateBankCodesComponent,
        children: [
          {
            path: 'update-bank-codes/:id',
            loadChildren: () => import('./treasury/bankCodes/update-bank-codes/bank-codes-update.module').then(module => module.BankCodesUpdateModule)
          }
        ]
      }
      ///
,

  {
    path: '',
  component: BankCodesListComponent,
   children: [
     {
        path: 'bank-codes-list',
       loadChildren: () => import('./treasury/bankCodes/bank-codes-list/bank-codes-list.module').then(module => module.BankCodesListModule)
      }
    ]



  }
  ,

  {
    path: '',
  component: CreateBankCodesComponent,
   children: [
     {
        path: 'bank-codes-create',
       loadChildren: () => import('./treasury/bankCodes/create-bank-codes/bank-codes-create.module').then(module => module.BankCodesCreateModule)
      }
    ]
  },
  
      {
        path: '',
        component: BankCodesDetailsComponent,
        children: [
          {
            path: 'bank-codes-details/:id',
            loadChildren: () => import('./treasury/bankCodes/bank-codes-details/bank-codes-details.module').then(module => module.BankCodesDetailsModule)
          }
        ]
      }  ,
      {
        path: '',
        component: UpdateSubcategoriesComponent,
        children: [
          {
            path: 'update-subcategories/:id',
            loadChildren: () => import('./inventarios/sub_categories/update-subcategories/update-subcategories.module').then(module => module.UpdateSubCategoriesModule)
          }
        ]
      }
      ///
,

{
  path: '',
component: ManageBanksListComponent,
 children: [
   {
      path: 'manage-banks-list',
     loadChildren: () => import('./treasury/manageBaks/manage-banks-list/manage-banks-list.module').then(module => module.ManageBanksListModule)
    }
  ]



}
,

{
  path: '',
component: CreateManageBanksComponent,
 children: [
   {
      path: 'manage-banks-create',
     loadChildren: () => import('./treasury/manageBaks/create-manage-banks/manage-banks-create.module').then(module => module.ManageBanksCreateModule)
    }
  ]



}
,
    {
      path: '',
      component: ManageBanksDetailsComponent,
      children: [
        {
          path: 'manage-banks-details/:id',
          loadChildren: () => import('./treasury/manageBaks/manage-banks-details/manage-banks-details.module').then(module => module.ManageBanksDetailsModule)
        }
      ]
    }  ,
    {
      path: '',
      component: UpdateManageBanksComponent,
      children: [
        {
          path: 'update-manage-banks/:id',
          loadChildren: () => import('./treasury/manageBaks/update-manage-banks/manage-banks-update.module').then(module => module.ManageBanksUpdateModule)
        }



      ]
    }


    ,
    {
      path: '',
      component: CreateRolComponent,
      children: [
        {
          path: 'create-rols',
          loadChildren: () => import('./admin/rol/create-rol/create-rol.module').then(module => module.CreateRolModule)
        }
      ]
    }

    ,
    {
      path: '',

      component: SubcategoriesDetailsComponent,
      children: [
        {
          path:'sub-details/:id',
          loadChildren: () => import('./inventarios/sub_categories/subcategories-details/subcategories-details.module').then(module => module.SubCategoriesDetailsModule)
        }
      ]
    },
    {
      path: '',

      component: SubinventarysDetailsComponent,
      children: [
        {
          path:'sub_inventarys-details/:id',
          loadChildren: () => import('./inventarios/sub_inventarys/subinventarys-details/subinventarys-details.module').then(module => module.SubinventarysDetailsModule)
        }
      ]
    },
    {
      path: '',
      component:  UpdateSubinventarysComponent,
      children: [
        {
          path: 'update-subinventarys/:id',
          loadChildren: () => import('./inventarios/sub_inventarys/update-subinventarys/update-subinventarys.module').then(module => module.UpdateSubCategoriesModule)
        }
      ]
    },
    {
      path: '',
      component:  UpdateBankCodesComponent,
      children: [
        {
          path: 'update-bank-codes/:id',
          loadChildren: () => import('./treasury/bankCodes/update-bank-codes/bank-codes-update.module').then(module => module.BankCodesUpdateModule)
        }
      ]
    },
         
          {
            path: '',
      component: RolDetailsComponent,
      children: [
        {
          path: 'rols-details/:id',
          loadChildren: () => import('./admin/rol/rol-details/rol-details.module').then(module => module.RolDetailsModule)
        }
      ]
    }

    ,
    {
      path: '',
      component: RolListComponent,
      children: [
        {
          path: 'rols-list',
          loadChildren: () => import('./admin/rol/rol-list/rol-list.module').then(module => module.RolListModule)
        }
      ]
    }


    ,
    {
      path: '',
      component: UpdateRolComponent,
      children: [
        {
          path: 'update-rols/:id',
          loadChildren: () => import('./admin/rol/update-rol/update-rol.module').then(module => module.UpdateRolModule)
        }
      ]
    }

    ,
    {
      path: '',
      component: CreatePermissionsComponent,
      children: [
        {
          path: 'create-permissions',
          loadChildren: () => import('./admin/permissions/create-permissions/create-permissions.module').then(module => module.CreatePermissionsModule)
        }
      ]
    }

    ,
    {
      path: '',
      component: PermissionsDetailsComponent,
      children: [
        {
          path: 'permissions-details/:id',
          loadChildren: () => import('./admin/permissions/permissions-details/permissions-details.module').then(module => module.PermissionsDetailsModule)
        }
      ]
    }

    ,
    {
      path: '',
      component: PermissionsListComponent,
      children: [
        {
          path: 'permissions-list',
          loadChildren: () => import('./admin/permissions/permissions-list/permissions-list.module').then(module => module.PermissionsListModule)
        }
      ]
    }


    ,
    {
      path: '',
      component: UpdatePermissionsComponent,
      children: [
        {
          path: 'update-permissions/:id',
          loadChildren: () => import('./admin/permissions/update-permissions/update-permissions.module').then(module => module.UpdatePermissionsModule)
        }
      ]
    }




    ,
    {
      path: '',
      component: CreateUserComponent,
      children: [
        {
          path: 'create-usuarios',
          loadChildren: () => import('./admin/user/create-user/create-user.module').then(module => module.CreateUserModule)
        }
      ]
    }

    ,
    {
      path: '',
      component: UserDetailsComponent,
      children: [
        {
          path: 'usuarios-details/:id',
          loadChildren: () => import('./admin/user/user-details/user-details.module').then(module => module.UserDetailsModule)
        }
      ]
    }

    ,
    {
      path: '',
      component: UserListComponent,
      children: [
        {
          path: 'usuarios-list',
          loadChildren: () => import('./admin/user/user-list/user-list.module').then(module => module.UserListModule)
        }
      ]
    }


    ,
    {
      path: '',
      component: UpdateUserComponent,
      children: [
        {
          path: 'update-usuarios/:id',
          loadChildren: () => import('./admin/user/update-user/update-user.module').then(module => module.UpdateUserModule)

        }
      ]
    }
    ,
    {
      path: '',
      component: PurcharseListComponent,
      children: [  
        {
          path: 'purchase_orders-list',
          loadChildren: () => import('./purcharse/purcharse-list/purcharse-list.module').then(module => module.PurcharseListModule)
        }
      ]
    },{
      path: '',
      component: CreatePurcharseComponent,
      children: [  
        {
          path: 'create-purcharse',
          loadChildren: () => import('./purcharse/create-purcharse/create-purcharse.module').then(module => module.PurcharseCreateModule)
        }
      ]
    }


    ,
    {
      path: '',
      component: TransactionListComponent,
      children: [  
        {
          path: 'transaction-list/:id',
          loadChildren: () => import('./admin/transaction/transaction-list/transaction-list.module').then(module => module.TransactionListModule)
        }
      ]
    }

    ,
    {
      path: '',
      component: TransactionDetailsComponent,
      children: [  
        {
          path: 'transaction-details/:id',
          loadChildren: () => import('./admin/transaction/transaction-details/transaction-details.module').then(module => module.TransactionDetailsModule)
        }
      ]
    }
///
,

  {
    path: '',
  component: PaymentDocumentsListComponent,
   children: [
     {
        path: 'payment-documents-list',
       loadChildren: () => import('./treasury/paymentDocuments/payment-documents-list/payment-documents-list.module').then(module => module.PaymentDocumentsListModule)
      }
    ]



  }
  ,

  {
    path: '',
  component: CreatePaymentDocumentsComponent,
   children: [
     {
        path: 'payment-documents-create',
       loadChildren: () => import('./treasury/paymentDocuments/create-payment-documents/payment-documents-create.module').then(module => module.PaymentDocumentsCreateModule)
      }
    ]
  },
  
      {
        path: '',
        component: PaymentDocumentsDetailsComponent,
        children: [
          {
            path: 'payment-documents-details/:id',
            loadChildren: () => import('./treasury/paymentDocuments/payment-documents-details/payment-documents-details.module').then(module => module.PaymentDocumentsDetailsModule)
          }
        ]
      }  ,
      {
        path: '',
        component:  UpdatePaymentDocumentsComponent,
        children: [
          {
            path: 'update-payment-documents/:id',
            loadChildren: () => import('./treasury/paymentDocuments/update-payment-documents/payment-documents-update.module').then(module => module.PaymentDocumentsUpdateModule)
          }
        ]
      }
    ,
    {
      path: '',
      component: UpdateTransactionComponent,
      children: [  
        {
          path: 'update-transaction/:id',
          loadChildren: () => import('./admin/transaction/update-transaction/update-transaction.module').then(module => module.TransactionListModule)
        }
      ]
    },
    {
      path: '',
      component: BankAccountsDetailsComponent,
      children: [
        {
          path: 'bank-accounts-details/:id',
          loadChildren: () => import('./treasury/bankAccounts/bank-accounts-details/bank-accounts-details.module').then(module => module.BankAccountsDetailsModule)
        }
      ]
    }  ,
    {
      path: '',
      component: UpdateBankAccountsComponent,
      children: [
        {
          path: 'update-bank-accounts/:id',
          loadChildren: () => import('./treasury/bankAccounts/update-bank-accounts/bank-accounts-update.module').then(module => module.BankAccountsUpdateModule)
        }



      ]
    }

    ,

    {
      path: '',
    component: BankAccountsListComponent,
     children: [
       {
          path: 'bank-accounts-list',
         loadChildren: () => import('./treasury/bankAccounts/bank-accounts-list/bank-accounts-list.module').then(module => module.BankAccountsListModule)
        }
      ]
    
    
    
    }
    ,
                ///


{
  path: '',
component: TransfersListComponent,
 children: [
   {
      path: 'transfers-list',
     loadChildren: () => import('./treasury/transfers/transfers-list/transfers-list.module').then(module => module.TransfersListModule)
    }
  ]



}
,

{
  path: '',
component: CreateTransfersComponent,
 children: [
   {
      path: 'transfers-create',
     loadChildren: () => import('./treasury/transfers/create-transfers/transfers-create.module').then(module => module.TransfersCreateModule)
    }
  ]
},

    {
      path: '',
      component: TransfersDetailsComponent,
      children: [
        {
          path: 'transfers-details/:id',
          loadChildren: () => import('./treasury/transfers/transfers-details/transfers-details.module').then(module => module.TransfersDetailsModule)
        }
      ]
    }  ,
    {
      path: '',
      component:  UpdateTransfersComponent,
      children: [
        {
          path: 'update-transfers/:id',
          loadChildren: () => import('./treasury/transfers/update-transfers/transfers-update.module').then(module => module.TransfersUpdateModule)
        }
      ]
    },

    
    {
      path: '',
    component: CreateBankAccountsComponent,
     children: [
       {
          path: 'bank-accounts-create',
         loadChildren: () => import('./treasury/bankAccounts/create-bank-accounts/bank-accounts-create.module').then(module => module.BankAccountsCreateModule)
        }
      ]
    
    
    
    }

  
    ,
    {
      path: '',
      component: CreateUserdashboardComponent,
      children: [  
        {
          path: 'create-userd/:id',
          loadChildren: () => import('./admin/userdashboard/create-userdashboard/create-userdashboard.module').then(module => module.CreateUserdashboardModule)
        }
      ]
    }
    ,
    {
      path: '',
      component: UpdateUserdashboardComponent,
      children: [  
        {
          path: 'update-userd/:id',
          loadChildren: () => import('./admin/userdashboard/update-userdashboard/update-userdashboard.module').then(module => module.UpdateUserdashboardModule)
        }
      ]
    }


    ,
    {
      path: '',
      component: UserdashboardDetailsComponent,
      children: [  
        {
          path: 'details-userd/:id',
          loadChildren: () => import('./admin/userdashboard/userdashboard-details/userdashboard-details.module').then(module => module.UserdashboardModule)
        }
      ]
    }


    ,
    {
      path: '',
      component: UserdashboardListComponent,
      children: [  
        {
          path: 'userd-list/:id',
          loadChildren: () => import('./admin/userdashboard/userdashboard-list/userdashboard-list.module').then(module => module.UserdashboardListModule)
        }
      ]
    }

    ]
  },


  {
    path: '',
    component: AuthComponent,
    children: [

      {
        path: '',
        component: AuthComponent,
        children: [
          {
            path: 'auth',
            loadChildren: () => import('./authentication/authentication.module').then(module => module.AuthenticationModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
