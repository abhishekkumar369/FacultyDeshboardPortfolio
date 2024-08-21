import React, { useState, useEffect } from 'react'
import "./Home.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';
import AbtPic from './Images/SpalMamPic4.jpg'
import workpic1 from './Images/tactica.png'
import workpic2 from './Images/drontec.png'
import workpic3 from './Images/creotec.png'
import workpic4 from './Images/cfl.png'
import workpic5 from './Images/github-projects.png'
import workpic6 from './Images/andres-website-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPenRuler, faEnvelope, faScrewdriverWrench, faGraduationCap, faBriefcase, faUsers, faFileArrowDown, faLocationArrow, faLaptopCode, faDatabase, faMicrochip, faMemory, faSquareRootAlt, faBookOpen, faRobot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faGithub, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import { Helmet } from 'react-helmet';
import { ReactTyped } from 'react-typed';

function Home() {

  // browser tab title
  useEffect(() => {
    document.title = 'Spal-Portfolio';
  }, []);

  // About section functionality
  const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    const handleDownloadResume = async () => {
      try {
          // Fetch the resume file from the public folder
          const response = await fetch('/');
          const blob = await response.blob();

          // Create a URL for the blob object
          const url = window.URL.createObjectURL(new Blob([blob]));

          // Create an anchor element with the URL and trigger download
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', "resume 2024.pdf");
          document.body.appendChild(link);
          link.click();

          // Cleanup
          link.parentNode.removeChild(link);
          window.URL.revokeObjectURL(url);
      } catch (error) {
          console.error('Error downloading resume:', error);
          toast.error('Error downloading resume')
      }
  };

  // View more functionality
  const [showMore, setShowMore] = useState(false);

    const handleViewMore = () => {
        setShowMore(true);
    };

    const handleHide = () => {
        setShowMore(false);
    };

  // Contact form functionality
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyiMFJxNG-Oe1735pct_MGwOk1EhP7t5LKAu9u4KHLdk_NqJIPJiSrXQrbs6Lzco8j7/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Immediately show a loading message
    toast.info('Submitting your message...');

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            toast.success('Form submitted successfully!')
            e.target.reset();
        } else {
            toast.error('Form submission failed');
            throw new Error('Failed to submit message');
        }
    } catch (error) {
        console.error('Error!', error.message);
        toast.error('Error occurred while submitting the form.', error.message);
    }
};

  return (
    <div>

        <Helmet>
          <title>Spal-Portfolio</title>
          <meta name='description' content="Let's build solutions together." />

           {/* OG Tags */}
          <meta property="og:title" content="Spal-Portfolio's Website" />
          <meta property="og:description" content="Let's build solutions together." />
          <meta property="og:image" content="https://andreschoque.com/static/media/background-header.35708e91d89ba76f59f2.jpg" />
          <meta property="og:url" content="https://andreschoque.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Spal-Portfolio's Website" />
          <meta name="twitter:description" content="Let's build solutions together." />
          <meta name="twitter:image" content="https://andreschoque.com/static/media/background-header.35708e91d89ba76f59f2.jpg" />
          <meta name="twitter:url" content="https://andreschoque.com"/>
        </Helmet>


        <div className='header-section' id='header'>
          <div className='container'>
            <Navbar/>
            <div className='header-text'>
              <p>Dr. Shyamosree Pal CSE Dept.</p>
              <h1>Assistent Professor, NIT Silchar</h1>
              <h2>
                <ReactTyped
                  strings={[
                    "Researcher in Computer Science",
                    "Educator and Mentor",
                    "Let's build solutions together."
                  ]}
                  typeSpeed={60}
                  backSpeed={60}
                  loop
                />
              </h2>
              <a href="#contact" className="header-btn" aria-label='Get-started-button'>Get started</a> 
            </div>
          </div>
        </div>
        
        <div className='about-section' id='about'>
          <div className='container'>
            <h1 className="sub-header">About Me</h1>
            <hr />
            <div className='row'>
              <div className='abt-col-1'>
                <img src={AbtPic} alt="Andres-Choque-Professional" />
                <div className="resume">
                  <button onClick={handleDownloadResume} className="btn" aria-label='Download-resume-button'>Download Resume &nbsp; <FontAwesomeIcon icon={faFileArrowDown}/></button>
                </div>
              </div>
              <div className="abt-col-2">
              <p>Hi I'm Dr. Shyamosree Pal, an Assistant Professor at the Department of Computer Science and Engineering, National Institute of Technology Silchar. My research interests include Mathematical Imaging, Document Image Processing, Vectorization of Engineering Drawings, and Sensor Network Systems. I has a strong academic background, holding a Ph.D. from the Indian Institute of Technology Kharagpur. I am passionate about advancing the field of computer science and is committed to both research and teaching.</p>

                      <div className="tabs">
                        <p className={`tab-links ${activeTab === 'skills' ? 'act-link' : ''}`} onClick={() => openTab('skills')}><strong><FontAwesomeIcon className='tools' icon={faScrewdriverWrench}/> &nbsp; Skills</strong></p>
                        <p className={`tab-links ${activeTab === 'experience' ? 'act-link' : ''}`} onClick={() => openTab('experience')}><strong> <FontAwesomeIcon className='briefcs' icon={faBriefcase}/> &nbsp; Experience</strong></p>
                        <p className={`tab-links ${activeTab === 'education' ? 'act-link' : ''}`} onClick={() => openTab('education')}><strong><FontAwesomeIcon className='grad' icon={faGraduationCap}/> &nbsp; Education</strong></p>
                      </div>

                      <div className={`tab-conts ${activeTab === 'skills' ? 'act-tab' : ''}`} id="skills">
                          <ul>
                              <li><span>Languages</span><br/>English, Bengoli, Hindi etc.</li>
                              <li><span>Specializations</span><br/>Mathematical Imaging, Document Image Processing, Vectorization of Engineering Drawings, Graphic Recognition, Combinatorial Image Analysis, Sensor Network Systems</li>
                              <li><span>Tools</span><br/>Various image processing and recognition tools</li>
                          </ul>
                      </div>

                      <div className={`tab-conts ${activeTab === 'experience' ? 'act-tab' : ''}`} id="experience">
                          <ul>
                              <li><span>Aug. 2015 &nbsp;-&nbsp; Present</span><br/>Assistant Professor | Department of Computer Science and Engineering, National Institute of Technology Silchar</li>
                              <li><span>Aug. 2013 &nbsp;-&nbsp; Present</span><br/>Ad-hoc Faculty | Department of Computer Science and Engineering, National Institute of Technology Jamshedpur</li>
                              <li><span>Jan. 2012 &nbsp;-&nbsp; Mar. 2013</span><br/>Visiting Scientist | Advanced Computing and Microelectronics Unit, Indian Statistical Institute Kolkata</li>
                          </ul>
                      </div>

                      <div className={`tab-conts ${activeTab === 'education' ? 'act-tab' : ''}`} id="education">
                          <ul>
                              <li><span>Ph.D.</span><br/>Indian Institute of Technology Kharagpur, West Bengal, India</li>
                          </ul>
                      </div>
              </div>
            </div>
          </div>
        </div>

        <div className='line-div'>
          <hr className='vertical' />
        </div>

        <div className='services-section' id='services'>
            <div className='container'>
                <h1 className="sub-header">SUBJECTS TAUGHT</h1>
                <hr />
                <div className="services-list">
                    <div className='service-box'>
                        <div className='ser-icon'>
                            <FontAwesomeIcon icon={faLaptopCode}/>
                        </div>
                        <h2><strong>Operating Systems</strong></h2>
                        <p>Understanding the core concepts of operating systems, including process management, memory management, and file systems.</p>
                    </div>

                    <div className='service-box'>
                        <div className='ser-icon'>
                            <FontAwesomeIcon icon={faCode}/>
                        </div>
                        <h2><strong>C Programming</strong></h2>
                        <p>Fundamentals of C programming language, including syntax, control structures, and data handling.</p>
                    </div>

                    <div className='service-box'>
                        <div className='ser-icon'>
                            <FontAwesomeIcon icon={faDatabase}/>
                        </div>
                        <h2><strong>Data Structures</strong></h2>
                        <p>In-depth coverage of data structures such as arrays, linked lists, stacks, queues, trees, and graphs.</p>
                    </div>

                    <div className='service-box'>
                        <div className='ser-icon'>
                            <FontAwesomeIcon icon={faMicrochip}/>
                        </div>
                        <h2><strong>Micro Processors</strong></h2>
                        <p>Study of microprocessor architecture, instruction sets, and interfacing techniques.</p>
                    </div>

                    <div className='service-box'>
                        <div className='ser-icon'>
                            <FontAwesomeIcon icon={faMemory}/>
                        </div>
                        <h2><strong>Advanced Computer Architecture</strong></h2>
                        <p>Exploration of advanced topics in computer architecture, including parallel processing and performance optimization.</p>
                    </div>

                    <div className='service-box'>
                        <div className='ser-icon'>
                            <FontAwesomeIcon icon={faSquareRootAlt}/>
                        </div>
                        <h2><strong>Graph Theory</strong></h2>
                        <p>Study of graph theory concepts, including graph traversal, shortest paths, and network flows.</p>
                    </div>

                    <div className='service-box'>
                        <div className='ser-icon'>
                            <FontAwesomeIcon icon={faBookOpen}/>
                        </div>
                        <h2><strong>Principles of Programming Languages</strong></h2>
                        <p>Overview of programming language concepts, including syntax, semantics, and language design principles.</p>
                    </div>

                    <div className='service-box'>
                        <div className='ser-icon'>
                            <FontAwesomeIcon icon={faRobot}/>
                        </div>
                        <h2><strong>Artificial Intelligence</strong></h2>
                        <p>Introduction to AI concepts, including machine learning, neural networks, and problem-solving techniques.</p>
                    </div>
                </div>
            </div>
        </div>


        <div className='line-div'>
          <hr className='vertical' />
        </div>

        <div className='portfolio-section' id='portfolio'>
          <div className='container'>
            <h1 className='sub-header'>Reasearch Work</h1>
            <h4><em>INTERNATIONAL JOURNAL</em></h4>
            <hr />
            <div className='work-list'>
                <div className="work">
                    <img src={workpic1} alt='Tactica-ministries' />
                    <div className="layer">
                       <h3><strong>JOURNAL 1</strong></h3>
                       <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Tactica-ministries-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a>
                    </div>
                </div>

                <div className="work">
                    <img src={workpic2} alt='Drontec' />
                    <div className="layer">
                       <h3><strong>JOURNAL 2</strong></h3>    
                       <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Drontec-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                    </div>
                </div>

                <div className="work">
                    <img src={workpic3} alt='Creotec' />
                    <div className="layer">
                        <h3><strong>JOURNAL 3</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Creotec-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>
            </div>

            <div className='work-list'>
                <div className="work">
                    <img src={workpic1} alt='Tactica-ministries' />
                    <div className="layer">
                       <h3><strong>JOURNAL 4</strong></h3>
                       <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Tactica-ministries-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a>
                    </div>
                </div>

                <div className="work">
                    <img src={workpic2} alt='Drontec' />
                    <div className="layer">
                       <h3><strong>JOURNAL 5</strong></h3>    
                       <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Drontec-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                    </div>
                </div>

                <div className="work">
                    <img src={workpic3} alt='Creotec' />
                    <div className="layer">
                        <h3><strong>JOURNAL 6</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Creotec-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>
            </div>

            <div className='work-list'>
                <div className="work">
                    <img src={workpic1} alt='Tactica-ministries' />
                    <div className="layer">
                       <h3><strong>JOURNAL 7</strong></h3>
                       <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Tactica-ministries-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a>
                    </div>
                </div>

                <div className="work">
                    <img src={workpic2} alt='Drontec' />
                    <div className="layer">
                       <h3><strong>JOURNAL 8</strong></h3>    
                       <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Drontec-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                    </div>
                </div>

                <div className="work">
                    <img src={workpic3} alt='Creotec' />
                    <div className="layer">
                        <h3><strong>JOURNAL 9</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Creotec-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>
            </div>

            <div className='work-list'>
                <div className="work">
                    <img src={workpic1} alt='Tactica-ministries' />
                    <div className="layer">
                       <h3><strong>JOURNAL 10</strong></h3>
                       <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Tactica-ministries-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a>
                    </div>
                </div>

                <div className="work">
                    <img src={workpic2} alt='Drontec' />
                    <div className="layer">
                       <h3><strong>JOURNAL 11</strong></h3>    
                       <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Drontec-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                    </div>
                </div>

                <div className="work">
                    <img src={workpic3} alt='Creotec' />
                    <div className="layer">
                        <h3><strong>JOURNAL 12</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Creotec-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>
            </div>

            <br /><br /><br />
            <h4><em>INTERNATIONAL CONFERENCES</em></h4>
            <hr />

            {showMore && (
            <div className="work-list">          
                <div className="work">
                    <img src={workpic4} alt='Center-for-financial-literacy' />
                    <div className="layer">
                        <h3><strong>CONFERENCES 1</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Center-for-financial-literacy-linkedin-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic5} alt='Andres-Choque-Github' />
                    <div className="layer">
                        <h3><strong>CONFERENCES 2</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-github-webpage'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic6} alt='Andres-Choque-website' />
                    <div className="layer">
                        <h3><strong>CONFERENCES 3</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>
            </div>
            )}

           {showMore && (
            <div className="work-list">          
                <div className="work">
                    <img src={workpic4} alt='Center-for-financial-literacy' />
                    <div className="layer">
                        <h3><strong>CONFERENCES 4</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Center-for-financial-literacy-linkedin-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic5} alt='Andres-Choque-Github' />
                    <div className="layer">
                        <h3><strong>CONFERENCES 5</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-github-webpage'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic6} alt='Andres-Choque-website' />
                    <div className="layer">
                        <h3><strong>CONFERENCES 6</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>
            </div>
            )}

            {showMore && (
            <div className="work-list">          
                <div className="work">
                    <img src={workpic4} alt='Center-for-financial-literacy' />
                    <div className="layer">
                        <h3><strong>CONFERENCES 7</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Center-for-financial-literacy-linkedin-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic5} alt='Andres-Choque-Github' />
                    <div className="layer">
                        <h3><strong>CONFERENCES 8</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-github-webpage'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>

                <div className="work">
                    <img src={workpic6} alt='Andres-Choque-website' />
                    <div className="layer">
                        <h3><strong>CONFERENCES 9</strong></h3>
                        <a href="/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                     </div>
                </div>
            </div>
            )}

            <div className="button-container">
              {!showMore && <button className="btn" id="view-more" aria-label='View-more-button' onClick={handleViewMore}>View more</button>}
              {showMore && <button className="btn" id="hide" aria-label='Hide-button' onClick={handleHide}>Hide</button>}
            </div>

          </div>
        </div>

        <div className='contact-section' id='contact'>
          <div className='container'>
            <div className='row'>
                <div className="contact-l">
                    <h1 className="contact-header">Let's Connect</h1>
                    <hr />
                    <p><FontAwesomeIcon icon={faEnvelope}/>spal@cse.nits.ac.in</p>
                    <div className="social">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-instagram-account'><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener' aria-label='Andres-choque-twitter-account'><FontAwesomeIcon icon={faXTwitter}/></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-linkedin-account'><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="https://github.com/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-github-account'><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>

                <div className="contact-r">
                    <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                        <input type="text" name="Name" placeholder="Name" required/>
                        <input type="email" name="Email" placeholder="Email" required/>
                        <textarea name="Message" id=""  rows="6" placeholder="Message" className='no-resize'></textarea>
                        <button type="submit" className="btn btncv">Submit</button>
                    </form>
                </div>
            </div>
          </div>
        </div>

        <Footer/>

    </div>
  )
}

export default Home