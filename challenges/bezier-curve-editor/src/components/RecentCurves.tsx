export interface RecentCurvesProps {
  curves: string[];
}

export function RecentCurves({ curves }: RecentCurvesProps) {
  return (
    <ul data-testid="recent-curves-list">
      {curves.map((css, i) => (
        <li key={`${css}-${i}`}>{css}</li>
      ))}
    </ul>
  );
}
