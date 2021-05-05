import { IStudent } from "./student";

export interface IAttendance{
    id: number;
    student: IStudent;
    attendanceDate: Date;
    present: boolean;
}