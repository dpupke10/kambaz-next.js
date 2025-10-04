import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.jpg"
              width={200}
              height={150}
              alt="React JS"
            />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Development
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image
              src="/images/nodejs.jpg"
              width={200}
              height={150}
              alt="Node JS"
            />
            <div>
              <h5>CS5678 Node JS</h5>
              <p className="wd-dashboard-course-title">Backend Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/9101" className="wd-dashboard-course-link">
            <Image
              src="/images/typescript.jpg"
              width={200}
              height={150}
              alt="TypeScript"
            />
            <div>
              <h5>CS9101 TypeScript</h5>
              <p className="wd-dashboard-course-title">Advanced JavaScript</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1121" className="wd-dashboard-course-link">
            <Image
              src="/images/htmlcss.jpg"
              width={200}
              height={150}
              alt="HTML & CSS"
            />
            <div>
              <h5>CS1121 HTML & CSS</h5>
              <p className="wd-dashboard-course-title">Web Design Basics</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3141" className="wd-dashboard-course-link">
            <Image
              src="/images/python.jpg"
              width={200}
              height={150}
              alt="Python"
            />
            <div>
              <h5>CS3141 Python</h5>
              <p className="wd-dashboard-course-title">Data Science</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5161" className="wd-dashboard-course-link">
            <Image src="/images/java.jpg" width={200} height={150} alt="Java" />
            <div>
              <h5>CS5161 Java</h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Programming
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/7181" className="wd-dashboard-course-link">
            <Image
              src="/images/database.jpg"
              width={200}
              height={150}
              alt="Databases"
            />
            <div>
              <h5>CS7181 Databases</h5>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
