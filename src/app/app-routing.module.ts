import { NgModule, Component } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
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
import { UpdateBankCodesComponent } from './treasury/bankCodes/update-bank-codes/update-bank-codes.component';
import { ManageBanksListComponent } from './treasury/manageBaks/manage-banks-list/manage-banks-list.component';
import { CreateManageBanksComponent } from './treasury/manageBaks/create-manage-banks/create-manage-banks.component';
import { ManageBanksDetailsComponent } from './treasury/manageBaks/manage-banks-details/manage-banks-details.component';
import { UpdateManageBanksComponent } from './treasury/manageBaks/update-manage-banks/update-manage-banks.component';

import { ConfigMainteListComponent } from './config-mainte/config-mainte-list/config-mainte-list.component';
import { DetailsPayrollComponent } from './config-mainte/details-payroll/details-payroll.component';
import { CreatePayrollComponent } from './config-mainte/create-payroll/create-payroll.component';
import { UpdatePayrollComponent } from './config-mainte/update-payroll/update-payroll.component';

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
import { CreateReleasesComponent } from './admin/releases/create-releases/create-releases.component';
import { ReleasesListComponent } from './admin/releases/releases-list/releases-list.component';
import { UpdateReleasesComponent } from './admin/releases/update-releases/update-releases.component'
import { ReleasesDetailsComponent } from './admin/releases/releases-details/releases-details.component'


import { CreateBankAccountsComponent } from './treasury/bankAccounts/create-bank-accounts/create-bank-accounts.component';
import { BankAccountsDetailsComponent } from './treasury/bankAccounts/bank-accounts-details/bank-accounts-details.component';
import { UpdateBankAccountsComponent } from './treasury/bankAccounts/update-bank-accounts/update-bank-accounts.component';
import { BankAccountsListComponent } from './treasury/bankAccounts/bank-accounts-list/bank-accounts-list.component';

import { CreateDepositAccountComponent } from './depositAccount/create-deposit-account/create-deposit-account.component';
import { DepositAccountDetailsComponent } from './depositAccount/deposit-account-details/deposit-account-details.component';
import { UpdateDepositAccountComponent } from './depositAccount//update-deposit-account/update-deposit-account.component';
import { DepositAccountListComponent } from './depositAccount//deposit-account-list/deposit-account-list.component';


import { CreateDepartmentsComponent } from './RH/catalogs/departments/create-departments/create-departments.component';
import { DepartmentsListComponent } from './RH/catalogs/departments/departments-list/departments-list.component';
import { UpdateDepartmentsComponent } from './RH/catalogs/departments/update-departments/update-departments.component';
import { DepartmentsDetailsComponent } from './RH/catalogs/departments/departments-details/departments-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { CreateWorkplacesComponent } from './RH/catalogs/workplaces/create-workplaces/create-workplaces.component';
import { WorkplacesListComponent } from './RH/catalogs/workplaces/workplaces-list/workplaces-list.component';
import { UpdateWorkplacesComponent } from './RH/catalogs/workplaces/update-workplaces/update-workplaces.component';
import { WorkplacesDetailsComponent } from './RH/catalogs/workplaces/workplaces-details/workplaces-details.component';
import { CreateTenantsComponent } from './RH/Inquilinos/create-tenants/create-tenants.component';
import { TenantsListComponent } from './RH/Inquilinos/tenants-list/tenants-list.component';
import { UpdateTenantsComponent } from './RH/Inquilinos/update-tenants/update-tenants.component';
import { TenantsDetailsComponent } from './RH/Inquilinos/tenants-details/tenants-details.component';

import { CreateReservationsComponent } from './RH/Reservations/create-reservations/create-reservations.component';
import { ReservationsListComponent } from './RH/Reservations/reservations-list/reservations-list.component';
import { UpdateReservationsComponent } from './RH/Reservations/update-reservations/update-reservations.component';
import { ReservationsDetailsComponent } from './RH/Reservations/reservations-details/reservations-details.component';
import { TagviviendaListComponent } from './RH/REPORTES/tagvivienda/tagvivienda-list/tagvivienda-list.component';
import { ReportEmployeeListComponent } from './RH/REPORTES/reportemployee-list/reportemployee-list.component';
import { DepartmentsRListComponent } from './RH/REPORTES/departmentsr-list/departmentsr-list.component';
import { ReservationsreportListComponent } from './RH/REPORTES/reservationsreport-list/reservationsreport-list.component';
import { CreateContactsComponent } from './RH/contact/create-contacts/create-contacts.component';
import { ContactsListComponent } from './RH/contact/contacts-list/contacts-list.component';
import { UpdateContactsComponent } from './RH/contact/update-contacts/update-contacts.component';
import { ContactsDetailsComponent } from './RH/contact/contacts-details/contacts-details.component';
import { ResetPasswordComponent } from './authentication/reset-password/password-reset.component';
import { CreateCommentsComponent} from './admin/releases/comments/create-comments/create-comments.component';


import { TransactionListComponent } from './admin/transaction/transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from './admin/transaction/transaction-details/transaction-details.component';
import { UpdateTransactionComponent } from './admin/transaction/update-transaction/update-transaction.component';


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
import { MasterinventarysListComponent } from './inventarios/master_inventarys/masterinventarys-list/masterinventarys-list.component';
import { CreateMasterinventarysComponent } from './inventarios/master_inventarys/create-masterinventarys/create-masterinventarys.component';
import { UnitOfMeasuresListComponent } from './inventarios/unit_of_measures/unit-of-measures-list/unit-of-measures-list.component';
import { ArticlesListComponent } from './inventarios/articles/articles-list/articles-list.component';

import { UpdatePurcharseComponent } from './purcharse/update-purcharse/update-purcharse.component';



import { CollectionListComponent } from './collection/collection-list/collection-list.component';
import { CreateCollectionComponent } from './collection/create-collection/create-collection.component';
import { BilltopayListComponent } from './AP/ap_billtopay/billtopay-list/billtopay-list.component';
import { PaymentRecordListComponent } from './AP/ap_payment-record/payment-record-list/payment-record-list.component';
import { CreatePaymentRecordComponent } from './AP/ap_payment-record/create-payment-record/create-payment-record.component';
import { PaymentRecordDetailsComponent } from './AP/ap_payment-record/payment-record-details/payment-record-details.component';
import { UpdatePaymentRecordComponent } from './AP/ap_payment-record/update-payment-record/update-payment-record.component';
import { PurcharseDetailsComponent } from './purcharse/purcharse-details/purcharse-details.component';
import { PdfSupplierListComponent } from './po/pdf/pdf-supplier-list/pdf-supplier-list.component';



import { MasterinventarysDetailsComponent } from './inventarios/master_inventarys/masterinventarys-details/masterinventarys-details.component';

import { RepoCredPayListComponent } from './AP/ap_repo_cred_pay/repo-cred-pay-list/repo-cred-pay-list.component';
import { UnitOfMeasuresDetailsComponent } from './inventarios/unit_of_measures/unit-of-measures-details/unit-of-measures-details.component';

import { UpdateMasterinventarysComponent } from './inventarios/master_inventarys/update-masterinventarys/update-masterinventarys.component';
import { TransactionsentrysListComponent } from './inventarios/transactions_entrys/transactionsentrys-list/transactionsentrys-list.component';

import { RepoCredPayNocontListComponent } from './AP/ap_repo_cred_pay/repo-cred-pay-nocont-list/repo-cred-pay-nocont-list.component';

import { CreateArticlesComponent } from './inventarios/articles/create-articles/create-articles.component';
import { ArticlesDetailsComponent } from './inventarios/articles/articles-details/articles-details.component';
import { UpdateArticlesComponent } from './inventarios/articles/update-articles/update-articles.component';



import { ConciliacionListComponent } from './AP/ap_conciliacion/conciliacion-list/conciliacion-list.component';
import { UpdateConciliacionComponent } from './AP/ap_conciliacion/update-conciliacion/update-conciliacion.component';
import { ConciliacionDetailsComponent } from './AP/ap_conciliacion/conciliacion-details/conciliacion-details.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { CreateReferralAddressComponent } from './AR/referralAddress/create-referral-address/create-referral-address.component';
import { ReferralAddressDetailsComponent } from './AR/referralAddress/referral-address-details/referral-address-details.component';
import { UpdateReferralAddressComponent } from './AR/referralAddress/update-referral-address/update-referral-address.component';
import { ReferralAddressListComponent } from './AR/referralAddress/referral-address-list/referral-address-list.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { UpdateUnitOfMeasuresComponent } from './inventarios/unit_of_measures/update-unit-of-measures/update-unit-of-measures.component';
import { CreateUnitOfMeasuresComponent } from './inventarios/unit_of_measures/create-unit-of-measures/create-unit-of-measures.component';

import { ReportListComponent } from './config-mainte/reports-payroll/report-list/report-list.component';

import { AcTenantsListComponent } from './AC/ac-tenants/ac-tenants-list/ac-tenants-list.component';
import { AcVisitorsListComponent } from './AC/ac-visitors/ac-visitors-list/ac-visitors-list.component';
import { AcVisitorsDetailsComponent } from './AC/ac-visitors/ac-visitors-details/ac-visitors-details.component';
import { AcUpdateVisitorsComponent } from './AC/ac-visitors/ac-update-visitors/ac-update-visitors.component';
import { AcUpdateTenantsComponent } from './AC/ac-tenants/ac-update-tenants/ac-update-tenants.component';
import { AcCreateVisitorsComponent } from './AC/ac-visitors/ac-create-visitors/ac-create-visitors.component';
import { AcTagsListComponent } from './AC/ac-tags/ac-tags-list/ac-tags-list.component';
import { AcTagsDetailsComponent } from './AC/ac-tags/ac-tags-details/ac-tags-details.component';
import { AcInactiveTagsListComponent } from './AC/ac-tags/ac-inactive-tags-list/ac-inactive-tags-list.component';
import { AcReportsInternalComponent } from './AC/ac-reports/ac-reports-internal/ac-reports-internal.component';
import { AcReportsPeopleComponent } from './AC/ac-reports/ac-reports-people/ac-reports-people.component';
import { AcReportsVisitorComponent } from './AC/ac-reports/ac-reports-visitor/ac-reports-visitor.component';

import { AccountsListComponent } from './gl/catalogs/accounts/accounts-list/accounts-list.component';
import { CreateAccountsComponent } from './gl/catalogs/accounts/create-accounts/create-accounts.component';
import { AccountsDetailsComponent } from './gl/catalogs/accounts/accounts-details/accounts-details.component';
import { UpdateAccountsComponent } from './gl/catalogs/accounts/update-accounts/update-accounts.component';
import { LinesListComponent } from './gl/catalogs/lines/lines-list/lines-list.component';
import { CreateLinesComponent } from './gl/catalogs/lines/create-lines/create-lines.component';
import { LinesDetailsComponent } from './gl/catalogs/lines/lines-details/lines-details.component';
import { UpdateLinesComponent } from './gl/catalogs/lines/update-lines/update-lines.component';

import { CollectionConceptsListComponent } from './AR/collectionConcepts/collectionconcepts-list/collectionconcepts-list.component';
import { CollectionConceptsDetailsComponent } from './AR/collectionConcepts/collectionconcepts-details/collectionconcepts-details.component';
import { CollectionConceptsCreateComponent } from './AR/collectionConcepts/create-collectionconcepts/create-collectionconcepts.component';
import { CollectionConceptsUpdateComponent } from './AR/collectionConcepts/update-collectionconcepts/update-collectionconcepts.component';
import { PaymentTermsListComponent } from './AR/paymentTerms/payment-terms-list/payment-terms-list.component';
import { UpdatePaymentTermsComponent } from './AR/paymentTerms/update-payment-terms/update-payment-terms.component';
import { CreatePaymentTermsComponent } from './AR/paymentTerms/create-payment-terms/create-payment-terms.component';
import { PaymentTermsDetailsComponent } from './AR/paymentTerms/payment-terms-details/payment-terms-details.component';
import { UpdateCollectionComponent } from './collection/update-collection/update-collection.component';
import { StatusListComponent } from './inventarios/status/status-list/status-list.component';
import { CreateStatusComponent } from './inventarios/status/create-status/create-status.component';
import { StatusDetailsComponent } from './inventarios/status/status-details/status-details.component';
import { UpdateStatusComponent } from './inventarios/status/update-status/update-status.component';

import { StatusPrecioarticuloListComponent } from './inventarios/status-precio/status-precioarticulo-list/status-precioarticulo-list.component';

import { CreatePreciosComponent } from './inventarios/status-precio/create-precio/create-precios.component';

import { AccolintypeListComponent } from './gl/catalogs/accolintype/accolintype-list/accolintype-list.component';
import { CreateAccolintypeComponent } from './gl/catalogs/accolintype/create-accolintype/create-accolintype.component';
import { AccolintypeDetailsComponent } from './gl/catalogs/accolintype/accolintype-details/accolintype-details.component';
import { UpdateAccolintypeComponent } from './gl/catalogs/accolintype/update-accolintype/update-accolintype.component';
import { JournalsListComponent } from './gl/catalogs/journals/journals-list/journals-list.component';
import { CreateJournalsComponent } from './gl/catalogs/journals/create-journals/create-journals.component';
import { JournalsDetailsComponent } from './gl/catalogs/journals/journals-details/journals-details.component';
import { UpdateJournalsComponent } from './gl/catalogs/journals/update-journals/update-journals.component';

import { PrecioDetailsComponent } from './inventarios/status-precio/precio-details/precio-details.component';
import { UpdatePrecioComponent } from './inventarios/status-precio/update-precio/update-precio.component';
import { JournalslinListComponent } from './gl/catalogs/journalslin/journalslin-list/journalslin-list.component';
import { CreateJournalslinComponent } from './gl/catalogs/journalslin/create-journalslin/create-journalslin.component';
import { JournalslinDetailsComponent } from './gl/catalogs/journalslin/journalslin-details/journalslin-details.component';
import { UpdateJournalslinComponent } from './gl/catalogs/journalslin/update-journalslin/update-journalslin.component';
import { TransactionTypesListComponent } from './AR/TransactionTypes/transactiontypes-list/transactiontypes-list.component';
import { TransactionTypesDetailsComponent } from './AR/TransactionTypes/transactiontypes-details/transactiontypes-details.component';
import { CreateTransactionTypesComponent } from './AR/TransactionTypes/create-transactiontypes/create-transactiontypes.component';
import { UpdateTransactionTypesComponent } from './AR/TransactionTypes/update-transactiontypes/update-transactiontypes.component';
import { PaymentsARListComponent } from './AR/payments/payments-ar-list/payments-ar-list.component';
import { PaymentsARDetailsComponent } from './AR/payments/payments-ar-details/payments-ar-details.component';
import { CreatePaymentsARComponent } from './AR/payments/create-payments-ar/create-payments-ar.component';
import { UpdatePaymentsARComponent } from './AR/payments/update-payments-ar/update-payments-ar.component';

import { ConciliacionARListComponent } from './AR/ar-conciliacion/conciliacion-ar-list/conciliacion-ar-list.component';
import { ConciliacionARDetailsComponent } from './AR/ar-conciliacion/conciliacion-ar-details/conciliacion-ar-details.component';
import { CreateConciliacionARComponent } from './AR/ar-conciliacion/create-conciliacion-ar/create-conciliacion-ar.component';
import { UpdateConciliacionARComponent } from './AR/ar-conciliacion/update-conciliacion-ar/update-conciliacion-ar.component';

import { PdfSupplierDetailsComponent } from './po/pdf/pdf-purcharse-details/pdf-supplier-details.component';

import { PdfPurcharseListComponent } from './po/pdf/pdf-purcharse/pdf-purcharse-list/pdf-purcharse-list.component';

import { TranslListComponent } from './gl/report/transl/transl-list/transl-list.component';
import { PdfPurcharseDetailsComponent } from './po/pdf/pdf-purcharse/pdfs-purcharse-details/pdf-purcharse-details.component';
import { CollectionDetailsComponent } from './collection/collection-details/collection-details.component';
import { PdfArticulogListComponent } from './inventarios/Pdf-articulo-g/pdf-articulog-list/pdf-articulog-list.component';
import { PdfHistoriaListComponent } from './inventarios/pdf-historiarti/pdf-historia-list/pdf-historia-list.component';
import { AcCreateTagsComponent } from './AC/ac-tags/ac-create-tags/ac-create-tags.component';
import { ConciliacionpListComponent } from './AP/ap_conciliacion/conciliacionp-list/conciliacionp-list.component';

import { ChatRoomComponent } from './chat/chat-room/chat-room.component';

import { ClientListComponent } from './AP/ap_client/client-list/client-list.component';
import { CreateClientComponent } from './AP/ap_client/create-client/create-client.component';
import { UpdateClientComponent } from './AP/ap_client/update-client/update-client.component';
import { ClientDetailsComponent } from './AP/ap_client/client-details/client-details.component';
import { FacpvListComponent } from './po/portal/facpv-list/facpv-list.component';
import { CreateFacpvComponent } from './po/portal/create-facpv/create-facpv.component';
import { FacpayDetailsComponent } from './po/portal/facpay-details/facpay-details.component';
import { ConsiListComponent } from './gl/report/consi/consi-list/consi-list.component';
import { CreateConsiComponent } from './gl/report/consi/create-consi/create-consi.component';

import { ReporteARListComponent } from './AR/ResporteAR/reporte-ar-list/resporte-ar-list.component';
import { SaldovaListComponent } from './gl/report/saldova/saldova-list/saldova-list.component';
import { CreateEntrysComponent } from './inventarios/transactions_entrys/create-entrys/create-entrys.component';
import { CreateSalidasComponent } from './inventarios/transactions_entrys/create-salidas/create-salidas.component';
import { PurcharseListCanceladasComponent } from './purcharse/purcharse-list-canceladas/purcharse-list-canceladas.component';
//import { CreateTransactionsEntrysComponent } from './inventarios/transactions_entrys/create-transactions-entrys/create-transactions-entrys.component';







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
        component: ResetPasswordComponent,
        children: [
          {
            path: 'password-reset',
            loadChildren: () => import('./authentication/reset-password/password-reset.module').then(module => module.ResetPasswordModule)
          }
        ]
      },
      {
        path: '',
        component: ContactsListComponent,
        children: [
          {
            path: 'contacts-list',
            loadChildren: () => import('src/app/RH/contact/contacts-list/contacts-list.module').then(module => module.ContactsListModule)
          }
        ]
      },
      {
        path: '',
        component: ReservationsreportListComponent,
        children: [
          {
            path: 'reservationsR-list',
            loadChildren: () => import('src/app/RH/REPORTES/reservationsreport-list/reservationsreport-list.module').then(module => module.ReservationsReportListModule)
          }
        ]
      },
      {
        path: '',
        component: ReleasesListComponent,
        children: [
          {
            path: 'list-releases',
            loadChildren: () => import('src/app/admin/releases/releases-list/releases-list.module').then(module => module.ReleasesListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateReleasesComponent,
        children: [
          {
            path: 'create-releases',
            loadChildren: () => import('src/app/admin/releases/create-releases/create-releases.module').then(module => module.CreateReleasesModule)
          }
        ]
      },
      {
        path: '',
        component: CreateCommentsComponent,
        children: [
          {
            path: 'create-comments/:id',
            loadChildren: () => import('src/app/admin/releases/comments/create-comments/create-comments.module').then(module => module.CreateCommentsModule)
          }
        ]
      },
      {
        path: '',
        component: ReleasesDetailsComponent,
        children: [
          {
            path: 'releases-detail/:id',
            loadChildren: () => import('src/app/admin/releases/releases-details/releases-details.module').then(module => module.ReleasesDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateReleasesComponent,
        children: [
          {
            path: 'update-releases/:id',
            loadChildren: () => import('src/app/admin/releases/update-releases/update-releases.module').then(module => module.UpdateReleasesModule)
          }
        ]
      },
      {
        path: '',
        component: CreateContactsComponent,
        children: [
          {
            path: 'create-contacts',
            loadChildren: () => import('src/app/RH/contact/create-contacts/create-contacts.module').then(module => module.CreateContactsModule)
          }
        ]
      },
      {
        path: '',
        component: ContactsDetailsComponent,
        children: [
          {
            path: 'contacts-details/:id',
            loadChildren: () => import('src/app/RH/contact/contacts-details/contacts-details.module').then(module => module.ContactsDetailModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateContactsComponent,
        children: [
          {
            path: 'update-contacts/:id',
            loadChildren: () => import('src/app/RH/contact/update-contacts/update-contacts.module').then(module => module.UpdateContactsModule)
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
        component: TagviviendaListComponent,
        children: [
          {
            path: 'tagvivienda-list',
            loadChildren: () => import('./RH/REPORTES/tagvivienda/tagvivienda-list/tagvivienda-list.module').then(module => module.TagviviendaListModule)
          }
        ]
      },
      {
        path: '',
        component: ReportEmployeeListComponent,
        children: [
          {
            path: 'reportemployee-list',
            loadChildren: () => import('./RH/REPORTES/reportemployee-list/reportemployee-list.module').then(module => module.ReportEmployeeListModule)
          }
        ]
      },
      {
        path: '',
        component: DepartmentsRListComponent,
        children: [
          {
            path: 'departmentsr-list',
            loadChildren: () => import('./RH/REPORTES/departmentsr-list/departmentsr-list.module').then(module => module.DepartmentsRListModule)
          }
        ]
      },
      {
        path: '',
        component: ReservationsListComponent,
        children: [
          {
            path: 'reservations-list',
            loadChildren: () => import('./RH/Reservations/reservations-list/reservations-list.module').then(module => module.ReservationsListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateReservationsComponent,
        children: [
          {
            path: 'create-reservations',
            loadChildren: () => import('./RH/Reservations/create-reservations/create-reservations.module').then(module => module.CreateReservationsModule)
          }
        ]
      },
      {
        path: '',
        component: ReservationsDetailsComponent,
        children: [
          {
            path: 'reservations-details/:id',
            loadChildren: () => import('./RH/Reservations/reservations-details/reservations-details.module').then(module => module.ReservationsDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateReservationsComponent,
        children: [
          {
            path: 'update-reservations/:id',
            loadChildren: () => import('./RH/Reservations/update-reservations/update-reservations.module').then(module => module.UpdateReservationsModule)
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
            path: 'update-departments/:id',
            loadChildren: () => import('./RH/catalogs/departments/update-departments/update-departments.module').then(module => module.UpdateDepartmentsModule)

          }
        ]

      },
      {
        path: '',
        component: DepartmentsListComponent,
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
        component: CreateTenantsComponent,
        children: [
          {
            path: 'create-tenants',
            loadChildren: () => import('./RH/Inquilinos/create-tenants/create-tenants.module').then(module => module.CreateTenantsModule)

          }
        ]

      },
      {
        path: '',
        component: UpdateTenantsComponent,
        children: [
          {
            path: 'update-tenants/:id',
            loadChildren: () => import('./RH/Inquilinos/update-tenants/update-tenants.module').then(module => module.UpdateTenantsModule)

          }
        ]

      },
      {
        path: '',
        component: TenantsListComponent,
        children: [
          {
            path: 'tenants-list',
            loadChildren: () => import('./RH/Inquilinos/tenants-list/tenants-list.module').then(module => module.TenantsListModule)
          }
        ]
      },
      {
        path: '',
        component: TenantsDetailsComponent,
        children: [
          {
            path: 'tenants-details/:id',
            loadChildren: () => import('./RH/Inquilinos/tenants-details/tenants-details.module').then(module => module.TenantsDetailsModule)
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
        component: WorkplacesListComponent,
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
        component: AccountsListComponent,
        children: [
          {
            path: 'accounts-list',
            loadChildren: () => import('./gl/catalogs/accounts/accounts-list/accounts-list.module').then(module => module.AccountsListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateAccountsComponent,
        children: [
          {
            path: 'create-accounts',
            loadChildren: () => import('./gl/catalogs/accounts/create-accounts/create-accounts.module').then(module => module.CreateAccountsModule)
          }
        ]
      },
      {
        path: '',
        component: AccountsDetailsComponent,
        children: [
          {
            path: 'accounts-details/:p_id',
            loadChildren: () => import('./gl/catalogs/accounts/accounts-details/accounts-details.module').then(module => module.AccountsDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateAccountsComponent,
        children: [
          {
            path: 'update-accounts/:p_id',
            loadChildren: () => import('./gl/catalogs/accounts/update-accounts/update-accounts.module').then(module => module.UpdateAccountsModule)
          }
        ]
      },
      {
        path: '',
        component: LinesListComponent,
        children: [
          {
            path: 'lines-list',
            loadChildren: () => import('./gl/catalogs/lines/lines-list/lines-list.module').then(module => module.LinesListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateLinesComponent,
        children: [
          {
            path: 'create-lines',
            loadChildren: () => import('./gl/catalogs/lines/create-lines/create-lines.module').then(module => module.CreateLinesModule)
          }
        ]
      },
      {
        path: '',
        component: LinesDetailsComponent,
        children: [
          {
            path: 'lines-details/:p_id',
            loadChildren: () => import('./gl/catalogs/lines/lines-details/lines-details.module').then(module => module.LinesDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateLinesComponent,
        children: [
          {
            path: 'update-lines/:p_id',
            loadChildren: () => import('./gl/catalogs/lines/update-lines/update-lines.module').then(module => module.UpdateLinesModule)
          }
        ]
      }
      ,
      {
        path: '',
        component: AccolintypeListComponent,
        children: [
          {
            path: 'accolintype-list',
            loadChildren: () => import('./gl/catalogs/accolintype/accolintype-list/accolintype-list.module').then(module => module.AccolintypeListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateAccolintypeComponent,
        children: [
          {
            path: 'create-accolintype',
            loadChildren: () => import('./gl/catalogs/accolintype/create-accolintype/create-accolintype.module').then(module => module.CreateAccolintypeModule)
          }
        ]
      },
      {
        path: '',
        component: AccolintypeDetailsComponent,
        children: [
          {
            path: 'accolintype-details/:p_id',
            loadChildren: () => import('./gl/catalogs/accolintype/accolintype-details/accolintype-details.module').then(module => module.AccolintypeDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateAccolintypeComponent,
        children: [
          {
            path: 'update-accolintype/:p_id',
            loadChildren: () => import('./gl/catalogs/accolintype/update-accolintype/update-accolintype.module').then(module => module.UpdateAccolintypeModule)
          }
        ]
      },
      {
        path: '',
        component: JournalsListComponent,
        children: [
          {
            path: 'journals-list',
            loadChildren: () => import('./gl/catalogs/journals/journals-list/journals-list.module').then(module => module.JournalsListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateJournalsComponent,
        children: [
          {
            path: 'create-journals',
            loadChildren: () => import('./gl/catalogs/journals/create-journals/create-journals.module').then(module => module.CreateJournalsModule)
          }
        ]
      },
      {
        path: '',
        component: JournalsDetailsComponent,
        children: [
          {
            path: 'journals-details/:p_id',
            loadChildren: () => import('./gl/catalogs/journals/journals-details/journals-details.module').then(module => module.JournalsDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateJournalsComponent,
        children: [
          {
            path: 'update-journals/:p_id',
            loadChildren: () => import('./gl/catalogs/journals/update-journals/update-journals.module').then(module => module.UpdateJournalsModule)
          }
        ]
      }
      ,
      {
        path: '',
        component: JournalslinListComponent,
        children: [
          {
            path: 'journalslin-list',
            loadChildren: () => import('./gl/catalogs/journalslin/journalslin-list/journalslin-list.module').then(module => module.JournalslinListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateJournalslinComponent,
        children: [
          {
            path: 'create-journalslin',
            loadChildren: () => import('./gl/catalogs/journalslin/create-journalslin/create-journalslin.module').then(module => module.CreateJournalslinModule)
          }
        ]
      },
      {
        path: '',
        component: JournalslinDetailsComponent,
        children: [
          {
            path: 'journalslin-details/:p_id',
            loadChildren: () => import('./gl/catalogs/journalslin/journalslin-details/journalslin-details.module').then(module => module.JournalslinDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: TranslListComponent,
        children: [
          {
            path: 'transl-list',
            loadChildren: () => import('./gl/report/transl/transl-list/transl-list.module').then(module => module.TranslListModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateJournalslinComponent,
        children: [
          {
            path: 'update-journalslin/:p_id',
            loadChildren: () => import('./gl/catalogs/journalslin/update-journalslin/update-journalslin.module').then(module => module.UpdateJournalslinModule)
          }
        ]
      }
      ,

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
        component: ConsiListComponent,
        children: [
          {
            path: 'consi-list',
            loadChildren: () => import('./gl/report/consi/consi-list/consi-list.module').then(module => module.ConsiListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateConsiComponent,
        children: [
          {
            path: 'create-consi',
            loadChildren: () => import('./gl/report/consi/create-consi/create-consi.module').then(module => module.CreateConsiModule)
          }
        ]
      },
      {
        path: '',

        component: SaldovaListComponent,
        children: [
          {
            path: 'saldova-list',
            loadChildren: () => import('./gl/report/saldova/saldova-list/saldova-list.module').then(module => module.SaldovaListModule)
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

        component: ClientListComponent,
        children: [
          {
            path: 'client-list',
            loadChildren: () => import('./AP/ap_client/client-list/client-list.module').then(module => module.ClientListModule)
          }
        ]
      },
      {
        path: '',

        component: CreateClientComponent,
        children: [
          {
            path: 'create-client',
            loadChildren: () => import('./AP/ap_client/create-client/create-client.module').then(module => module.CreateClientModule)
          }
        ]
      },
      {
        path: '',

        component: UpdateClientComponent,
        children: [
          {
            path: 'update-client/:id',
            loadChildren: () => import('./AP/ap_client/update-client/update-client.module').then(module => module.UpdateClientModule)
          }
        ]
      }
      ,
      {
        path: '',

        component: ClientDetailsComponent,
        children: [
          {
            path: 'client-details/:id',
            loadChildren: () => import('./AP/ap_client/client-details/client-details.module').then(module => module.ClientDetailsModule)
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

        component: FacpvListComponent,
        children: [
          {
            path: 'facpv-list',
            loadChildren: () => import('./po/portal/facpv-list/facpv-list.module').then(module => module.FacpvListModule)
          }
        ]
      },

      {
        path: '',

        component: CreateFacpvComponent,
        children: [
          {
            path: 'create-facpv',
            loadChildren: () => import('./po/portal/create-facpv/create-facpv.module').then(module => module.CreateFacpvModule)
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
      },
      {
        path: '',

        component: RepoCredPayListComponent,
        children: [
          {
            path: 'repo-cred-pay-list',
            loadChildren: () => import('./AP/ap_repo_cred_pay/repo-cred-pay-list/repo-cred-pay-list.module').then(module => module.RepoCredPayListModule)
          }
        ]
      },
      {
        path: '',

        component: RepoCredPayNocontListComponent,
        children: [
          {
            path: 'repo-cred-pay-nocont-list',
            loadChildren: () => import('./AP/ap_repo_cred_pay/repo-cred-pay-nocont-list/repo-cred-pay-nocont-list.module').then(module => module.RepoCredPayNocontListModule)
          }
        ]
      },

      {
        path: '',

        component: ConciliacionpListComponent,
        children: [
          {
            path: 'conciliacionp-list',
            loadChildren: () => import('./AP/ap_conciliacion/conciliacionp-list/conciliacionp-list.module').then(module => module.ConciliacionpListModule)
          }
        ]
      },
      {
        path: '',

        component: ConciliacionListComponent,
        children: [
          {
            path: 'conciliacion-list',
            loadChildren: () => import('./AP/ap_conciliacion/conciliacion-list/conciliacion-list.module').then(module => module.ConciliacionListModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateConciliacionComponent,
        children: [
          {
            path: 'update-conciliacion',
            loadChildren: () => import('./AP/ap_conciliacion/update-conciliacion/update-conciliacion.module').then(module => module.UpdateConciliacionModule)
          }
        ]
      },
      {
        path: '',
        component: ConciliacionDetailsComponent,
        children: [
          {
            path: 'conciliacion-details',
            loadChildren: () => import('./AP/ap_conciliacion/conciliacion-details/conciliacion-details.module').then(module => module.ConciliacionDetailsModule)
          }
        ]
      },

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
        component: CreateLegalsComponent,
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
        component: MasterinventarysListComponent,
        children: [
          {
            path: 'master_inventarys-list',
            loadChildren: () => import('./inventarios/master_inventarys/masterinventarys-list/masterinventarys-list.module').then(module => module.MasterinventarysListModule)
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
        component: CollectionListComponent,
        children: [
          {
            path: 'collection-list',
            loadChildren: () => import('./collection/collection-list/collection-list.module').then(module => module.CollectionListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateCollectionComponent,
        children: [
          {
            path: 'create-collection',
            loadChildren: () => import('./collection/create-collection/create-collection.module').then(module => module.CreateCollectionModule)
          }
        ]
      },
      {
        path: '',
        component: CollectionDetailsComponent,
        children: [
          {
            path: 'collection-details/:id',
            loadChildren: () => import('./collection/collection-details/collection-details.module').then(module => module.CollectionDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateCollectionComponent,
        children: [
          {
            path: 'update-collection/:id',
            loadChildren: () => import('./collection/update-collection/update-collection.module').then(module => module.UpdateCollectionModule)
          }
        ]
      },
      {
        path: '',
        component: ReporteARListComponent,
        children: [
          {
            path: 'resporte-ar-list',
            loadChildren: () => import('./AR/ResporteAR/reporte-ar-list/reporte-ar-list.module').then(module => module.ReporteARListModule)
          }
        ]
      },

      {
        path: '',
        component: CustomerListComponent,
        children: [
          {
            path: 'customer-list',
            loadChildren: () => import('./customer/customer-list/customer-list.module').then(module => module.CustomerListModule)
          }
        ]
      },
      {
        path: '',
        component: CustomerDetailsComponent,
        children: [
          {
            path: 'customer-details/:id',
            loadChildren: () => import('./customer/customer-details/customer-details.module').then(module => module.CustomerDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: CreateCustomerComponent,
        children: [
          {
            path: 'create-customer',
            loadChildren: () => import('./customer/create-customer/create-customer.module').then(module => module.CreateCustomerModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateCustomerComponent,
        children: [
          {
            path: 'update-customer/:id',
            loadChildren: () => import('./customer/update-customer/update-customer.module').then(module => module.UpdateCustomerModule)
          }
        ]
      },
      {
        path: '',
        component: CollectionConceptsListComponent,
        children: [
          {
            path: 'collectionconcepts-list',
            loadChildren: () => import('./AR/collectionConcepts/collectionconcepts-list/collection-concepts-list.module').then(module => module.CollectionConceptsListModule)
          }
        ]
      },
      {
        path: '',
        component: CollectionConceptsDetailsComponent,
        children: [
          {
            path: 'collectionconcepts-details/:id',
            loadChildren: () => import('./AR/collectionConcepts/collectionconcepts-details/collection-conceptsdetails.module').then(module => module.CollectionConceptsDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: CollectionConceptsCreateComponent,
        children: [
          {
            path: 'create-collection-concepts',
            loadChildren: () => import('./AR/collectionConcepts/create-collectionconcepts/create-collection-concepts.module').then(module => module.CollectionConceptsCreateModule)
          }
        ]
      },
      {
        path: '',
        component: CollectionConceptsUpdateComponent,
        children: [
          {
            path: 'update-collectionconcepts/:id',
            loadChildren: () => import('./AR/collectionConcepts/update-collectionconcepts/update-collection-concepts.module').then(module => module.CollectionConceptsUpdateModule)
          }
        ]
      },
      //////////////////
      {
        path: '',
        component: PaymentTermsListComponent,
        children: [
          {
            path: 'payment-terms-list',
            loadChildren: () => import('./AR/paymentTerms/payment-terms-list/payment-terms-list.module').then(module => module.PaymentTermsListModule)
          }
        ]
      },
      {
        path: '',
        component: PaymentTermsDetailsComponent,
        children: [
          {
            path: 'payment-terms-details/:id',
            loadChildren: () => import('./AR/paymentTerms/payment-terms-details/payment-terms-details.module').then(module => module.PaymentTermsDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: CreatePaymentTermsComponent,
        children: [
          {
            path: 'create-payment-terms',
            loadChildren: () => import('./AR/paymentTerms/create-payment-terms/create-payments-terms.module').then(module => module.CreatePaymentTermsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdatePaymentTermsComponent,
        children: [
          {
            path: 'update-payment-terms/:id',
            loadChildren: () => import('./AR/paymentTerms/update-payment-terms/update-payment-terms.module').then(module => module.UpdatePaymentTermsModule)
          }
        ]
      },
      /////
      {
        path: '',
        component: TransactionTypesListComponent,
        children: [
          {
            path: 'transactiontypes-list',
            loadChildren: () => import('./AR/TransactionTypes/transactiontypes-list/transactiontypes-list.module').then(module => module.TransactionTypesListModule)
          }
        ]
      },
      {
        path: '',
        component: TransactionTypesDetailsComponent,
        children: [
          {
            path: 'transactiontypes-details/:id',
            loadChildren: () => import('./AR/TransactionTypes/transactiontypes-details/transactiontypes-details.module').then(module => module.TransactionTypesDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: CreateTransactionTypesComponent,
        children: [
          {
            path: 'create-transactiontypes',
            loadChildren: () => import('./AR/TransactionTypes/create-transactiontypes/create-transactiontypes.module').then(module => module.CreateTransactionTypesModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateTransactionTypesComponent,
        children: [
          {
            path: 'update-transactiontypes/:id',
            loadChildren: () => import('./AR/TransactionTypes/update-transactiontypes/update-transactiontypes.module').then(module => module.UpdateTransactionTypesModule)
          }
        ]
      },
      /////
      {
        path: '',
        component: PaymentsARListComponent,
        children: [
          {
            path: 'payments-ar-list',
            loadChildren: () => import('./AR/payments/payments-ar-list/payments-ar-list.module').then(module => module.PaymentsARListModule)
          }
        ]
      },
      {
        path: '',
        component: PaymentsARDetailsComponent,
        children: [
          {
            path: 'payments-ar-details/:id',
            loadChildren: () => import('./AR/payments/payments-ar-details/payments-ar-details.module').then(module => module.PaymentsARDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: CreatePaymentsARComponent,
        children: [
          {
            path: 'create-payments-ar',
            loadChildren: () => import('./AR/payments/create-payments-ar/create-payments-ar.module').then(module => module.createPaymentsARModule)
          }
        ]
      },
      {
        path: '',
        component: UpdatePaymentsARComponent,
        children: [
          {
            path: 'update-payments-ar/:id',
            loadChildren: () => import('./AR/payments/update-payments-ar/update-payments-ar.module').then(module => module.UpdatePaymentsARModule)
          }
        ]
      },
      //
      {
        path: '',
        component: ConciliacionARListComponent,
        children: [
          {
            path: 'conciliacion-ar-list',
            loadChildren: () => import('./AR/ar-conciliacion/conciliacion-ar-list/conciliacion-ar-list.module').then(module => module.ConciliacionListModule)
          }
        ]
      },
      {
        path: '',
        component: ConciliacionARDetailsComponent,
        children: [
          {
            path: 'conciliacion-ar-details/:id',
            loadChildren: () => import('./AR/ar-conciliacion/conciliacion-ar-details/conciliacion-ar-details.module').then(module => module.ConciliacionDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: CreateConciliacionARComponent,
        children: [
          {
            path: 'create-conciliacion-ar',
            loadChildren: () => import('./AR/ar-conciliacion/create-conciliacion-ar/create-conciliacion-ar.module').then(module => module.CreateConciliacionARModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateConciliacionARComponent,
        children: [
          {
            path: 'update-conciliacion-ar/:id',
            loadChildren: () => import('./AR/ar-conciliacion/update-conciliacion-ar/update-conciliacion-ar.module').then(module => module.UpdateConciliacionModule)
          }
        ]
      },
      //

      {
        path: '',
        component: CreateReferralAddressComponent,
        children: [
          {
            path: 'create-referral-address',
            loadChildren: () => import('./AR/referralAddress/create-referral-address/create-referral-address.module').then(module => module.CreateReferralAddressModule)
          }
        ]



      }
      ,
      {
        path: '',
        component: ReferralAddressDetailsComponent,
        children: [
          {
            path: 'referral-address-details/:id',
            loadChildren: () => import('./AR/referralAddress/referral-address-details/referral-address_details.module').then(module => module.ReferralAddressDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateReferralAddressComponent,
        children: [
          {
            path: 'update-referral-address/:id',
            loadChildren: () => import('./AR/referralAddress/update-referral-address/update-referral-address.module').then(module => module.UpdateReferralAddressModule)
          }
        ]
      }
      ,
      {
        path: '',
        component: CondominumsListComponent,
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
        component: ReferralAddressListComponent,
        children: [
          {
            path: 'referral-address-list',
            loadChildren: () => import('./AR/referralAddress/referral-address-list/referral-address-list.module').then(module => module.ReferralAddressListModule)
          }
        ]



      }
      ,

      {
        path: '',
        component: CreateCondominumsComponent,
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
      },

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
      },
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

        component: UnitOfMeasuresListComponent,
        children: [
          {
            path: 'unitof-measures-list',
            loadChildren: () => import('./inventarios/unit_of_measures/unit-of-measures-list/unit-of-measures-list.module').then(module => module.UnitOfMeasuresListModule)
          }
        ]
      },
      {
        path: '',
        component: UnitOfMeasuresListComponent,
        children: [
          {
            path: 'unitofmeasures-list',
            loadChildren: () => import('./inventarios/unit_of_measures/unit-of-measures-list/unit-of-measures-list.module').then(module => module.UnitOfMeasuresListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateMasterinventarysComponent,
        children: [
          {
            path: 'create-master',
            loadChildren: () => import('./inventarios/master_inventarys/create-masterinventarys/create-masterinventarys.module').then(module => module.CreateMasterinventarysModule)
          }
        ]
      },
      {
        path: '',
        component: CreateArticlesComponent,
        children: [
          {
            path: 'create-articles',
            loadChildren: () => import('./inventarios/articles/create-articles/create-articles.module').then(module => module.CreateArticlesModule)
          }
        ]
      },
      {
        path: '',
        component: ArticlesListComponent,
        children: [
          {
            path: 'Articles-list',
            loadChildren: () => import('./inventarios/articles/articles-list/articles-list.module').then(module => module.ArticlesListModule)
          }
        ]
      },
      {

        path: '',
        component: ArticlesDetailsComponent,
        children: [
          {
            path: 'articles1-details/:id',
            loadChildren: () => import('./inventarios/articles/articles-details/articles-details.module').then(module => module.ArticlesDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateArticlesComponent,
        children: [
          {
            path: 'update-articles/:id',
            loadChildren: () => import('./inventarios/articles/update-articles/update-articles.module').then(module => module.UpdateArticlesModule)
          }
        ]
      }
      ,
      {

        path: '',
        component: BankAccountsDetailsComponent,
        children: [
          {
            path: 'bank-accounts-details/:id',
            loadChildren: () => import('./treasury/bankAccounts/bank-accounts-details/bank-accounts-details.module').then(module => module.BankAccountsDetailsModule)
          }
        ]
      },
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
      },
      {
        path: '',
        component: UpdateTransfersComponent,
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
      },
      {
        path: '',
        component: MasterinventarysDetailsComponent,
        children: [
          {
            path: 'master1-details/:id',
            loadChildren: () => import('./inventarios/master_inventarys/masterinventarys-details/masterinventarys-details.module').then(module => module.MasterInventarysListModule)
          }
        ]
      },
      {
        path: '',
        component: UnitOfMeasuresDetailsComponent,
        children: [
          {
            path: 'unit-details/:id',
            loadChildren: () => import('./inventarios/unit_of_measures/unit-of-measures-details/unit-of-measures-details.module').then(module => module.UnitOfMeasuaresDetailsModule)
          }
        ]
      },
    
      {
        path: '',
        component: TransactionsentrysListComponent,
        children: [
          {
            path: 'transactions-entrys-list',
            loadChildren: () => import('./inventarios/transactions_entrys/transactionsentrys-list/transactionsentrys-list.module').then(module => module.TransactionsEntrysListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateSubcategoriesComponent,
        children: [
          {
            path: 'subcategori-create',
            loadChildren: () => import('./inventarios/sub_categories/create-subcategories/create-subcategories.module').then(module => module.CreateSubcategoriesModule)
          }
        ]
      },
      {
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
      },
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
      ///

      {
        path: '',
        component: CreateDepositAccountComponent,
        children: [
          {
            path: 'deposit-account-create',
            loadChildren: () => import('./depositAccount/create-deposit-account/deposit-account-create.module').then(module => module.DepositAccountCreateModule)
          }
        ]



      }
      ,
      {
        path: '',
        component: DepositAccountDetailsComponent,
        children: [
          {
            path: 'deposit-account-details/:id',
            loadChildren: () => import('./depositAccount/deposit-account-details/deposit-account-details.module').then(module => module.DepositAccountDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateDepositAccountComponent,
        children: [
          {
            path: 'update-deposit-account/:id',
            loadChildren: () => import('./depositAccount/update-deposit-account/deposit-account-update.module').then(module => module.DepositAccountUpdateModule)
          }
        ]
      }
      ,

      {
        path: '',
        component: DepositAccountListComponent,
        children: [
          {
            path: 'deposit-account-list',
            loadChildren: () => import('./depositAccount/deposit-account-list/deposit-account-list.module').then(module => module.DepositAccountListModule)
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
      },
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
      },
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
            path: 'sub-details/:id',
            loadChildren: () => import('./inventarios/sub_categories/subcategories-details/subcategories-details.module').then(module => module.SubCategoriesDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateMasterinventarysComponent,
        children: [
          {
            path: 'update-masterinventarys/:id',
            loadChildren: () => import('./inventarios/master_inventarys/update-masterinventarys/update-masterinventarys.module').then(module => module.UpdateMasterInventarysModule)
          }
        ]
      },
      {
        path: '',

        component: SubinventarysDetailsComponent,
        children: [
          {
            path: 'sub_inventarys-details/:id',
            loadChildren: () => import('./inventarios/sub_inventarys/subinventarys-details/subinventarys-details.module').then(module => module.SubinventarysDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateSubinventarysComponent,
        children: [
          {
            path: 'update-subinventarys/:id',
            loadChildren: () => import('./inventarios/sub_inventarys/update-subinventarys/update-subinventarys.module').then(module => module.UpdateSubCategoriesModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateBankCodesComponent,
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
      },
      {
        path: '',

        component: ConfigMainteListComponent,
        children: [
          {
            path: 'config-Maintenlist',
            loadChildren: () => import('./config-mainte/config-mainte-list/config-mainte-list.module').then(module => module.ConfigmainteListModule)
          }
        ]
      },

      {
        path: '',

        component: DetailsPayrollComponent,
        children: [
          {
            path: 'details-payroll/:id',
            loadChildren: () => import('./config-mainte/details-payroll/details-payroll.module').then(module => module.DetailsPayrollModule)
          }
        ]
      },
      {
        path: '',
        component: CreatePayrollComponent,
        children: [
          {
            path: 'create-payroll',
            loadChildren: () => import('./config-mainte/create-payroll/create-payroll.module').then(module => module.CreatePayrollModule)

          }
        ]
      },
      {
        path: '',

        component: UpdatePayrollComponent,
        children: [
          {
            path: 'Update-payroll/:id',
            loadChildren: () => import('./config-mainte/update-payroll/update-payroll.module').then(module => module.UpdatePayrollModule)
          }
        ]
      }
      ,
      {
        path: '',

        component: ReportListComponent,
        children: [
          {
            path: 'reports-payroll',
            loadChildren: () => import('./config-mainte/reports-payroll/report-list/report-list.module').then(module => module.ReportListModule)
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
      },
      ////////,
      {
        path: '',
        component: PdfArticulogListComponent,
        children: [
          {
            path: 'report-articulog-list',
            loadChildren: () => import('./inventarios/Pdf-articulo-g/pdf-articulog-list/pdf-articulog-list.module').then(module => module.PdfArticulogListModule)
          }
        ]



      },
      {
        path: '',
        component: PdfHistoriaListComponent,
        children: [
          {
            path: 'report-historial-list',
            loadChildren: () => import('./inventarios/pdf-historiarti/pdf-historia-list/pdf-historia-list.module').then(module => module.PdfHistoriaListModule)
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
      },
      {
        path: '',
        component: CreateMasterinventarysComponent,
        children: [
          {
            path: 'create-masterinventarys',
            loadChildren: () => import('./inventarios/master_inventarys/create-masterinventarys/create-masterinventarys.module').then(module => module.CreateMasterinventarysModule)
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
      },
      {
        path: '',
        component: FacpayDetailsComponent,
        children: [
          {
            path: 'fac_detalis/:id',
            loadChildren: () => import('./po/portal/facpay-details/facpay-details.module').then(module => module.FacpayDetailsModule)
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
      },
      
      
      ///Order-lis- canceladas

      {
        path: '',
        component: PurcharseListCanceladasComponent,
        children: [
          {
            path: 'purchase_canceladas-list',
            loadChildren: () => import('./purcharse/purcharse-list-canceladas/purcharse-list.canceladas.module').then(module => module.PurcharseListCanceladasModule)
          }
        ]
      }

,
      {
        path: '',
        component: CreatePurcharseComponent,
        children: [
          {
            path: 'create-purcharse',
            loadChildren: () => import('./purcharse/create-purcharse/create-purcharse.module').then(module => module.PurcharseCreateModule)
          }
        ]
      },

      ////INV-TRANSACIONES DE ENTRADA

     {
        path: '',
        component: CreateEntrysComponent,
        children: [
          {
            path: 'create-entrys',
            loadChildren: () => import('./inventarios/transactions_entrys/create-entrys/create-entrys.module').then(module => module.CreateEntrysModule)
          }
        ]
      }
      
      ,


     
    
      {
        path: '',
        component: CreateSalidasComponent ,
        children: [
          {
            path: 'create-salidas',
            loadChildren: () => import('./inventarios/transactions_entrys/create-salidas/create-salidas.module').then(module => module.CreateSalidasModule)
          }
        ]
      }
      
      ,

      {
        path: '',
        component: UpdatePurcharseComponent,
        children: [
          {
            path: 'update-purcharse/:id',
            loadChildren: () => import('./purcharse/update-purcharse/update-purcharse.module').then(module => module.UpdatePurcharseModule)
          }
        ]
      }


      ,


      {
        path: '',
        component: PurcharseDetailsComponent,
        children: [
          {
            path: 'purcharse-details/:id',
            loadChildren: () => import('./purcharse/purcharse-details/purcharse-details.module').then(module => module.PurcharseDetailsModule)
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
      },
      {
        path: '',
        component: UpdatePaymentDocumentsComponent,
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
        component: UpdateUnitOfMeasuresComponent,
        children: [
          {
            path: 'update-measures/:id',
            loadChildren: () => import('./inventarios/unit_of_measures/update-unit-of-measures/update-unit-of-measures.module').then(module => module.UpdateUnitOfMeasuresModule)
          }
        ]
      },
      {
        path: '',
        component: CreateUnitOfMeasuresComponent,
        children: [
          {
            path: 'create-measures',
            loadChildren: () => import('./inventarios/unit_of_measures/create-unit-of-measures/create-unit-of-measures.module').then(module => module.CreateUnitOfMeasuresModule)
          }
        ]
      },
      {
        path: '',

        component: UnitOfMeasuresListComponent,
        children: [
          {
            path: 'unitof-measures-list',
            loadChildren: () => import('./inventarios/unit_of_measures/unit-of-measures-list/unit-of-measures-list.module').then(module => module.UnitOfMeasuresListModule)
          }
        ]
      },
      {
        path: '',
        component: UnitOfMeasuresListComponent,
        children: [
          {
            path: 'unitofmeasures-list',
            loadChildren: () => import('./inventarios/unit_of_measures/unit-of-measures-list/unit-of-measures-list.module').then(module => module.UnitOfMeasuresListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateMasterinventarysComponent,
        children: [
          {
            path: 'create-master',
            loadChildren: () => import('./inventarios/master_inventarys/create-masterinventarys/create-masterinventarys.module').then(module => module.CreateMasterinventarysModule)
          }
        ]
      },
      {
        path: '',
        component: ArticlesListComponent,
        children: [
          {
            path: 'Articles-list',
            loadChildren: () => import('./inventarios/articles/articles-list/articles-list.module').then(module => module.ArticlesListModule)
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
      },
      {
        path: '',
        component: UpdateBankAccountsComponent,
        children: [
          {
            path: 'update-bank-accounts/:id',
            loadChildren: () => import('./treasury/bankAccounts/update-bank-accounts/bank-accounts-update.module').then(module => module.BankAccountsUpdateModule)
          }

          ,

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
      },
      /// 
      {
        path: '',
        component: PdfPurcharseListComponent,
        children: [
          {
            path: 'pdf-purchase_orders-list',
            loadChildren: () => import('./po/pdf/pdf-purcharse/pdf-purcharse-list/pdf-purcharse-list.module').then(module => module.PdfPurcharseListModule)
          }
        ]
      }, {
        path: '',
        component: PdfPurcharseDetailsComponent,
        children: [
          {
            path: 'pdf-purcharse-repor-details/:id',
            loadChildren: () => import('./po/pdf/pdf-purcharse/pdfs-purcharse-details/pdf-purcharse-details.module').then(module => module.PdfPurcharseDetailsModule)
          }
        ]
      },




      {
        path: '',
        component: PdfSupplierListComponent,
        children: [
          {
            path: 'supplier_repor-list',
            loadChildren: () => import('./po/pdf/pdf-supplier-list/pdf-supplier-list.module').then(module => module.SupplierPdftModule)
          }
        ]
      },

      {
        path: '',
        component: PdfSupplierDetailsComponent,
        children: [
          {
            path: 'pdf-supplier-repor-details/:id',
            loadChildren: () => import('./po/pdf/pdf-purcharse-details/pdf-supplier-details.module').then(module => module.PdfSupplierDetailsModule)
          }
        ]
      },


      {
        path: '',
        component: StatusPrecioarticuloListComponent,
        children: [
          {
            path: 'status-precios-list',
            loadChildren: () => import('./inventarios/status-precio/status-precioarticulo-list/status-precioarticulo-list.module').then(module => module.StatusPrecioarticuloListModule)
          }
        ]
      },
      {
        path: '',
        component: CreatePreciosComponent,
        children: [
          {
            path: 'create-precios',
            loadChildren: () => import('./inventarios/status-precio/create-precio/create-precios.module').then(module => module.CreatePreciosModule)
          }
        ]
      },
      {
        path: '',
        component: PrecioDetailsComponent,
        children: [
          {
            path: 'precio-details/:id',
            loadChildren: () => import('./inventarios/status-precio/precio-details/precio-details.module').then(module => module.PrecioDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdatePrecioComponent,
        children: [
          {
            path: 'update-precio/:id',
            loadChildren: () => import('./inventarios/status-precio/update-precio/update-precio.module').then(module => module.UpdatePrecioModule)
          }
        ]
      },




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
      },
      {
        path: '',
        component: UpdateTransfersComponent,
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
      },
      {
        path: '',
        component: MasterinventarysDetailsComponent,
        children: [
          {
            path: 'master1-details/:id',
            loadChildren: () => import('./inventarios/master_inventarys/masterinventarys-details/masterinventarys-details.module').then(module => module.MasterInventarysListModule)
          }
        ]
      },
      {
        path: '',
        component: UnitOfMeasuresDetailsComponent,
        children: [
          {
            path: 'unit-details/:id',
            loadChildren: () => import('./inventarios/unit_of_measures/unit-of-measures-details/unit-of-measures-details.module').then(module => module.UnitOfMeasuaresDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: StatusListComponent,
        children: [
          {
            path: 'status-articles-list',
            loadChildren: () => import('./inventarios/status/status-list/status-list.module').then(module => module.StatusListModule)
          }
        ]
      },
      ////


      {
        path: '',
        component: CreateStatusComponent,
        children: [
          {
            path: 'status-create',
            loadChildren: () => import('./inventarios/status/create-status/create-status.module').then(module => module.CreateStatusModule)
          }
        ]
      }
      ,
      {
        path: '',
        component: StatusDetailsComponent,
        children: [
          {
            path: 'status-details/:id',
            loadChildren: () => import('./inventarios/status/status-details/status-details.module').then(module => module.StatusDetailsModule)
          }
        ]
      },
      {
        path: '',
        component: UpdateStatusComponent,
        children: [
          {
            path: 'update-status/:id',
            loadChildren: () => import('./inventarios/status/update-status/update-status.module').then(module => module.UpdateStatusModule)
          }
        ]
      },


      {
        path: '',
        component: TransactionsentrysListComponent,
        children: [
          {
            path: 'transactions-entrys-list',
            loadChildren: () => import('./inventarios/transactions_entrys/transactionsentrys-list/transactionsentrys-list.module').then(module => module.TransactionsEntrysListModule)
          }
        ]
      },
      {
        path: '',
        component: CreateSubcategoriesComponent,
        children: [
          {
            path: 'subcategori-create',
            loadChildren: () => import('./inventarios/sub_categories/create-subcategories/create-subcategories.module').then(module => module.CreateSubcategoriesModule)
          }
        ]

      }
      ,

      {
        path: '',
        component: AcTenantsListComponent,
        children: [
          {
            path: 'ac-tenants-list',
            loadChildren: () => import('./AC/ac-tenants/ac-tenants-list/ac-tenants-list.module').then(module => module.AcTenantsListModule)

          }
        ]

      },
      {
        path: '',
        component: AcUpdateTenantsComponent,
        children: [
          {
            path: 'ac-update-tenants/:id',
            loadChildren: () => import('./AC/ac-tenants/ac-update-tenants/ac-update-tenants.module').then(module => module.AcUpdateTenantsModule)

          }
        ]

      },
      {
        path: '',
        component: AcVisitorsListComponent,
        children: [
          {
            path: 'ac-visitors-list',
            loadChildren: () => import('./AC/ac-visitors/ac-visitors-list/ac-visitors-list.module').then(module => module.AcVisitorsListModule)

          }
        ]

      },
      {
        path: '',
        component: AcVisitorsDetailsComponent,
        children: [
          {
            path: 'ac-visitors-details/:id',
            loadChildren: () => import('./AC/ac-visitors/ac-visitors-details/ac-visitors-details.module').then(module => module.AcVisitorsDetailsModule)

          }
        ]

      },
      {
        path: '',
        component: AcUpdateVisitorsComponent,
        children: [
          {
            path: 'ac-update-visitors/:id',
            loadChildren: () => import('./AC/ac-visitors/ac-update-visitors/ac-update-visitors.module').then(module => module.AcUpdateVisitorsModule)

          }
        ]

      },
      {
        path: '',
        component: AcCreateVisitorsComponent,
        children: [
          {
            path: 'ac-create-visitors',
            loadChildren: () => import('./AC/ac-visitors/ac-create-visitors/ac-create-visitors.module').then(module => module.AcCreateVisitorsModule)

          }
        ]

      },
      {
        path: '',
        component: AcTagsListComponent,
        children: [
          {
            path: 'ac-tags-list',
            loadChildren: () => import('./AC/ac-tags/ac-tags-list/ac-tags-list.module').then(module => module.AcTagsListModule)

          }
        ]

      },
      {
        path: '',
        component: AcTagsDetailsComponent,
        children: [
          {
            path: 'ac-tags-details/:id',
            loadChildren: () => import('./AC/ac-tags/ac-tags-details/ac-tags-details.module').then(module => module.AcTagsDetailsModule)

          }
        ]

      },
      {
        path: '',
        component: AcInactiveTagsListComponent,
        children: [
          {
            path: 'ac-inactive-tags-list',
            loadChildren: () => import('./AC/ac-tags/ac-inactive-tags-list/ac-inactive-tags-list.module').then(module => module.AcInactiveTagsListModule)

          }
        ]

      },
      {
        path: '',
        component: AcReportsInternalComponent,
        children: [
          {
            path: 'ac-reports-internal',
            loadChildren: () => import('./AC/ac-reports/ac-reports-internal/ac-reports-internal.module').then(module => module.AcReportsInternalModule)

          }
        ]

      },
      {
        path: '',
        component: AcReportsPeopleComponent,
        children: [
          {
            path: 'ac-reports-people',
            loadChildren: () => import('./AC/ac-reports/ac-reports-people/ac-reports-people.module').then(module => module.AcReportsPeopleModule)

          }
        ]

      },

      {
        path: '',

        component: BilltopayListComponent,
        children: [
          {
            path: 'Portal_list',
            loadChildren: () => import('./AP/ap_billtopay/billtopay-list/billtopay-list.module').then(module => module.BilltopayListModule)
          }
        ]
      },
      {
        path: '',
        component: AcReportsVisitorComponent,
        children: [
          {
            path: 'ac-reports-visitor',
            loadChildren: () => import('./AC/ac-reports/ac-reports-visitor/ac-reports-visitor.module').then(module => module.AcReportsVisitorModule)

          }
        ]

      },
      {
        path: '',
        component: AcCreateTagsComponent,
        children: [
          {
            path: 'ac-create-tags',
            loadChildren: () => import('./AC/ac-tags/ac-create-tags/ac-create-tags.module').then(module => module.AcCreateTagsModule)

          }
        ]
      },
      {
        path: '',
        component: ChatRoomComponent,
        children: [
          {
            path: 'chat-room',
            loadChildren: () => import('./chat/chat-room/chat-room.module').then(module => module.ChatRoomModule)

          }
        ]
      },




    ]

  },
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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
