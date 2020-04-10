import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Pranav Agarwal | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hey, Welcome to my Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:`Hey, Currently Im persuing my Bachelor's Degree from Manav Rachna in 
  B.tech Computer Science with specialization in Cyber security & Forensics.
  Have my YouTube channel focused on some cool electronic project's `,
  paragraphTwo: `Use to make websites by using React Framework, PHP, Bootstrap, Sass, NodeJS, CSS3, JavaScript, Django, 
  WordPress & I'm doing video editing for more than 2 years now using Adobe Premier Pro, 
  Sony Vegas & Photoshop, Figma for still Graphic Production.`,
  paragraphThree:`I'm Cyber Security enthusiast know well about Linux Environment fluent with Kali Linux 
  and OS like Parrot security worked on Framework's like Matasploit have idea about network protocols 
  and network and web security along with system security`,
  resume: 'https://drive.google.com/open?id=1T34EcROogDaqnw1y9rX5cgdv-m_J7LA0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project 0.png',
    title: 'My Portfolio Website',
    info: 'This website is made with react framework, bootstrap and gatsby.js',
    info2: 'It contains all information about me all my projects and work at one place',
    url: 'https://pranavportfolio.netlify.com/',
    repo: 'https://github.com/pranav2012/MyPortfolio/', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project 3.png',
    title: 'User Managment',
    info: 'It is made using react framework a basic user managment website which store all users in an ordered manner',
    info2: 'All users are loaded with api and we can search any user by their name',
    url: 'https://pranav2012.github.io/UserManagement/',
    repo: 'https://github.com/pranav2012/UserManagement/', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project 1.jpg',
    title: 'Travel Landing Page',
    info: 'Its a basic page made with pure CSS and Html',
    info2: 'Contains another service to store email id of people who registered',
    url: 'https://pranav2012.github.io/Travelpage/',
    repo: 'https://github.com/pranav2012/Travelpage', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project 2.png',
    title: 'Gradeient Website',
    info: 'It is made with pure Java Script and CSS',
    info2: 'We can change background of our website with DOM manipulation using JavaScript',
    url: 'https://pranav2012.github.io/Gradient-Background/',
    repo: 'https://github.com/pranav2012/Gradient-Background/', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'p2012agarwal@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/pranav.agr/',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pranav-agarwal-579363166/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://www.github.com/pranav2012',
    },
    {
      id: uuidv1(),
      name: 'youtube-play',
      url: 'https://www.youtube.com/channel/UCNonLPXZE_Cl5rhKGYtH19Q',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
