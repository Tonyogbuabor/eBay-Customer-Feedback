export type QuestionId =
  | 'Q1'
  | 'Q2'
  | 'Q3'
  | 'Q4'
  | 'Q5'
  | 'Q6'
  | 'Q7'
  | 'Q8'
  | 'Q9'
  | 'Q10'
  | 'Q11'
  | 'Q12';

export type Q5Option = 'Yes' | 'Partly' | 'No';

export interface SurveyAnswers {
  Q1: number | null;
  Q2: string;
  Q3: number | null;
  Q4: string;
  Q5: Q5Option | '';
  Q6: string;
  Q7: number | null;
  Q8: string[];
  Q9: string;
  Q10: string;
  Q11: string;
  Q12: string;
}

export type SurveyErrors = Partial<Record<QuestionId, string>>;

export interface SurveyPayload {
  Q1: number;
  Q2: string;
  Q3: number;
  Q4: string;
  Q5: Q5Option;
  Q6: string;
  Q7: number;
  Q8: string[];
  Q9: string;
  Q10: string;
  Q11: string;
  Q12: string;
}
