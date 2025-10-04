import { Accordion, ListGroup } from "react-bootstrap";

export default function Modules() {
  return (
    <div>
      <Accordion id="wd-modules">
        <Accordion.Item eventKey="0" className="wd-module">
          <Accordion.Header>Week 1</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="wd-lessons">
              <ListGroup.Item className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">
                    Introduction to the course
                  </ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">
                    Learn what is Web Development
                  </ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="wd-module">
          <Accordion.Header>Week 2</Accordion.Header>
          <Accordion.Body>
            Content for Week 2
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="wd-module">
          <Accordion.Header>Week 3</Accordion.Header>
          <Accordion.Body>
            Content for Week 3
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}