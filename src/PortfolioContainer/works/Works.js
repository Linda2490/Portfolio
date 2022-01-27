import React from 'react'
import './Works.css'
import Worktemplate from './worktemplate.js'
import AllWorks from '../../AllWorks.js'
import { Link } from 'react-router-dom'

export default function Works() {
 
  return (

    <section className='works-container'>

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


<div className='works-button-section'>
<a href='#allworks' className='works-button'>
   <Link to="allworks"> More projects</Link>
    
    </a>
    </div>

    </section>
    
  )
}
