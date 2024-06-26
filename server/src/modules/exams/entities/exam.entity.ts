import { ExamQuestion } from './exam-question.entity';
import { Student } from './student.entity';
import { Author } from './author.entity';
import { PrismaDetailedExamTest } from '../interfaces/prisma-detailed-exam.interface';
import { CurrentExamQuestion } from './current-exam-question.entity';

export class Exam {
  status: 'created' | 'started' | 'finished' = 'created';
  currentQuestionIndex = -1;
  currentQuestion: CurrentExamQuestion | null = null;
  students: Record<string, Student> = {};

  constructor(
    readonly author: Author,
    readonly test: PrismaDetailedExamTest,
    readonly questions: ExamQuestion[],
  ) {}
}
