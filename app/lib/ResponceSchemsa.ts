import { string, z } from "zod";

export const ResponseSchema = z.object({
  vacancy_name: z
    .string()
    .min(1, { message: "Укажите название вакансии" })
    .trim(),
  company_name: z
    .string()
    .min(1, { message: "Укажите название компании" })
    .trim(),
  work_type: z.string().min(1, { message: "Укажите формат работы" }).trim(),
  work_adress: z.string().optional(),
  salary_low: z.coerce.number({ message: "Укажите целое число" }).optional(),
  salary_high: z.coerce.number({ message: "Укажите целое число" }).optional(),
  date: z.string().min(1, { message: "Укажите дату отклика" }).date().trim(),
  vacancy_link: z.string().url({ message: "Укажите верную ссылку" }).trim(),
  note: z.string().optional(),
});

export type ResponseFormState =
  | {
      errors?: {
        vacancy_name?: string[];
        company_name?: string[];
        work_type?: string[];
        work_adress?: string[];
        salary_low?: string[];
        salary_high?: string[];
        date?: string[];
        vacancy_link?: string[];
        note?: string[];
      };
      message?: string;
    }
  | undefined;
