import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  if (!Array.isArray(skills)) {
    // Handle case where skills is not an array
    return <div>No skills available</div>;
  }

  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill.name}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills = [], isScrolled }) {
  // Ensure skills is an array and has at least one item
  if (!Array.isArray(skills) || skills.length === 0) {
    return <div>No skills available</div>;
  }

  const midpoint = Math.floor(skills.length / 2);

  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(0, midpoint)}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(midpoint)}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
