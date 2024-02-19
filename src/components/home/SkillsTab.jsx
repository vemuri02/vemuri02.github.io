import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills, isScrolled }) {
  const divideSkills = (skills) => {
    if (!skills) {
      return { left: [], right: [] }; // or handle it as per your requirements
    }

    const middleIndex = Math.floor(skills.length / 2);
    return {
      left: skills.slice(0, middleIndex),
      right: skills.slice(middleIndex),
    };
  };

  const { left, right } = divideSkills(skills);

  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection skills={left} isScrolled={isScrolled} />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection skills={right} isScrolled={isScrolled} />
      </Col>
    </>
  );
}

export default SkillsTab;
