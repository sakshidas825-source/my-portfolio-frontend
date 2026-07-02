// Central content file. Replace these placeholder values with your real info.
// Later, this can be swapped for data fetched from the backend API (/api/portfolio)
// without needing to change any component markup.

export const portfolioData = {
  name: 'Your Name',
  title: 'Full-stack developer',
  bio: "I build end-to-end products — from API to interface — and ship them fast without skipping the details. I care about clean architecture as much as a clean UI.",
  photoUrl: '', // add a path like '/profile.jpg' once you drop a photo into /public
  resumeUrl: '#',
  email: 'you@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',

  stats: [
    { value: '12+', label: 'Projects shipped' },
    { value: '3', label: 'Years experience' },
    { value: '8', label: 'Technologies' }
  ],

  skills: [
    'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript',
    'REST APIs', 'Git', 'Tailwind CSS'
  ],

  projects: [
    {
      id: 1,
      title: 'AI resume analyser',
      description: 'Scores resumes against job roles using an LLM, parses PDFs server-side and returns structured feedback.',
      icon: 'file-text',
      tags: ['React', 'Node.js', 'Groq'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'This portfolio',
      description: 'Self-editable portfolio site seeded from resume and GitHub data, with an admin dashboard for edits.',
      icon: 'layout-dashboard',
      tags: ['MongoDB', 'Express', 'React'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Project three',
      description: 'Short one to two line description of what this project does and the problem it solves.',
      icon: 'code',
      tags: ['JavaScript', 'API'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ]
}
