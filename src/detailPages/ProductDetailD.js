import React, { useState, useRef } from 'react';
      import './ProductDetail.css';

      const ProductDetailG = () => {
        const [showFindCandidatePopup, setShowFindCandidatePopup] = useState(false);
        const [expandedRowIndex, setExpandedRowIndex] = useState(null);
        const [expandedSkillRowIndex, setExpandedSkillRowIndex] = useState(null);
        const descriptionRef = useRef(null);
        const headers = ['role', 'skills', 'quantity'];
        const completeResult ={
  "project_name": "Jump Hero Mobile Game Development",
  "team": [
    {
      "experience": "5+ years",
      "location": "United States",
      "quantity": 1,
      "role": "Game Designer",
      "skills": [
        "Level design",
        "Character design",
        "Game mechanics"
      ]
    },
    {
      "experience": "3+ years",
      "location": "United States",
      "quantity": 3,
      "role": "Unity Developer",
      "skills": [
        "Unity 3D",
        "C#",
        "Physics engine"
      ]
    },
    {
      "experience": "4+ years",
      "location": "United States",
      "quantity": 2,
      "role": "2D/3D Artist",
      "skills": [
        "Illustration",
        "Animation",
        "3D modeling"
      ]
    },
    {
      "experience": "3+ years",
      "location": "United States",
      "quantity": 2,
      "role": "Backend Developer",
      "skills": [
        "Node.js",
        "Database management",
        "API development"
      ]
    },
    {
      "experience": "3+ years",
      "location": "United States",
      "quantity": 2,
      "role": "Frontend Developer",
      "skills": [
        "React",
        "JavaScript",
        "Responsive design"
      ]
    },
    {
      "experience": "3+ years",
      "location": "United States",
      "quantity": 1,
      "role": "UI/UX Designer",
      "skills": [
        "User experience design",
        "Prototyping",
        "Wireframing"
      ]
    },
    {
      "experience": "2+ years",
      "location": "United States",
      "quantity": 2,
      "role": "Quality Assurance Tester",
      "skills": [
        "Test automation",
        "Bug tracking",
        "Mobile testing"
      ]
    },
    {
      "experience": "5+ years",
      "location": "United States",
      "quantity": 1,
      "role": "Project Manager",
      "skills": [
        "Agile methodologies",
        "Project planning",
        "Team coordination"
      ]
    },
    {
      "experience": "3+ years",
      "location": "United States",
      "quantity": 1,
      "role": "DevOps Engineer",
      "skills": [
        "CI/CD",
        "AWS or Azure",
        "Containerization"
      ]
    },
    {
      "experience": "3+ years",
      "location": "United States",
      "quantity": 1,
      "role": "Marketing Specialist",
      "skills": [
        "Digital marketing",
        "Social media management",
        "Content creation"
      ]
    }
  ]
};
        const serializedcompleteGetCandidateResult = {
  "2D/3D Artist": [
    {
      "email": "uk.tumekiah62@tynes.gov",
      "experience_years": 40,
      "first_name": "Etheryah",
      "last_name": "Ibisinger",
      "person_id": 4444,
      "phone": "547-143-8670",
      "score": 4.564071023464203,
      "similarity": 0.6267455816268921,
      "skills": "['Front-End Developer', 'Designer', 'Wordpress', 'HTML/CSS', 'Photoshop', 'Sketch', 'HTML emails', 'Marketing materials']['Photoshop', 'Sketch', 'HTML/CSS', 'Wordpress', 'HTML emails', 'Marketing materials', 'HTML/CSS', 'Website development', 'HTML emails']"
    },
    {
      "email": "uzayden.ysai66@yvonson.org",
      "experience_years": 39,
      "first_name": "Psalak",
      "last_name": "Grady",
      "person_id": 4686,
      "phone": "398-893-8668",
      "score": 4.477775502204896,
      "similarity": 0.6419727802276611,
      "skills": "['Established new web development department', 'Built SharePoint 2013 portal templates and workflows', 'Lead development team in building custom Angular JS and workflow tools', 'Worked with creative department on producing required design templates', 'Trained new developers on process and SharePoint build structure', 'Produced lists and data structure requirements for development', 'Designed wireframes and prototypes needed to produce systems', 'Maintained on-going relationship with internal clients', 'Provided web site design and development for small companies', 'Developed desktop and mobile sites for big brand clients', 'Built hundreds of finance event sites that included RSVP capabilities and accommodations', 'Designed promotional materials for print and web', 'Worked with software development team on wireframes and prototypes for diabetes software', 'Taught MS Office Suite in Spanish to injured students on Workers Compensation']['CSS', 'SharePoint 2013', 'HTML', 'Javascript', 'WordPress', 'Photoshop', 'Illustrator', 'MS Office', 'MySQL']"
    },
    {
      "email": "yvarydeliaun51@yznary.gov",
      "experience_years": 39,
      "first_name": "Aide",
      "last_name": "Hmielish",
      "person_id": 4722,
      "phone": "864-421-9888",
      "score": 4.4659194409847265,
      "similarity": 0.6287993788719177,
      "skills": "['Front-End Developer', 'Designer', 'WordPress Developer', 'Business Analyst', 'Intranet Consultant', 'Web Manager', 'Senior Web Producer', 'Senior Web Content Editor', 'Web Content Editor']['WordPress', 'HTML', 'CSS', 'PHP', 'Adobe Photoshop', 'Confluence', 'JIRA', 'Convio', 'IBM Watson', 'CommonSpot', 'Drupal', 'Drupal', 'Open Text', 'Drupal', 'SharePoint']"
    },
    {
      "email": "myrent.mylon11@een.co.uk",
      "experience_years": 38,
      "first_name": "Iyarius",
      "last_name": "Iwan",
      "person_id": 17589,
      "phone": "596-685-3282",
      "score": 4.379009747505188,
      "similarity": 0.6433441638946533,
      "skills": "['Lead developer', 'architect', 'CodeIgniter', 'Python', 'Brightcove API', 'Authorize.net', 'Full Stack Web Developer']['CodeIgniter', 'Python', 'Brightcove API', 'Authorize.net']"
    },
    {
      "email": "alerdsilvanholow2@ickelerhield.co.uk",
      "experience_years": 38,
      "first_name": "Djena",
      "last_name": "Trouhard",
      "person_id": 3625,
      "phone": "458-963-8870",
      "score": 4.37004628777504,
      "similarity": 0.6333847641944885,
      "skills": "['Adaptive Web Design', 'Branding', 'Copy Writing / Editing', 'Ebooks', 'Illustration', 'LAMP Development', 'Live Audio Production', 'Print Design', 'Photography', 'Research', 'Studio Production', 'Wireframing']['Designing elegant UX solutions', 'Robust marketer tools for Wordpress', 'Product Designer aspirant', 'Created ebooks for licensing partners', 'Collaborated with authors, editors and designers', 'Department lead in ebook experiences', 'Created high-resolution image implementation process', 'Streamlined cross-divisional workflows']"
    }
  ],
  "Backend Developer": [
    {
      "email": "nycolasedisery61@exford.ca",
      "experience_years": 39,
      "first_name": "Tvis",
      "last_name": "Bzuress",
      "person_id": 4710,
      "phone": "757-807-3531",
      "score": 4.513365733623505,
      "similarity": 0.681517481803894,
      "skills": "['Front End Web Developer', 'Web Designer', 'Freelance Web Designer and Developer', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Adobe Fireworks', 'Photoshop', 'Dreamweaver', 'Leadership', 'Marketing', 'Strong Design Professional']['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Website Design', 'Website Development', 'Maintenance', 'Upgrades', 'Hosting', 'Flyer Design', 'Marketing Deliverables', 'Remote Collaboration', 'Website Design', 'Website Development', 'Quality Assurance', 'Website Maintenance', 'Banner Design', 'Event Design', 'Employee Management', 'Sales Techniques', 'Customer Service']"
    },
    {
      "email": "szys.dkotomual21@qian.com",
      "experience_years": 39,
      "first_name": "Uinique",
      "last_name": "Phil",
      "person_id": 4983,
      "phone": "887-342-6949",
      "score": 4.513365733623505,
      "similarity": 0.681517481803894,
      "skills": "['Videography', 'CSS', 'HTML', 'jQuery', 'Photoshop', 'Premiere', 'PHP', 'Wordpress']['Wordpress', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'jQuery', 'SASS', 'Photoshop', 'Videography', 'Premiere', 'After Effects', 'Groovy', 'Java', 'jQuery', 'LESS', 'Videography', 'Premiere', 'After Effects', 'Lighting', 'Magento', 'PHP', 'Groovy', 'Java', 'Wordpress', 'Drupal', 'PHP', '.NET', 'Flash']"
    },
    {
      "email": "oen.idric14@gsel.org",
      "experience_years": 39,
      "first_name": "Otellallie",
      "last_name": "Oyuel",
      "person_id": 4929,
      "phone": "495-951-3687",
      "score": 4.512612998485565,
      "similarity": 0.6806811094284058,
      "skills": "['Web and app developer', 'Digital Producer at Atlanta Magazine', 'Passion for web development and app development']['HTML5', 'CSS3', 'JavaScript/jQuery', 'Customized Ebb', 'Apple Watch', 'iPad app']"
    },
    {
      "email": "fostinaludke34@oneixon.jp",
      "experience_years": 39,
      "first_name": "Rd",
      "last_name": "Tlatsaula",
      "person_id": 3738,
      "phone": "831-769-8125",
      "score": 4.512612998485565,
      "similarity": 0.6806811094284058,
      "skills": "['Front-end web development', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress', 'Microsoft SharePoint', 'Laboratory work', 'Sample processing', 'Maintaining records', 'Labeling specimens', 'Cleaning and maintaining work area', 'Promotional work', 'Flyer distribution', 'Ensuring safety']['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress', 'Microsoft SharePoint', 'Received and processed samples', 'Prepared samples for testing', 'Maintained accurate laboratory records', 'Labeled specimens accurately', 'Cleaned and maintained work area', 'Distributed flyers', 'Ensured appropriate attire and marketing material', 'Monitored proper flyer distribution', 'Ensured safety of fellow employees']"
    },
    {
      "email": "yridhi.hrobanpanca119@hlavy.com",
      "experience_years": 38,
      "first_name": "Jolenayin",
      "last_name": "Gren",
      "person_id": 5118,
      "phone": "633-433-5412",
      "score": 4.412421810626984,
      "similarity": 0.6804686784744263,
      "skills": "['JAVASCRIPT', 'jQuery', 'UI', 'USER INTERFACE', 'HTML', 'CSS', 'JIRA', 'Git', 'Visual Studio', 'Agile', 'SASS']['building and maintaining client sites in an in-house CMS built off Sitefinity', 'sole Front- End developer for in-house CMS', 'providing mock-ups for clients and implementing designs', 'Reported directly to CTO', 'Complete ownership of front- end for company website and marketplace', 'Managed own schedule', 'Complete clean-up of of code and css', 'Updated website and marketplace to be responsive', 'Complete redesign of marketplace', 'Working in Agile/scrum environment', 'Implementing JavaScript/jQuery', 'Utilizing C3.js and D3.js', 'Organizing CSS with Pattern Library (gulp.js and React)', 'Some learning experience with C# and .NET', 'Working in Agile/scrum environment', 'Working in two-week sprints and utilizing JIRA', 'Implementing responsive web design', 'Utilizing SVN and GIT', 'Creating and organizing templates', 'Implementing website shopping cart', 'Creating webpages for webinars', 'Creating HTML emails', 'Designing and creating PURL sites', 'Setting up and maintaining databases', 'Working with ASP.NET, C# and VBScript', 'Implementing JavaScript/jQuery']"
    }
  ],
  "DevOps Engineer": [
    {
      "email": "pulle.adell5@kroell.jp",
      "experience_years": 40,
      "first_name": "Jguad",
      "last_name": "Obera",
      "person_id": 355,
      "phone": "892-871-3040",
      "score": 4.561198860406876,
      "similarity": 0.6235542893409729,
      "skills": "['Jira', 'Splunk', 'AWS', 'CIS', 'SSP', 'FedRAMP', 'Penetration Testing', 'SAP', 'Python', 'Confluence', 'COBIT 5', 'PCI-DSS', 'GDPR', 'CCPA', 'Google Analytics', 'Social Media', 'PracticeFusion']['Jira', 'Splunk', 'AWS', 'CIS', 'SSP', 'FedRAMP', 'Penetration Testing', 'SAP', 'Python', 'Confluence', 'COBIT 5', 'PCI-DSS', 'GDPR', 'CCPA', 'Google Analytics', 'Social Media', 'PracticeFusion']"
    },
    {
      "email": "barber.oardewen3@cople.gov",
      "experience_years": 37,
      "first_name": "Cintyann",
      "last_name": "Velauscion",
      "person_id": 5220,
      "phone": "973-089-2633",
      "score": 4.276837104558945,
      "similarity": 0.6409301161766052,
      "skills": "['Solving problems', 'Creating software', 'Learning new technologies', 'Critical thinking']['CI/CD pipeline', 'DevOps tools', 'MERN full-stack', 'Python', 'SQL', 'SAP technologies', 'DevOps practices', 'SAP system clearances', 'React.JS', 'SCRUM', 'ANSYS Workbench', 'Graphite heater', 'Plasma production', 'Systems Tool Kit (STK)', 'Python', 'SQL', 'Satellite data', 'Math', 'Science', 'English', 'Physics', 'Tutoring']"
    },
    {
      "email": "plasiabyste97@sobert.ca",
      "experience_years": 36,
      "first_name": "Jani",
      "last_name": "Ewen",
      "person_id": 10839,
      "phone": "496-840-2379",
      "score": 4.151554065942764,
      "similarity": 0.6128378510475159,
      "skills": "['Complex duties', 'Tight deadlines', 'Top-quality performance', 'Highly organized', 'Independent', 'Effective coordination', 'Timeliness', 'Creativity', 'Positive relationships', 'Strong sense of urgency', 'Fast-paced setting']['Logistics', 'EDI audits', 'Project management', 'Continuous improvement', 'Cost optimization', 'SAP', 'Business requirements', 'Technical documentation', 'Training development', 'EDI activities', 'Systems security', 'Data security', 'User access management', 'Audit support', 'Desktop support', 'Peripheral equipment', 'Software installation', 'Customer service', 'Data security', 'Systems security', 'Account management', 'Audit', 'Sarbanes-Oxley', 'Systems support', 'Data conversion', 'Product management', 'Bill of materials']"
    },
    {
      "email": "pnierptahabseric72@able.ca",
      "experience_years": 33,
      "first_name": "Psal",
      "last_name": "Umba",
      "person_id": 15846,
      "phone": "722-922-2769",
      "score": 4.003130149841309,
      "similarity": 0.7812557220458984,
      "skills": "['Automated Deployment', 'Automated Configuration', 'Automated Operational Tasks', 'Resource Management', 'Cost Reduction', 'Network Infrastructure', 'Performance Improvement', 'Code Coverage Increase', 'Automated CI/CD', 'Agile Development', 'Network Monitoring', 'Network Security', 'Server Provisioning', 'Database Maintenance', 'Infrastructure Support', 'Cost Reduction', 'Fraud Remediation', 'Network Implementation', 'Server Environment Setup', 'Intranet Development', 'PBX Implementation', 'Project Management', 'User Training', 'Server Migration', 'CI/CD Pipeline']['AWS OpsWorks', 'Chef', 'Python', 'BOTO SDK', 'AWS CLI', 'AWS EC2', 'Linux', 'Windows', 'New Relic', 'Selenium', 'Cucumber', 'Jenkins', 'Agile', 'Network Monitoring', 'Network Security', 'Provisioning', 'MS SQL', 'Jenkins', 'VPN', 'Active Directory', 'Exchange', 'SharePoint', 'PBX', 'LAN/WAN', 'AWS', 'Jenkins', 'GitHub']"
    },
    {
      "email": "therjuanjalmedat.psomberge13@eake.com",
      "experience_years": 34,
      "first_name": "Psalfon",
      "last_name": "Fykel",
      "person_id": 9325,
      "phone": "785-014-1715",
      "score": 3.970753371715546,
      "similarity": 0.634170413017273,
      "skills": "['Multi-cultural leader', 'Strong technical background', 'Leadership', 'Business acumen', 'Complex problem solving', 'Simple yet elegant solutions', 'Cross-functional teams', 'Client advocacy', 'Thought leadership', 'Digital transformation', 'Successful implementations', 'Increased operational efficiency', 'Production reliability', 'Project management', 'Marketing', 'Six Sigma Green Belt']['cloud-first', 'mobile-first', 'Cybersecurity', 'Productivity', 'Identity', 'DLP', 'Mobile Device Management', 'Office 365', 'Enterprise mobility', 'Windows 10', 'Customer Success', 'Digital Transformation', 'Enterprise Mobility Suite', 'Azure Active Directory', 'Microsoft Intune', 'Azure Information Protection', 'Advanced Threat Analytics', 'Microsoft Cloud App Security', 'Windows 10', 'Office 365', 'Desktop Virtualization', 'BYOD', 'Consumerization of IT', 'Customer Value Drivers', 'Deal Disposition Process', 'Data Analysis', 'Drilling', 'Intelligent Well', 'Customer Briefings', 'Deal Structure', 'SWOT Analysis', 'High-Performance Computing', 'Smarter Cities', 'Texas Water Development Board', 'Oracle PL/SQL', 'RMS Job Cycle', 'RIB Management', 'SVN Tool Management', 'Network Architecture', 'Telephony Services', 'MPLS', 'DIA', 'BGP', '4G', 'Broadband', 'Cisco Routers and Switches', 'Cisco WAPs', 'Data Center Operations']"
    }
  ],
  "Frontend Developer": [
    {
      "email": "uyedgorel50@fjel.edu",
      "experience_years": 39,
      "first_name": "Eeron",
      "last_name": "Gjovins",
      "person_id": 5984,
      "phone": "402-408-9001",
      "score": 4.5701398909091955,
      "similarity": 0.7445998787879944,
      "skills": "['6+ Years of Experience as a User Interface/ Front End Developer (UX)', 'Developing web applications using HTML 4/5, CSS 2/3, XHTML, XML, Bootstrap, Java Script, jQuery, PHP, AngularJS, Angular5, React, Redux, NodeJS, TypeScript', 'Solid knowledge of DOM manipulation, CSS selectors and preprocessors (LESS, SASS) and experienced in CMS (Content Management Systems)', 'Experience in building Single Page Application (SPA) using Model View Controller (MVC) framework such as AngularJS', 'Experience with full software development life-cycle (SDLC), architecting scalable platforms, object-oriented programming, and agile methodologies', 'Hands on experience working on different browsers like Safari, Internet Explorer, Mozilla Firefox and Google chrome and checking cross browser compatibility', 'Experience in JavaScript (including AJAX, DOM manipulations, JSONP, event models etc.) and have experience on Angular2.0', 'Deep understanding of React.js and its core principles', 'Expertise working on Document Object Model (DOM) and DOM Functions along with experience in Object Oriented Programming Concepts, Object Oriented JavaScript and Implementation', 'Worked on RWD (Responsive Web Design) and implemented applications based on Angular.js', 'Adept in designing UI patterns and applications with the help of Sublime Text, Adobe Photoshop, Adobe Dreamweaver, Notepad++', 'Hands on experience using the version controls like SVN and GIT', 'Used the latest HTML5 elements for video playback, content rendering using semantic tags such as article, section etc', 'Expertise in database development using SQL and PL/SQL creating tables, stored procedures, views, indexes and triggers', 'Excellent experience in developing web pages complying with Web Content Accessibility Guidelines (WCAG) and ability to apply W3C web standards', 'Experience in Linux system administration, DevOps, AWS Cloud platform and its features', 'Experience in creating test suites using jasmine and worked on tools like NPM (Node Package Manager), Bower and Grunt', 'Used JIRA for bug tracking and issue tracking', 'Used SVN, GIT for version control and Clear Quest for bug fixing', 'Sound understanding and good experience with Object programming concepts, Object Oriented JavaScript and Implementation', 'Experience working with various Web and Enterprise Application servers like Apache TOMCAT, JBOSS, Web Logic and IBM Web Sphere', 'Expert in creating Templates, Mockups and Prototypes, Web Interfaces, Layouts and Flow of future pages', 'Extensive knowledge in Twitter Bootstrap and Responsive Design', 'Extensive experience working in Agile and Waterfall (SDLC Methodologies) environments']['HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap', 'ReactJS', 'NodeJS', 'Responsive Design', 'DOM', 'Firebug', 'JSON', 'GitHub', 'Agile', 'Windows', 'Mocha', 'Chai', 'HTML5', 'CSS3', 'SASS', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap', 'AngularJS', 'NodeJS', 'Firebug', 'JSON', 'GitHub', 'Agile', 'Windows', 'HTML5', 'SASS', 'CSS3', 'XML', 'JavaScript', 'jQuery', 'AngularJS', 'Testing', 'Quality Center', 'AJAX', 'JSON', 'Eclipse', 'HTML/HTML5', 'CSS/CSS3', 'Java Script', 'jQuery', 'AJAX', 'Angular JS', 'Eclipse', 'JSON', 'Agile Methodology', 'JavaScript', 'HTML', 'CSS', 'jQuery', 'AJAX', 'Adobe Dreamweaver', 'Usability Testing', 'Agile methodology', 'Eclipse', 'Windows']"
    },
    {
      "email": "pheimsdquawn18@itte.jp",
      "experience_years": 37,
      "first_name": "Sj",
      "last_name": "Cudden",
      "person_id": 3093,
      "phone": "908-572-7184",
      "score": 4.3521549820899965,
      "similarity": 0.7246166467666626,
      "skills": "['Web Development', 'Responsive Web Design', 'Content Management Systems', 'Web Design', 'Ecommerce', 'Cross Browser Compatibility', 'Digital Media Strategy', 'Search Engine Marketing', 'Hosting / Email / SSL', 'Multimedia']['.NET', 'VISUAL STUDIO', 'HTML', 'CSS', 'Bootstrap', 'AngularJS', 'Adobe Photoshop', 'Javascript', 'JQuery', 'Wordpress', 'Source Control', 'Kentico', 'Drupal', 'Joomla', 'SharePoint', 'Wix', 'Hootsuite', 'PHP', 'Web Development', 'Digital Media Strategy', 'Web Development', 'Web Order portal', 'Fast Track']"
    },
    {
      "email": "mrvullo100@mhatte.org",
      "experience_years": 37,
      "first_name": "Avanny",
      "last_name": "Exelmore",
      "person_id": 5563,
      "phone": "664-835-9939",
      "score": 4.3521549820899965,
      "similarity": 0.7246166467666626,
      "skills": "['Versatile Front End Developer', 'experienced in designing, developing and maintaining complex apps that drive business growth', 'Authorized to work in the US for any employer', 'Tank Commander']['Bootstrap', 'Php', 'jquery', 'Restful services', 'Front End', 'Javascript', 'Angular', 'React', 'Angularjs', 'Java', 'HTML5', 'CSS3', 'Node.js', 'Spring Framework', 'Bootstrap', 'Php', 'jquery', 'Restful services', 'Front End', 'Javascript', 'Angular', 'React', 'Angularjs', 'Java', 'HTML5', 'CSS3', 'Node.js', 'Spring Framework', 'Bootstrap', 'Php', 'jquery', 'Restful services', 'Front End', 'Javascript', 'Angular', 'React', 'Angularjs', 'Java', 'HTML5', 'CSS3', 'Node.js', 'Spring Framework']"
    },
    {
      "email": "vsettier.ncoleta104@sfer.gov",
      "experience_years": 36,
      "first_name": "Ydana",
      "last_name": "Dyesrou",
      "person_id": 3819,
      "phone": "646-213-4762",
      "score": 4.249406629800797,
      "similarity": 0.721562922000885,
      "skills": "['UI', 'Front End', 'Javascript']['JavaScript/jQuery', 'SCSS', 'CSS3', 'HTML5', 'Ruby on Rails', 'SQL', 'GitHub', 'Brackets', 'Atom', 'Sketch', 'Adobe Experience', 'Adobe Illustrator', 'Adobe Photoshop', 'JavaScript/jQuery', 'SCSS', 'HTML5', 'Ruby on Rails', 'GitHub', 'Atom', 'Adobe Experience', 'Adobe Illustrator', 'Adobe Photoshop', 'JavaScript/jQuery', 'SCSS', 'HTML5', 'Ruby on Rails', 'GitHub', 'Atom', 'Adobe Experience', 'Adobe Illustrator', 'Adobe Photoshop', 'HTML5', 'CSS3', 'JavaScript/jQuery', 'PHP', 'Adobe Photoshop', 'Adobe Illustrator', 'HTML5', 'CSS3', 'JavaScript/jQuery', 'PHP', 'Adobe Photoshop', 'Adobe Illustrator']"
    },
    {
      "email": "mlek.vseversel96@zunia.jp",
      "experience_years": 36,
      "first_name": "Jkylanda",
      "last_name": "Tkac",
      "person_id": 5242,
      "phone": "465-666-0551",
      "score": 4.249406629800797,
      "similarity": 0.721562922000885,
      "skills": "['Front End Development', 'Software Development', 'Hardware Programming', 'C++', 'Java', 'MATLAB', 'HTML', 'SQL', 'Javascript', 'CSS', 'Desktop Support', 'Web Development', 'Application Development', 'Git', 'jQuery', 'MySQL']['Javascript', 'HTML', 'CSS', 'HTML', 'CSS', 'Javascript', 'AngularJS', 'IBM Watson Cloud Computing', 'IoT', 'NODE-RED', 'IBM Bluemix', 'Calculus', 'Differentiation', 'Integration', 'Bivariate and Multivariate Functions', 'Applications of Calculus', 'Electronics', 'Electromagnetics', 'Mechanics', 'MATLAB', 'AutoCAD', 'Revit', 'Electrical Design']"
    }
  ],
  "Game Designer": [
    {
      "email": "ysainmwajoy29@etridge.jp",
      "experience_years": 43.72895277207392,
      "first_name": "Cupite",
      "last_name": "Hrado",
      "person_id": 4653,
      "phone": "371-109-6161",
      "score": 4.951908136075037,
      "similarity": 0.6433476209640503,
      "skills": "['Visual Design', 'User Interface Design', 'Photoshop', 'Illustrator', 'Indesign', 'Graphic Design', 'Website Design', 'Web Development', 'HTML', 'CSS3', 'Javascript', 'JQuery', 'User Interface', 'Front-End', 'Front End', 'UI', 'CSS', 'Sketch', 'InVision', 'HTML 5', 'Advanced Javascript']['Architect client websites', 'Administer and maintain websites', 'Create graphics, logos, brochures', 'Front End Development', 'Developed new pages', 'Tested for compatibility', 'Updated and maintained content', 'Created wireframes', 'Developed new content and features', 'Initiated and executed plan', 'Implemented an iterative design process', 'Created new designs and functional prototypes', 'Updated existing website templates', 'Concepted and designed campaigns', 'Designed brands and logos', 'Coordinated mechanical preparation']"
    },
    {
      "email": "zriyonnah.rmah84@ude.gov",
      "experience_years": 40,
      "first_name": "Haruanejalis",
      "last_name": "Biss",
      "person_id": 4877,
      "phone": "912-056-2782",
      "score": 4.560635328292847,
      "similarity": 0.6229281425476074,
      "skills": "['Laravel', 'PHP', 'CSS', 'Bootstrap', 'HTML']['Laravel', 'PHP', 'Database Design', 'API Integration', 'Laravel', 'PHP', 'Project Management', 'Collaboration', 'Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Laravel', 'PHP', 'PDF Processing', 'PHP', 'CodeIgniter', 'Laravel', 'jQuery', 'HTML/CSS', 'jQuery', 'HTML/CSS', 'Responsive Design', 'Laravel', 'PHP', 'Bootstrap', 'jQuery', 'jQuery', 'HTML/CSS', 'AJAX', 'JSON', '.NET', 'ColdFusion', 'PHP', 'jQuery', 'CodeIgniter', 'PHP', 'AJAX', 'HTML/CSS', 'PERL', 'WebGUI', 'jQuery', 'Linux', 'PHP', 'AJAX', 'HTML/CSS', 'XmPie']"
    },
    {
      "email": "ushaaoya46@uffollautin.ca",
      "experience_years": 35,
      "first_name": "Keya",
      "last_name": "Kmierino",
      "person_id": 5506,
      "phone": "728-179-9310",
      "score": 4.064835238456726,
      "similarity": 0.6275947093963623,
      "skills": "['Wireframing', 'UI/UX Design', 'Front-end Development', 'Back-end Integration', 'Web Interaction Design', 'SEO Optimization', 'Cross-browser/platform/device Testing', 'Email Development', 'Responsive Codebase', 'Animation in Emails', 'Coding Best Practices', 'Internal Tool Development']['Wireframing', 'UI/UX Design', 'Front-end Development', 'Back-end Integration', 'Web Interaction Design', 'SEO Optimization', 'Cross-browser/platform/device Testing', 'Email Development', 'Responsive Codebase', 'Animation in Emails', 'Coding Best Practices', 'Internal Tool Development']"
    },
    {
      "email": "nikooyosh21@yusufour.ca",
      "experience_years": 32,
      "first_name": "Afiyya",
      "last_name": "Deazel",
      "person_id": 4033,
      "phone": "571-795-0883",
      "score": 3.762733888626099,
      "similarity": 0.6252598762512207,
      "skills": "['Front end', 'Hp-ux', 'Marketing', 'marketing collateral', 'project management', 'MySQL', 'Javascript', 'Android', 'ASP', 'PHP', 'HTML 5', 'CSS', 'Git', 'Jquery', 'Political Consulting', 'Marketing Collateral', 'Project Management', 'Web Design', 'Front End Development', 'UI/UX']['Professional Web Site Development', 'Designing web sites', 'Maintaining web sites', 'Creating custom web graphics and layouts', 'Creating web programming script installations', 'Logo design', 'Animated banners', 'Copywriting and content creation', 'All mobile solutions', 'SQL Databases', 'Designed and created the ecommerce site ICPDAS-USA.com', 'Converted site to responsive', 'Catalog Flipbooks', 'Social Media', 'Marketing Campaign', 'Maintenance and web programming projects for ecommerce website', 'Professional Web Site Development', 'Designing web sites', 'Maintaining web sites', 'Creating custom web graphics and layouts', 'Creating flash intros', 'Web programming script installations', 'Logo design', 'Animated banners', 'Copywriting and content creation', 'Write, edit and proofread documents', 'Plan and prepare articles for online dissemination', 'Web usability', 'Accessibility', 'Testing and debugging', 'Website promotion & marketing', 'Client relations', 'Sales', 'Hiring and managing contractors and freelance workers', 'Bookkeeping', 'Departmental client contact', 'Review contract from sales', 'Assign hours to project', 'Determine project deliverables', 'Assign project to various teams or designers', 'Meet with client on weekly or bi-monthly basis to discuss progress']"
    },
    {
      "email": "htoopfurlen93@yhard.co.uk",
      "experience_years": 30.64202600958248,
      "first_name": "Ejay",
      "last_name": "Wruc",
      "person_id": 4489,
      "phone": "383-960-0066",
      "score": 3.6270224812053646,
      "similarity": 0.6253554224967957,
      "skills": "['product/UX designer', 'seasoned generalist', 'entire UX stack', 'product and user research', 'ideation', 'interaction design work', 'prototyping and testing', 'front-end development', 'production-level code']['CSS', 'FRONT END', 'FRONT END DESIGN', 'front-end', 'HTML', 'interaction design', 'JavaScript', 'jQuery', 'product design', 'testing', 'UI', 'UI design', 'usability', 'USABILITY TEST', 'User Experience', 'User Experience Design', 'USER INTERFACE', 'USER INTERFACE DESIGN', 'user research', 'WEB UI', 'UX', 'Adobe', 'Sketch', 'Wireframe', 'CSS', 'FRONT END', 'FRONT END DESIGN', 'front-end', 'HTML', 'interaction design', 'JavaScript', 'jQuery', 'product design', 'testing', 'UI', 'UI design', 'usability', 'USABILITY TEST', 'User Experience', 'User Experience Design', 'USER INTERFACE', 'USER INTERFACE DESIGN', 'user research', 'WEB UI', 'UX', 'Adobe', 'Sketch', 'Wireframe', 'CSS', 'FRONT END', 'FRONT END DESIGN', 'front-end', 'HTML', 'interaction design', 'JavaScript', 'jQuery', 'product design', 'testing', 'UI', 'UI design', 'usability', 'USABILITY TEST', 'User Experience', 'User Experience Design', 'USER INTERFACE', 'USER INTERFACE DESIGN', 'user research', 'WEB UI', 'UX', 'Adobe', 'Sketch', 'Wireframe', 'CSS', 'FRONT END', 'FRONT END DESIGN', 'front-end', 'HTML', 'interaction design', 'JavaScript', 'jQuery', 'product design', 'testing', 'UI', 'UI design', 'usability', 'USABILITY TEST', 'User Experience', 'User Experience Design', 'USER INTERFACE', 'USER INTERFACE DESIGN', 'user research', 'WEB UI', 'UX', 'Adobe', 'Sketch', 'Wireframe', 'CSS', 'FRONT END', 'FRONT END DESIGN', 'front-end', 'HTML', 'interaction design', 'JavaScript', 'jQuery', 'product design', 'testing', 'UI', 'UI design', 'usability', 'USABILITY TEST', 'User Experience', 'User Experience Design', 'USER INTERFACE', 'USER INTERFACE DESIGN', 'user research', 'WEB UI', 'UX', 'Adobe', 'Sketch', 'Wireframe', 'CSS', 'FRONT END', 'FRONT END DESIGN', 'front-end', 'HTML', 'interaction design', 'JavaScript', 'jQuery', 'product design', 'testing', 'UI', 'UI design', 'usability', 'USABILITY TEST', 'User Experience', 'User Experience Design', 'USER INTERFACE', 'USER INTERFACE DESIGN', 'user research', 'WEB UI', 'UX', 'Adobe', 'Sketch', 'Wireframe', 'CSS', 'FRONT END', 'FRONT END DESIGN', 'front-end', 'HTML', 'interaction design', 'JavaScript', 'jQuery', 'product design', 'testing', 'UI', 'UI design', 'usability', 'USABILITY TEST', 'User Experience', 'User Experience Design', 'USER INTERFACE', 'USER INTERFACE DESIGN', 'user research', 'WEB UI', 'UX', 'Adobe', 'Sketch', 'Wireframe', 'CSS', 'FRONT END', 'FRONT END DESIGN', 'front-end', 'HTML', 'interaction design', 'JavaScript', 'jQuery', 'product design', 'testing', 'UI', 'UI design', 'usability', 'USABILITY TEST', 'User Experience', 'User Experience Design', 'USER INTERFACE', 'USER INTERFACE DESIGN', 'user research', 'WEB UI', 'UX', 'Adobe', 'Sketch', 'Wireframe', 'CSS', 'FRONT END', 'FRONT END DESIGN', 'front-end', 'HTML', 'interaction design', 'JavaScript', 'jQuery', 'product design', 'testing', 'UI', 'UI design', 'usability', 'USABILITY TEST', 'User Experience', 'User Experience Design', 'USER INTERFACE', 'USER INTERFACE DESIGN', 'user research', 'WEB UI', 'UX', 'Adobe', 'Sketch', 'Wireframe', 'CSS', 'FRONT END', 'FRONT END DESIGN', 'front-end', 'HTML', 'interaction design', 'JavaScript', 'jQuery', 'product design', 'testing', 'UI', 'UI design', 'usability', 'USABILITY TEST', 'User Experience', 'User Experience Design', 'USER INTERFACE', 'USER INTERFACE DESIGN', 'user research', 'WEB UI', 'UX', 'Adobe', 'Sketch', 'Wireframe']"
    }
  ],
  "Marketing Specialist": [
    {
      "email": "rbcinti119@ojukwumaw.co.uk",
      "experience_years": 38,
      "first_name": "Wc",
      "last_name": "Gryburg",
      "person_id": 1647,
      "phone": "930-056-2589",
      "score": 4.448422312736511,
      "similarity": 0.7204692363739014,
      "skills": "['PMP CERTIFICATION', 'PMO', 'PMP', 'TEAM MANAGEMENT', 'ASP', 'CSS', 'SEARCH ENGINE', 'SHAREPOINT', 'ADS', 'DATABASE', 'SQL SERVER', 'MYSQL', 'ORACLE', 'SQL', 'HTML', 'JAVASCRIPT', 'MS PROJECT', 'PHP', 'SVN', 'VISIO']['Lead cross-functional projects and teams', 'Manage marketing projects and campaign portfolio', 'Manage marketing PMO', 'Marketing strategy', 'Manage marketing development', 'Cross-functional liaison', 'Marketing team product owner', 'Manage trade shows and marketing events', 'Lead multiple cross-functional projects and project teams', 'Manage employee Intranet', 'Lead marketing projects and teams', 'Develop and manage digital marketing strategies', 'Develop and manage data-driven marketing strategies', 'Develop and manage web strategies', 'Manage employee Intranet', 'Develop and manage social media platforms', 'Manage and develop Marketing Intern', 'Web application project management', 'Web application development', 'Website management', 'Manage employee Intranet', 'Develop and manage social media platforms', 'Quality assurance management']"
    },
    {
      "email": "prayla.htutta38@wcisley.co.uk",
      "experience_years": 36,
      "first_name": "Ywa",
      "last_name": "Zabat",
      "person_id": 1692,
      "phone": "628-430-4684",
      "score": 4.25725080370903,
      "similarity": 0.7302786707878113,
      "skills": "['Accomplished high-energy hands-on Manager', 'Stellar analytical, organizational and leadership abilities', 'Spearheaded execution of marketing email campaigns', 'Email list procurements', 'Budget creation and reconciliation', 'KPIs and executive dashboards', 'Fast paced environment', 'Proven ability to plan, manage and execute multiple projects simultaneously', 'Provided high-level support to CMO and other top executives', 'Authorized to work in the US for any employer']['Customer relationship management', 'Marketing', 'Microsoft office']"
    },
    {
      "email": "oguzhariusgwirt26@beda.ca",
      "experience_years": 36,
      "first_name": "Njida",
      "last_name": "Hmund",
      "person_id": 229,
      "phone": "684-533-5731",
      "score": 4.221320682764054,
      "similarity": 0.6903563141822815,
      "skills": "['Conceives, coordinates, and schedules multiple marketing campaigns', 'Identifies and manages associated risks', 'Maintains extensive knowledge of team capacity', 'Facilitates and documents a marketing operations governance forum', 'Provides real-time validation and scheduling reporting', 'Executes creation of lead program identifiers', 'Conceive, coordinate, and execute multiple marketing campaigns', 'Work with product managers to define campaign objectives', 'Provide real-time and post-campaign ROI analytics', 'Execute and delegate intensive lead harvesting and research activities', 'Administrator, trainer, & troubleshooter for 100+ global users of a CRM database', 'Manage and work directly with multiple vendors', 'Responsible for complete administration of the sales order process', 'Update delivery/shipment schedule & maintain current, accurate customer files']['Conceives, coordinates, and schedules multiple marketing campaigns', 'Identifies and manages associated risks', 'Maintains extensive knowledge of team capacity', 'Facilitates and documents a marketing operations governance forum', 'Provides real-time validation and scheduling reporting', 'Executes creation of lead program identifiers', 'Conceive, coordinate, and execute multiple marketing campaigns', 'Work with product managers to define campaign objectives', 'Provide real-time and post-campaign ROI analytics', 'Execute and delegate intensive lead harvesting and research activities', 'Administrator, trainer, & troubleshooter for 100+ global users of a CRM database', 'Manage and work directly with multiple vendors', 'Responsible for complete administration of the sales order process', 'Update delivery/shipment schedule & maintain current, accurate customer files']"
    },
    {
      "email": "elzerptolestin37@iqbal.org",
      "experience_years": 35.96167008898015,
      "first_name": "Khadayah",
      "last_name": "Zurbar",
      "person_id": 4503,
      "phone": "348-165-2207",
      "score": 4.205550627729649,
      "similarity": 0.6770929098129272,
      "skills": "['Digital Design', 'Marketing', 'Web Development', 'Graphic Design', 'Experiential Marketing', 'Guerilla Marketing', 'Brand Ambassadors', 'Copywriting', 'Healthcare', 'HIPAA']['Adobe Creative Suite', 'SEO', 'Web Design', 'Marketing', 'Social Media', 'Web Analytics', 'Graphic Design', 'Marketing', 'Web Design', 'Graphic Design', 'Marketing', 'HTML', 'Email Marketing', 'PowerPoint', 'Marketing', 'Marketing', 'Content Marketing', 'Market Research', 'Adobe Creative Suite', 'Graphic Design', 'Marketing', 'Experiential Marketing', 'Guerilla Marketing', 'Brand Ambassadors', 'Graphic Design', 'Marketing', 'Copywriting', 'HIPAA', 'Healthcare', 'Web Design', 'Web Development', 'HTML', 'CSS', 'JavaScript', 'Expression Engine', 'Convio', 'Website Maintenance', 'Website Analytics']"
    },
    {
      "email": "eymek.bharon32@kuballahun.ca",
      "experience_years": 33,
      "first_name": "Ryukh",
      "last_name": "Dcoston",
      "person_id": 1993,
      "phone": "569-846-8311",
      "score": 3.9778765082359318,
      "similarity": 0.753196120262146,
      "skills": "['data entry', 'purchase order processing', 'phone handling', 'account information processing', 'record keeping', 'data verification', 'credit card processing', 'payroll', 'banking', 'vacation sales', 'QA/QC monitoring', 'sales logging', 'inbound call handling', 'account information retrieval', 'calculations', 'sales monitoring', 'third party verification monitoring', 'communication', 'outbound calls', 'insurance/legal/financial services sales', 'credit card activations', 'quality assurance']['data entry', 'purchase order processing', 'phone handling', 'account information processing', 'record keeping', 'data verification', 'data entry', 'credit card processing', 'payroll', 'banking', 'vacation sales', 'QA/QC monitoring', 'sales logging', 'credit card data entry', 'inbound call handling', 'account information retrieval', 'calculations', 'sales monitoring', 'third party verification monitoring', 'communication', 'outbound calls', 'insurance/legal/financial services sales', 'inbound call handling', 'credit card activations', 'quality assurance']"
    }
  ],
  "Project Manager": [
    {
      "email": "ehrisquinceyo120@irabaumarzybysz.co.uk",
      "experience_years": 35,
      "first_name": "Ethammad",
      "last_name": "Mrazarette",
      "person_id": 10176,
      "phone": "875-650-4372",
      "score": 4.156032115221024,
      "similarity": 0.728924572467804,
      "skills": "['Project Management', 'Network and Desktop Support', 'Network and Desktop Security', 'Technical Support and Development Staff Management', 'Network and Desktop Troubleshooting', 'ISC2 CISSP']['Manage team', 'Managed Security Services', 'Manage $6M/yr program', 'NIST 800.53 requirements', 'Quarterly POAM information', 'Customer and staff meetings', 'Weekly status reports', 'Root Cause Analysis reports', 'Project management', 'Security Operations Center', 'Customer trouble tickets', 'Security devices', 'Customer meetings', 'On-call support', 'Information Assurance support', 'Security Assessment process', 'Secure external connections', 'Security Assessments', 'CIRT Point of Contact', 'Penetration Tester', 'Security Assessment', 'Penetration Testing', 'Instructor', 'HL7 Electronic Health Records', 'IT Manager', 'Corporate Security Officer', 'IT Security Manager', 'Departmental budget']"
    },
    {
      "email": "qiuanarabillenentiansel54@uith.ca",
      "experience_years": 35,
      "first_name": "Mwajo",
      "last_name": "Dyrescu",
      "person_id": 8422,
      "phone": "449-993-4858",
      "score": 4.156032115221024,
      "similarity": 0.728924572467804,
      "skills": "['Project Management', 'Website Development', 'Online Marketing', 'SEM/SEO', 'Financial Analysis', 'Data Automation', 'Scrum Master']['Co-developed and managed www.MMODAQ.com', 'Created wireframes for website requirements, logic, and functionality', 'Managed the design and development of the website and applications', 'Developed and implemented online marketing and advertising', 'SEM/SEO specialist for companies and brands through Jacobson+Park', 'Extracted and analyzed market data from various system and vendor sources', 'Prepared and presented financial reports', 'Monitored and ensured proper marking of securities by traders', 'Built efficiencies through process automation of data acquisition and summary analysis reporting', 'Researched, developed, and presented state of the art data graphics and analysis tool', 'Performed duties of Scrum Master in product development']"
    },
    {
      "email": "saetogritte93@jiroft.edu",
      "experience_years": 35,
      "first_name": "Ubayo",
      "last_name": "Mrosi",
      "person_id": 11536,
      "phone": "211-233-2325",
      "score": 4.156032115221024,
      "similarity": 0.728924572467804,
      "skills": "['Communication', 'Leadership', 'Quick Learner', 'Adaptability', 'Reliability', 'Customer Service']['Agile Scrum', 'Jira', 'Project Management', 'Requirements', 'Design', 'Documentation', 'Development', 'Testing', 'Collaboration', 'Scrum Meetings', 'Task Prioritization', 'Deadline Management', 'Communication', 'Impact Analysis', 'Legacy System Conversion', 'Integration Testing', 'Test Planning', 'Data Consistency', 'Documentation', 'Presentation', 'Requirements Definition', 'User Interface Design', 'Release Notes', 'Test Planning', 'Testing', 'SQL', 'JMS', 'Agile Scrum', 'Policy Updating', 'Compliance', 'Risk Analysis', 'Remediation']"
    },
    {
      "email": "laganwakieshito24@cdeberg.co.uk",
      "experience_years": 25,
      "first_name": "Rash",
      "last_name": "Nsialopezzo",
      "person_id": 7712,
      "phone": "232-682-7071",
      "score": 3.158202773332596,
      "similarity": 0.7313364148139954,
      "skills": "['Project Management', 'Vendor Management', 'Process Improvement', 'Problem Solving', 'Communication Skills', 'SDLC / Scrum', 'Change Management', 'Implementation Planning', 'Enterprise Standards', 'Software Release Management', 'Lesson Learned', 'Vendor Governance', 'Contract Negotiations', 'Outsourcing Reporting', 'Metrics', 'Requirements Gathering', 'SaaS Implementation', 'Microsoft Renegotiation', 'Microsoft True-up', 'BA Deliverables', 'Incident Management', 'Problem Management', 'Service Level Management', 'Knowledge Management', 'Remedy Application']['Budget Management', 'Vendor Mgt./RFP/RFI', 'Process Improvement', 'Problem Solver', 'Excellent organizational/communication skills', 'SDLC / Scrum', 'MS Dynamics', 'Office 365', 'User Stories', 'Requirements', 'Vendor Project Plans', 'Change Management', 'Implementation Plans', 'Change Management Processes', 'Implementation Plans', 'Enterprise Standards', 'Software Release Schedule', \"Lesson's Learn\", 'Vendor Contracts', \"SLA's\", 'Vendor Governance Services', 'Contract Negotiations', 'Outsourcing Reports', 'Metrics', 'SDLC Project Methodologies', 'Global Contracts Management Tool', 'SaaS Architected Solution', 'Requirements Gathering', 'Microsoft Re-Negotiation Global Contract', 'Microsoft True-up', \"Mayor's Schedule System\", 'Lockheed Martin', 'BA Deliverables', 'Discovery', 'Requirements', 'Design', 'Incident Management', 'Problem Management', 'Service Level Management', 'Knowledge Management', 'IBM Service Desk', 'Remedy Application Tool', 'Management Consulting']"
    },
    {
      "email": "uphou.kdyncesceglaia106@quin.jp",
      "experience_years": 25,
      "first_name": "Jziah",
      "last_name": "Cdebucci",
      "person_id": 7447,
      "phone": "247-387-1481",
      "score": 3.158202773332596,
      "similarity": 0.7313364148139954,
      "skills": "['Help Desk Manager', 'Project Management', 'Business Analyst', 'System Analyst', 'Customer Relations', 'Global Technical Representative', 'Management']['Manager validation projects', 'Generate and execute validation IO, OQ, PQ documents', 'Project Kick off meetings', 'Follow through on milestones and completion', 'Validating, administrating, and supporting labs and GMP systems', \"Deploying and upgrading from Empower 2 to Empower 3 in lab's Instrument Connections, SQT's and Validation of instruments and validation Documents\", 'Validating, administrating, and supporting labs and GMP systems', \"Deploying and upgrading from Empower 2 to Empower 3 in lab's Instrument Connections, SQT's and Validation of instruments and validation Documents\", 'Working with waters for generating vendor IQ, OQ, PQ for waters systems on Empower 3', 'Troubleshooting issues in Active Directory, Windows servers, lab systems, local backups, and network backups', 'Validating, administrating, and supporting labs and GMP systems', \"Writing SOP's for Active Directory and other core Microsoft systems\", \"Compliance Auditing, Capa's, Deviations using Trackwise\", \"URS and SOP's IQ, OQ, PQ execution, Scripting, Testing\", 'QC validation of all lab equipment and CFR part 11', 'CAPA investigation and deviations', 'Compliance for software', 'Compliance for hardware', 'Supporting validated lab systems', 'Project management, cGMP and Part 11 Lab certified', 'Daily interaction with QA, PD and Regulatory validation departments', \"Use of Maximo daily assigning workflows, monthly p.m's, various roles in MAXIMO, system owner and technical lead\", \"Working with various craft's to complete the workflow dealing with daily issues for craft assignments time and labor assignments\", 'MAXIMO Projects included Assigning system owners and scheduling time frames for yearly maintenance', \"User access audit's, Data restores and integrity check, Image backups and restores, documentation for FDA\", \"Major project's FDA audit and responses, Deploying new technologies, LIMS, SDMS, Empower 2 & 3, Waters Nugenisys\", 'Business Analyst for Product Development, identifying needs requirements, timelines, and following up on gaps and deadlines', 'Support Manufacturing SCADA, PI, BMS, PLC equipment', \"Writing SOP Standards for clinical computer systems, HPLC's, Mass spectrometers plate readers, particle counters\", 'Imaging scripting backups', 'Validation and change controls, HP Application lifecycle Management, IQ/OQ/PQ in production for large bio-tech company', 'Implemented Agilent intelligent services on global PD lab systems, Guiding deployment and customer support on Global deployment', 'Manage IT support group for large off site IT department, remote users, and internal users', 'Project Management, inventory control, training, inventory of retired systems for disposal', 'Service now and SCCM', 'Support all conference rooms and equipment', 'Worked with internal helpdesk to automate MSI installer to be fully automated', 'Inventory of current stock and compile a complete asset management accounting using Vantive, Heat, ISM, SMS, and scripting tools (including Corporate Capital Liquidation)', 'Performance reviews, mentor, and daily manager duties included with working with team to meet and exceed goals set by customer site', 'Increased ticket closure by 40% achieving a\"0\" ticket queue', 'Performance reviews, site metric reports, hiring, and terminations', 'Site interaction with senior leadership teams']"
    }
  ],
  "Quality Assurance Tester": [
    {
      "email": "piusllordovichuk9@poman.edu",
      "experience_years": 39,
      "first_name": "Gniya",
      "last_name": "Ekke",
      "person_id": 9226,
      "phone": "679-948-6359",
      "score": 4.446308416128159,
      "similarity": 0.6070093512535095,
      "skills": "['Level 2 Computer Technician', 'Windows 7 and 10 Administrator', 'Active Directory administration', 'Information assurance', 'Microsoft applications', 'Remote customer service', 'Data transfer officer', 'Service request resolution', 'Digitization and compliance', 'Database development', 'Administrative support']['Windows 7 / Windows 10 Admin in Active Directory', 'Approved Data Transfer Officer (DTO)', 'Service request tickets', 'Customer support', 'Software installs on mobile devices', 'Troubleshooting Windows 7 and Windows 10 user connectivity', 'Electronic asset management', 'Digitized PKI documents', 'FISMA score research and reporting', 'SharePoint 2013 development', 'Microsoft Access database development', 'Administrative support for executive faculty', 'PII and FOUO security evaluations', 'Certificate and inventory management']"
    },
    {
      "email": "tvettewhithaylianie51@ouratto.ru",
      "experience_years": 38,
      "first_name": "Rrea",
      "last_name": "Dimayasilje",
      "person_id": 8678,
      "phone": "784-979-8722",
      "score": 4.390766137838364,
      "similarity": 0.656406819820404,
      "skills": "['Motivated professional', 'Continuous growth', 'Achieve company goals', 'Take on more responsibility', 'Passionate', 'Committed', 'Determined', 'High-quality work', 'Exceed expectations', 'Hard working']['SDLC process', 'Project documentation', 'Testing and defect resolution', 'Quality Center', 'Collaboration with Quality team, Business Analysts, Operational Receivers, Service Line Personnel and Project Services', 'Training curriculum development', 'Quality Assurance and reviews', 'Technical assistance and support', 'Customer service', 'Active Directory administration', 'ServiceNow utilization', 'Microsoft Exchange Server support & administration', 'Altiris Deployment server utilization', 'Software, printers and learning management system installation, configuration, support, and troubleshooting', 'Comprehensive program design and implementation', 'Student evaluation, assessment, and analysis', 'Child and family safety investigation and assessment', 'Casework management', 'Family service plan development', 'Court hearing attendance and testimony']"
    },
    {
      "email": "hilroy.dassalahon74@voelzitoya.org",
      "experience_years": 38,
      "first_name": "Zimberter",
      "last_name": "Tumach",
      "person_id": 10046,
      "phone": "529-556-6589",
      "score": 4.359666407108307,
      "similarity": 0.6218515634536743,
      "skills": "['System Testing', 'Automated Testing', 'Manual Testing', 'Interpersonal Skills', 'Communication Skills', 'Analytical Skills', 'Problem Solving', 'Decision Making', 'GUI Testing', 'Test Planning', 'Test Case Development', 'Performance Testing', 'Load Testing', 'Stress Testing', 'Regression Testing', 'Bug Tracking', 'Test Execution', 'Test Result Documentation', 'Collaboration', 'Product Demonstration', 'Technical Support', 'Policy Review', 'Security Research', 'Security Documentation', 'PKI', 'Identity and Access Management', 'Certificate Practice Statement', 'Transition Planning', 'Security Project Implementation', 'COTS Tools', 'Gap Analysis', 'Computer Equipment Deployment', 'Data Utilization and Migration', 'Imaging', 'Application Installation', 'Windows Troubleshooting', 'Team Management']['Automated Testing', 'Manual Testing', 'Interpersonal Skills', 'Written Communication', 'Verbal Communication', 'Analytical Skills', 'Problem Solving', 'Decision Making', 'GUI Testing', 'Software Testing', 'Test Planning', 'Test Case Development', 'Performance Testing', 'Load Testing', 'Stress Testing', 'Regression Testing', 'Bug Tracking', 'Test Execution', 'Test Result Documentation', 'Collaboration', 'Product Demonstration', 'Technical Support', 'Policy Review', 'Security Research', 'Security Documentation', 'PKI', 'HSPD-12', 'Identity and Access Management', 'eAuthentication', 'Secured Registration Based Email', 'Certificate Practice Statement', 'Transition Planning', 'Security Project Implementation', 'COTS Tools', 'Gap Analysis', 'Computer Equipment Deployment', 'Data Utilization and Migration', 'Imaging', 'Application Installation', 'Windows Troubleshooting', 'Team Management']"
    },
    {
      "email": "agamveenrubico113@eiderealyasard.jp",
      "experience_years": 38,
      "first_name": "Thoresdyn",
      "last_name": "Acan",
      "person_id": 3421,
      "phone": "531-714-5400",
      "score": 4.347331249713898,
      "similarity": 0.6081458330154419,
      "skills": "['Detail-oriented', 'Agile Manual UAT', 'Regression Testing', 'Automation in Selenium Webdriver and Ranorex', 'Front-end Web Development', 'Desktop Troubleshooting and Support']['Manual UAT', 'Regression Testing', 'Automated Regression Testing', 'Ranorex', 'Front-end Development', 'Android Debugging', 'Git Source Control', 'Cross-browser Manual UAT', 'System Regression Testing', 'Bug Identification and Documentation', 'Selenium IDE', 'Test Complete', 'Automated Regression Testing', 'JavaScript', 'VB', 'Joyride jQuery Plugin', 'Desktop Support', 'Order Entry Procedures', 'System Modifications', 'Email Management', 'Active Directory', 'Barracuda', 'Office 365', 'Computer Basics 101 Webinar', 'Customer Service', 'English-French Translation', 'Policy Language Translation', 'Correspondence Preparation', 'Team Training and Leadership', 'Enumerator Work Statistics', 'Quality Assurance', 'Scheduling', 'Payroll']"
    },
    {
      "email": "jonta.zyder97@dominemakis.ru",
      "experience_years": 38,
      "first_name": "Bowis",
      "last_name": "Kerson",
      "person_id": 6732,
      "phone": "228-906-1559",
      "score": 4.343942439556122,
      "similarity": 0.6043804883956909,
      "skills": "['IT support', 'troubleshooting', 'networking', 'database administration', 'code analysis', 'data analysis', 'software version management', 'multi-environment communication', 'state reporting', 'change management', '24/7 environment uptime', 'product education/training', 'knowledge documents', 'industry relationships', 'EMS systems', 'HIPAA standards', 'specialized automation system', 'Federal and State reporting standards for EMS', 'Global Purchasing System', 'hardware upgrade', 'product line pricing solutions', 'Facial Recognition Software', 'Internet data mining', 'internet software database creation', 'software implementation testing', 'financial bookkeeping software', 'master Data management', 'process control', 'Software Development Life Cycle management', '100% OTD of all projects', '100% asset stability of projects', 'total net savings of all projects to HP in excess of $30,000,000', 'ERP system design and implementation', 'Database creation', 'data analysis and manipulation', 'reporting and research', 'cost benefit analysis', 'legislation', 'report writing', 'client side presentations', 'bookkeeping and finance resolution', 'company level planning for training and logistics', 'writing and redefining Company Standard Operating Procedures', 'planning and oversight of large scale deployment', 'annual, bi-Annual, quarterly, and monthly reporting', 'personnel recruitment, fitness, organization, reporting and retention', 'advanced operations and field preparation']['networking', 'database administration', 'code analysis', 'data analysis', 'software version management', 'multi-environment communication', 'state reporting', 'change management', '24/7 environment uptime', 'product education/training', 'knowledge documents', 'industry relationships', 'EMS systems', 'HIPAA standards', 'specialized automation system', 'Federal and State reporting standards for EMS', 'Global Purchasing System for HP', 'hardware upgrade', 'product line pricing solutions', 'Facial Recognition Software', 'Internet data mining', 'internet software database creation', 'software implementation testing', 'financial bookkeeping software', 'master Data management', 'process control', 'Software Development Life Cycle management', 'implementation', '100% OTD of all projects', '100% asset stability of projects', 'total net savings of all projects to HP in excess of $30,000,000', 'ERP system design and implementation', 'Database creation', 'data analysis and manipulation', 'reporting and research', 'cost benefit analysis', 'legislation', 'report writing', 'client side presentations', 'bookkeeping and finance resolution', 'company level planning for training and logistics', 'writing and redefining Company Standard Operating Procedures', 'planning and oversight of large scale deployment', 'annual, bi-Annual, quarterly, and monthly reporting', 'personnel recruitment, fitness, organization, reporting and retention', 'advanced operations and field preparation']"
    }
  ],
  "UI/UX Designer": [
    {
      "email": "egan.ygley86@rzeni.com",
      "experience_years": 40,
      "first_name": "Yharm",
      "last_name": "Tveiro",
      "person_id": 5263,
      "phone": "760-504-6070",
      "score": 4.625722563266754,
      "similarity": 0.6952472925186157,
      "skills": "['UX Design', 'Wireframing', 'Prototyping', 'Stakeholder Collaboration', 'WordPress Development', 'Front-end Development', 'Test-Driven Development', 'Graphic Design', 'Problem-solving', 'Client Collaboration', 'Customer Experience', 'UI Toolkit Development', 'Website Templates']['UX Design', 'Wireframing', 'Prototyping', 'Stakeholder Collaboration', 'WordPress Development', 'Front-end Development', 'Test-Driven Development', 'Graphic Design', 'Problem-solving', 'Client Collaboration', 'UX Design', 'Customer Experience', 'Stakeholder Communication', 'UX Design', 'Prototyping', 'UI Toolkit Development', 'Front-end Design', 'WordPress Development', 'Website Templates']"
    },
    {
      "email": "wm.aguia107@hale.jp",
      "experience_years": 38,
      "first_name": "Subell",
      "last_name": "Gjokos",
      "person_id": 3789,
      "phone": "685-979-5157",
      "score": 4.430821442604065,
      "similarity": 0.7009127140045166,
      "skills": "['Fantastic articulate storyteller', 'Excellent communication and presentation skills', 'Thoughtful decision maker', 'Critically thinking about logic and analytics', 'Empathetically problem-solving', 'Thinks big picture, holistically and collaboratively', 'Flexible and adaptable as a team contributor or as a leader', 'Ridiculously excellent work ethic with grit and perseverance', 'Extremely high EQ', 'Values authenticity, inclusion, and kindness', 'Incredibly positive person with a sunny disposition']['End-to-end product design process', 'User-centered design solutions', 'Discovery and User Research', 'Strategy', 'Ideation', 'Design consistent brand/style guides', 'Built interactive apps', 'Incorporated CRUD', 'Restful Routes and 3rd party APIs', 'Agile development workflow', 'Product development and project planning', 'Top seller', 'Excellent customer service', 'Product knowledge and education', 'Exceeded attach rate goals', 'Planned, managed, and executed monthly off hours wedding registry events', 'Improved store traffic and BOPs sales', 'Managed 12 direct reports', 'Improved key KPIs', 'Revamped onboarding process', 'Motivated purchasing', 'Influenced rate of sale', 'Increased sales per square foot', 'Built website with Dreamweaver, blog with WordPress', 'Created marketing materials, products and albums utilizing Adobe CC', 'Marketed via social media platforms', 'Strategized and optimized site content and image metadata for SEO']"
    },
    {
      "email": "ynfariostickdnai124@hvidroad.ru",
      "experience_years": 34,
      "first_name": "Md",
      "last_name": "Ypman",
      "person_id": 5521,
      "phone": "208-442-1539",
      "score": 4.016495227813721,
      "similarity": 0.6849946975708008,
      "skills": "['Front End', 'UI', 'HTML5', 'CSS3', 'JavaScript', 'Angular', 'React', 'Responsive Web Design', 'Agile', 'Waterfall', 'TDD']['HTML5', 'CSS3', 'JavaScript', 'Angular 6/5/4', 'TypeScript', 'Bootstrap', 'Node.js', 'Responsive Web Design', 'JQuery UI', 'Jasmine', 'Karma', 'DOM', 'MVC', 'SQL', 'HTML5', 'DHTML', 'React.JS', 'XHTML', 'Ajax', 'CSS', 'JQuery', 'JavaScript', 'Angular 2', 'TypeScript', 'Angular.js', 'Node.js', 'Responsive Web Design', 'HTML', 'Adobe', 'JSP', 'Oracle', 'Photoshop', 'CS3', 'Dream Weaver', 'HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Angular.JS', 'Bootstrap', 'LESS', 'SASS', 'Responsive Web Design', 'SQL', 'AJAX', 'JSON', 'XML', 'Jasmine']"
    },
    {
      "email": "nikooyosh21@yusufour.ca",
      "experience_years": 32,
      "first_name": "Afiyya",
      "last_name": "Deazel",
      "person_id": 4033,
      "phone": "571-795-0883",
      "score": 3.813084691762924,
      "similarity": 0.6812052130699158,
      "skills": "['Front end', 'Hp-ux', 'Marketing', 'marketing collateral', 'project management', 'MySQL', 'Javascript', 'Android', 'ASP', 'PHP', 'HTML 5', 'CSS', 'Git', 'Jquery', 'Political Consulting', 'Marketing Collateral', 'Project Management', 'Web Design', 'Front End Development', 'UI/UX']['Professional Web Site Development', 'Designing web sites', 'Maintaining web sites', 'Creating custom web graphics and layouts', 'Creating web programming script installations', 'Logo design', 'Animated banners', 'Copywriting and content creation', 'All mobile solutions', 'SQL Databases', 'Designed and created the ecommerce site ICPDAS-USA.com', 'Converted site to responsive', 'Catalog Flipbooks', 'Social Media', 'Marketing Campaign', 'Maintenance and web programming projects for ecommerce website', 'Professional Web Site Development', 'Designing web sites', 'Maintaining web sites', 'Creating custom web graphics and layouts', 'Creating flash intros', 'Web programming script installations', 'Logo design', 'Animated banners', 'Copywriting and content creation', 'Write, edit and proofread documents', 'Plan and prepare articles for online dissemination', 'Web usability', 'Accessibility', 'Testing and debugging', 'Website promotion & marketing', 'Client relations', 'Sales', 'Hiring and managing contractors and freelance workers', 'Bookkeeping', 'Departmental client contact', 'Review contract from sales', 'Assign hours to project', 'Determine project deliverables', 'Assign project to various teams or designers', 'Meet with client on weekly or bi-monthly basis to discuss progress']"
    },
    {
      "email": "gnacoson.yll102@mhood.gov",
      "experience_years": 31.548254620123203,
      "first_name": "Merone",
      "last_name": "Kryskovich",
      "person_id": 4191,
      "phone": "389-603-7637",
      "score": 3.7680619131613073,
      "similarity": 0.6813738346099854,
      "skills": "['E-commerce Marketing', 'Business Solutions', 'Design', 'Web design', 'E-commerce', '3D product design', 'game props', 'Photoshop website layouts', 'CMS client websites', '3d logos', 'product design', 'Modeling', 'Sculpting', 'Print ready solutions', 'E-commerce solutions', 'Email Campaigns', 'Product retargeting', 'banner advertisements', 'business cards', 'brochures', 'E-commerce websites', 'E-commerce product management', 'hardware', 'software', 'networking issues', 'customer service', 'company intranet', 'company internet', \"responsive html/CSS webpage's\"]['HTML5', 'CSS3', 'LESS/SASS', 'PHP', 'SQL', 'JavaScript/JQuery', 'Three.js', 'Vue.js', 'React', 'Angular', 'Demandware', 'Cheetah Digital', 'Level Access Accessibility', 'MailChimp', 'Adwords/Analytics', 'Git Repository', 'MAMP', 'Criteo Retargeting', 'Klaviyo', 'Adobe CC', 'Microsoft Office', 'MailChimp', 'Wordpress', 'WooCommerce', '3ds Max', 'Vray', 'Keyshot', 'Zbrush', '3D product design', 'game props', 'Photoshop website layouts', 'CMS client websites', 'Ecommerce', '3d logos', 'product design', '3ds Max', 'Zbrush', 'Keyshot', 'Modeling', 'Sculpting', 'Print ready solutions', 'E-commerce solutions', 'bulk order options', 'print invoice as pdf', 'add new payment gateway', 'hook into API for shipping', 'photo galleries', 'pop-up forms', 'PHP', 'Javascript', 'Email Campaigns', 'Mailchimp', 'Facebook Campaigns', 'Product retargeting', 'Criteo', 'banner advertisements', 'business cards', 'brochures', 'Dropshippers.com', 'E-commerce websites', 'E-commerce product management', 'Photoshop', '3ds Max', 'Keyshot', 'Photoshop', 'hardware', 'software', 'networking issues', 'Slomin related products', 'billing', 'alarm system', 'HVAC', 'heater related issues', 'oil drops', 'Optimum related products', 'Remedy tickets', 'customer solutions', 'troubleshooting equipment', 'technicians', 'billing', 'prorate amounts', 'payments', 'check', 'credit cards', 'company intranet', 'company internet', 'banner ads', 'business cards', 'brochures', 'web page layouts', \"responsive html/CSS webpage's\", 'logos', 'business cards', 'Brochures', 'websites in Adobe Flash']"
    }
  ],
  "Unity Developer": [
    {
      "email": "unser.lhian25@mroch.ca",
      "experience_years": 38,
      "first_name": "Tyne",
      "last_name": "Ypma",
      "person_id": 8485,
      "phone": "872-030-6470",
      "score": 4.348791122436523,
      "similarity": 0.6097679138183594,
      "skills": "['dedicated', 'reliable', 'excellent communication', 'interpersonal skills', 'build strong professional relationships', 'working knowledge of workstations software', 'ability to learn new systems quickly', 'excellent planning and organization skills', 'ability to assimilate information quickly', 'ability to make informed decisions', 'ability to meet deadlines', 'accuracy', 'quality']['network support', 'troubleshooting', 'hardware and software solutions', 'fleet management', 'user management', 'network maintenance', 'network cabling', 'computer and peripheral maintenance', 'troubleshooting', 'virus removal', 'data retrieval', 'user training', 'computer filtering', 'technical support', 'purchase advising']"
    },
    {
      "email": "agostad.kden96@dannauergettert.ru",
      "experience_years": 38,
      "first_name": "Zyriana",
      "last_name": "Alberly",
      "person_id": 11442,
      "phone": "401-498-8817",
      "score": 4.323760533332825,
      "similarity": 0.581956148147583,
      "skills": "['Diagnose and resolve issues', 'Provide on-site and in-shop support', 'Deployment of new workstations and networked printers', 'Software compatibility problems', 'Replacement of faulty hardware', 'Advising clients on hardware or software solutions', 'Design maps of PC Labs for a web-based monitoring tool', \"Upgrade and deploy PCs during NJIT's migration from Windows XP to Windows 7\", 'Performed research under Dr. Roberto Rojas-Cessa', 'Developed and executed experiments using tri-axle accelerometers', \"Presented at NJIT's International Undergraduate Summer Research Symposium\", 'Performed manual and automated testing of web based applications', 'Performed testing of SQL Scripts - fixing non-working components', \"Developed automated testing scripts using HP's Unified Functional Testing platform, JavaScript, and Selenium\", 'Monitored for leaks of vital information', 'Produced weekly reports', 'Organized and executed migration of CGI email from POP3 email to a hosted Exchange platform', 'Developed and launched backup solution for both workstations and servers', 'Maintained company servers', 'Deployed a Windows Server 2008 to act as a backup Active Directory domain controller', 'Established smart phone standardization for sales staff']['Diagnose and resolve issues', 'Provide on-site and in-shop support', 'Deployment of new workstations and networked printers', 'Software compatibility problems', 'Replacement of faulty hardware', 'Advising clients on hardware or software solutions', 'Design maps of PC Labs for a web-based monitoring tool', \"Upgrade and deploy PCs during NJIT's migration from Windows XP to Windows 7\", 'Area of research: Development of a high accuracy pedometer', 'Performed research under Dr. Roberto Rojas-Cessa', 'Developed and executed experiments using tri-axle accelerometers', \"Presented at NJIT's International Undergraduate Summer Research Symposium\", 'Performed manual and automated testing of web based applications', 'Performed testing of SQL Scripts - fixing non-working components', \"Developed automated testing scripts using HP's Unified Functional Testing platform, JavaScript, and Selenium\", 'Diagnose and resolve issues', 'Provide on-site and in-shop support', 'Deployment of new workstations and networked printers', 'Software compatibility problems', 'Replacement of faulty hardware', 'Advising clients on hardware or software solutions', 'Design maps of PC Labs for a web-based monitoring tool', \"Upgrade and deploy PCs during NJIT's migration from Windows XP to Windows 7\", 'Monitored for leaks of vital information', 'Produced weekly reports', 'Organized and executed migration of CGI email from POP3 email to a hosted Exchange platform', 'Developed and launched backup solution for both workstations and servers', 'Maintained company servers', 'Deployed a Windows Server 2008 to act as a backup Active Directory domain controller', 'Established smart phone standardization for sales staff']"
    },
    {
      "email": "equiere.allexis61@ibert.ru",
      "experience_years": 37,
      "first_name": "Xcarlise",
      "last_name": "Uchior",
      "person_id": 11928,
      "phone": "294-590-8130",
      "score": 4.224646306037903,
      "similarity": 0.5829403400421143,
      "skills": "['Work well with team members', 'Able to work independently', 'Administering networks', 'Configuring and installing cisco networks', 'Databases', 'Customer relationship service', 'Resolving issues with critical thinking skills', 'Answering help desk tickets', 'Imaging and deploying new PCs', 'Troubleshooting issues with production PCs', 'Patient care', 'Patrolling of grounds', 'Basic maintenance', 'Ability to deescalate situations', 'Documentation of incidents', 'Apparatus upkeep and restocking', 'Documentation of medical records']['Work well with team members', 'Able to work independently', 'Administering networks', 'Configuring and installing cisco networks', 'Databases', 'Customer relationship service', 'Resolving issues with critical thinking skills', 'Answering help desk tickets', 'Imaging and deploying new PCs', 'Troubleshooting issues with production PCs', 'Patient care', 'Patrolling of grounds', 'Basic maintenance', 'Ability to deescalate situations', 'Documentation of incidents', 'Patient care', 'Apparatus upkeep and restocking', 'Documentation of medical records']"
    },
    {
      "email": "bleejc24@hribash.edu",
      "experience_years": 33,
      "first_name": "Ufemiah",
      "last_name": "Oden",
      "person_id": 10803,
      "phone": "219-595-9828",
      "score": 3.8465053439140324,
      "similarity": 0.60722815990448,
      "skills": "['Linux', 'Bgp', 'Cisco', 'Citrix', 'Eigrp', 'Isis', 'Juniper', 'Network monitoring', 'Ospf', 'Remote access', 'Switching', 'Vmware', 'Vpn', 'Data center', 'Firewalls', 'Networking', 'Remedy', 'Ddos', 'Open source', 'Routing protocols']['Linux', 'Bgp', 'Cisco', 'Citrix', 'Eigrp', 'Isis', 'Juniper', 'Network monitoring', 'Ospf', 'Remote access', 'Switching', 'Vmware', 'Vpn', 'Data center', 'Firewalls', 'Networking', 'Remedy', 'Ddos', 'Open source', 'Routing protocols']"
    },
    {
      "email": "snyawnorentic59@ljune.jp",
      "experience_years": 32,
      "first_name": "Awwali",
      "last_name": "Wcis",
      "person_id": 11421,
      "phone": "227-546-4067",
      "score": 3.72545622587204,
      "similarity": 0.5838402509689331,
      "skills": "['IT Administrator', 'Operations Specialist', 'Website design', 'Computer installation and repair', 'Network administration', 'Microsoft Exchange administration', 'AWS server management', 'Cyber Security', 'VMWare', 'Windows 2010', 'Networking', 'Event planning', 'Campaign management', 'Cybersecurity', 'CyberCamp operations', 'Security Risk Assessments', 'Security tool implementation and integration', 'PCI remediation', 'Vulnerability assessments', 'E-discovery in Incident Response']['Website design', 'Computer installation and repair', 'Network administration', 'Microsoft Exchange administration', 'AWS server management', 'Cyber Security', 'VMWare', 'Windows 2010', 'Networking', 'Event planning', 'Campaign management', 'Cybersecurity', 'CyberCamp operations', 'Security Risk Assessments', 'Security tool implementation and integration', 'PCI remediation', 'Vulnerability assessments', 'E-discovery in Incident Response']"
    },
    {
      "email": "dybal.jenitriciouseber27@fnu.org",
      "experience_years": 30,
      "first_name": "Nataly",
      "last_name": "Cullarner",
      "person_id": 5799,
      "phone": "313-363-4333",
      "score": 3.5282503366470337,
      "similarity": 0.5869448184967041,
      "skills": "['comedic spirit', 'endless thirst to learn', 'ability to work efficiently in a team setting or independently']['JavaScript', 'PHP', 'React', 'AngularJS', 'Java', 'MySQL', 'Axios', 'HTML5', 'CSS', 'LESS', 'Bootstrap', 'React', 'Express', 'Axios', 'Node.js', 'SQL', 'ASP.Net', 'HTML', 'CSS', 'GraphQL', 'React', 'Angular', 'MongoDB']"
    }
  ]
};
const handleFindCandidateClick = () => setShowFindCandidatePopup(true);
const handleCloseFindCandidatePopup = () => {
  setShowFindCandidatePopup(false);
  setExpandedRowIndex(null);
  setExpandedSkillRowIndex(null);
};

const handleExpandClick = (index) => {
  setExpandedRowIndex(expandedRowIndex === index ? null : index);
};

const handleSkillExpandClick = (index) => {
  setExpandedSkillRowIndex(expandedSkillRowIndex === index ? null : index);
};

return (
  <div className="product-detail">
    <h1>Project Title: D</h1>
    <p ref={descriptionRef}>
      <br />
      <strong>Description:</strong> Create a mobile game like Mario. Also
      need to have a website to show how to install and play, with player
      rankings displayed.<br />
      <strong>Duration:</strong> 1 year<br />
      <strong>Working Location:</strong> United States<br />
      <strong>Budget:</strong> 800,000<br />
    </p>
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {completeResult.team.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, cellIndex) => (
              <td key={cellIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <button
      onClick={handleFindCandidateClick}
      className="find-candidate-button"
    >
      Find Best Fit Candidate
    </button>

    {showFindCandidatePopup && (
      <div className="popup-overlay">
        <div className="popup-content-small">
          <h2>Find Best Fit Candidate</h2>
          <div>
            {Object.keys(serializedcompleteGetCandidateResult).map(
              (role, roleIndex) => (
                <div key={roleIndex}>
                  <h2>{role}</h2>
                  <table border="1" cellPadding="5">
                    <thead>
                      <tr>
                        <th>Email</th>
                        {/*<th>Experience (Years)</th>*/}
                        
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Score</th>
                        <th>Skills</th>
                        <th>Tech Stack</th>
                      </tr>
                    </thead>
                    <tbody>
                      {serializedcompleteGetCandidateResult[role].map(
                        (candidate, index) => (
                          <tr key={index}>
                            <td>{candidate.email}</td>
                           {/* <td>{candidate.experience_years}</td>*/}
                            <td>
                              {candidate.first_name} {candidate.last_name}
                            </td>
                            <td>{candidate.phone}</td>
                            <td>{candidate.score}</td>
                            <td>
                              <button
                                onClick={() =>
                                  handleSkillExpandClick(index)
                                }
                                className="expand-button"
                              >
                                {expandedSkillRowIndex === index
                                  ? "Collapse"
                                  : "Expand"}
                              </button>
                              {expandedSkillRowIndex === index && (
                                <ul className="skills-list">
                                  {candidate.skills
                                    .split("][")
                                    .map((skillSet, i) => (
                                      <li key={i}>
                                        {skillSet
                                          .replace(/[[]']/g, "")
                                          .split(", ")
                                          .join(", ")}
                                      </li>
                                    ))}
                                </ul>
                              )}
                            </td>
                            <td>
                              <button
                                onClick={() => handleExpandClick(index)}
                                className="expand-button"
                              >
                                {expandedRowIndex === index
                                  ? "Collapse"
                                  : "Expand"}
                              </button>
                              {expandedRowIndex === index && (
                                <ul className="candidate-list">
                                  {candidate.skills
                                    .split("][")[1]
                                    .replace(/[[]']/g, "")
                                    .split(", ")
                                    .map((topSkill, i) => (
                                      <li key={i}>{topSkill}</li>
                                    ))}
                                </ul>
                              )}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              )
            )}
          </div>
          <button
            onClick={handleCloseFindCandidatePopup}
            className="close-popup-button"
          >
            Close
          </button>
        </div>
      </div>
    )}
  </div>
);
};

export default ProductDetailG;