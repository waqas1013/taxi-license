export type Question = {
  id: string;
  text: string;
  questionImage?: string;
  options: string[];
  correctIndex: number;
  explanationImage?: string | string[];
};

export type QuestionSection = {
  id: string;
  name: string;
  questions: Question[];
};

export type Category = {
  id: string;
  name: string;
  sections: QuestionSection[];
};

export type CategoryGroup = {
  id: string;
  name: string;
  categories: Category[];
};
