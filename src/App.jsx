import React, { useState, useEffect } from 'react'

const userData = {
  name: 'Nguyen Do Minh Thu',
  title: 'Business Analyst | Turning Data into Action',
  location: 'Hanoi, Vietnam',
  email: 'dmthu.nguyen92@gmail.com',
  phone: '+84 349 812 865',
  heroTagline: "I turn messy product problems into clear, data-informed solutions that help teams ship meaningful experiences.",
  about: `I am a Business Analytics student at National Economics University (NEU), graduating in 2026. I enjoy translating user needs into practical product requirements, designing intuitive workflows, and validating solutions with data. I believe the best products are built when empathy, analytics, and engineering work together.`,
  education: {
    school: 'National Economics University (NEU)',
    degree: 'B.Sc. in Business Analytics',
    period: 'Sep 2022 — Expected 2026',
    gpa: '3.63 / 4.0'
  },
  experience: {
    company: 'Shenzhen Horizon Vision Technology',
    role: 'Business Analyst & Manual Tester Intern',
    period: 'Apr 2025 — Sep 2025',
    bullets: [
      'Led requirement elicitation with stakeholders, turning business problems into clear SRS and user stories.',
      'Designed activity diagrams, user flows, wireframes and interactive prototypes to align cross-functional teams.',
      'Maintained Requirement Traceability Matrix (RTM) to ensure coverage across features and tests.',
      'Authored and executed comprehensive manual test cases (functional and regression); tracked and prioritized bugs.',
      'Collaborated with UI/UX and engineering to deliver user-validated releases for HarmonyOS NEXT.'
    ]
  },
  projects: [
    {
      id: 'decision',
      name: 'Decision — Lifestyle App',
      images: ['/assets/project-decision1.jpeg','/assets/project-decision2.jpeg','/assets/project-decision3.jpg','/assets/project-decision4.jpeg','/assets/project-decision5.jpeg','/assets/project-decision6.jpeg','/assets/project-decision7.jpeg','/assets/project-decision8.jpeg'],
      short: 'A compact toolkit for quick decision-making: spin the wheel, flip a coin, roll dice, or generate lucky numbers.',
      long: 'I led product definition and prototyping. Focused on low-friction UX for rapid adoption; the app reached consistent daily usage after launch.'
    },
    {
      id: 'qrscanner',
      name: 'QR Scanner — Utility App',
      images: ['/assets/project-qr1.jpeg','/assets/project-qr2.jpeg','/assets/project-qr3.jpeg','/assets/project-qr4.jpeg','/assets/project-qr5.jpeg'],
      short: 'Scan, generate and batch-process QR codes; decorate and generate QR website.',
      long: 'Implemented requirements and testing strategy to ensure reliable scanning across devices and export workflows used by small merchants.'
    },
    {
      id: 'debt',
      name: 'Debt Manager — Finance App',
      images: ['/assets/project-debt1.jpeg','/assets/project-debt2.jpeg','/assets/project-debt3.jpeg','/assets/project-debt4.jpeg','/assets/project-debt5.jpeg'],
      short: 'Personal finance tool to track loans, repayments, and interest.',
      long: 'Built the calculation models, designed clear repayment dashboards, and validated accuracy through test cases and stakeholder UAT.'
    }
  ],
  skills: {
    technical: ['Python', 'SQL', 'R', 'Power BI', 'Excel', 'RapidMiner', 'Draw.io'],
    soft: ['Critical Thinking', 'Cross-functional Collaboration', 'Problem Solving', 'Organization', 'Communication']
  },
  activities: [
    'NEU Orientation Club — Member',
    'Organizing Committee — NEU Career Week & Internship Day 2024',
    'Talk Shows Organizer — Drive to Thrive, Roadmap, Wedding Planner'
  ],
  languages: ['Vietnamese (Native)', 'English — IELTS 7.0'],
  assets: {
    photo: '/assets/photo.jpeg',
    cv: '/assets/Nguyen_Do_Minh_Thu_CV.pdf'
  }
}

const IconEmail = ()=> (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 8.5L12 13L21 8.5V18C21 18.552 20.552 19 20 19H4C3.448 19 3 18.552 3 18V8.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 6H3V7.02C3 7.343 3.135 7.651 3.373 7.878C4.118 8.578 5.695 9.845 8.017 11.616L12 14.99L15.983 11.616C18.305 9.845 19.882 8.578 20.627 7.878C20.865 7.651 21 7.343 21 7.02V6Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>)
const IconPhone = ()=> (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.92V20C22 20.53 21.789 21.039 21.414 21.414C21.039 21.789 20.53 22 20 22C10.06 22 2 13.94 2 4C2 3.47 2.211 2.961 2.586 2.586C2.961 2.211 3.47 2 4 2H7.08C7.48 2 7.853 2.179 8.121 2.5L10.67 5.5C10.972 5.88 11.005 6.398 10.757 6.819L9.92 8.1C10.98 10.66 13.34 13.02 15.9 14.08L17.18 13.24C17.601 12.996 18.119 13.026 18.5 13.33L21.5 15.88C21.821 16.14 22 16.51 22 16.92Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>)

function Header(){ 
  return (
    <header className="fixed w-full z-40 bg-white/60 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-semibold">MT</div>
          <div className="hidden sm:block">
            <div className="font-semibold">{userData.name}</div>
            <div className="text-xs text-slate-600">{userData.title}</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#experience" className="hover:text-accent">Experience</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href={userData.assets.cv} download className="hidden sm:inline-block px-3 py-1.5 border rounded-md text-sm hover:bg-slate-100">Download CV</a>
          <a href={`mailto:${userData.email}`} className="inline-flex items-center gap-2 bg-accent text-white px-3 py-1.5 rounded-md text-sm"><IconEmail/>Contact</a>
        </div>
      </div>
    </header>
  )
}

function Hero(){ 
  return (
    <section id="hero" className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">{userData.name}</h1>
          <p className="mt-3 text-lg text-slate-700">{userData.title}</p>
          <p className="mt-4 text-slate-600 max-w-xl">{userData.heroTagline}</p>
          <div className="mt-6 flex gap-3 items-center">
            <a href={userData.assets.cv} download className="px-4 py-2 rounded-md bg-accent text-white font-medium">Download CV</a>
            <a href="#contact" className="px-4 py-2 rounded-md border hover:bg-slate-50">Contact me</a>
          </div>
          <div className="mt-6 text-sm text-slate-500 flex flex-col gap-2">
            <div><strong>Location:</strong> {userData.location}</div>
            <div className="flex gap-4"><span className="flex items-center gap-2"><IconEmail/>{userData.email}</span><span className="flex items-center gap-2"><IconPhone/>{userData.phone}</span></div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-xl bg-white flex items-center justify-center">
            <img src={userData.assets.photo} alt="Portrait" className="object-cover w-full h-full" onError={(e)=>e.currentTarget.src='/assets/photo-placeholder.jpg'} />
          </div>
        </div>
      </div>
    </section>
  )
}

function About(){
  return (
    <section id="about" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-primary">About Me</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 text-slate-700">{userData.about}</div>
          <div className="bg-slate-50 p-4 rounded-lg">
            <h4 className="font-semibold">Quick Facts</h4>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li><strong>University:</strong> {userData.education.school}</li>
              <li><strong>Degree:</strong> {userData.education.degree}</li>
              <li><strong>GPA:</strong> {userData.education.gpa}</li>
              <li><strong>Languages:</strong> {userData.languages.join(', ')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Education(){
  const ed = userData.education
  return (
    <section id="education" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-semibold">Education</h3>
        <div className="mt-3 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold">{ed.school}</div>
              <div className="text-sm text-slate-600">{ed.degree} — {ed.period}</div>
            </div>
            <div className="text-sm text-slate-500">GPA: <strong>{ed.gpa}</strong></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience(){
  const ex = userData.experience
  return (
    <section id="experience" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-semibold">Experience</h3>
        <div className="mt-4 p-4 rounded-lg shadow-sm bg-slate-50">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold">{ex.role}</div>
              <div className="text-sm text-slate-600">{ex.company} — {ex.period}</div>
            </div>
          </div>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            {ex.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
          </ul>
        </div>
      </div>
    </section>
  )
}


function ProjectSlider({project}){
  const [i,setI] = useState(0)
  const total = project.images.length

  function prev(){ setI((i-1+total)%total) }
  function next(){ setI((i+1)%total) }

  // Auto-play mỗi 3 giây
  useEffect(()=>{
    const timer = setInterval(()=> setI(i => (i+1)%total), 3000)
    return ()=> clearInterval(timer)
  },[total])

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col">
      <div className="relative h-52 bg-slate-100 rounded overflow-hidden flex items-center justify-center">
        <img src={project.images[i]} alt={project.name} className="object-contain max-h-full w-full p-2" />
        {total>1 && <>
          <button onClick={prev} className="absolute left-2 top-1/2 ...">‹</button>
          <button onClick={next} className="absolute right-2 top-1/2 ...">›</button>
        </>}
      </div>
      <h4 className="mt-3 font-semibold">{project.name}</h4>
      <p className="text-sm text-slate-600 mt-1">{project.short}</p>
      <p className="text-sm text-slate-500 mt-2">{project.long}</p>
    </div>
  )
}

function Projects(){
  return (
    <section id="projects" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-primary">Selected Projects</h3>
        <p className="text-slate-600 mt-2">Hands-on projects that demonstrate product thinking, analysis and delivery.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {userData.projects.map(p=>(<ProjectSlider key={p.id} project={p}/>))}
        </div>
      </div>
    </section>
  )
}

function Skills(){
  return (
    <section id="skills" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold">Skills</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded">
            <h4 className="font-semibold">Technical</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {userData.skills.technical.map((s,i)=>(<span key={i} className="text-sm px-3 py-1 rounded-full border">{s}</span>))}
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded">
            <h4 className="font-semibold">Soft skills</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {userData.skills.soft.map((s,i)=>(<span key={i} className="text-sm px-3 py-1 rounded-full border">{s}</span>))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Activities(){
  return (
    <section id="activities" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-semibold">Activities & Leadership</h3>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
          {userData.activities.map((a,i)=>(<li key={i}>{a}</li>))}
        </ul>
      </div>
    </section>
  )
}

function Contact(){
  function handleSubmit(e){
    e.preventDefault()
    const fd = new FormData(e.target)
    const name = fd.get('name'), email = fd.get('email'), message = fd.get('message')
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`)
    window.location.href = `mailto:${userData.email}?subject=${subject}&body=${body}`
  }
  return (
    <section id="contact" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="mt-3 text-slate-700">I’m actively looking for entry-level Business Analyst positions. If you have an opportunity or a question, let’s connect.</p>
          <div className="mt-4 text-sm text-slate-600">
            <div className="flex items-center gap-2"><IconEmail/>{userData.email}</div>
            <div className="flex items-center gap-2 mt-2"><IconPhone/>{userData.phone}</div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-slate-50 p-4 rounded">
          <label className="text-sm">Name</label>
          <input name="name" required className="w-full mt-1 p-2 rounded border" />
          <label className="text-sm mt-3">Email</label>
          <input name="email" type="email" required className="w-full mt-1 p-2 rounded border" />
          <label className="text-sm mt-3">Message</label>
          <textarea name="message" rows="5" required className="w-full mt-1 p-2 rounded border">Hello, I would like to connect about ...</textarea>
          <div className="mt-4 flex justify-end"><button type="submit" className="px-4 py-2 bg-accent text-white rounded">Send</button></div>
        </form>
      </div>
    </section>
  )
}

export default function App(){
  return (
    <div>
      <Header />
      <main className="pt-6">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Activities />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-slate-600">
        <div className="max-w-6xl mx-auto">© {new Date().getFullYear()} {userData.name}. I believe in the power of data to tell stories and create impact.</div>
      </footer>
    </div>
  )
}
