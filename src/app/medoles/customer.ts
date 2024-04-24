import { Adress } from "./adress";

export interface Customer {

    id : number;
    firstName: string;
    lastName: string;
    email:string;
    phone:string;    
    address: Adress;
}