import "./App.css";
function App() {
    return(
       <div> <header>
    <h2>Prerna Raut</h2>

    <nav>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>
</header>



<section id="home" className="photo">

    <div className="intro">
        <h1>Web Developer <br /> & Programmer</h1>

        <p>
            Building digital experiences that combine creativity
            with technology.
        </p>

        <p>
            Interested in modern web development and programming.
        </p>

        <a href="#contact" className="btn">Let's Connect</a>
    </div>

    <div className="profile">
        <img src="/portfolio .jpeg" alt="Profile Photo" />
    </div>

</section>



<section id="skills">

    <h2 className="title">Technical Expertise</h2>

    <div className="cards">

        <div className="card">
        
            <h4>Frontend Development</h4>
            <p>HTML, CSS, JavaScript</p>
        </div>

        <div className="card">
            <h4>Programming</h4>
            <p>Python, Java, Basic Excel, SQL </p>
        </div>

    </div>

</section>



<section id="projects">

    <h2 className="title">My Projects</h2>

    <div className="cards">

        <div className="card">
            <h3>01</h3>
            <h4>Personal Portfolio</h4>
            <p>Responsive portfolio website using HTML and CSS.</p>
        </div>

        <div className="card">
            <h3>02</h3>
            <h4>Student Project</h4>
            <p>A simple project I am developing as part of my BCA course.</p>
        </div>

        <div className="card">
            <h3>03</h3>
            <h4>Web Project</h4>
            <p> Worked as a team to design a responsive website as a part of our learning process .</p>
        </div>

    </div>

</section>



<section id="contact" className="contact">

    <h2 className="title">Contact Me</h2>

    <p>
        I am a fifth-semester BCA student with a strong interest
        in web development and programming.
    </p>

    <p>Email: rautprerna144@email.com</p>
    <p> <a href="https://www.linkedin.com/in/prerna-raut-27b514376?utm_source=share_via&utm_content=profile&utm_medium=member_android" class="linkedin">LinkedIn</a></p>

</section>


<footer>
    <p>© 2026</p>
</footer></div>
    );
}
export default App;