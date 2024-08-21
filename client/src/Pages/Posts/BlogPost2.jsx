import React, { useEffect } from 'react';
import '../../Components/Navbar/Navbar.css'
import '../Blog/Blog.css'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faXTwitter, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from 'react-share';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';


function BlogPost2() {

  // browser tab title
  useEffect(() => {
    document.title = 'The Value of Travel and Where You Should Consider Going';
  }, []);

  // Add the icons
  library.add(faLinkedin, faXTwitter, faFacebookSquare, faShareNodes)

  //copy link to clipboard
  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success('Link copied to clipboard')
  };

  // Email functionality
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "efae9b3c-bf15-4bd7-91ed-ff9435feb4d9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Email successfully sent.")
      event.target.reset();
    }
    else {
      console.log("Error", res)
      toast.error("Error while sending email.")
    }
  };


  return (
    <div>

      <Helmet>
        <title>The Value of Travel and Where You Should Consider Going - Spal</title>
        <meta name="description" content="The Value of Travel" />
        
        {/* OG Tags */}
        <meta property="og:title" content="The Value of Travel and Where You Should Consider Going - Andres Choque" />
        <meta property="og:description" content="The Value of Travel" />
        <meta property="og:image" content="	https://andreschoque.com/static/media/blog2.49fe8ff86e3aad5f22d5.jpg" />
        <meta property="og:url" content="https://andreschoque.com/blog/the-value-of-travel" />
        
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to be Intentional After School (with 3 effective steps) - Andres Choque" />
        <meta name="twitter:description" content="Ways to be Intentional After School" />
        <meta name="twitter:image" content="	https://andreschoque.com/static/media/blog2.49fe8ff86e3aad5f22d5.jpg" />
        <meta name="twitter:url" content="https://andreschoque.com/blog/the-value-of-travel"/>
      </Helmet>

      
      <div className='blog-post-header'>
        <div className='container'>
          <Navbar/>
        </div>
      </div>

      <div className='blog-post-content'>
        <div className='subscriber-container'>
          <h1>Haven't subscribed yet?</h1>
          <p>Join to get a dose of inspiration, insights, and a fresh perspective on life and business.</p>
          <form onSubmit={onSubmit}>
            <input type="email" name="Blog-Subcriber-Email" id="" placeholder='Your Email' required />
            <button type='submit'>Join</button>
          </form>
        </div>

        <div className='blog-content-container'>
          <h1><strong>The Value of Travel and Where You Should Consider Going</strong></h1>
          <h2>July 14, 2024 | Spal</h2> 

          <div className='socials'>
          <LinkedinShareButton url={currentUrl}>
            <a href="#linkedin-share"><FontAwesomeIcon icon={faLinkedin} /></a>
          </LinkedinShareButton>
          <TwitterShareButton url={currentUrl}>
            <a href='#twitter-share'><FontAwesomeIcon icon={faXTwitter}/></a>
          </TwitterShareButton>
          <FacebookShareButton url={currentUrl}>
            <a href="#facebook-share"><FontAwesomeIcon icon={faFacebookSquare}/></a>
          </FacebookShareButton>
            <a href="#copy-link"><FontAwesomeIcon icon={faShareNodes} onClick={copyToClipboard}/></a>
          </div>
          <hr />

          <div className='blog-body'>
            <div className='container-blog'>
            <p>The other day, I was talking to one of my international friends and we had a great conversation on the topic of traveling. He mentioned lately on his Instagram feed 
              is his friends are traveling to exotic places in Europe. As we shared a laugh together, I also noticed it, he is not the only one seeing that content as I also see 
              people on my social media posting their recaps of their international trips.</p>
            
            <br />

            <p>And that got me thinking, why is there a surge of this type of content? Is it because it’s summer over here in the US? What else is it?</p>

            <br />

            <p>Then it got me thinking even further as to the importance of traveling.</p>

            <br />

            <p>If you know me, I love everything that encompasses traveling. I enjoy the opportunity to learn new cultures, learn the history, and make international friendships.
              Traveling is an investment that pays off. One of the best things to do (especially as a young adult) is to invest in traveling.</p>

            <br />

            <p>I understand that traveling is a privilege and not many people have access to it. That’s why my focus will be on the act of going somewhere else that is new. – whether 
              it is a new town, a city close by or a small road trip. Travel, even in its smallest form, is something that everyone should invest in.</p>

            <br />

            <p>But why traveling? What is so special about traveling?</p>

            <br />

            <p>Allow me to illustrate this picture:</p>

            <p>Imagine yourself you had the opportunity to go somewhere but instead you chose to stay at the same place you started. 10 years later. You regret your decision. You keep 
              thinking to yourself about all of the chances you had to explore, open your mind, and get out of your comfort zone. If only you took that chance to travel you would’ve 
              learned so much about other cultures and even meet the love of your life. But at the end of the day, you decided not to. And now you face a different reality.</p>

            <br />

            <p>This reflects the lives of many adults. </p>

            <br />

            <p>After speaking and listening to their stories about their youth I soon realized that there is much value to traveling. This sentiment of not being able to take advantage 
              of their opportunity to travel hindered their careers, business opportunities, networking opportunities, and friendships. Another observation that I have made is that people 
              are not familiar with certain countries and cultures. – I see this prevalent in the US.</p>

            <br />

            <p>I get questions like:</p>

            <p>“Where is Bolivia…is that in Africa?” “Do you speak ‘Bolivian’?” “What’s Bolivia?”</p>

            <br />

            <p>While questions like these give me a chuckle, they also show me that they do not have much international exposure. I also understand that the USA has the luxury of being a 
              large country, where many times it takes 4 hours or more hours driving state to state. However, having the open-mindedness to learn and explore cultures would allow for 
              understanding other people and their background. This is not unique to the USA but in my home country of Bolivia, many people I have talked to have an animosity towards 
              people of international backgrounds. Understanding the situation further, traveling would allow these groups of people to open their minds to different cultures, values, 
              and traditions.</p>

            <br />

            <p><strong className='newton'>This very reason is why traveling is important. This is what happens:</strong></p>

            <br />

            <h3><strong>1) Cultural Exposure & Comprehension</strong></h3>

            <br />

            <p>Traveling exposes you to different cultures, traditions, and ways of life. This cultural immersion fosters a deeper understanding and appreciation of diversity.
              Learning from cultural exposure allows you to truly understand the people you are talking to. Observing how people in other cultures approach daily life can offer 
              fresh perspectives and alternative ways of thinking. For example, you might learn new approaches to problem-solving, community building, or even simple daily 
              routines that can improve your own life. This learning can be practical, such as new cooking techniques, or philosophical, such as different approaches to time 
              management and work-life balance.</p>

            <br />
            
            <h3><strong>2) Personal Growth & Development</strong></h3>

            <br />

            <p>Stepping out of your comfort zone and experiencing new environments challenges you in ways that promote personal growth. Travel often requires you to navigate 
              unfamiliar environments, languages, and customs, pushing you out of your comfort zone. This can be initially challenging but ultimately rewarding as it builds 
              confidence and self-reliance. You learn to adapt to new situations, think on your feet, and handle unexpected challenges, which are valuable skills in all areas 
              of life. Whether traveling alone or in a group, you often need to make decisions independently and take responsibility for your own well-being. This fosters a 
              sense of independence and self-sufficiency.</p>

            <br />
            
            <h3><strong>3) Education Beyond the Classroom</strong></h3>

            <br />

            <p>Travel provides hands-on learning experiences that are far more impactful than reading about a place in a book or watching a documentary. Being in a country 
              where a different language is spoken provides an immersive environment for language learning. You can practice speaking with native speakers, understand local 
              accents and dialects, and pick up colloquialisms and phrases that you wouldn't encounter in a traditional classroom setting. Travel exposes you to different 
              political and economic systems. Observing how other countries govern, their public policies, healthcare systems, and economic practices broadens your 
              understanding of the variety of ways societies can be structured and managed.</p>

            <br />

            <h3><strong>4) Enhanced Communication Skills</strong></h3>

            <br />

            <p>Immersion in a foreign-language environment offers the best practice for language learning. You get to apply language skills in real-life situations, improving
               your proficiency through daily interactions with native speakers. Travel often involves meeting new people and forming connections. Whether you are traveling 
               with friends, family, or meeting new acquaintances, these interactions help strengthen your interpersonal skills. You learn to build rapport quickly, maintain 
               relationships, and handle conflicts constructively. Successfully navigating communication challenges in unfamiliar situations boosts your overall confidence.
               This confidence carries over into other areas of your life, making you more assertive and effective in your communication.</p>

            <br />

            <h3><strong>5) Mental and Emotional Well-being</strong></h3>

            <br />

            <p>Travel provides a break from the daily grind and routine, offering an escape from work, responsibilities, and stressors. This change of environment and pace 
              can significantly reduce stress levels, allowing you to relax and rejuvenate. The anticipation and excitement of exploring new places also contribute to a 
              positive mental state. The excitement and joy of discovering new places and experiences can boost your mood and overall happiness. Positive experiences, such 
              as enjoying a beautiful sunset, exploring a vibrant city, or trying delicious local cuisine, release endorphins and dopamine, the body's feel-good chemicals.</p>

            <br />

            <h3><strong>6) Broadened Perspectives</strong></h3>

            <br />

            <p>Seeing how other people live and the challenges they face can provide new perspectives on your own life. Travel exposes you to various ways of living. You 
              observe how people in different cultures approach daily activities such as eating, working, and socializing. This exposure helps you realize that there is 
              no single "right" way to live, broadening your understanding and acceptance of diverse lifestyles. Encountering different cultures and viewpoints challenges 
              your assumptions and beliefs. You might find that certain ideas you held to be universal are culturally specific. This realization can lead to a more flexible
              and open-minded worldview. Experiencing and understanding different cultures promotes tolerance and respect for others.</p>

            <br />

            <h3><strong>7) Building Relationships and Networks</strong></h3>

            <br />

            <p>Travel provides countless opportunities to meet new people. Whether you’re staying in hostels, joining tours, or participating in local events, you can form friendships 
              with fellow travelers and locals alike. These new connections often lead to lasting relationships and can enrich your social life. Traveling for work or attending 
              international conferences and events allows you to meet professionals from various fields. These interactions can lead to valuable professional relationships, 
              collaborations, and opportunities. Networking globally can open doors to new career prospects and business ventures. Establishing connections while traveling can create 
              support systems that are valuable in times of need. Whether you need advice, assistance, or simply someone to talk to, having a network of friends and acquaintances 
              around the world can provide a sense of security and belonging.</p>

            <br />

            <h3><strong>8) Breaking Routine and Building Memories</strong></h3>

            <br />

            <p>Breaking away from your daily routine allows your mind and body to rest and rejuvenate. The change in scenery and activities can reduce stress and prevent burnout, contributing 
              to overall well-being and increased productivity when you return to your routine. New experiences and environments stimulate your creativity. Exploring different cultures, 
              landscapes, and activities can inspire fresh ideas and innovative thinking. This creative boost can be beneficial in both personal and professional endeavors. Travel experiences 
              often result in lasting memories that you can cherish for a lifetime. Whether it’s a breathtaking view, an exciting adventure, or a meaningful conversation, these memories enrich 
              your life and provide a source of joy and nostalgia. Successfully navigating new environments and overcoming travel-related challenges builds confidence.</p>

            <br />

            <p><strong className='newton'>Now, where should you consider going?</strong></p>

            <br />

            <p>Great question, the correct answer is wherever you are going to be pushed from your comfort zone. Whether that’s an international trip or a road trip to a different city.</p>

            <p>The best course of action - is to take action. Now go book your next trip.</p>

            <p>You will evolve as a human.</p>

            <p>I hope this helps you plan your next adventure.</p>

            <p>Blessings,</p>

            <p>- <em>Spal</em></p>

            <hr />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Link to={'/blog'} className='btn'>Back</Link>
      </div>

      <Footer/>

    </div>
  )
}

export default BlogPost2