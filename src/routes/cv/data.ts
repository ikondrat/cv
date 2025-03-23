// Define CV data
const personalInfo = {
    name: 'Your Name',
    title: 'Professional Title',
    email: 'email@example.com',
    phone: '+1 (123) 456-7890',
    location: 'City, Country',
    website: 'yourwebsite.com',
    linkedin: 'linkedin.com/in/yourprofile',
    github: 'github.com/yourusername',
    summary: 'Experienced professional with expertise in relevant skills and technologies. Passionate about creating innovative solutions and delivering high-quality results.'
};

const experience = [
    {
        company: 'Company Name',
        position: 'Current Position',
        period: 'Jan 2022 - Present',
        description: 'Describe your responsibilities and achievements in this role.',
        achievements: [
            'Led a team of X developers to successfully deliver project Y ahead of schedule',
            'Increased system performance by Z% through optimization and refactoring',
            'Implemented new features that improved user experience and engagement'
        ]
    },
    {
        company: 'Previous Company',
        position: 'Previous Position',
        period: 'Mar 2018 - Dec 2021',
        description: 'Describe your responsibilities and achievements in this role.',
        achievements: [
            'Developed and maintained multiple applications used by thousands of users',
            'Collaborated with cross-functional teams to deliver integrated solutions',
            'Mentored junior developers and conducted technical interviews'
        ]
    }
];

const education = [
    {
        institution: 'University Name',
        degree: 'Master of Science in Relevant Field',
        period: '2016 - 2018',
        description: 'Brief description of your studies and achievements.'
    },
    {
        institution: 'University Name',
        degree: 'Bachelor of Science in Relevant Field',
        period: '2012 - 2016',
        description: 'Brief description of your studies and achievements.'
    }
];

const skills = [
    { category: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java'] },


export {
    personalInfo,
    experience,
    education,
    skills
}