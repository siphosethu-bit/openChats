import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, CalendarDays, Menu, Mic2, Play, X } from 'lucide-react'
import { episodes, stats } from './data'

const youtube = 'https://www.youtube.com/@OpenChatsPodcast'

function YoutubeIcon({ size = 24 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8Z"/><path d="m10 15 5-3-5-3v6Z" fill="currentColor" stroke="none"/></svg>
}

function Mark({ small = false }: { small?: boolean }) {
  return <div className={`mark ${small ? 'small' : ''}`} aria-label="Open Chats Podcast">
    <span className="mark-open">OPEN</span><span className="mark-chats">CHATS</span><span className="mark-pod">PODCAST</span>
  </div>
}

function App() {
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('seen')), { threshold: .12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return <>
    <header className="nav-wrap">
      <a href="#top" className="brand"><Mark small /><span>OPEN CHATS</span></a>
      <nav className={menu ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <a href="#about" onClick={() => setMenu(false)}>THE SHOW</a>
        <a href="#episodes" onClick={() => setMenu(false)}>EPISODES</a>
        <a href="#schedule" onClick={() => setMenu(false)}>SCHEDULE</a>
        <a className="nav-cta" href={youtube} target="_blank" rel="noreferrer">YOUTUBE <ArrowUpRight size={17}/></a>
      </nav>
      <button className="menu" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="scribble s1">REAL TALK</div><div className="scribble s2">NO FILTER</div>
        <div className="hero-copy reveal">
          <div className="eyebrow"><span></span>SOUTH AH'S FAVOURITE GROUP CHAT</div>
          <h1>OPEN CHATS.<br/><i>LOUD LAUGHS.</i><br/>REAL CONVERSATIONS.</h1>
          <p>A youth comedy podcast serving funny, unfiltered conversations, familiar chaos and pure South African energy.</p>
          <div className="hero-actions">
            <a className="button dark" href={youtube} target="_blank" rel="noreferrer"><YoutubeIcon size={20}/> WATCH ON YOUTUBE</a>
            <a className="text-link" href="#episodes">LATEST EPISODES <ArrowDown size={18}/></a>
          </div>
        </div>
        <div className="hero-art reveal">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="burst">NEW EPISODES<br/><b>2X A WEEK</b></div>
          <div className="mark-shadow"></div><Mark />
          <div className="audio-pill"><span className="playing-bars">{[1,2,3,4,5,6,7].map(x=><i key={x}/>)}</span><b>MON + THU · 3PM</b></div>
        </div>
        <div className="scroll-note">SCROLL FOR THE CHAOS <ArrowDown size={16}/></div>
      </section>

      <section className="ticker" aria-label="Podcast themes"><div>FUNNY CONVERSATIONS <b>✦</b> YOUTH CULTURE <b>✦</b> SOUTH AFRICAN ENERGY <b>✦</b> NO INSIDE VOICES <b>✦</b> FUNNY CONVERSATIONS <b>✦</b> YOUTH CULTURE <b>✦</b></div></section>

      <section className="stats reveal" aria-label="Channel stats">{stats.map((s,i)=><div className="stat" key={s.label}><span>0{i+1}</span><strong>{s.value}</strong><small>{s.label}</small></div>)}</section>

      <section className="about" id="about">
        <div className="section-kicker reveal">ABOUT THE CHAT</div>
        <div className="about-grid reveal">
          <h2>LIKE SITTING<br/>WITH THE CREW.<br/><em>JUST LOUDER.</em></h2>
          <div><p className="lead">Comedy, youth culture, random stories and real conversations all pulled into one very entertaining chat.</p><p>Open Chats is for people who love wild opinions, familiar stories and content that sounds like real people speaking freely. No boardroom energy. No pretending. Just good chats and better laughs.</p><a className="under-link" href={youtube} target="_blank" rel="noreferrer">MEET US ON YOUTUBE <ArrowUpRight size={18}/></a></div>
        </div>
        <div className="quote-strip reveal"><span>“</span><p>LET US ASHKARAIN<br/>THE BANGANOY.</p><Mic2/></div>
      </section>

      <section className="schedule" id="schedule">
        <div className="schedule-head reveal"><div><div className="section-kicker light">WHEN WE DROP</div><h2>TWO DAYS.<br/>DOUBLE THE CHAOS.</h2></div><p>Set your reminder. The chats drop twice a week, right when your afternoon needs rescuing.</p></div>
        <div className="schedule-cards reveal">
          <div className="day-card yellow"><span>01</span><CalendarDays/><h3>MONDAY</h3><strong>3:00 PM</strong><small>START THE WEEK LOUD</small></div>
          <div className="day-card red"><span>02</span><CalendarDays/><h3>THURSDAY</h3><strong>3:00 PM</strong><small>WEEKEND WARM-UP</small></div>
        </div>
      </section>

      <section className="episodes" id="episodes">
        <div className="episodes-head reveal"><div><div className="section-kicker">PICK A CHAT</div><h2>LATEST FROM<br/>THE COUCH.</h2></div><a className="under-link" href={youtube} target="_blank" rel="noreferrer">VIEW ALL ON YOUTUBE <ArrowUpRight size={18}/></a></div>
        <div className="episode-grid">{episodes.map(ep=><article className="episode reveal" key={ep.number}>
          <div className={`thumb ${ep.tone}`}><div className="thumb-no">{ep.number}</div><div className="mini-mark">OPEN<br/><b>CHATS</b></div><button aria-label={`Watch ${ep.title}`}><Play fill="currentColor"/></button><span className="duration">{ep.duration}</span></div>
          <div className="episode-meta"><span>{ep.tag}</span><span>FEATURED CHAT</span></div><h3>{ep.title}</h3><p>{ep.description}</p><a href={youtube} target="_blank" rel="noreferrer">WATCH EPISODE <ArrowUpRight size={17}/></a>
        </article>)}</div>
      </section>

      <section className="difference">
        <div className="section-kicker light reveal">WHY IT HITS DIFFERENT</div><h2 className="reveal">NOT POLISHED.<br/><i>JUST PROPERLY FUNNY.</i></h2>
        <div className="difference-grid reveal">{[['01','REAL CHATS','Conversations that sound familiar, because nobody is reading from a corporate script.'],['02','MADE FOR THE YOUTH','The culture, the chaos and the conversations everyone is already having.'],['03','SOUTH AH ENERGY','Homegrown humour, local flavour and a point of view that could only come from here.'],['04','ENTERTAINMENT FIRST','Comedy without trying to be perfect. Come laugh, stay for the wildly specific stories.']].map(x=><div key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div>
      </section>

      <section className="disclaimer reveal"><div className="smile">:)</div><div><div className="section-kicker">A QUICK HEADS-UP</div><h2>HUMOUR COMES FIRST.</h2><p>Open Chats Podcast is created for entertainment and comedic purposes. Some jokes or conversations may touch on sensitive topics, but the intent is humour, not harm. Listener discretion is advised.</p></div></section>

      <section className="final-cta"><div className="cta-rays"></div><div className="reveal"><span>654K PEOPLE ARE ALREADY IN</span><h2>THE CHAT IS<br/>ALREADY HAPPENING.</h2><p>Pull up a chair. Join hundreds of thousands of viewers watching Open Chats every week.</p><a className="button dark" href={youtube} target="_blank" rel="noreferrer"><YoutubeIcon/> SUBSCRIBE ON YOUTUBE</a></div></section>
    </main>
    <footer><div className="footer-brand"><Mark small/><div><b>OPEN CHATS PODCAST</b><p>Loud laughs. Real conversations. South Ah energy.</p></div></div><div><b>NEW EPISODES</b><p>Monday · 3 PM<br/>Thursday · 3 PM</p></div><div><b>FIND THE CHAT</b><a href={youtube} target="_blank" rel="noreferrer">YouTube <ArrowUpRight size={14}/></a><p>South Africa</p></div><div className="copyright">© 2026 OPEN CHATS PODCAST<br/>ENTERTAINMENT FIRST.</div></footer>
  </>
}
export default App
