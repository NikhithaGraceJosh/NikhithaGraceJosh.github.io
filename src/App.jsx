import { useEffect, useState } from "react";
import "./App.css";

const lines = [
  "initialising portfolio...",
  "loading experience...",
  "loading projects...",
  "loading skills...",
  "loading contact...",
  "coming soon...",
];

export default function App() {
  const [completedLines, setCompletedLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    if (currentText.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1));
      }, 50);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCompletedLines((previous) => [...previous, currentLine]);
      setCurrentText("");
      setLineIndex((previous) => previous + 1);
    }, 400);

    return () => clearTimeout(timeout);
  }, [currentText, lineIndex]);

  return (
    <main className="terminal-page">
      <header className="header">
        <h1>Nikhitha Grace Josh</h1>
      </header>

      <div className="terminal">
        {completedLines.map((line, index) => (
          <p key={index}>
            <span className="prompt">$</span> {line}
          </p>
        ))}

        {lineIndex < lines.length && (
          <p>
            <span className="prompt">$</span> {currentText}
            <span className="cursor">▋</span>
          </p>
        )}
      </div>

      <footer className="footer">
        <a
          href="https://github.com/NikhithaGraceJosh"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/nikhitha-josh-software-engineer"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </footer>
    </main>
  );
}
