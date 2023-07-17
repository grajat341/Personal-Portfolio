export const bio = [
  "Hello there &#128075;",
  "I'm Rajat Gupta, a Software Engineer at CommerceIQ (A Unicorn Startup) with a specialization in Backend Applications. I have a passion for all things tech and consider myself a curious and enthusiastic developer.",
  "Apart from coding, I love to watch Sports, listen to music, and travel.",
  "As a lifelong learner, I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills.",
  "Thanks for taking the time to learn a little about me!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "Java, Spring Boot,Python, AWS Lambda,Step Functions",
    color: "1",
    percentage: "80",
  },
  {
    title: "Databases",
    skillName: "My SQL,Snowflake,Amazon RDS,My SQL",
    color: "1",
    percentage: "80",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "Spring Boot,Javascript",
    color: "6",
    percentage: "70",
  },
  {
    title: "Design",
    skillName: "Low Level Design (LLD), Design Patterns,High Level Design (HLD) ",
    color: "4",
    percentage: "70",
  },
  {
    title: "Version Control",
    skillName: "Git,GitHub, JIRA, Bitbucket",
    color: "7",
    percentage: "70",
  },
  {
    title: "Tools",
    skillName: "Postman,Docker,Jenkins",
    color: "3",
    percentage: "80",
  },
  {
    title: "Editor",
    skillName: "Intellij,VS Code,PyCharm",
    color: "6",
    percentage: "70",
  },
];

export const projects = {
  disclaimer:
    "*** All the projects I listed were worked by me personally",
  webProjects: [
    {
      projectName: "SKU Price Finder",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a Spring Boot microservice that has APIs to crawl Amazon(.com) and extract the SKU details from web Pages",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["SpringBoot", "Java", "MYSQL", "Docker"],
    },
    {
      projectName: "Data Lineage",
      image: "images/findyourbank.png",
      summary:
        "Developed a parent Child RelationShip Represnting Visual flow of Data among the various Sources in an Organization ",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Java", "Spring", "JavaScript", "Jenkins"],
    },
    {
      projectName: "Language Translater",
      image: "images/pizzaorderchatbot.png",
      summary:
        "Created a custom Language Translated by using Open Source LibreTranslate API. Added the Support for Translating a s3 File.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Python", "Docker","Kubernetes"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/portfolio.png",
      summary:
        "Developed myt Own Portfolio using Github and hosted it there itself.",
      preview: "https://github.com/vinaysomawat/Travographer-Portal",
      techStack: ["HTML", "JavaScript"],
    }

  ]
};

export const experience = [
  {
    title: "CommerceIQ",
    duration: "June 2022 - Present",
    subtitle: "Software Engineer",
    details: [
      "Currently involved in developing an E commerce Omni Channel Product which everyone in online retail can use to increase their profatibility.",
      "Collaborating closely with cross-functional teams such as product, backend, and QA, ensuring timely delivery of product builds to meet deadlines"
    ],
    tags: ["Java8", "SpringBoot", "Snowflake", "AWS", "Jenkins", "Python", "Redis"],
    icon: "heartbeat",
  },
  {
    title: "Informatica",
    duration: "June 2020 - June 2022",
    subtitle: "Software Engineer",
    details: [
      "Successfully implemented Data Masking Algorithms to enable secure transfer of business data among organizations, Achieved more than 20 story points in each sprint.",
      "Streamlined the development  of DataLineage where entire data flow can be made visible via wasy workflow diagrams. Contributedbuted to user onboarding Service,Workflow service",
      "Collaborated closely with cross-functional teams such as product, backend, android, and QA, ensuring timely delivery of product builds to meet deadlines"
    ],
    tags: ["Java", "Spring", "C++", "JavaScript"],
    icon: "qrcode",
  }
];

export const education = [
  {
    title: "Bachelors in Computer Science and Engineering",
    duration: "",
    subtitle: "Chandigarh University,Chandigarh",
    details: [
      "I successfully completed my Engineering  with CGPA of 9.05.",
      "As an active competitive programmer, I have solved 450 + leetcode, showcasing my skills in solving complex programming problems.I am in top 10 Percentile on the Website",
      "My work is  a testament to my ability to create high-quality and impactful code.",
    ],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Class 11-12th in Science and Mathematics",
    duration: "",
    subtitle: "Board of Secondary Education, Jammu And Kashmir",
    details: [
      "I am proud to have achieved an exceptional 94 percentile in my Class 12th Boards Examinations, reflecting my dedication and hard work towards academic excellence.",
    ],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "Stackoverflow",
        link: "https://stackoverflow.com/users/8086622/rajat-gupta",
      },
      {
        text: "GitHub",
        link: "https://github.com/grajat341",
      },
      {
        text: "LeetCode",
        link: "https://leetcode.com/grajat341/",
      },
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
      {
        text: "Clone this page",
        link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/rajgupta3/",
      }
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Rajat Gupta.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];

const gitUserName = "grajat341";
const mediumUserName = "vinaysomawat";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
