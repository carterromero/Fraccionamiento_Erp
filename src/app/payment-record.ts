import { Subscription } from 'rxjs/internal/Subscription';
export class PaymentRecord 
{
    
    payment_id :number;
    creditor_id :number;

    
    
    cuentapago : string;
    payment_method : string;
    payment_status : string;
    created_by : number;
    created_date : string;
    last_updated_by : number;
    last_updated_date : string;
    p_userid :string;
    
    condominums_id :string;
    name_creditor : string;
    metodo_tipo :  string;
   

    data: File;
    state: string;
    inProgress: boolean;
    progress: number;
    canRetry: boolean;
    canCancel: boolean;
    sub?: Subscription;

    billtopay_invoice_folio: string;
    billtopay_invoice_date: string;
    purcharse_order_total : string;
   
}
