const projectData = [
    {    
            name: 'EMR Standardization',
            id: 1,
            img: 'https://cdn-images-1.medium.com/max/1600/1*8-NNHZhRVb5EPHK5iin92Q.png',
            description: 'For my Junior year summer internship I worked as a Data Engineering intern at Optum in Boston with the largest healthcare database in the country. We established a pipeline to take data from various EMR formats to convert them into a CDR format ready for sale. I was part of the core effort to transfer existing SQL ETL code to a more scalable Hadoop/Spark framework.',
            langList: ['Spark', 'Hadoop', 'Scala', 'SQL']
    },
    {    
            name: 'Metabolic Engineering',
            id: 2,
            img: 'macbookpro15-front_1_orig.png',
            description: 'In my sophomore year internship, I was fortunate enough to be able to have worked with some of the smartest people I have ever met at Massachussetts General Hospital as a Software Engineering Research Intern. Here, I worked with a Chemical Engineering postdoc and renowned surgeons to help write algorithms in Python to locate specific metabolic pathways affected in liver transplants. The ultimate goal of this would be to develop drugs that target these specific pathways to create more viable livers for transplant, while reducing side effects. Here, I gained a lot of experience with handling massive data sets, and grew much more accustomed to Python and all of the great data science tools it offers.',
            langList: ['Python', 'Pandas', 'MATLAB']
    },
    {    
            name: 'PIPER',
            id: 3,
            img: 'http://cidarlab.org/wp-content/uploads/2013/09/BU-logo.gif',
            description: 'Throughout my Junior year, I worked in the Bioinformatics at BU as a Software researcher. Under Professor Sandor Vajda, I worked on a program called PIPER, which is a protein docking simulation tool to assist in drug development. As the only undergrad in the lab, my focus was on writing unit tests and optimizing code quality, while also writing documentation for each library as I coded incremental improvements. Here, I gained a lot of experience working on a professional software team and learned a lot of the intricacies of the Git workflow I had not previously been exposed to in my personal work.',
            langList: ['C', 'CTest', 'CMake', 'Sphinx', 'Git']
    },
    {    
            name: 'OpenMRS Developer',
            id: 4,
            img: 'openMRS.png',
            description: 'During the summer of 2017, I became an open source developer for a project called OpenMRS, which is a fantastic open source initiative dedicate to providing a medical record platform in developing countries. As a new developer, I mainly work on lower level tickets in Java and collaborate with engineers across the world to help provide a reliable health platform. I plan to collaborate for years to come, and look forward to one day leading sprints and working on high priority tickets as I learn more about the code base through my work.',
            langList: ['Java', 'JIRA', 'Git']
    },
    {    
            name: 'Third World ECG Diagnostic',
            id: 5,
            img: 'MIT_HACKING-_Medicine_Logo_Black.png',
            description: 'In the MIT Hacking Medicine 2017 Hackathon, I worked with a team of physicians, economists and engineers to build an ECG to be used in third world countries. This ECG would be integrated into smartphones, which are very prevalent in these developing areas. I helped write the time compression, diagnostic classification algorithm in Python with the help of scikit-learns extensive ML functionality.',
            langList: ['Python', 'Pandas', 'Scikit-learn', 'Git']
    },
    {    
            name: 'VeriRoute',
            id: 6,
            img: 'laptop_PNG5895.png',
            description: 'In Fall 2016, I participated in HackDartmouth in my first ever hackathon. Here, I found a great team and we were able to leverage one of the sponsors\' datasets on geospatial driver behavior to develop a web app that served as a Google Map extension. Along with a geospatial crime dataset, the app functioned by giving a metric of safety to each route calculated by the Google Map API to allow users to verify the safety of their routes. This was then packaged into a nice UI.',
            langList: ['HTML', 'CSS', 'Javascript']
    },
    {    
            name: 'HackNYU Genome Sequence',
            id: 7,
            img: 'http://biopython.org/DIST/docs/tutorial/images/biopython_logo.svg',
            description: 'In an incredibly over-ambitious hackathon project, a friend and I traveled to NYU with an idea to try and set up a Machine Learning framework to patternistically recognize cancers from genomic changes. We searched extensively, and were able to locate an open source, anonymized genome database of patients both before and after cancer. We utilized BioPython and sequenced each of the genomes, and were able to graphically analyze the major changes using frequency analysis and pairwise nucleotide comparisons of each of the genomes. Although we were not entirely successful due to lack of extensive data, it was a great experience starting a data science project from scratch.',
            langList: ['Python', 'Pandas', 'Biopython']
    },
    {    
            name: 'Personal Site',
            id: 8,
            img: 'https://i.redd.it/rdisen56jy0y.gif',
            description: 'A site I use to centralize my web presence and share my work, I also use my site as an opportunity to get familiar with new web dev tools. Currently, I am working on writing the site in React and Node to get familiar with the full stack of modern development, and frequently update the site in my free time.',
            langList: ['HTML', 'CSS', 'Bootstrap', 'React.js', 'Node.js']
    },
    {    
            name: 'Converse Product Launch',
            id: 9,
            img: 'https://seeklogo.com/images/C/converse-all-star-logo-E4F967F909-seeklogo.com.png',
            description: 'For my Data Science course at BU, a partner and I worked with Converse to help them analyze data-driven strategies for their first ever major product launch. We worked on social media analysis, and came up with a hypothesis that successful product launches rely on posts from individuals who have a high frequency of influential people in their networks. This would be due to the fact that information could be spread far out from a source if the followers of that source were influential. We used Pythons many packages to prove this, and got some great graphical representations of information propogation which Converse stated they will consider in their launch.',
            langList: ['Python', 'Scikit-learn', 'Pandas', 'Crimson Hexagon']
    },
    {    
            name: 'ClubConnect',
            id: 10,
            img: 'androids.png',
            description: 'For a final project for my Software Engineering class I led a team in the development of an Android app called ClubConnect. The mission of this software was to replace the current product at BU used to connect students to clubs, and create a rudimentary social platform for students to connect with campus clubs. I wrote the back end in Java and set up Firebase and integrated this within our application as well.',
            langList: ['Java', 'Android Studio', 'Firebase']
    },
    {    
            name: 'MinerDash',
            id: 11,
            img: 'mac-lcd-screen.png',
            description: 'In a semester long project for my Software Engineering class, I wrote a comprehensive, Object-Oriented game entirely in C++. MinerDash is an ASCII-based game with the goal of moving miners to and from mines to obtain gold, while avoiding opponents who move sporadically throughout the environment.',
            langList: ['C++']
    },
    {    
            name: 'innovateEDU',
            id: 12,
            img: 'innovate_clear.png',
            description: 'Starting over the summer of my sophomore year, myself and a group of 3 students from Northeastern, MIT and Emerson started a cross campus initiative called innovateEDU. The aim of this program was to connect students across campuses to get them working on high-risk projects with commercial potential, and ultimately connect these students and campuses into the many incubators and accelerators across Boston. In our inaugural semester, we were able to drive over 200 people to our final event, and are now doubling in size, and hope to continue to provide value for students interested in commercializing their ideas.',
            langList: ['null']
    }
];