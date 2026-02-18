import { useMemo, useState } from "react";
import { questionGroups } from "./data/questionBank";
import { Category, CategoryGroup, QuestionSection } from "./types/questions";

type CheckedMap = Record<string, boolean>;
type AnswerMap = Record<string, number>;

const findInitial = (): {
  group: CategoryGroup;
  category: Category;
  section: QuestionSection;
} => {
  const group = questionGroups[0];
  const category = group.categories[0];
  const section = category.sections[0];
  return { group, category, section };
};

export default function App(): JSX.Element {
  const initial = findInitial();
  const [selectedGroupId, setSelectedGroupId] = useState(initial.group.id);
  const [selectedCategoryId, setSelectedCategoryId] = useState(initial.category.id);
  const [selectedSectionId, setSelectedSectionId] = useState(initial.section.id);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [checkedByQuestionId, setCheckedByQuestionId] = useState<CheckedMap>({});
  const [answersByQuestionId, setAnswersByQuestionId] = useState<AnswerMap>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [showOverview, setShowOverview] = useState(false);

  const selectedGroup = useMemo(
    () => questionGroups.find((item) => item.id === selectedGroupId) ?? questionGroups[0],
    [selectedGroupId]
  );

  const selectedCategory = useMemo(
    () =>
      selectedGroup.categories.find((item) => item.id === selectedCategoryId) ??
      selectedGroup.categories[0],
    [selectedGroup, selectedCategoryId]
  );

  const selectedSection = useMemo(
    () =>
      selectedCategory.sections.find((item) => item.id === selectedSectionId) ??
      selectedCategory.sections[0],
    [selectedCategory, selectedSectionId]
  );

  const question = selectedSection.questions[questionIndex];
  const selectedOptionIndex = answersByQuestionId[question.id];
  const isChecked = checkedByQuestionId[question.id] ?? false;

  const answeredCount = selectedSection.questions.filter(
    (item) => answersByQuestionId[item.id] !== undefined
  ).length;

  const remainingCount = selectedSection.questions.length - answeredCount;

  const resetQuestionView = (): void => {
    setQuestionIndex(0);
    setShowExplanation(false);
    setShowOverview(false);
  };

  const selectGroup = (groupId: string): void => {
    const group = questionGroups.find((item) => item.id === groupId);
    if (!group) return;

    const firstCategory = group.categories[0];
    const firstSection = firstCategory.sections[0];

    setSelectedGroupId(group.id);
    setSelectedCategoryId(firstCategory.id);
    setSelectedSectionId(firstSection.id);
    resetQuestionView();
  };

  const selectCategory = (categoryId: string): void => {
    const category = selectedGroup.categories.find((item) => item.id === categoryId);
    if (!category) return;

    setSelectedCategoryId(category.id);
    setSelectedSectionId(category.sections[0].id);
    resetQuestionView();
  };

  const selectSection = (sectionId: string): void => {
    setSelectedSectionId(sectionId);
    resetQuestionView();
  };

  const selectAnswer = (optionIndex: number): void => {
    setAnswersByQuestionId((prev) => ({ ...prev, [question.id]: optionIndex }));
  };

  const checkAnswer = (): void => {
    setCheckedByQuestionId((prev) => ({ ...prev, [question.id]: true }));
  };

  const goNext = (): void => {
    if (questionIndex >= selectedSection.questions.length - 1) return;
    setShowExplanation(false);
    setQuestionIndex((prev) => prev + 1);
  };

  const goBack = (): void => {
    if (questionIndex <= 0) return;
    setShowExplanation(false);
    setQuestionIndex((prev) => prev - 1);
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <h1>Taxi Licens - Frågebank</h1>
          <p>Träna ämnen och sektioner med tydlig översikt.</p>
        </div>
      </header>

      <section className="card">
        <div className="nav-header">
          <h2>Navigation</h2>
          <p>
            {selectedGroup.name} / {selectedCategory.name} / {selectedSection.name}
          </p>
        </div>

        <div className="group-tabs">
          {questionGroups.map((group) => (
            <button
              key={group.id}
              className={`group-tab ${selectedGroup.id === group.id ? "active" : ""}`}
              onClick={() => selectGroup(group.id)}
              type="button"
            >
              {group.name}
            </button>
          ))}
        </div>

        <div className="category-grid">
          {selectedGroup.categories.map((category) => (
            <button
              key={category.id}
              className={`category-card ${selectedCategory.id === category.id ? "active" : ""}`}
              onClick={() => selectCategory(category.id)}
              type="button"
            >
              <span>{category.name}</span>
              <small>{category.sections.length} sektioner</small>
            </button>
          ))}
        </div>

        <div className="section-selector">
          <strong>Sektioner</strong>
          <div className="chips">
            {selectedCategory.sections.map((section) => (
              <button
                key={section.id}
                className={`chip ${selectedSection.id === section.id ? "active" : ""}`}
                onClick={() => selectSection(section.id)}
                type="button"
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>

        <div className="nav-summary">
          <span>Totalt frågor: {selectedSection.questions.length}</span>
          <span>Klara: {answeredCount}</span>
          <span>Kvar: {remainingCount}</span>
        </div>
      </section>

      <section className="card question-card">
        <div className="question-header">
          <h3>{selectedSection.name}</h3>
          <span>
            Fråga {questionIndex + 1} av {selectedSection.questions.length}
          </span>
        </div>

        <p className="question-text">{question.text}</p>
        <div className="options">
          {question.options.map((option, index) => {
            const isSelected = selectedOptionIndex === index;
            const isCorrect = index === question.correctIndex;
            const showCorrect = isChecked && isCorrect;
            const showWrong = isChecked && isSelected && !isCorrect;

            const classNames = [
              "option",
              isSelected ? "selected" : "",
              showCorrect ? "correct" : "",
              showWrong ? "wrong" : ""
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <button
                key={option}
                className={classNames}
                onClick={() => selectAnswer(index)}
                type="button"
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="actions">
          <button className="secondary" onClick={goBack} type="button">
            Tillbaka
          </button>
          <button
            className="primary"
            onClick={checkAnswer}
            type="button"
            disabled={selectedOptionIndex === undefined}
          >
            Check answer
          </button>
          <button className="secondary" onClick={() => setShowExplanation(true)} type="button">
            Se förklaring
          </button>
          <button
            className="secondary"
            onClick={goNext}
            type="button"
            disabled={questionIndex === selectedSection.questions.length - 1}
          >
            Nästa fråga
          </button>
          <button className="secondary" onClick={() => setShowOverview((prev) => !prev)} type="button">
            Till översikt frågor
          </button>
        </div>
      </section>

      {showOverview && (
        <section className="card">
          <h3>Översikt frågor</h3>
          <p>
            Klara: <strong>{answeredCount}</strong> | Kvar: <strong>{remainingCount}</strong>
          </p>
          <div className="question-grid">
            {selectedSection.questions.map((item, index) => {
              const isCurrent = index === questionIndex;
              const isAnswered = answersByQuestionId[item.id] !== undefined;
              return (
                <button
                  key={item.id}
                  className={`grid-item ${isCurrent ? "current" : ""} ${isAnswered ? "answered" : ""}`}
                  onClick={() => setQuestionIndex(index)}
                  type="button"
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {showExplanation && (
        <section className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal">
            <div className="modal-header">
              <h3>Förklaring</h3>
              <button className="secondary" onClick={() => setShowExplanation(false)} type="button">
                Stäng
              </button>
            </div>
            <img src={question.explanationImage} alt={`Förklaring till ${question.text}`} />
          </div>
        </section>
      )}
    </main>
  );
}
