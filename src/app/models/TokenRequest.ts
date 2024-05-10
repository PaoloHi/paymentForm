import { Card } from "./card";
import { Customer } from "./customer";

export interface  TokenRequest {
    ip?:string ;
    card? : Card;
    customer?: Customer;
}


