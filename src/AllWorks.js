import React from 'react';
import Worktemplate from './PortfolioContainer/works/worktemplate'
import './PortfolioContainer/works/Works.css'
import { Link } from 'react-router-dom'
import './PortfolioContainer/Home/Home.css'
export default function AllWorks() {
  return (

      <section className='works-container' style={{marginTop:'5px'}}>
 <Link to="/" className='button-CTA'>Return</Link>
<Worktemplate 
      client="showtag.tv" 
      text="We develop web applications from landing pages to <br>fully E-commerce
      websites We develop web applications from landing pages <br> to fully
      E-commerce websitesWe develop web applications from <br>landing pages
      to fully E-commerce websitesWe develop web <br>applications from
      landing pages to fully <br>E-commerce websites"
      link="https://showtag.tv/solutions/commercial/"
      pic="./images/websites/Image 1.png"

      />
      

      <Worktemplate 
      client="showtag.tv" 
      text="We develop web applications from landing pages to <br>fully E-commerce
      websites We develop web applications from landing pages <br> to fully
      E-commerce websitesWe develop web applications from <br>landing pages
      to fully E-commerce websitesWe develop web <br>applications from
      landing pages to fully <br>E-commerce websites"
      link="https://showtag.tv/solutions/commercial/"
      pic="./images/websites/Image 2.png"

      />


<Worktemplate 
      client="showtag.tv" 
      text="We develop web applications from landing pages to <br>fully E-commerce
      websites We develop web applications from landing pages <br> to fully
      E-commerce websitesWe develop web applications from <br>landing pages
      to fully E-commerce websitesWe develop web <br>applications from
      landing pages to fully <br>E-commerce websites"
      link="https://showtag.tv/solutions/commercial/"
      pic="./images/websites/Image 3.png"

      />




    </section>
    
  );
}
