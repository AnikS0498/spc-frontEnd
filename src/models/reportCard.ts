import { IStudent } from "./student";
import { subject } from "./subject";

export class IReportCard{
    id: number;
    student: IStudent;
    isAttempted: boolean;
    marksheet: Map<subject, number>;
}