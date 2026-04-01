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
  const [confirmAction, setConfirmAction] = useState<"reset" | "end" | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const totalQuestions = useMemo(
    () =>
      questionGroups.reduce(
        (sum, g) =>
          sum +
          g.categories.reduce(
            (cs, cat) => cs + cat.sections.reduce((ss, sec) => ss + sec.questions.length, 0),
            0
          ),
        0
      ),
    []
  );
  const totalAnswered = Object.keys(answersByQuestionId).length;

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
    <div className="app-layout">
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo-mark">TL</div>
          <div className="sidebar-brand-text">
            <span className="sidebar-title">Taxi Licens</span>
            <span className="sidebar-tagline">Frågebank</span>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Ämnesnavigation">
          {questionGroups.map((group) => {
            const isGroupActive = selectedGroup.id === group.id;
            return (
              <div key={group.id} className="sidebar-group-block">
                <button
                  type="button"
                  className={`sidebar-group-item ${isGroupActive ? "active" : ""}`}
                  onClick={() => {
                    selectGroup(group.id);
                    setSidebarOpen(false);
                  }}
                >
                  <span className="sidebar-group-indicator" />
                  <span className="sidebar-group-name">{group.name}</span>
                </button>

                {isGroupActive && (
                  <div className="sidebar-sub">
                    {group.categories.map((cat) => {
                      const isCatActive = selectedCategory.id === cat.id;
                      return (
                        <div key={cat.id} className="sidebar-cat-block">
                          <button
                            type="button"
                            className={`sidebar-cat-item ${isCatActive ? "active" : ""}`}
                            onClick={() => {
                              selectCategory(cat.id);
                              setSidebarOpen(false);
                            }}
                          >
                            {cat.name}
                          </button>

                          {isCatActive && (
                            <div className="sidebar-sections">
                              {cat.sections.map((sec) => {
                                const isSecActive = selectedSection.id === sec.id;
                                const secAnswered = sec.questions.filter(
                                  (q) => answersByQuestionId[q.id] !== undefined
                                ).length;
                                return (
                                  <button
                                    key={sec.id}
                                    type="button"
                                    className={`sidebar-sec-item ${isSecActive ? "active" : ""}`}
                                    onClick={() => {
                                      selectSection(sec.id);
                                      setSidebarOpen(false);
                                    }}
                                  >
                                    <span className="sidebar-sec-dot" />
                                    <span className="sidebar-sec-name">{sec.name}</span>
                                    <span className="sidebar-sec-count">
                                      {secAnswered}/{sec.questions.length}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-progress">
            <div
              className="sidebar-progress-fill"
              style={{
                width:
                  totalQuestions > 0 ? `${Math.round((totalAnswered / totalQuestions) * 100)}%` : "0%",
              }}
            />
          </div>
          <span className="sidebar-progress-label">
            {totalAnswered} / {totalQuestions} frågor klara
          </span>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          role="button"
          tabIndex={-1}
          aria-label="Stäng meny"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setSidebarOpen(false)}
        />
      )}

      <div className="main-area">
        <div className="main-topbar">
          <button
            type="button"
            className="topbar-menu-btn"
            aria-label="Öppna meny"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <div className="topbar-crumb">
            <span className="crumb-group">{selectedGroup.name}</span>
            <span className="crumb-sep">›</span>
            <span className="crumb-cat">{selectedCategory.name}</span>
            <span className="crumb-sep">›</span>
            <span className="crumb-section">{selectedSection.name}</span>
          </div>
          <div className="topbar-stats">
            <span className="topbar-stat-done">{answeredCount}</span>
            <span className="topbar-stat-sep">/</span>
            <span className="topbar-stat-total">{selectedSection.questions.length}</span>
          </div>
        </div>

        <main className="main-content">

        <section className="card question-card">
        <div className="question-header">
          <div className="question-header-left">
            <h3>{selectedSection.name}</h3>
            <span>{hasQuestions ? `Fråga ${safeQuestionIndex + 1} av ${selectedSection.questions.length}` : "Inga frågor ännu"}</span>
          </div>
          <div className="question-header-actions">
            <button type="button" className="question-top-btn" onClick={() => setConfirmAction("reset")}>
              Starta om test
            </button>
            <button type="button" className="question-top-btn question-top-btn-danger" onClick={() => setConfirmAction("end")}>
              Avsluta test
            </button>
          </div>
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
          <div className="actions-primary">
            <button
              className="actions-prev"
              onClick={goBack}
              type="button"
              disabled={!hasQuestions || safeQuestionIndex === 0}
            >
              ← Föregående
            </button>
            <button
              className={`actions-check ${selectedOptionIndex === undefined ? "disabled-look" : ""}`}
              onClick={checkAnswer}
              type="button"
              disabled={!hasQuestions || selectedOptionIndex === undefined}
            >
              {isChecked ? "Dölj svar" : "Se svar"}
            </button>
            <button
              className="actions-next"
              onClick={goNext}
              type="button"
              disabled={!hasQuestions || safeQuestionIndex === selectedSection.questions.length - 1}
            >
              Nästa →
            </button>
          </div>
          <div className="actions-secondary">
            <button
              className="actions-extra"
              onClick={() => setShowExplanation(true)}
              type="button"
              disabled={!hasQuestions || !hasExplanation}
            >
              Se förklaring
            </button>
            <button
              className="actions-extra"
              onClick={() => setShowOverview((prev) => !prev)}
              type="button"
            >
              Till översikt frågor
            </button>
          </div>
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

        {confirmAction && (
        <section className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
          <div className="modal confirm-modal">
            <h3 id="confirm-title" className="confirm-title">
              {confirmAction === "reset" ? "Starta om test?" : "Avsluta test?"}
            </h3>
            <p className="confirm-message">
              {confirmAction === "reset"
                ? "Alla dina svar i denna sektion tas bort. Vill du fortsätta?"
                : "Vill du avsluta och se resultatet?"}
            </p>
            <div className="confirm-actions">
              <button type="button" className="question-top-btn" onClick={() => setConfirmAction(null)}>
                Avbryt
              </button>
              {confirmAction === "reset" ? (
                <button
                  type="button"
                  className="actions-check"
                  onClick={() => { resetCurrentSectionAttempt(); setConfirmAction(null); }}
                >
                  Ja, starta om
                </button>
              ) : (
                <button
                  type="button"
                  className="question-top-btn question-top-btn-danger"
                  onClick={() => { setShowTestResult(true); setConfirmAction(null); }}
                >
                  Ja, avsluta
                </button>
              )}
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
      </div>
    </div>
  );
}
