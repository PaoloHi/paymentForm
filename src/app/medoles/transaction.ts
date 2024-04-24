import { Card } from "./card";
import { Customer } from "./customer";
import { Promotion } from "./promotion";

export class Transaction {

    amount : number;
    entrymode: string;
    tip : number;
    status:boolean;
    transactionType: string ;//could be a enum, ,
    transType : string ;//could be remove 
    msi:string; // could be a enum 
    currency:string;
    transactionDate: Date ;
    completeDate : Date;
    arqc:string ;
    arpc :string ;
    authCode:string; 
    orderId:string;
    responseCode:string;
    responseMessage:string; 
    timeOut:string;
    terminalId:string;
    ip:string ;
    cvr:string;
    promotionId:string;
    card : Card;
    Customer: Customer;
    locationLatitude: number; 
    locationLongitude : number;
    promotion : Promotion;

}


