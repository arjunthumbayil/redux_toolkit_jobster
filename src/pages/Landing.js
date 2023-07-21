import main from '../assets/images/main.svg'
import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Salvia pug venmo DIY cronut knausgaard selfies. Kombucha coloring
              book chicharrones, meggings hammock swag forage echo park
              messenger bag artisan woke raw denim umami. Umami listicle vinyl
              authentic selvage freegan same.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  )
}

export default Landing
