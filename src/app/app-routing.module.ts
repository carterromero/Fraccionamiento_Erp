import { NgModule } from '@angular/core';
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
import { LegalsListComponent } from './admin/legals/legals-list/legals-list.component';


import { CreditorListComponent } from './creditor/creditor-list/creditor-list.component';
import { CreateCreditorComponent } from './creditor/create-creditor/create-creditor.component';

import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CreateLegalsComponent } from './admin/legals/create-legals/create-legals.component';
import { LegalsDetailsComponent } from './admin/legals/legals-details/legals-details.component';
import { UpdateLegalsComponent } from './admin/legals/update-legals/update-legals.component';

import { CategoriesDetailsComponent } from './categories/categories-details/categories-details.component';
//gl/Catalogs/periods
import { PeriodsListComponent } from './gl/catalogs/periods/periods-list/periods-list.component';
import { CreatePeriodsComponent } from './gl/catalogs/periods/create-periods/create-periods.component';
import { PeriodsDetailsComponent } from './gl/catalogs/periods/periods-details/periods-details.component';
import { UpdatePeriodsComponent } from './gl/catalogs/periods/update-periods/update-periods.component';
import { CondominumsListComponent } from './admin/condominus/condominums-list/condominums-list.component';
import { CreateCondominumsComponent } from './admin/condominus/create-condominums/create-condominums.component';

import { UpdateCreditorComponent } from './creditor/update-creditor/update-creditor.component';

import { CondominumsDetailsComponent } from './admin/condominus/condominums-details/condominums-details.component';
import { UpdateCondominumsComponent } from './admin/condominus/update-condominums/update-condominums.component';
import { CreditorDetailsComponent } from './creditor/creditor-details/creditor-details.component';




const routes: Routes = [
  /* Default page */
  {
    path: '',
    redirectTo: 'auth/signin',
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
            loadChildren: () => import('./creditor/creditor-list/creditor-list.module').then(module => module.CreditorListModule)
          }
        ]
      },
      {
        path: '',

        component: CreateCreditorComponent,
        children: [  
          {
            path: 'create-creditor',
            loadChildren: () => import('./creditor/create-creditor/create-creditor.module').then(module => module.CreateCreditorModule)
          }
        ]
      },
      {
        path: '',

        component: UpdateCreditorComponent,
        children: [  
          {
            path: 'update-creditor/:id',
            loadChildren: () => import('./creditor/update-creditor/update-creditor.module').then(module => module.UpdateCreditorModule)
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
          loadChildren: () => import('./creditor/creditor-details/creditor-details.module').then(module => module.CreditorDetailsModule)
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
            loadChildren: () => import('./categories/categories-list/categories-list.module').then(module => module.CategoriesListModule)
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
        component: CategoriesDetailsComponent,
        children: [  
          {
            path: 'categories-details/:id',
            loadChildren: () => import('./categories/categories-details/categories_details.module').then(module => module.CategoriesDetailsModule)
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
