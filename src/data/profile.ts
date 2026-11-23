// Everything about you that appears on the site lives here.
// Edit this file to change your name, links, CV, education, skills, etc.

export const profile = {
  name: 'Dinis [Surname]',
  tagline:
    "Computer Science and Engineering student at the University of Aveiro. I write game reviews and I'm working towards a career in the games industry.",
  role: 'Computer Science and Engineering student · University of Aveiro',
  location: 'Aveiro, Portugal',

  // Put your photo in /public (e.g. public/photo.jpg) and write its name here.
  // Leave as null to show a placeholder.
  photo: null as string | null,

  // Put your CV in /public (e.g. public/cv.pdf).
  cv: 'cv.pdf',

  email: 'your@email.com',

  links: [
    { label: 'LinkedIn', handle: '/in/username', href: 'https://www.linkedin.com/in/username' },
    { label: 'GitHub', handle: '@username', href: 'https://github.com/username' },
    { label: 'Backloggd', handle: '@username', href: 'https://backloggd.com/u/username' },
  ],

  about: [
    "I'm Dinis, a Computer Science and Engineering student at the University of Aveiro, in Portugal. Next year I'm starting an MSc in Digital Game Development.",
    "I've played games my whole life and I like to finish them at 100%. I also collect old consoles and games.",
    "[What you're looking for next: game development, QA, writing — and what you'd bring to a team.]",
  ],

  education: [
    { title: 'MSc Digital Game Development', place: 'University of Aveiro', period: 'From 2027' },
    { title: 'BSc Computer Science and Engineering', place: 'University of Aveiro', period: '[Year] – present' },
  ],

  experience: [
    { title: '[Role]', place: '[Company or project]', period: '[Year]', description: '[One line on what you did.]' },
  ],

  skills: [
    { label: 'Programming', value: '[C, Java, Python…]' },
    { label: 'Engines & tools', value: '[Unity, Godot, Git…]' },
    { label: 'Languages', value: 'Portuguese (native), [English — level]' },
  ],

  gaming: [
    { label: 'Plays on', value: '[PC, Switch, PlayStation…]' },
    { label: 'Favourite genres', value: '[Genres]' },
    { label: 'Collection', value: '[Consoles in your collection]' },
  ],

  // Shown at the bottom of the Reviews page.
  scoring: {
    intro: '[One or two lines on what a score means to you.]',
    scale: [
      { range: '9–10', meaning: '[What it means]' },
      { range: '7–8', meaning: '[What it means]' },
      { range: '5–6', meaning: '[What it means]' },
      { range: '1–4', meaning: '[What it means]' },
    ],
  },
};
