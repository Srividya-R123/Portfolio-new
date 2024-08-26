import {
    mobile,
    gro,
    c,
    cpp,
    python,
    cisco,
    java,
    php,
    msex,
    mspp,
    bootstrap,
    jquery,
    MySQL,
    os,
    ap,
    cb,
    bb,
    backend,
    creator,
    web,
    udemy,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Flag,
    Food,
    color,
    poster,
    simple,
    matlab,
    Forage,
    Pentafox,
    Simplilearn
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Python Complete course for Python Beginners",
      icon: udemy,
      link:"https://drive.google.com/file/d/1hvsYnP3caId3SbptRPf-7FeEi6TqMQWN/view?usp=drive_link",
    },
    {
      title: "Bootstrap and Jquery-Certification course for Beginners",
      icon: udemy,
      link:"https://drive.google.com/file/d/1WYrf5wQCcaI8hkPXzkiqD6gwb5HbAoad/view?usp=drive_link",
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      icon: udemy,
      link:"",
    },
    {
      title: "Networking Essentials",
      icon: cisco,
      link:"https://drive.google.com/file/d/1ev5KgmwH06MR6n4DQ6AvUF9cGcqZ2zy-/view?usp=drive_link",
    },
    {
      title: "Basics of UI and UX",
      icon: Simplilearn,
      link:"https://drive.google.com/file/d/1I4AlM6tkFzyIi9GCcpZe7HUcFxxQhZ0M/view?usp=drive_link",
    },
    {
      title: "Web Development Internship",
      icon: Pentafox,
      link:"https://drive.google.com/file/d/1pAkGRyLj1yRpgR5VaYUd9P0ZpuGSRg5I/view?usp=drive_link",
    },
    {
      title: "Data Analytics and Visualization Job Simulation by Accenture",
      icon: Forage,
      link:"https://drive.google.com/file/d/1TteNlPf4PhBGi-HGZz_8Z0BBkTJiR1eO/view?usp=sharing",
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    
   
   
    
    {
      name: "PHP",
      icon: php,
    },
     {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "JQuery",
      icon: jquery,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "MySQL",
      icon: MySQL,
    },
    {
      name: "Oracle SQL",
      icon: os,
    },
    
    {
      name: "MS-Powerpoint",
      icon: mspp,
    },
    {
      name: "MS-Excel",
      icon: msex,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
  ];
  
  const experiences = [{
    title: "Multi-robot Automatic Scheduling System",
      company_name: "HTML CSS Flask MongoDB Atlas Machine Learning",
      icon:cb,
      iconBg: "#383E56",
      date: "Jan 2024 - May 2024",
      source_code_link:"",
      points: [
        "RoboServe is a dynamic website built with Python Flask and MongoDB Atlas. ",
        "Guests can browse robot information, users (especially from the medical field) can access hospital details, request robots, and input patient data, while admins manage robot allocation and scheduling to fulfill user requests efficiently.",
        "Allocation of different kinds of robot for different health conditions of patients like age, disease severity using machine learning algorithms like svm, random forest classfier and KNN and compared the accuracy of each"
      ],
    },
    {
      title: "Brain Tumor Detection",
      company_name: "Matlab Machine Learning",
      icon:matlab,
      iconBg: "#383E56",
      date: "Jan 2024 - May 2024",
      source_code_link:"",
      points: [
        "MRI Images of Brain were divided into 2 classesA Matlab code is written to segment the tumor and classify it as Benign or Malignant using Random forest classifier.",
        "Required image processing is done like conversion to grey image ,applied high boost filter and segmentation and trained using 80% data and tested using 20% data"
      ],
    },
    {
      title: "Farmers Market Grocery Website",
      company_name: "ReactJS",
      icon: gro,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Sep 2023",
      source_code_link:"https://github.com/Srividya-R123/GroceryWebsite.git",
      points: [
        "Product listing for easy browsing and selection of groceries.",
"User login and registration for personalized shopping experience.",
"Search functionality to quickly find specific products.",
"Efficient cart management for adding and removing items.",
"Secure payment option and user profiles for seamless transactions."
      ],
    },
    {
      title: "Aarogyam Health Care Chatbot",
      company_name: "C++",
      icon: cb,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - May 2023",
      source_code_link:"https://github.com/Srividya-R123/GroceryWebsite.git",
      points: [
        "Health Care Chatbot developed in C++ integrates Dijkstra's algorithm for finding shortest distances and closest hospitals.",
"Provides users with symptom diagnosis, suggestions, and recommends nearby medical facilities.",
"Enables online appointment booking according to disease severity and user preferences.",
"Utilizes graph-based approach for efficient healthcare information management.",
"A comprehensive solution for healthcare guidance and patient care using advanced algorithms."
      ],
    },
    {
      title: "Accomodation Management System",
      company_name: "HTML CSS JS PHP OracleSQL",
      icon: ap,
      iconBg: "#383E56",
      date: "Sep 2022 - Dec 2022",
      source_code_link:"https://github.com/Srividya-R123/GroceryWebsite.git",
      points: [
        "Accommodation Management System website built with HTML, CSS, JS, PHP, and Oracle SQL.",
        "Allows users to register as owners or tenants, simplifying property management.",
        "Enables apartment searches based on preferences, streamlining property selection.",
        "Securely handles rent history, payments, and property details for a seamless experience.",
        "Owners can list properties with specific constraints, enhancing property listings."
      ],
    },
    {
      title: "Blood Bank Management System",
      company_name: "HTML CSS JS PHP MySQL",
      icon:bb,
      iconBg: "#383E56",
      date: "May 2022 - July 2023",
      source_code_link:"https://github.com/Srividya-R123/GroceryWebsite.git",
      points: [
        "Blood Bank Management System web application created with HTML, CSS, JS, PHP, and MySQL.",
"Facilitates user registration and login, allowing donors to register and request specific blood types.",
"Enables users to search for available blood groups, make blood requests, and manage transactions.",
"Comprehensive platform for efficient blood donation and distribution, enhancing healthcare services.",
"An integrated solution for blood bank operations and seamless user interaction."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Street Food Webpage",
      description:
        "It is blog webpage created using html and css mediaquery.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Mediaquery",
          color: "pink-text-gradient",
        },
      ],
      image: Food,
      source_code_link: "https://github.com/Srividya-R123/Web-Development.git",
    },
    {
      name: "ColourPage",
      description:
        "It is created using HTML, CSS grid property",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Grid",
          color: "pink-text-gradient",
        },
      ],
      image:color,
      source_code_link: "https://github.com/Srividya-R123/Web-Development.git",
    },
    {
      name: "National flag",
      description:
        "It is a simple webpage of a picture of national flag created using div tag and z-index property.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "div",
          color: "pink-text-gradient",
        },
      ],
      image: Flag,
      source_code_link: "https://github.com/Srividya-R123/Web-Development.git",
    },
    {
      name: "Motivational Poster",
      description:
        "It is a simple webpage of motivational quote using div tag.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "div",
          color: "pink-text-gradient",
        },
      ],
      image: poster,
      source_code_link: "https://github.com/Srividya-R123/Web-Development.git",
    },
    {
      name: "Simple website",
      description:
        "It is a simple website using section tag.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "div",
          color: "pink-text-gradient",
        },
      ],
      image: simple,
      source_code_link: "https://github.com/Srividya-R123/Web_development_assignment.git",
    }
  

  ];
  
  export { services, technologies, experiences, testimonials, projects };