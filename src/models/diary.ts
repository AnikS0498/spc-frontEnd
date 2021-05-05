import { IStudent } from "./student";

export interface IDiary {
    id: number;
    student: IStudent;
    generatedDate: Date;
    remark: string;
}