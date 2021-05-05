import { concernType } from "./concernType";
import { IParent } from "./parent";

export interface IConcern{
    id:number;
    concern:String;
    isResolved:boolean;
    concerntype:concernType;
    parent:IParent;
}