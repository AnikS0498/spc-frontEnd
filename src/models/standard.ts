import { IterableChangeRecord } from "@angular/core";
import { IExam } from "./exam";
import { IStudent } from "./student";
import { ITeacher } from "./teacher";

export interface IStandard {
    id : number;
    grade : string;
    studentList : IStudent[];
    classTeacher : ITeacher;
    subjectTeachers : ITeacher[];
    examList : IExam[];
    classStrength : number;
}