
export interface IExam {
    id: number;
    examDate: Date;
    subject: subject;
    standard: IStandard[];
    duration: string;
    marks: number;
}