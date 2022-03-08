import React, { useState } from "react";
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {Box, Button} from '@chakra-ui/react'
import Image from 'next/image'

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Certificate", logoSrc: "certificate.svg" },
    { label: "Project", logoSrc: "projects.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Flutter", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 80 },
    { skill: "Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "MySQL", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Azure Data Fundamentals (11-2021)",
      duration: { fromDate: "09-Nov", toDate: "2021" },
      description:
        "Has successfully completed the requirements to be recognized as a Microsoft Certified: Azure Data Fundamentals.",
    },
    {
      title: "Cisco Netowrking Essentials (08-2021)",
      duration: { fromDate: "26-Agu", toDate: "2021" },
      description:
        "The student has successfully achieved student level credential for completing Networking Essentials course administered by the undersigned instructor.",
    },
    {
      title: "Cisco Cybersecurity Essentials (07-2021)",
      duration: { fromDate: "24-Jul", toDate: "2021" },
      description:
        "For completing the Cisco Networking Academy® Cybersecurity Essentials course,",
    },
  ];
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"UNIVERSITAS INTERNASIONAL SEMEN INDONESIA (2017 - 2022)"}
        subHeading={"BACHELOR OF INFORMATICS ENGINEERING"}
        
      />

      <ResumeHeading
        heading={"SMAN 1 SUGIHWARAS (2014 - 2017)"}
        subHeading={"NATURAL SCIENCE"}
      />
      <ResumeHeading
        heading={"SMPN 2 BALEN (2011 - 2014)"}
        subHeading={""}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"PT. Nahla Citra Mulia Group"}
          subHeading={"IT SPECIALIST INTERNSHIP (08-2020 - 09-2020)"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Working as web developer and IT Specialist
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an website company profile and inventory management
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app to mobile app
          </span>
          <br />
          <span className="resume-description-text">
            - Design user interface and user experience
          </span>
          <br />
        </div>
        
      </div>
      <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Another Work
            </Button>
          </NextLink>
        </Box>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          
        />
      ))}
    </div>,


    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Personal Portfolio Website (Feb 2022)"
        description="A Personal Portfolio website to showcase all my details and projects at one place."
      />
      <ResumeHeading
        heading="Website Reservation Caffe Sloor.in"
        description="A website reservation and inventory managementA place and food reservation website for cafe sloor.in lamongan area
        with laravel framework."
      />
      <ResumeHeading
        heading="Network Desaign CV. Barokah ZA"
        description="Optimisation network desaign using cisco packet tracer"
      />
    </div>,


    
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <Image
          className="bullet-logo"
          src={require(`../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
