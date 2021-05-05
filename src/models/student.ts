import { IDiary } from "./diary";
import { IFee } from "./fee";
import { IParent } from "./parent";

import { IStandard } from "./standard";

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