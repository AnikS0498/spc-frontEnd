import { IStudent } from "./student";

export interface IReportCard{
    id: number;
    student: IStudent;
    isAttempted: boolean;
    marksheet: Map<ISubject, number>;
}