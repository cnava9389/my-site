import logo from "./assets/solid.png";
import styles from "./App.module.css";
import Navbar from './components/Navbar.jsx'
import Notification from "./components/Notification.jsx"
import Code from "./components/Code.jsx"
import { gsap } from 'gsap'
import { createRenderEffect, onCleanup, onMount, createSignal, from } from 'solid-js'
import python_img from './assets/python2.png'
import triple from './assets/trip.png'
import typeScript from './assets/typescript.png'
import docker from './assets/docker.png'
import nginx from './assets/nginx.png'
import DO from './assets/DigitalOcean.png'
import flask from './assets/flask.png'
import psql from './assets/psql.png'
import react_pic from './assets/react.png'
import bs from './assets/bs.png'
import git from './assets/git.png'

function App() {
  let back
  let text
  let bounce
  let modal
  let me
  let py
  let js
  let code
  let cnt

  const [fname, setFname] = createSignal('')
  const [lname, setLname] = createSignal('')
  const [email, setEmail] = createSignal('')
  const [subject, setSubject] = createSignal('')
  const [message, setMessage] = createSignal('')
  const [details, setDetails] = createSignal({isError:false, message:''})



  const onSubmit = (e) => {
    e.preventDefault()
    const result = {
      name: lname() ? `${fname()} ${lname()}` : fname(), 
      email: email(),
      subject: subject(),
      message: message()
    }
    setNotification(false,"Thanks for contacting me, I'll try and get back to you ASAP")
    setFname('')
    setLname('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  const setNotification = (isError, message) => {
    setDetails({isError:isError, message: message})    
    gsap.timeline({defaults:{duration:2}}).to(modal,{y:300, ease:'bounce'}).to(modal,{y:-300, delay:2})
  }

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom/1.2 <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

  const checkSections = () => {
      isInViewport(me)?gsap.to(me,{x:900,duration:1.5}):''
      isInViewport(py)?gsap.to(py,{x:-900,duration:1.5}):''
      isInViewport(js)?gsap.to(js,{x:900,duration:1.5}):''
      isInViewport(code)?gsap.to(code,{x:-900,duration:1.5}):''
      isInViewport(cnt)?gsap.to(cnt,{x:900,duration:1.5}):''
    }


  onMount(()=>{
    gsap.from(back,{opacity:0, duration:1.5, y:-50, ease: "Power2.easeInOut"})
    gsap.from(text,{opacity:0, duration:1.5, y:-50, ease: "Power2.easeInOut", delay:1})
    gsap.timeline({
      repeat: -1,
      delay:2.5,
      defaults: {duration:1}
    }).to(bounce, { y: 30}).to(bounce, {y: 0})
    document.addEventListener('scroll', checkSections,{passive:true})
  })
  // createRenderEffect(()=>{
  //   console.log(back)
  // })
  // onCleanup(()=>)
  return (
    <>
      <div class='notification' style={{opacity:1}} ref={modal}>
        <Notification details={details}/>
      </div>
      <Navbar/>
      <div ref={back}>
      <div class='background_night text-white d-flex justify-content-center align-items-center'>
        <div ref={text} class='row'>
          <div class='col-12 h1 text-center'>
            <div>Software Engineer</div>
            <div>Christian Nava</div>
          </div>
          <div class='col-12 text-center'>
            <img src={python_img} alt="python" />
            <img src={triple} alt="web stack" />
            <img style={{width:'150px', margin:"50px"}} src={typeScript} alt="typescript" />
          </div>
          <div ref={bounce} class='text-center'><i onClick={()=>window.scrollTo(0,900)} class="h1 bi bi-chevron-double-down"></i></div>
        </div>
      </div>
      </div>
      <div class='row m-1 textFont h3'>
        <div class='col-6 text-center'>
            <div style={{height: '15%'}}/>
            <img src={docker} alt="dcoker" />
            <img src={nginx} alt="nginx" />
            <img src={DO} alt="Digital Ocean" />
        </div>
        <div class='col-6'>
          <span id='me' class='anchor'/>
          <div class='sections outer'>
          <div ref={me} class='card innerL'>
            <div class='card-body d-flex align-items-center'>
              I am a software engineer focused on both front and back-end development with a splash of basic dev ops.
              As a self-taught developer, I have the drive and adaptability to take on any problem. I have worked with
              technologies such as Nginx, DigitalOcean, and Docker to streamline deployments of my sites and APIs. Nonetheless, I
              am always excited to learn new technologies when required.
            </div>
          </div>
          </div>
        </div>

        <div class='col-6'>
        <span id='python' class='anchor'/>
          <div class='sections outer'>
          <div ref={py} class='card innerR'>
            <div class='card-body d-flex align-items-center'>
               Python is my preferred server side language for fast development. Flask and FastApi are my go to libraries for testing and creating APIs for my sites,
               as well as PostgreSQL to reliably store and retrieve data of many forms. Additionally, I use SQLAlchemy for my ORM when necessary.
            </div>
          </div>
          </div>
        </div>
        <div class='col-6 text-center'>
          <img src={flask} alt="flask" />
          <img src={psql} alt="psql" />
        </div>

        <div class='col-6 text-center'>
          <img src={logo} alt="solid" />
          <img src={react_pic} alt="react" />
          <img src={bs} alt="bs" />
        </div>
        <div class='col-6'>
            <span id='js' class='anchor'/>
            <div class='sections justify-content-end outer'>
            <div ref={js} class='card innerL'>
              <div class='card-body d-flex align-items-center'>
                I am a big fan of typed languages, therefore Typescript was a no brainer, although Javascript is better
                for faster development. In terms of frameworks, I reliably use React and its built in context manager
                for the state. Additionally, Solid is my favorite alternative to React, which is much faster and gives less 
                headaches when rendering state, this site would be an example. Lastly, Bootstrap is utilized for some styled components and css. 
              </div>
            </div>
            </div>
        </div>


        <div class='col-6'>
        <span id='code' class='anchor'/>
        <div class='sections justify-content-end outer'>
            <div ref={code} class='card innerR'>
              <div class='card-body'>
                <Code/>
              </div>
            </div>
            </div>      
        </div>
        <div class='col-6 text-center'>
        <div style={{height: '30%'}}/>
            <img src={git} alt="github" />
            <div class='h2'>
              <a target="_blank" href="https://github.com/cnava9389">https://github.com/cnava9389</a>
            </div>
        </div>

  
        <div class='col-6 text-center'>
            <div class='h-100 d-flex justify-content-center align-items-center text-white h1'>
                Contact me: cnava9389@gmail.com
              </div>
        </div>
        <div class='col-6'>
            <span id='contact' class='anchor'/>
            <div class='sections outer'>
            <div ref={cnt} class='card innerL'>
              <div class='card-body'>
                <form class='text-center' onSubmit={onSubmit}>
                  <div class='row'>
                    <div class='col-6'>
                      <label>First name*:</label>
                      <input onChange={(e)=>setFname(e.target.value)} value={fname()} type="text" required />
                    </div>
                    <div class='col-6'>
                      <label>Last name:</label>
                      <input onChange={(e)=>setLname(e.target.value)} value={lname()} type="text" />
                    </div>
                    <div class='col-6'>
                      <label>Email*:</label>
                      <input onChange={(e)=>setEmail(e.target.value)} value={email()} type="email" required />
                    </div>
                    <div class='col-6'>
                      <label>Subject:</label>
                      <input onChange={(e)=>setSubject(e.target.value)} value={subject()} type="text" />
                    </div>
                  </div>  
                    <div class='d-flex justify-content-center align-items-center mt-5'>
                      <textarea onChange={(e)=>setMessage(e.target.value)} value={message()} cols="50" rows="5" required></textarea>
                    </div>
                  <div class='mt-4'>
                  <button type='submit' class='btn btn-dark'>Send me a message</button>
                  </div>
                </form>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
