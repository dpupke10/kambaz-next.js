import { Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={4} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1234"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  src="/images/reactjs.jpg"
                  width={300}
                  height={160}
                  alt="React JS"
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Full Stack Software Development
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/5678"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  src="/images/nodejs.jpg"
                  width={300}
                  height={160}
                  alt="Node JS"
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5678 Node JS
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Backend Development
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/9101"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  src="/images/typescript.jpg"
                  width={300}
                  height={160}
                  alt="TypeScript"
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS9101 TypeScript
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Advanced JavaScript
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1121"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  src="/images/htmlcss.jpg"
                  width={300}
                  height={160}
                  alt="HTML & CSS"
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1121 HTML & CSS
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Web Design Basics
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/3141"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  src="/images/python.jpg"
                  width={300}
                  height={160}
                  alt="Python"
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS3141 Python
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Data Science
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/5161"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  src="/images/java.jpg"
                  width={300}
                  height={160}
                  alt="Java"
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5161 Java
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Object-Oriented Programming
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/7181"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Image
                  src="/images/database.jpg"
                  width={300}
                  height={160}
                  alt="Databases"
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS7181 Databases
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Database Management Systems
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}