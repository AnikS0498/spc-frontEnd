import { IStudent } from "./student";

export interface IParent{
    id:number;
    student:IStudent[];
    name:string;
    contact:number;
    concern:IConcern[];
}