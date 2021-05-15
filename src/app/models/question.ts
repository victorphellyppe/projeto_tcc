export interface Question{
    title:string;
    level?:number;
    answers: QuestionsAnswers[];
}

export interface QuestionsAnswers{
    description:string;
    isRight: boolean;
}