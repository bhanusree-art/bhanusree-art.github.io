// Content Data
const contentData = {
  about: `
    <h3>About</h3>
    <p>From a young age, I’ve been fascinated by how things work, especially computers. What began as a curiosity about technology soon turned into a deep passion for software development. I dove into coding, starting with simple projects that sparked my interest and gradually evolving into more complex systems. My journey led me to pursue both a Bachelor’s and Master’s in Computer Science, where I honed my problem-solving skills and built a solid technical foundation in Java, Spring Boot, AWS, and other tools that power today’s digital world.<p>
    <p>As a Software Engineer, I’ve had the privilege of working on impactful projects—like optimizing ad delivery at Yahoo and enhancing mobile app performance for over 500K devices at Mivi. I’m passionate about designing scalable, high-performance systems that meet real-world challenges. But for me, success isn’t just about technical achievements; it’s about the people I work with. I firmly believe that collaboration is key to innovation, and I strive to foster an environment where creativity, trust, and communication flourish.<p>
    <p>Today, I’m driven by the opportunity to solve complex problems with technology while also growing as a leader. Whether leading teams, mentoring peers, or collaborating across functions, I aim to bring fresh ideas and innovative solutions to every project. My journey from a curious child to a software engineer is just the beginning, and I’m excited to connect with like-minded professionals, learn together, and make a meaningful impact in the tech world.<p>
  `,
  experience: `
    <h3>Experience</h3>
    <h4>Software Engineer, Yahoo</h4>
    <p>Remote (Texas) | May 2024 to Present</p>
    <ul>
      <li>Designed and implemented microservices using Spring Boot, optimizing the delivery of targeted ads to millions of users, resulting in a 25% increase in ad engagement.</li>
      <li>Developed and deployed robust, scalable REST APIs that facilitate seamless communication between front-end systems (built with Angular and React) and back-end services, improving response times by 30% and ensuring high availability.</li>
      <li>Leveraged AWS services (Lambda, S3, EC2) to create a scalable, cost-effective cloud architecture handling over 5 million daily transactions with zero downtime.</li>
      <li>Optimized data models and queries using Hibernate and MySQL for efficient storage and retrieval of large datasets, reducing query processing time by 20%.</li>
      <li>Streamlined CI/CD pipelines using Jenkins, Docker, and Kubernetes, reducing deployment time and achieving high availability for production services.</li>
    </ul>

    <h4>Software Engineer, Mivi</h4>
    <p>Hyderabad, India | Mar 2020 to Jun 2022</p>
    <ul>
      <li>Designed and developed backend services for Mivi’s User-Centric Mobile App to support over 500K devices, enabling personalized settings and firmware updates using Java and Spring Boot.</li>
      <li>Created and optimized REST APIs and Microservices, improving response times by 30%, contributing to smoother mobile app functionality built with Angular and React.</li>
      <li>Demonstrated leadership by coordinating tasks across a team of 4 members, fostering collaboration and ensuring timely delivery of key features, resulting in accelerated product iterations.</li>
      <li>Implemented MySQL databases and Hibernate to manage user data and device preferences, reducing query execution time by 15%, ensuring fast access to critical product data.</li>
      <li>Utilized Git and Jenkins to streamline CI/CD pipelines, reducing deployment errors and improving the overall release cycle, while leveraging AWS for cloud-based deployments.</li>
      <li>Deployed backend services using Docker and Kubernetes, ensuring consistent development environments, simplifying deployment, and maintaining a scalable infrastructure.</li>
      <li>Performed automated unit testing using JUnit, for code quality and minimizing bugs before production releases.</li>
    </ul>
  `,
  projects: `
    <h3>Projects</h3>
    <div class="project">
      <h4>Cloud-Based Document Management and Collaboration System</h4>
      <p><a href="https://github.com/bhanusree-art/cloudbased-document-management-system.git" target="_blank">GitHub Link</a></p>
      <ul>
        <li>Developed a cloud-based system for document storage, version control, and real-time collaboration.</li>
        <li>Integrated AWS S3 for secure storage and Lambda for file processing.</li>
        <li>Enabled real-time editing and document sharing with role-based access control.</li>
        <li>Tech Stack: Java, Spring Boot, AWS (S3, Lambda), React, REST APIs, Docker, Kubernetes, Version Control.</li>
      </ul>
    </div>

    <div class="project">
      <h4>E-Commerce Platform with Personalized Recommendations</h4>
      <p><a href="https://github.com/bhanusree-art/e-commerce-platform.git" target="_blank">GitHub Link</a></p>
      <ul>
        <li>Built a full-stack e-commerce platform with Spring Boot microservices and React/Angular frontend.</li>
        <li>Integrated an AI-driven recommendation engine for personalized product suggestions.</li>
        <li>Scaled the platform using Docker and Kubernetes, ensuring high availability during peak traffic.</li>
        <li>Tech Stack: Java, Spring Boot, MySQL/PostgreSQL, Machine Learning, AWS, React, Angular, Docker, Kubernetes.</li>
      </ul>
    </div>

    <div class="project">
      <h4>Healthcare Appointment Scheduling and Telemedicine System</h4>
      <p><a href="https://github.com/bhanusree-art/healthcare-appointment-system.git" target="_blank">GitHub Link</a></p>
      <ul>
        <li>Built a secure, scalable platform for appointment scheduling and virtual consultations using Spring Boot microservices and React/Angular.</li>
        <li>Integrated AWS S3/RDS for secure health record storage and WebSockets for real-time notifications.</li>
        <li>Enabled seamless telemedicine features, including video calls and appointment reminders.</li>
        <li>Tech Stack: Java, Spring Boot, AWS, React, Angular, REST APIs, Docker, Kubernetes, MySQL, WebSockets.</li>
      </ul>
    </div>

    <div class="project">
      <h4>Personal Finance Management and Investment Tracker</h4>
      <p><a href="https://github.com/bhanusree-art/finance-management-system.git" target="_blank">GitHub Link</a></p>
      <ul>
        <li>Developed a finance app for tracking income, expenses, and investments with Spring Boot backend and React frontend.</li>
        <li>Implemented machine learning for personalized financial recommendations and automated budgeting.</li>
        <li>Utilized AWS for cloud storage and analytics, and OAuth 2.0 for secure authentication.</li>
        <li>Tech Stack: Java, Spring Boot, AWS, React, MySQL, Machine Learning, REST APIs, Docker, Kubernetes, OAuth2.0.</li>
      </ul>
    </div>

    <div class="project">
      <h4>Telecommunications Network Monitoring and Incident Management System</h4>
      <p><a href="https://github.com/bhanusree-art/telecom-monitoring-system.git" target="_blank">GitHub Link</a></p>
      <ul>
        <li>Designed a real-time monitoring platform for telecom networks using Spring Boot and AWS CloudWatch.</li>
        <li>Created a React-based dashboard for visualizing network performance and incident status.</li>
        <li>Automated incident escalation and reporting, improving response times and system reliability.</li>
        <li>Tech Stack: Java, Spring Boot, AWS, React, MySQL, CloudWatch, REST APIs, Docker, Kubernetes.</li>
      </ul>
    </div>
  `,
  skills: `
    <h3>Skills</h3>
    <ul>
      <li>Programming Languages: Java, JavaScript, Python, TypeScript</li>
      <li>Web Frameworks & Libraries: HTML5, CSS3, Angular, React, Node.js</li>
      <li>Backend Frameworks & Technologies: Spring Boot, Hibernate, Microservices, REST APIs</li>
      <li>Cloud & Infrastructure: AWS, Docker, Kubernetes, Jenkins</li>
      <li>Database: MySQL, PostgreSQL, SQL Server, Cassandra</li>
      <li>Software Development Practices: CI/CD, Agile, Scrum</li>
      <li>Testing Tools: JUnit, Selenium</li>
      <li>Tools: Visual Studio Code, Eclipse, IntelliJ IDEA, JIRA, GitHub, Docker Compose</li>
    </ul>
  `,
  education: `
    <h3>Education</h3>
    <h4>University of North Texas, Denton, TX</h4>
    <p>Master of Science in Computer Science</p>
    <p>Courses: Fundamentals of Artificial Intelligence, Software Engineering, Big Data, Data Science, Computer Algorithms, Usability Testing, Wireless Networks, Information Retrieval, Machine Learning, Operating Systems.</p>

    <h4>Malla Reddy Engineering College for Women, Hyderabad, India</h4>
    <p>Bachelor of Technology in Computer Science and Engineering</p>
    <p>Courses: Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Organization, Computer Networks, Design and Analysis of Algorithms, Compiler Design, Cloud Computing, Linux Programming, Mobile Computing, Adhoc and Sensor Networks, Programming Essentials in Python.</p>
  `,
  contact: `
    <h3>Contact</h3>
    <p>Feel free to reach out to me via email or connect with me on LinkedIn. I’d love to hear from you!</p>
  `,
};

// Load Content Dynamically
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = this.getAttribute('href').substring(1);
    if (section === 'contact') {
      // Load the Contact section content
      document.getElementById('content').innerHTML = contentData[section];
      // Scroll to the footer
      document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('content').innerHTML = contentData[section];
    }
  });
});

// Load About Section by Default
document.getElementById('content').innerHTML = contentData.about;
