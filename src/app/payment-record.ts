import { Subscription } from 'rxjs/internal/Subscription';
export class PaymentRecord 
{
    
    payment_id :number;
    creditor_id :number;
    payment_record_payment_date : string;
    payment_record_amount : string;
    payment_method : string;
    payment_status : string;
    created_by : number;
    created_date : string;
    last_updated_by : number;
    last_updated_date : string;
    p_user_id :number;
    
    condominums_id :number;
    name_creditor : string;
    metodo_tipo :  string;
    

    data: File;
    state: string;
    inProgress: boolean;
    progress: number;
    canRetry: boolean;
    canCancel: boolean;
    sub?: Subscription;
   
}
