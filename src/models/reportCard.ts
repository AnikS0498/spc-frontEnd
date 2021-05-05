import { IStudent } from "./student";
import { subject } from "./subject";

export interface IReportCard{
    id: number;
    student: IStudent;
    isAttempted: boolean;
    marksheet: Map<subject, number>;
}