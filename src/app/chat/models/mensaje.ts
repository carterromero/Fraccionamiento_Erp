import { ClassStmt } from '@angular/compiler';

export class Mensaje{
    notification: {
        title: string;
        body: string;
        click_action: string;
        sound: string;
    };
    data:{
        param:{
    
            metodo: number;
            nombreUsuario: string;
            msg: string;
        }
    };
    to: string;

}