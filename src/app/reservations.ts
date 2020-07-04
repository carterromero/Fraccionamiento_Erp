import { Time } from '@angular/common';

export class Reservations {
    reservations_id: number;
    reservations_location: string;
    reservations_date: Date;
    reservations_start_time: Time;
    reservations_end_time: Time;
    reservations_status: string;
    tenants_id: string;
    last_update: Date;
    last_update_by: number;
    create_by: number;
    tenants_name: string;
    tenants_father_surname: string;
    tenants_mother_surname: string;
}