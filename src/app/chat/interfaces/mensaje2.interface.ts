export interface Mensaje2{
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
    to: String;
    //Array<String>;

}