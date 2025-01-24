import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div  className='about'>
      <div className="article">
      <h1 className='abouttitle'>About the Titanic</h1>
      <h3>The RMS Titanic was a British luxury steamship that sank in the North Atlantic Ocean on April 15, 1912. The ship struck an iceberg on its maiden voyage from Southampton, England to New York City. </h3>
      <h2>What happened? </h2>
    <li>The Titanic was launched on May 31, 1911.</li>
    <li>On April 14, 1912, the Titanic struck an iceberg at 23:40 ship's time.</li>
    <li>The ship sank two hours and forty minutes later at 02:20 ship's time.</li>
    <li>More than 1,500 passengers and crew died.</li>
    <li>Only 705 people survived.</li>
    <h2>Why was it famous?</h2>
    <li>The Titanic was the largest ocean liner in service at the time. <br />
It was considered unsinkable because of its compartment doors. <br />
It was one of the deadliest peacetime maritime disasters in history. 
</li>
<h2>What happened to the wreck? </h2>
<li>The wreck was discovered in 1985 by a joint mission between the Woods Hole Oceanographic Institution (WHOI) and the French National Institute for Ocean Science (IFREMER). <br />
The wreck is located in the middle of the Atlantic Ocean. <br />
In May 2023, scientists completed a full-scale digital scan of the wreck.</li>
</div>
      <div className="images">
        <img src="/titeniconweater.avif" />
        <img src="/sunlighttitenic.jpg" />
        <img src="/cooltitenic.avif" />
        <img src="/titeniccrash.webp" />
      </div>
    </div>
  )
}

export default About