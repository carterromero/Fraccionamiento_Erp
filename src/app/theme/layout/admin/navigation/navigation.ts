import {Injectable} from '@angular/core';
import { Permissions } from 'src/app/services/admin/permissions';
import { PermissionsService } from 'src/app/services/admin/permissions.service';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItemss = [
  {
    
    id: 'navigation',
    title: 'Principal',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        classes: 'nav-item',
        icon: 'feather icon-home'
      }
  
    ]
  
    
  },
  {
    id: 'reservations-main',
    title: 'Reservaciones',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'Reservations',
        title: 'Manejo Reservaciones',
        type: 'collapse',
        url: '/reservations-list',
        icon: 'feather icon-user'
      }
    ]
  },


  {    
    id: 'admin-main',
    title: 'Administración',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'admin-catalog',
        title: 'Catalogos',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'legals',
            title: 'Empresas',
            type: 'item',            
            url: '/legals-list'
            
          },

          {
            id: 'condominus',
            title: 'Fraccionamientos',
            type: 'item',            
            url: '/condominus-list'
            
          }                 
        ]
      },

      

      {
        id: 'security-catalog',
        title: 'Seguridad',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'rols',
            title: 'Roles',
            type: 'item',            
            url: '/rols-list'
            
          },

          {
            id: 'permisos',
            title: 'Permisos',
            type: 'item',            
            url: '/permissions-list'
            
          },

          {
            id: 'usuarios',
            title: 'Usuarios',
            type: 'item',            
            url: '/usuarios-list' 
          }
        ]
      }
    ]
  }, {
    id: 'contabilidad',
    title: 'Contabilidad',
    type: 'group',
    icon: 'feather icon-book',
    children: [
      {
        id: 'gl_catalogs',
        title: 'Catalogos',
        type: 'collapse',
        icon: 'feather icon-layout',
        children: [
          {
            id: 'periods-list',
            title: 'Periodos',
            type: 'item',            
            url: '/periods-list'
            
          }   , 
          {
            id: 'accounts-list',
            title: 'Contablilidad Cuentas',
            type: 'item',            
            url: '/accounts-list'
            
          }, 
          {
            id: 'journals-list',
            title: 'polizas',
            type: 'item',            
            url: '/journals-list'
            
          }              
        ]
      },
     
      {
        id: 'gl_reports',
        title: 'Reportes',
        type: 'collapse',
        icon: 'feather icon-server',
        children: [
          {
            id: 'transl-list',
            title: 'Reporte transacciones',
            type: 'item',            
            url: '/transl-list'
            
          }                   
        ]
      }
    ] 
  }
  ,
  {    
    id: 'AP-main',
    title: 'Cuentas por pagar ',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'ap-catalog',
        title: 'Catalogos',
        type: 'collapse',
        icon: 'feather icon-layout',
        children: [
          {
            id: 'creditor',
            title: 'Acreedor',
            type: 'item',            
            url: '/creditor-list'
            
          },
          
          {
            id: 'crear_cuenta',
            title: 'Crear una factura ',
            type: 'item',            
            url: '/billtopay-list' 
            
          }
                              
        ]
      }, {
        id: 'ap-catalog',
        title: 'Operacion',
        type: 'collapse',
        icon: 'feather icon-file-text',
        children: [
  

          {
            id: 'cuenta_pagar',
            title: 'Registro de pago ',
            type: 'item',            
            url: '/payment-record-list' 
            
          },
          
          {
            id: 'conciliacion_id',
            title: 'conciliacion',
            type: 'item',            
            url: '/conciliacion-list' 
            
          }
                              
        ]
      },
      {
        id: 'ap-catalog',
        title: 'Reportes',
        type: 'collapse',
        icon: 'feather icon-server',
        children: [
  

          {
            id: 'repore_contable',
            title: 'Reporte contable  ',
            type: 'item',            
            url: '/repo-cred-pay-list'
            
          },
          {
            id: 'reporte_vencidos',
            title: ' reporte pagos vencidos ',
            type: 'item',            
            url: '/repo-cred-pay-nocont-list'
            
          }
                              
        ]
      },

    ]
  },


  {    
    id: 'Treasury-main',
    title: 'Tesoreria',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'Treasury-catalog',
        title: 'Configuración y Mantenimiento',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'bankCodes',
            title: 'Codigos Bancarios',
            type: 'item',            
            url: '/bank-codes-list'
            
          },

          {
            id: 'banks',
            title: 'Gestionar Bancos',
            type: 'item',            
            url: '/manage-banks-list'
            
          },
          {
            id: 'bankAccounts',
            title: 'Cuentas Bancarias',
            type: 'item',            
            url: '/bank-accounts-list'
            
          },
          {
            id: 'transfers',
            title: 'Transferencias',
            type: 'item',            
            url: '/transfers-list'
            
          },
          {
            id: 'paymentDocuments',
            title: 'Documentos de Pago',
            type: 'item',            
            url: '/payment-documents-list'
            
          }
                                
        ]
      },
      {
        id: 'Treasury-operation',
        title: 'Conciliación y Estados de Cuenta',
        type: 'collapse',
        icon: 'feather icon-file-text',
        children: [
  

          {
            id: 'account_statements',
            title: 'Estado de Cuenta',
            type: 'item',            
            url: '/account-statements-list'
            
          },
          {
            id: 'automaticConciliation',
            title: 'Conciliación Automática',
            type: 'item',            
            url: '/automatic-conciliation-list'
            
          },
          {
            id: 'manualConciliation',
            title: 'Conciliación Manual',
            type: 'item',            
            url: '/manual-conciliation-list'
            
          }
                              
        ]
      },
    ]
  },
  {
    id: 'AR-main',
      title: 'Cuentas por cobrar',
      type: 'group',
      icon: 'feather icon-monitor',
      children: [
        {
          id: 'AR-catalog',
          title: 'Catalogos',
          type: 'collapse',
          icon: 'feather icon-monitor',
          children: [
            {
              id: 'customer',
              title: 'Administrar Residentes / clientes',
              type: 'item',            
              url: '/customer-list'
              
            },
            {
              id: 'Direction',
              title: 'Direccion de remison',
              type: 'item',            
              url: '/referral-address-list'
              
            },
            {
              id: 'paymentsterms',
              title: 'Terminos de pago',
              type: 'item',            
              url: '/payment-terms-list'
              
            },
            {
              id: 'colllectionconcepts',
              title: 'Conceptos de Cobro',
              type: 'item',            
              url: '/collectionconcepts-list'
              
            },
            {
              id: 'transactiontypes',
              title: 'Tipo de transaccion',
              type: 'item',            
              url: '/transactiontypes-list'
              
            },
            {
              id: 'deposittaccountt',
              title: 'Cuenta de deposito',
              type: 'item',            
              url: '/deposit-account-list'
              
            },
            {
              id: 'collection',
              title: 'Cobro',
              type: 'item',            
              url: '/collection-list'
              
            },
            {
              id: 'paymentsar',
              title: 'Pago',
              type: 'item',            
              url: '/payments-ar-list'
              
            },
                                  
          ]
        },
      ]
        
    

      },
  {    
        id: 'RH-main',
        title: 'Recursos Humanos ',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'rh-catalog',
            title: 'Catalogos',
            type: 'collapse',
            icon: 'feather icon-monitor',
            children: [
              {
                id: 'departments',
                title: 'Departamentos',
                type: 'item',            
                url: '/departments-list'
                
              },
              {
                id: 'workplaces',
                title: 'Puestos',
                type: 'item',            
                url: '/workplaces-list'
                
              }                      
            ]
          },
          {
            id: 'rh-employees',
            title: 'Empleados',
            type: 'collapse',
            icon: 'feather icon-user',
            children: [
              {
                 id: 'rh-employee',
                title: 'Empleados',
                type: 'item',            
                url: '/employee-list'
              }               
            ]
          },
          {
            id: 'rh-agreements',
            title: 'Contrato',
            type: 'collapse',
            icon: 'feather icon-user',
            children: [
              {
                 id: 'rh-agreement',
                title: 'Registrar contrato',
                type: 'item',            
                url: '/agreements-list'
              }               
            ]
          },
          {
            id: 'Tenants-main',
            title: 'Inquilinos',
            type: 'collapse',
            icon: 'feather icon-user',
            children: [
              {
                 id: 'rh-tenant',
                title: 'Crear Inquilinos',
                type: 'item',            
                url: '/tenants-list'
              }               
            ]
        },
          {
            id: 'rh-reports',
            title: 'Reportes',
            type: 'collapse',
            icon: 'feather icon-user',
            children: [
              {
                 id: 'rh-reports',
                title: 'Reporte viviendas',
                type: 'item',            
                url: '/tagvivienda-list'
              },
              {
                id: 'rh-reports',
               title: 'Reporte empleados',
               type: 'item',            
               url: '/reportemployee-list'
             },
             {
              id: 'rh-reports',
             title: 'Reporte departamento',
             type: 'item',            
             url: '/departmentsr-list'
           }                           
            ]
          },
        ]
      },    
{    
    id: 'po-main',
    title: 'Compras',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'po-catalog',
        title: 'Catalogos',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'supplier',
            title: 'Provedores',
            type: 'item',            
            url: '/supplier-list'
            
          },

          {
            id: 'payment_terms',
            title: 'Terminos de Pago',
            type: 'item',            
            url: '/payment_terms-list'
            
          }           
        ]
      },

      {
        id: 'po-opercion',
        title: 'Operacion',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'purchase_orders',
            title: 'Ordenes de Compra',
            type: 'item',            
            url: '/purchase_orders-list'
            
          }

                                
        ]
      },
      {
        id: 'po-reporte',
        title: 'Reportes ',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'Reports',
            title: 'Proveedores',
            type: 'item',            
            url: '/supplier_repor-list'
            
          },
          {
            id: 'Reportss',
            title: 'Ordenes de Compra',
            type: 'item',            
            url: '/pdf-purchase_orders-list'
            
          }

                                
        ]
      }


    ]
  },
  {    
    id: 'categories_main',
    title: 'Inventarios',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'categories',
        title: 'Catalogos',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'categories',
            title: 'Categorias',
            type: 'item',            
            url: '/categories-list'
            
          },                    
          {
            id: 'sub_categories',
            title: 'Sub Categorias',
            type: 'item',            
            url: '/sub_categories-list'
            
          },
          {
            id: 'unit_of_measures',
            title: 'Unidad Medidas',
            type: 'item',            
            url: '/unitofmeasures-list'
            
          },
          {
            id: 'sub_inventarys',
            title: 'Sub Inventarios',
            type: 'item',            
            url: '/sub_inventarys-list'
            
          },
          {
            id: 'master_inventarys',
            title: 'Maestro Inventarios',
            type: 'item',            
            url: '/master_inventarys-list'
            
          }, 
          {
            id: 'status',
            title: 'Estatus Articulos',
            type: 'item',            
            url: '/status-articles-list'
            
          },
          {
            id: 'precios',
            title: 'Precios',
            type: 'item',            
            url: '/status-precios-list'
            
          }
        ]
      },
      {
        id: 'po-opercion',
        title: 'Operación',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'articles',
            title: 'Articulos',
            type: 'item',            
            url: '/Articles-list'
            
          },
          {
            id: 'transactions_entrys',
            title: 'Entradas Transacciones',
            type: 'item',            
            url: '/transactions-entrys-list'
            
          }

                                
        ]
      }, 
      {
        id: 'report',
        title: 'Reportes',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'report',
            title: 'Reporte Articulo General',
            type: 'item',            
            url: '/report-list'
            
          },
          {
            id: 'report',
            title: 'Reporte Historial Articulo',
            type: 'item',            
            url: '/report-list'
            
          }                           
        ]
      },
    ]
  }

  ,
  {    
    id: 'Nomina_main',
    title: 'Nómina',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'configmainte',
        title: 'Catalogos',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'configmainte',
            title: 'Configuración y Mantenimiento',
            type: 'item',            
            url: '/config-Maintenlist'
            
          }
        ]
      }
    ]
  } 
];


@Injectable()
export class NavigationItem 
{
  
  

  public get() 
  {

    var dashboard = {};
    var admin= {};
    var contabilidad= {};
    var cuentasporpagar= {};
    var tesoreria= {};
    var cuentasporcobrar= {};
    var recursoshumanos= {};
    var compras= {};
    var inventarios= {};
    var nomina= {};
    var inquilino ={};


    dashboard= {
    
      id: 'navigation',
      title: 'Principal',
      type: 'group',
      icon: 'feather icon-monitor',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard/default',
          classes: 'nav-item',
          icon: 'feather icon-home'
        }
      ]      
    };



    if(localStorage.getItem("admin") == 'true'){
      admin = {    
        id: 'admin-main',
        title: 'Administración',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'admin-catalog',
            title: 'Catalogos',
            type: 'collapse',
            icon: 'feather icon-monitor',
            children: [
              {
                id: 'legals',
                title: 'Empresas',
                type: 'item',            
                url: '/legals-list'
                
              },
    
              {
                id: 'condominus',
                title: 'Fraccionamientos',
                type: 'item',            
                url: '/condominus-list'
                
              }                 
            ]
          },
    
          
    
          {
            id: 'security-catalog',
            title: 'Seguridad',
            type: 'collapse',
            icon: 'feather icon-monitor',
            children: [
              {
                id: 'rols',
                title: 'Roles',
                type: 'item',            
                url: '/rols-list'
                
              },
    
              {
                id: 'permisos',
                title: 'Permisos',
                type: 'item',            
                url: '/permissions-list'
                
              },
    
              {
                id: 'usuarios',
                title: 'Usuarios',
                type: 'item',            
                url: '/usuarios-list' 
              }
            ]
          }
        ]
      };
    };
     if (localStorage.getItem("contabilidad") == 'true'){
  
  contabilidad = {
    id: 'gl_main',
    title: 'Contabilidad',
    type: 'group',
    icon: 'feather icon-book',
    children: [
      {
        id: 'gl_catalogs',
        title: 'Catalogos',
        type: 'collapse',
        icon: 'feather icon-layout',
        children: [
          {
            id: 'periods-list',
            title: 'Periodos',
            type: 'item',            
            url: '/periods-list'
            
          }   , 
          {
            id: 'accounts-list',
            title: 'Contablilidad Cuentas',
            type: 'item',            
            url: '/accounts-list'
            
          }, 
          {
            id: 'journals-list',
            title: 'polizas',
            type: 'item',            
            url: '/journals-list'
            
          }              
        ]
      },
     
      {
        id: 'gl_reports',
        title: 'Reportes',
        type: 'collapse',
        icon: 'feather icon-server',
        children: [
          {
            id: 'transl-list',
            title: 'Reporte transacciones',
            type: 'item',            
            url: '/transl-list'
            
          }                   
        ]
      }
    ] 
  };
  };
   if (localStorage.getItem("cxp") == 'true'){
  
  cuentasporpagar = {    
    id: 'AP-main',
    title: 'Cuentas por pagar ',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'ap-catalog',
        title: 'Catalogos',
        type: 'collapse',
        icon: 'feather icon-layout',
        children: [
          {
            id: 'creditor',
            title: 'Acreedor',
            type: 'item',            
            url: '/creditor-list'
            
          },
          
          {
            id: 'crear_cuenta',
            title: 'Crear una factura ',
            type: 'item',            
            url: '/billtopay-list' 
            
          }
                              
        ]
      }, {
        id: 'ap-catalog',
        title: 'Operacion',
        type: 'collapse',
        icon: 'feather icon-file-text',
        children: [
  
  
          {
            id: 'cuenta_pagar',
            title: 'Registro de pago ',
            type: 'item',            
            url: '/payment-record-list' 
            
          },
          
          {
            id: 'conciliacion_id',
            title: 'conciliacion',
            type: 'item',            
            url: '/conciliacion-list' 
            
          }
                              
        ]
      },
      {
        id: 'ap-catalog',
        title: 'Reportes',
        type: 'collapse',
        icon: 'feather icon-server',
        children: [
  
  
          {
            id: 'repore_contable',
            title: 'Reporte contable  ',
            type: 'item',            
            url: '/repo-cred-pay-list'
            
          },
          {
            id: 'reporte_vencidos',
            title: ' reporte pagos vencidos ',
            type: 'item',            
            url: '/repo-cred-pay-nocont-list'
            
          }
                              
        ]
      },
  
    ]
  };
  };
   if (localStorage.getItem("tesoreria") == 'true'){
  
  tesoreria =  {    
    id: 'Treasury-main',
    title: 'Tesoreria',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'Treasury-catalog',
        title: 'Configuración y Mantenimiento',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'bankCodes',
            title: 'Codigos Bancarios',
            type: 'item',            
            url: '/bank-codes-list'
            
          },
  
          {
            id: 'banks',
            title: 'Gestionar Bancos',
            type: 'item',            
            url: '/manage-banks-list'
            
          },
          {
            id: 'bankAccounts',
            title: 'Cuentas Bancarias',
            type: 'item',            
            url: '/bank-accounts-list'
            
          },
          {
            id: 'transfers',
            title: 'Transferencias',
            type: 'item',            
            url: '/transfers-list'
            
          },
          {
            id: 'paymentDocuments',
            title: 'Documentos de Pago',
            type: 'item',            
            url: '/payment-documents-list'
            
          }
                                
        ]
      },
      {
        id: 'Treasury-operation',
        title: 'Conciliación y Estados de Cuenta',
        type: 'collapse',
        icon: 'feather icon-file-text',
        children: [
  
  
          {
            id: 'account_statements',
            title: 'Estado de Cuenta',
            type: 'item',            
            url: '/account-statements-list'
            
          },
          {
            id: 'automaticConciliation',
            title: 'Conciliación Automática',
            type: 'item',            
            url: '/automatic-conciliation-list'
            
          },
          {
            id: 'manualConciliation',
            title: 'Conciliación Manual',
            type: 'item',            
            url: '/manual-conciliation-list'
            
          }
                              
        ]
      },
    ]
  };
  };
  if (localStorage.getItem("cxc") == 'true'){
  
  cuentasporcobrar ={
    id: 'AR-main',
      title: 'Cuentas por cobrar',
      type: 'group',
      icon: 'feather icon-monitor',
      children: [
        {
          id: 'AR-catalog',
          title: 'Catalogos',
          type: 'collapse',
          icon: 'feather icon-monitor',
          children: [
            {
              id: 'customer',
              title: 'Administrar Residentes / clientes',
              type: 'item',            
              url: '/customer-list'
              
            },
            {
              id: 'Direction',
              title: 'Direccion de Remison',
              type: 'item',            
              url: '/referral-address-list'
              
            },
            {
              id: 'paymentsterms',
              title: 'Terminos de Pago',
              type: 'item',            
              url: '/payment-terms-list'
              
            },
            {
              id: 'concepts',
              title: 'Conceptos de Cobro',
              type: 'item',            
              url: '/collectionconcepts-list'
              
            },
            {
              id: 'transactiontypes',
              title: 'Tipo de Transaccion',
              type: 'item',            
              url: '/transactiontypes-list'
              
            },
            {
              id: 'depositaccount',
              title: 'Cuenta de Deposito ',
              type: 'item',            
              url: '/deposit-account-list'
              
            },
            
            {
              id: 'collection',
              title: 'Cobro',
              type: 'item',            
              url: '/collection-list'
              
            },
            {
              id: 'paymentsar',
              title: 'Pago',
              type: 'item',            
              url: '/payments-ar-list'
              
            },
            
                                  
          ]
        },
      ]
      };
    };
     if (localStorage.getItem("rh") == 'true')
     {
     
      recursoshumanos =  {    
        id: 'RH-main',
        title: 'Recursos Humanos ',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'rh-catalog',
            title: 'Catalogos',
            type: 'collapse',
            icon: 'feather icon-monitor',
            children: [
              {
                id: 'departments',
                title: 'Departamentos',
                type: 'item',            
                url: '/departments-list'
                
              },
    
              {
                id: 'workplaces',
                title: 'Puestos',
                type: 'item',            
                url: '/workplaces-list'
                
              }                      
            ]
          },
          {
            id: 'rh-employees',
            title: 'Empleados',
            type: 'collapse',
            icon: 'feather icon-user',
            children: [
              {
                 id: 'rh-employee',
                title: 'Empleados',
                type: 'item',            
                url: '/employee-list'
              }               
            ]
          },
          {
            id: 'rh-agreements',
            title: 'Contrato',
            type: 'collapse',
            icon: 'feather icon-user',
            children: [
              {
                 id: 'rh-agreement',
                title: 'Registrar contrato',
                type: 'item',            
                url: '/agreements-list'
              }               
            ]
          },
          {
        id: 'rh-tenants',
        title: 'Inquilinos',
        type: 'collapse',
        icon: 'feather icon-user',
        children: [
          {
            id: 'rh-tenant',
            title: 'Crear Inquilinos',
            type: 'item',            
            url: '/tenants-list'
          }
        ]
      },
          {
            id: 'rh-reports',
            title: 'Reportes',
            type: 'collapse',
            icon: 'feather icon-user',
            children: [
              {
                 id: 'rh-reports',
                title: 'Reporte viviendas',
                type: 'item',            
                url: '/tagvivienda-list'
              },
              {
                id: 'rh-reports',
               title: 'Reporte empleados',
               type: 'item',            
               url: '/reportemployee-list'
             },
             {
              id: 'rh-reports',
             title: 'Reporte departamento',
             type: 'item',            
             url: '/departmentsr-list'
           }                           
            ]
          },
        ]
      };
    };
     if (localStorage.getItem("compras") == 'true'){
  
      compras = {    
        id: 'po-main',
        title: 'Compras',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'po-catalog',
            title: 'Catalogos',
            type: 'collapse',
            icon: 'feather icon-monitor',
            children: [
              {
                id: 'supplier',
                title: 'Provedores',
                type: 'item',            
                url: '/supplier-list'
                
              },
    
              {
                id: 'payment_terms',
                title: 'Terminos de Pago',
                type: 'item',            
                url: '/payment_terms-list'
                
              }           
            ]
          },
    
          {
            id: 'po-opercion',
            title: 'Operacion',
            type: 'collapse',
            icon: 'feather icon-monitor',
            children: [
              {
                id: 'purchase_orders',
                title: 'Ordenes de Compra',
                type: 'item',            
                url: '/purchase_orders-list'
                
              }
    
                                    
            ]
          },
          {
            id: 'po-reporte',
            title: 'Reportes ',
            type: 'collapse',
            icon: 'feather icon-monitor',
            children: [
              {
                id: 'Reports',
                title: 'Proveedores',
                type: 'item',            
                url: '/supplier_repor-list'
                
              },
              {
                id: 'Reportss',
                title: 'Ordenes de Compra',
                type: 'item',            
                url: '/pdf-purchase_orders-list'
                            }
                           
            ]
          }
        ]
      };
    };
     if(localStorage.getItem("inventario") == 'true'){
  
      inventarios = {    
        id: 'categories_main',
        title: 'Inventarios',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'categories',
            title: 'Catalogos',
            type: 'collapse',
            icon: 'feather icon-monitor',
            children: [
              {
                id: 'categories',
                title: 'Categorias',
                type: 'item',            
                url: '/categories-list'
                
              },                    
              {
                id: 'sub_categories',
                title: 'Sub Categorias',
                type: 'item',            
                url: '/sub_categories-list'
                
              },
              {
                id: 'unit_of_measures',
                title: 'Unidad Medidas',
                type: 'item',            
                url: '/unitofmeasures-list'
                
              },
              {
                id: 'sub_inventarys',
                title: 'Sub Inventarios',
                type: 'item',            
                url: '/sub_inventarys-list'
                
              },
              {
                id: 'master_inventarys',
                title: 'Maestro Inventarios',
                type: 'item',            
                url: '/master_inventarys-list'
                
              }, 
              {
                id: 'status',
                title: 'Estatus Articulos',
                type: 'item',            
                url: '/status-articles-list'
                
              },
              {
                id: 'precios',
                title: 'Precios',
                type: 'item',            
                url: '/status-precios-list'
                
              }
            ]
          },
          {
            id: 'po-opercion',
            title: 'Operación',
            type: 'collapse',
            icon: 'feather icon-monitor',
            children: [
              {
                id: 'articles',
                title: 'Articulos',
                type: 'item',            
                url: '/Articles-list'
                
              },
              {
                id: 'transactions_entrys',
                title: 'Entradas Transacciones',
                type: 'item',            
                url: '/transactions-entrys-list'
                
              }
    
                                    
            ]
          }, 
          {
            id: 'report',
            title: 'Reportes',
            type: 'collapse',
            icon: 'feather icon-monitor',
            children: [
              {
                id: 'report',
                title: 'Reporte Articulo General',
                type: 'item',            
                url: '/report-list'
                
              },
              {
                id: 'report',
                title: 'Reporte Historial Articulo',
                type: 'item',            
                url: '/report-list'
                
              }                           
            ]
          },
        ]
      };
    };

     if(localStorage.getItem("nomina") == 'true'){
      nomina ={    
        id: 'Nomina_main',
        title: 'Nómina',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'configmainte',
            title: 'Catalogos',
            type: 'collapse',
            icon: 'feather icon-monitor',
            children: [
              {
                id: 'configmainte',
                title: 'Configuración y Mantenimiento',
                type: 'item',            
                url: '/config-Maintenlist'
                
              }
            ]
          }
        ]
      };
    };
    if(localStorage.getItem("inquilino") == 'true'){
      inquilino =
      {    
          id: 'r-main',
          title: 'Reservaciones',
          type: 'group',
          icon: 'feather icon-monitor',
          children: [
            {
              id: 'rh-reservation',
              title: 'Reservaciones',
              type: 'item',            
              url: '/reservations-list'
            }               
          ]
      };
    };
      
     

    const permisoss=[dashboard,admin,contabilidad,cuentasporpagar,tesoreria,cuentasporcobrar,recursoshumanos,compras,inventarios,nomina,inquilino];       
    return permisoss;
      
      
  }
}
