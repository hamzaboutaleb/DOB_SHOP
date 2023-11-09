function Grid({ cols = 1, rows = 1, gap = 1.2, className, children }) {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: `${gap}rem`,
      }}
    >
      {children}
    </div>
  );
}

export default Grid;
