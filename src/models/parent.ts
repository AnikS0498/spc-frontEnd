import { IStandard } from "./standard";

export interface IParent {
    
    id:number;
    name:string;
    standard:IStandard;
    standardList:IStandard[];
    subject : ISubject;
}