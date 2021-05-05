import { IStudent } from "./student";

export interface IFee{
    id: number;
    student: IStudent;
    feeDue: number;
    feePaid: number;
    totalFee: number;
}