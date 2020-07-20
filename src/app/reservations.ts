import { Time } from '@angular/common';

export class Reservations {
    reservations_id: number;
    articles_sku: number;
    articles_name_article: string;
    reservations_start: Date;
    reservations_end: Date;
    reservations_status: string;
    tenants_id: string;
    last_update: Date;
    last_update_by: number;
    create_by: number;
    tenants_name: string;
    tenants_father_surname: string;
    tenants_mother_surname: string;
}