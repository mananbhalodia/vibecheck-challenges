const DESCRIPTION =
  "Set Up Workflows That Handle Reputative Tasks Automatically, Freeing Up Your Time For More Critical Work.";

export function SaasCard() {
  return (
    <section
      aria-label="Automation card"
      className="saas-card"
      data-testid="saas-card"
    >
      <div className="card-preview" aria-hidden="true">
        <div className="card-preview__burst" />
        <div className="project-chip" data-testid="project-chip">
          <div className="project-chip__icon" data-testid="project-icon">
            <span className="project-chip__icon-glyph">⚡</span>
          </div>
          <div className="project-chip__content">
            <p className="project-chip__title">Name Project</p>
            <p className="project-chip__subtitle">
              2/5 Team Members Are Working
            </p>
          </div>
        </div>
      </div>

      <div className="card-copy">
        <h1>Automation</h1>
        <p>{DESCRIPTION}</p>
      </div>
    </section>
  );
}
