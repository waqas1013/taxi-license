import { useMemo, useState } from "react";
import { questionGroups } from "./data/questionBank";
import { Category, CategoryGroup, QuestionSection } from "./types/questions";

type CheckedMap = Record<string, boolean>;
type AnswerMap = Record<string, number>;

const optionLabel = (index: number): string => String.fromCharCode(65 + index);

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
  const [showTestResult, setShowTestResult] = useState(false);

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

  const hasQuestions = selectedSection.questions.length > 0;
  const safeQuestionIndex =
    selectedSection.questions.length > 0
      ? Math.min(questionIndex, selectedSection.questions.length - 1)
      : 0;
  const question = selectedSection.questions[safeQuestionIndex];
  const selectedOptionIndex = question ? answersByQuestionId[question.id] : undefined;
  const isChecked = question ? (checkedByQuestionId[question.id] ?? false) : false;
  const hasExplanation = Boolean(question?.explanationImage);
  const explanationImages = question?.explanationImage 
    ? Array.isArray(question.explanationImage) 
      ? question.explanationImage 
      : [question.explanationImage]
    : [];

  const answeredCount = selectedSection.questions.filter(
    (item) => answersByQuestionId[item.id] !== undefined
  ).length;

  const remainingCount = selectedSection.questions.length - answeredCount;
  const correctCount = selectedSection.questions.filter((item) => {
    const selected = answersByQuestionId[item.id];
    return selected !== undefined && selected === item.correctIndex;
  }).length;
  const wrongCount = answeredCount - correctCount;
  const scorePercent =
    selectedSection.questions.length > 0
      ? Math.round((correctCount / selectedSection.questions.length) * 100)
      : 0;

  const resetQuestionView = (): void => {
    setQuestionIndex(0);
    setShowExplanation(false);
    setShowOverview(false);
    setShowTestResult(false);
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
    if (!question) return;
    setAnswersByQuestionId((prev) => ({ ...prev, [question.id]: optionIndex }));
  };

  const checkAnswer = (): void => {
    if (!question) return;
    setCheckedByQuestionId((prev) => ({ ...prev, [question.id]: !prev[question.id] }));
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

  const resetCurrentSectionAttempt = (): void => {
    const questionIds = new Set(selectedSection.questions.map((item) => item.id));

    setAnswersByQuestionId((prev) => {
      const next: AnswerMap = {};
      Object.entries(prev).forEach(([id, value]) => {
        if (!questionIds.has(id)) {
          next[id] = value;
        }
      });
      return next;
    });

    setCheckedByQuestionId((prev) => {
      const next: CheckedMap = {};
      Object.entries(prev).forEach(([id, value]) => {
        if (!questionIds.has(id)) {
          next[id] = value;
        }
      });
      return next;
    });

    setQuestionIndex(0);
    setShowOverview(false);
    setShowExplanation(false);
    setShowTestResult(false);
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
          <span className="stat-item">
            <span className="stat-label">Totalt frågor:</span>
            <span className="stat-value stat-total">{selectedSection.questions.length}</span>
          </span>
          <span className="stat-item">
            <span className="stat-label">Klara:</span>
            <span className="stat-value stat-completed">{answeredCount}</span>
          </span>
          <span className="stat-item">
            <span className="stat-label">Kvar:</span>
            <span className="stat-value stat-remaining">{remainingCount}</span>
          </span>
        </div>
      </section>

      <section className="card question-card">
        <div className="question-header">
          <h3>{selectedSection.name}</h3>
          <span>{hasQuestions ? `Fråga ${safeQuestionIndex + 1} av ${selectedSection.questions.length}` : "Inga frågor ännu"}</span>
        </div>

        {hasQuestions ? (
          <>
            <div className="question-prompt">
              <span>Fråga</span>
              <p className="question-text">{question.text}</p>
            </div>
            {question.questionImage && (
              <div className="question-media">
                <img src={question.questionImage} alt={`Bild till fråga: ${question.text}`} />
              </div>
            )}
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
                    key={`${question.id}-option-${index}`}
                    className={classNames}
                    onClick={() => selectAnswer(index)}
                    type="button"
                  >
                    <span className="option-letter">{optionLabel(index)}</span>
                    <span className="option-text">{option}</span>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <p className="question-text">Inga frågor tillagda i denna sektion ännu.</p>
        )}

        <div className="actions">
          <button className="secondary" onClick={goBack} type="button" disabled={!hasQuestions || safeQuestionIndex === 0}>
            Föregående
          </button>
          <button
            className={`check-button ${selectedOptionIndex === undefined ? "disabled-look" : ""}`}
            onClick={checkAnswer}
            type="button"
            disabled={!hasQuestions || selectedOptionIndex === undefined}
          >
            {isChecked ? "Dölj svar" : "Se svar"}
          </button>
          <button
            className="secondary"
            onClick={() => setShowExplanation(true)}
            type="button"
            disabled={!hasQuestions || !hasExplanation}
          >
            Se förklaring
          </button>
          <button
            className="secondary"
            onClick={goNext}
            type="button"
            disabled={!hasQuestions || safeQuestionIndex === selectedSection.questions.length - 1}
          >
            Nästa fråga
          </button>
          <button className="secondary" onClick={() => setShowOverview((prev) => !prev)} type="button">
            Till översikt frågor
          </button>
          <button className="danger" onClick={() => setShowTestResult(true)} type="button">
            End test
          </button>
          <button className="secondary" onClick={resetCurrentSectionAttempt} type="button">
            Starta om test
          </button>
        </div>
      </section>

      {showOverview && (
        <section className="card">
          <h3>Översikt frågor</h3>
          <div className="nav-summary">
            <span className="stat-item">
              <span className="stat-label">Klara:</span>
              <span className="stat-value stat-completed">{answeredCount}</span>
            </span>
            <span className="stat-item">
              <span className="stat-label">Kvar:</span>
              <span className="stat-value stat-remaining">{remainingCount}</span>
            </span>
          </div>
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

      {showExplanation && hasQuestions && hasExplanation && (
        <section className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal">
            <div className="modal-header">
              <h3>Förklaring</h3>
              <button className="secondary" onClick={() => setShowExplanation(false)} type="button">
                Stäng
              </button>
            </div>
            <div className="modal-content">
              {explanationImages.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`Förklaring ${index + 1} till ${question.text}`} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {showTestResult && (
        <section className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal result-modal">
            <div className="modal-header">
              <h3>Testresultat</h3>
              <button className="secondary" onClick={() => setShowTestResult(false)} type="button">
                Stäng
              </button>
            </div>
            <div className="result-grid">
              <p>Försökta frågor</p>
              <strong>{answeredCount}</strong>
              <p>Rätt svar</p>
              <strong>{correctCount}</strong>
              <p>Fel svar</p>
              <strong>{wrongCount}</strong>
              <p>Ej besvarade</p>
              <strong>{remainingCount}</strong>
              <p>Poäng</p>
              <strong>
                {correctCount}/{selectedSection.questions.length} ({scorePercent}%)
              </strong>
            </div>
            <div className="result-actions">
              <button className="secondary" onClick={resetCurrentSectionAttempt} type="button">
                Starta om test
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
