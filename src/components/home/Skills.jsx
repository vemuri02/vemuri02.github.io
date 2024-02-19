import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, dataScience, programmingLanguages, pythonPackages,WebTechnologies,Databases,cloudServices }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={ref} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="datascience"
          id="skills-tabs"
          fill
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="datascience"
            title="Data Science/Machine Learning"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={dataScience} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="programming"
            title="Programming Languages"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={programmingLanguages} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="python_packages"
            title="Python Packages"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={pythonPackages} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="web"
            title="Web Technologies"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={WebTechnologies} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="databases"
            title="Databases"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={Databases} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="cloud"
            title="Big Data & Cloud Services"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={cloudServices} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
