import { IParent } from "./parent";

export interface IStudent{
    id:number;
    name:string;
    parent:IParent;
    diary:IDiary;
    standard:IStandard;
    attendance:IAttendance;
    fee:IFee;
    reportCard:IReportCard;
}