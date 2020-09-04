export interface Mensaje {

  notification: {
        title: string;
        body: string;
        click_action: string;
        sound: string;
    };
    data: {
        param: {

            metodo: number;
            nombreUsuario: string;
            msg: string;
        }
    };
    // tslint:disable-next-line: ban-types
    to: String;

}
