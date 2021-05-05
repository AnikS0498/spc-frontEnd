import { IStandard } from "./standard";
import { Subject } from "./subject";

export interface ITeacher {
    id:number;
    name:string;
    standard:IStandard;
    standardList:IStandard[];
    subject : Subject;
    
}