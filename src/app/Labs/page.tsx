import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <p>Full Name: Daniel Pupke</p>
      <p>Section: 01</p>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: Styling Web Pages with CSS
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
      </ul>
      <p>
        <Link href="/" id="wd-kambaz-link">
          Back to Kambaz Application
        </Link>
      </p>
      <p>
        <a href="https://github.com/dpupke10/kambaz-next.js" id="wd-source-code-link" target="_blank">
          Source Code Repository
        </a>
      </p>
    </div>
  );
}