import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";


const Skills = React.forwardRef(({ heading, programmingLanguages, dataScience, pythonPackages, WebTechnologies, Databases, cloudServices, devOpsAndTools, deepLearning, genAI,frameworks, mathOpt,stats, modelOpt, hardwareDesign, lowPowerTechniques}, ref) => {
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
  // const dataScience = [
  //   { name: "Python", value: 90 },
  //   { name: "TensorFlow", value: 85 },
  //   { name: "AWS", value: 80 },
  //   { name: "Docker", value: 75 },
  //   { name: "SQL", value: 70 }
  // ];
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
          fill
        >
          {/* <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Technical Skill"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Soft Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab> */}
          <Tab
            tabClassName="skills-tab lead"
            eventKey="programmingLanguages"
            title="Programming Languages"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={programmingLanguages} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="dataScience"
            title="Data Science"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={dataScience} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="deepLearning"
            title="Deep Learning & Computer Vision"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={deepLearning} isScrolled={isScrolled} />
            </Row>
          </Tab>


          <Tab
            tabClassName="skills-tab lead"
            eventKey="genAI"
            title="Generative AI Expertise"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={genAI} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="frameworks"
            title="Frameworks and Tools"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={frameworks} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="mathOpt"
            title="Math & Optimization"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={mathOpt} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="stats"
            title="Statistics & Probability"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={stats} isScrolled={isScrolled} />
            </Row>
          </Tab>


          
          {/* <Tab
            tabClassName="skills-tab lead"
            eventKey="pythonPackages"
            title="Python Packages"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={pythonPackages} isScrolled={isScrolled} />
            </Row>
          </Tab> */}
          <Tab
            tabClassName="skills-tab lead"
            eventKey="WebTechnologies"
            title="Web Technologies"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={WebTechnologies} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="Databases"
            title="Databases"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={Databases} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="cloudServices"
            title="Cloud Services"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={cloudServices} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="devOpsAndTools"
            title="DevOps and Tools"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={devOpsAndTools} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="modelOpt"
            title="Model Optimization Techniques"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={modelOpt} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hardwareDesign"
            title="Hardware Design"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={hardwareDesign} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="lowPowerTechniques"
            title="Low Power Techniques"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={lowPowerTechniques} isScrolled={isScrolled} />
            </Row>
          </Tab>
          
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
