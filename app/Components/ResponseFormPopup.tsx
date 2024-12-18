import React, { useActionState } from "react";
import { ResponseFormState, ResponseSchema } from "../lib/ResponceSchemsa";

function ResponseFormPopup() {
  const sednformdata = (state: ResponseFormState, formDate: FormData) => {
    const validatedResponseFields = ResponseSchema.safeParse({
      vacancy_name: formDate.get("vacancy_name"),
      company_name: formDate.get("company_name"),
      work_type: formDate.get("work_type"),
      work_adress: formDate.get("work_adress"),
      salary_low: formDate.get("salary_low"),
      salary_high: formDate.get("salary_high"),
      date: formDate.get("date"),
      vacancy_link: formDate.get("vacancy_link"),
      note: formDate.get("note"),
    });
    if (!validatedResponseFields.success) {
      return {
        errors: validatedResponseFields.error.flatten().fieldErrors,
      };
    }
  };

  const [state, action, pending] = useActionState(sednformdata, undefined);

  return (
    <form className="flex flex-row gap-6 pt-10" action={action}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <div>
            <label>Название вакансии</label>
            <span className="text-red-500"> *</span>
          </div>
          <input
            className={`border-2 border-accent bg-background p-2 focus:outline-none ${state?.errors.vacancy_name ? "border-secondary" : ""}`}
            type="text"
            name="vacancy_name"
          />
          {state?.errors.vacancy_name && (
            <span className="max-w-fit text-sm text-red-400">
              {state.errors.vacancy_name}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <label>Ссылка на вакансию:</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            className={`border-2 border-accent bg-background p-2 focus:outline-none ${state?.errors.vacancy_link ? "border-secondary" : ""}`}
            type="text"
            name="vacancy_link"
          />
          {state?.errors.vacancy_link && (
            <span className="max-w-fit text-sm text-red-400">
              {state.errors.vacancy_link}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <label>Название компании:</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            className={`border-2 border-accent bg-background p-2 focus:outline-none ${state?.errors.company_name ? "border-secondary" : ""}`}
            type="text"
            name="company_name"
          />
          {state?.errors.company_name && (
            <span className="max-w-fit text-sm text-red-400">
              {state.errors.company_name}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <label>Формат работы</label>
            <span className="text-red-500">*</span>
          </div>
          <select
            className={`border-2 border-accent bg-background p-2 focus:outline-none ${state?.errors.work_type ? "border-secondary" : ""}`}
            name="work_type"
          >
            <option value="full">Фултайм офис</option>
            <option value="gibrid">Гибрид</option>
            <option value="remote">Удаленка</option>
            <option value="freelance">Фриланс</option>
            <option value="parttime">Подработка</option>
          </select>
          {state?.errors.work_type && (
            <span className="max-w-fit text-sm text-red-400">
              {state.errors.work_type}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <label>Дата отклика:</label>
            <span className="text-red-500">*</span>
          </div>
          <input
            className={`border-2 border-accent bg-background p-2 focus:outline-none ${state?.errors.date ? "border-secondary" : ""}`}
            type="date"
            defaultValue={new Date(Date.now()).toISOString().slice(0, 10)}
            name="date"
          />
          {state?.errors.date && (
            <span className="max-w-fit text-sm text-red-400">
              {state.errors.date}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label>Место нажождения офиса:</label>
          <input
            className="border-2 border-accent bg-background p-2 focus:outline-none"
            type="text"
            name="work_adress"
          />
          {state?.errors.work_adress && (
            <span className="max-w-fit text-sm text-red-400">
              {state.errors.work_adress}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label>Заработная плата:</label>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <input
                className={`w-44 border-2 border-accent bg-background p-2 focus:outline-none ${state?.errors.salary_low ? "border-secondary" : ""}`}
                type="text"
                placeholder="от"
                name="salary_low"
              />
              {state?.errors.salary_low && (
                <span className="max-w-fit text-sm text-red-400">
                  {state.errors.salary_low}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className={`w-44 border-2 border-accent bg-background p-2 focus:outline-none ${state?.errors.salary_high ? "border-secondary" : ""}`}
                type="text"
                placeholder="до"
                name="salary_high"
              />
              {state?.errors.salary_high && (
                <span className="max-w-fit text-sm text-red-400">
                  {state.errors.salary_high}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <label>Примечание</label>
          <textarea
            className="h-full resize-none border-2 border-accent bg-background p-2 focus:outline-none"
            name="note"
          />
        </div>
        {state?.errors.note && (
          <span className="max-w-fit text-sm text-red-400">
            {state.errors.note}
          </span>
        )}
        <button
          className="self-center rounded-md bg-accent p-4 hover:opacity-70"
          type="submit"
        >
          Добавить отклик
        </button>
      </div>
    </form>
  );
}

export default ResponseFormPopup;
