import {Injectable} from '@angular/core';

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

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
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
  /*    
      ,
      {
        id: 'page-layouts',
        title: 'Page Layouts',
        type: 'collapse',
        icon: 'feather icon-layout',
        children: [
          {
            id: 'vertical',
            title: 'Vertical',
            type: 'item',
            url: '/layout/static',
            target: true
          },
          {
            id: 'horizontal',
            title: 'Horizontal',
            type: 'item',
            url: '/layout/horizontal',
            target: true
          }
        ]
      }
*/

    ]
  },

/*
  {
    id: 'main',
    title: 'Main',
    type: 'group',
    children: [
      {
        id: 'employee',
        title: 'Employee',
        type: 'collapse',
        icon: 'feather icon-activity',
        children: [
          {
            id: 'employee-list',
            title: 'Employee List',
            type: 'item',
            url: '/employee-list'
          }
        ]
      }
    ]
  },
  {    
    id: 'address_main',
    title: 'Address',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'address',
        title: 'Address',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'address-list',
            title: 'Address List',
            type: 'item',            
            url: '/address-list'
            
          }                    
        ]
      }
    ]
  },
  {    
    id: 'general_main',
    title: 'General',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'general',
        title: 'General',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'general-list',
            title: 'General List',
            type: 'item',            
            url: '/general-list'
            
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
        title: 'Categorias',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'categories-list',
            title: 'Categorias List',
            type: 'item',            
            url: '/categories-list'
            
          }                    
        ]
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
            url: '/permisos-list'
            
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
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'creditor',
            title: 'acreedor',
            type: 'item',            
            url: '/creditor-list'
            
          },

          {
            id: 'crear_cuenta',
            title: 'Fraccionacrear una cuenta ',
            type: 'item',            
            url: '/cuenta-list'
            
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
        title: 'Catalogos',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'bankCodes',
            title: 'Codigos Bancarios',
            type: 'item',            
            url: '/bankCodes-list'
            
          },

          {
            id: 'banks',
            title: 'Bancos',
            type: 'item',            
            url: '/banks-list'
            
          },
          {
            id: 'bankAccounts',
            title: 'Cuentas Bancarias',
            type: 'item',            
            url: '/bankAccounts-list'
            
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
        title: 'Reportes Proveedores',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'Reports',
            title: 'Reportes',
            type: 'item',            
            url: '/purchase_orders-list'
            
          }

                                
        ]
      }, {
        id: 'po-reporte',
        title: 'Reportes Ordenes de compra',
        type: 'collapse',
        icon: 'feather icon-monitor',
        children: [
          {
            id: 'Reports',
            title: 'Reportes',
            type: 'item',            
            url: '/purchase_orders-list'
            
          }

                                
        ]
      }


    ]
  },


  /*,
  {
    id: 'ui-element',
    title: 'UI ELEMENT',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'basic',
        title: 'Basic',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'alert',
            title: 'Alert',
            type: 'item',
            url: '/basic/alert'
          },
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: '/basic/badges'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'Breadcrumbs & Pagination',
            type: 'item',
            url: '/basic/breadcrumb-paging'
          },
          {
            id: 'cards',
            title: 'Cards',
            type: 'item',
            url: '/basic/cards'
          },
          {
            id: 'collapse',
            title: 'Collapse',
            type: 'item',
            url: '/basic/collapse'
          },
          {
            id: 'carousel',
            title: 'Carousel',
            type: 'item',
            url: '/basic/carousel'
          },
          {
            id: 'grid-system',
            title: 'Grid System',
            type: 'item',
            url: '/basic/grid-system'
          },
          {
            id: 'progress',
            title: 'Progress',
            type: 'item',
            url: '/basic/progress'
          },
          {
            id: 'modal',
            title: 'Modal',
            type: 'item',
            url: '/basic/modal'
          },
          {
            id: 'spinner',
            title: 'Spinner',
            type: 'item',
            url: '/basic/spinner'
          },
          {
            id: 'tabs-pills',
            title: 'Tabs & Pills',
            type: 'item',
            url: '/basic/tabs-pills'
          },
          {
            id: 'typography',
            title: 'Typography',
            type: 'item',
            url: '/basic/typography'
          },
          {
            id: 'tooltip-popovers',
            title: 'Tooltip & Popovers',
            type: 'item',
            url: '/basic/tooltip-popovers'
          },
          {
            id: 'toasts',
            title: 'Toasts',
            type: 'item',
            url: '/basic/toasts'
          },
          {
            id: 'other',
            title: 'Other',
            type: 'item',
            url: '/basic/other'
          }
        ]
      }
    ]
  },
  {
    id: 'forms',
    title: 'Forms & Table',
    type: 'group',
    icon: 'feather icon-layout',
    children: [
      {
        id: 'forms-element',
        title: 'Forms',
        type: 'item',
        url: '/forms/basic',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'bootstrap',
        title: 'Bootstrap',
        type: 'item',
        url: '/tbl-bootstrap/bt-basic',
        classes: 'nav-item',
        icon: 'feather icon-server'
      }
    ]
  },
  {
    id: 'chart-maps',
    title: 'Chart & Maps',
    type: 'group',
    icon: 'feather icon-pie-chart',
    children: [
      {
        id: 'charts',
        title: 'Charts',
        type: 'item',
        url: '/charts/apex',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      },
      {
        id: 'maps',
        title: 'Maps',
        type: 'item',
        url: '/maps/google',
        classes: 'nav-item',
        icon: 'feather icon-map'
      }
    ]
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'feather icon-file-text',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      }
    ]
  }*/
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
