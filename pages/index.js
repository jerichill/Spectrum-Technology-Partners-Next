import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Legal from '../components/legal'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>
            Spectrum Partners | Denver Cybersecurity, IT, VoIP, and Cloud
            Services
          </title>
          <meta
            name="description"
            content="Spectrum Partners was formed to solve the problem of poor IT project management. We pride ourselves on our commitment to delivering secure technology solutions."
          />
          <meta
            property="og:title"
            content="Spectrum Partners | Denver Cybersecurity, IT, VoIP, and Cloud Services"
          />
          <meta
            property="og:description"
            content="Spectrum Partners was formed to solve the problem of poor IT project management. We pride ourselves on our commitment to delivering secure technology solutions."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9e9954a7-0d30-4d4c-a1e4-8b498f533cd9/2da503d5-33df-4454-8d1f-8e7d7a57d624?org_if_sml=1"
          />
        </Head>
        <div data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <Link href="/">
              <a className="home-link">
                <div className="home-logo">
                  <img
                    alt="image"
                    src="/playground_assets/spectrum%20logo-200h.png"
                    className="home-image"
                  />
                </div>
              </a>
            </Link>
            <div className="home-links-container">
              <Link href="/solutions">
                <a className="home-link02 Anchor"> Solutions</a>
              </Link>
              <Link href="/why">
                <a className="home-link04 Anchor">Why Spectrum?</a>
              </Link>
              <Link href="/team">
                <a className="home-link06">
                  <span className="Anchor home-text">team</span>
                  <br></br>
                </a>
              </Link>
              <a href="#contact" className="home-link07 Anchor">
                contact
              </a>
            </div>
            <div className="home-cta-container">
              <Link href="/support">
                <a className="home-link08 button Anchor">Customer Support</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-hero">
          <div className="home-container1">
            <div className="home-hero-text-container">
              <h1 className="home-heading">
                <span>Spectrum Technology Partners</span>
                <br></br>
              </h1>
              <span className="home-text04">
                Spectrum Partners was formed to solve the problem of poor IT
                project management. We pride ourselves on our commitment to our
                clients, our expertise, and our tightly integrated team approach
                to our projects.
              </span>
              <a
                href="https://zfrmz.com/PW4MJU6QtrNdjnhepCJu"
                target="_blank"
                rel="noreferrer noopener"
                className="home-cta-btn1 Anchor button"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
        <div className="home-section-separator"></div>
        <div id="solutions" className="home-features">
          <div className="home-heading-container">
            <h2 className="home-text05 Section-Heading">Our Solutions</h2>
            <h3 className="home-text06">
              Spectrum Technology Partners offers a single point of management
              for IT projects that demand expertise and accountability.
            </h3>
          </div>
          <div className="home-cards-container">
            <div className="home-feature-card">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1619548683455-23b17c3ddc30?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                className="home-image1"
              />
              <span className="home-heading1 Card-Heading">Why</span>
              <span className="home-text07 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
            <div className="home-feature-card1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1619547871672-b6562e042c1e?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                className="home-image2"
              />
              <span className="home-heading2 Card-Heading">What</span>
              <span className="home-text08 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
            <div className="home-feature-card2">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1619555241737-9c364cf1fbce?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                className="home-image3"
              />
              <span className="home-heading3 Card-Heading">How</span>
              <span className="home-text09 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
        <div id="services" className="home-services">
          <Link href="/solutions">
            <a className="home-link09">
              <div className="home-service-card">
                <div className="home-card-content">
                  <h3 className="home-text10 BigCard-Heading">
                    IT &amp; Network Infrastructure
                  </h3>
                  <span className="home-text11 Card-Text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <button className="home-button button Anchor">
                    READ MORE
                  </button>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/solutions">
            <a className="home-link10">
              <div className="home-service-card1">
                <div className="home-card-content1">
                  <h3 className="home-text12 BigCard-Heading">
                    Cybersecurity &amp; Compliance
                  </h3>
                  <span className="home-text13 Card-Text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <button className="home-button1 button Anchor">
                    READ MORE
                  </button>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/solutions">
            <a className="home-link11">
              <div className="home-service-card2">
                <div className="home-card-content2">
                  <h3 className="home-text14 BigCard-Heading">
                    VoIP &amp; Video Communications
                  </h3>
                  <span className="home-text15 Card-Text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <button className="home-button2 Anchor button">
                    READ MORE
                  </button>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/solutions">
            <a className="home-link12">
              <div className="home-service-card3">
                <div className="home-card-content3">
                  <h3 className="home-text16 BigCard-Heading">
                    Managed Cloud &amp; WebOps
                  </h3>
                  <span className="home-text17 Card-Text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <button className="home-button3 button Anchor">
                    READ MORE
                  </button>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div id="about" className="home-about-us">
          <div className="home-heading-container1">
            <h2 className="home-text18 Section-Heading">About Spectrum</h2>
            <span className="home-secondary-text">
              {' '}
              A single point of truth for your business systems and technology
              stack.
            </span>
            <Link href="/team">
              <a className="home-link13 button Anchor">Meet Our Team</a>
            </Link>
          </div>
          <div className="home-text-container">
            <span className="home-text19">
              <span>
                Success in IT project management depends on how well vendors and
                service providers work together.  Understanding project goals,
                who’s responsible for which part of a project, performance
                accountability  across all parties is critical. Sadly, this kind
                of integration doesn’t come together often resulting 
                frustration and missed goals.
              </span>
              <br></br>
              <br></br>
              <span>
                Spectrum Partners was formed to solve the problem of poor IT
                project management. We pride ourselves  on our commitment to our
                clients, our expertise, and our tightly integrated team approach
                to our  projects. And we communicate with a vengeance.
              </span>
            </span>
          </div>
          <Link href="/team">
            <a className="home-link14 button Anchor">Meet Our Team</a>
          </Link>
        </div>
        <div className="home-section-separator1"></div>
        <div className="home-testimonials">
          <h2 className="home-text24 Section-Heading">Our Happy Customers</h2>
          <div className="home-cards-container1">
            <div className="home-testimonial-card">
              <div className="home-card-heading">
                <div className="home-name-and-position">
                  <span className="Card-Heading">Mark H.</span>
                </div>
                <div className="home-stars-container">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon02"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon04"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon06"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon08"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-text25">
                They were able to initiate and complete our project with minimum
                turnaround time. Our project manager saw the process through
                from start to finish and helped keep us informed with bi-weekly
                updates.
              </span>
            </div>
            <div className="home-testimonial-card1">
              <div className="home-card-heading1">
                <div className="home-name-and-position1">
                  <span className="Card-Heading">James M.</span>
                </div>
                <div className="home-stars-container1">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon10"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon12"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon14"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon16"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon18"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-text26">
                I am always super impressed with their ability to think outside
                the box, build a solid strategy, and execute. We most certainly
                would not be where we are today if it were not for their hard
                work.
              </span>
            </div>
            <div className="home-testimonial-card2">
              <div className="home-card-heading2">
                <div className="home-name-and-position2">
                  <span className="Card-Heading">Kandy K.</span>
                </div>
                <div className="home-stars-container2">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon20"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon22"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon24"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon26"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon28"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-text27">
                We brainstormed some ideas together and was able to agree with
                contract terms and pricing fairly quickly and the execution
                happened shortly after.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div id="contact" className="home-contact">
          <div className="home-content-container">
            <h2 className="home-text28 Section-Heading">Contact Us</h2>
            <div className="home-locations-container">
              <div className="home-location-1">
                <span className="home-heading4">
                  We are located in beautiful Denver, CO.
                </span>
                <div className="home-adress">
                  <svg viewBox="0 0 1024 1024" className="home-icon30">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="Section-Text">
                    https://www.werespectrum.com
                  </span>
                </div>
                <div className="home-email">
                  <svg viewBox="0 0 1024 1024" className="home-icon32">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="https://zfrmz.com/PW4MJU6QtrNdjnhepCJu"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link15 Section-Text"
                  >
                    Request a Quote
                  </a>
                </div>
                <div className="home-phone">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon34"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <span>(720) 896-2800</span>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1602800458591-eddda28a498b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGRlbnZlcnxlbnwwfHx8fDE2NjU1Mjc1OTQ&amp;ixlib=rb-1.2.1&amp;w=1500"
            className="home-image4"
          />
        </div>
        <Legal></Legal>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-logo {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .home-image {
            width: 80px;
            height: auto;
            object-fit: cover;
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link02 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link04 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link06 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link07 {
            text-decoration: none;
          }
          .home-cta-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link08 {
            color: var(--dl-color-gray-white);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: 34px;
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-hero {
            width: 100%;
            height: 70vh;
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 3%,
                rgba(0, 0, 0, 0.5) 99%
              ),
              url('https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGN5YmVyfGVufDB8fHx8MTY2NTUyNjM1OA&ixlib=rb-1.2.1&w=1500');
            background-position: top left, center;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-self: flex-start;
            margin-top: var(--dl-space-space-tenunits);
            align-items: center;
            margin-left: 260px;
            margin-bottom: var(--dl-space-space-tenunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-hero-text-container {
            display: flex;
            flex-direction: column;
          }
          .home-heading {
            color: var(--dl-color-gray-white);
            font-size: 2.75em;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text04 {
            color: var(--dl-color-gray-white);
            font-size: 1.5em;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-cta-btn1 {
            color: var(--dl-color-gray-white);
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
          }
          .home-heading-container {
            width: 75%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text05 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text06 {
            color: var(--dl-color-gray-black);
            font-size: 20px;
            text-align: center;
          }
          .home-cards-container {
            width: 100%;
            display: none;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-feature-card {
            width: 30%;
            display: flex;
            position: relative;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-image1 {
            width: 100px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .home-heading1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text07 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .home-feature-card1 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-image2 {
            width: 100px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .home-heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text08 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .home-feature-card2 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-image3 {
            width: 100px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .home-heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text09 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .home-services {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link09 {
            display: contents;
          }
          .home-service-card {
            width: 49%;
            display: flex;
            min-height: 500px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            text-decoration: none;
            background-image: radial-gradient(
                circle at center,
                rgb(0, 0, 0) 0%,
                rgba(0, 0, 0, 0.56) 100%
              ),
              url('https://images.unsplash.com/photo-1597733336794-12d05021d510?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG5ldHdvcmt8ZW58MHx8fHwxNjY1NTI2MzMx&ixlib=rb-1.2.1&w=1500');
          }
          .home-card-content {
            margin: var(--dl-space-space-fiveunits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text10 {
            color: var(--dl-color-gray-white);
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text11 {
            color: var(--dl-color-primary-700);
            display: none;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-button {
            color: var(--dl-color-gray-white);
            width: 80%;
            display: none;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-link10 {
            display: contents;
          }
          .home-service-card1 {
            width: 49%;
            display: flex;
            min-height: 500px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            text-decoration: none;
            background-image: radial-gradient(
                circle at center,
                rgb(0, 0, 0) 0%,
                rgba(0, 0, 0, 0.53) 100%
              ),
              url('https://images.unsplash.com/photo-1598520106798-b5dfe0af5026?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQxfHxjeWJlcnxlbnwwfHx8fDE2NjU1MjYzNzE&ixlib=rb-1.2.1&w=1500');
          }
          .home-card-content1 {
            margin: var(--dl-space-space-fiveunits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text12 {
            color: var(--dl-color-gray-white);
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text13 {
            color: var(--dl-color-primary-700);
            display: none;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-button1 {
            color: var(--dl-color-gray-white);
            width: 80%;
            display: none;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-link11 {
            display: contents;
          }
          .home-service-card2 {
            width: 49%;
            display: flex;
            min-height: 500px;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            text-decoration: none;
            background-image: radial-gradient(
                circle at center,
                rgb(0, 0, 0) 0%,
                rgba(0, 0, 0, 0.53) 100%
              ),
              url('https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1vYmlsZXxlbnwwfHx8fDE2NjU1MjY0Njk&ixlib=rb-1.2.1&w=1500');
          }
          .home-card-content2 {
            margin: var(--dl-space-space-fiveunits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text14 {
            color: var(--dl-color-gray-white);
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text15 {
            color: var(--dl-color-primary-700);
            display: none;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-button2 {
            color: var(--dl-color-gray-white);
            width: 80%;
            display: none;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-link12 {
            display: contents;
          }
          .home-service-card3 {
            width: 49%;
            display: flex;
            min-height: 500px;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            text-decoration: none;
            background-image: radial-gradient(
                circle at center,
                rgb(0, 0, 0) 0%,
                rgba(0, 0, 0, 0.56) 100%
              ),
              url('https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxzZXJ2ZXJ8ZW58MHx8fHwxNjY1NTI2NTg3&ixlib=rb-1.2.1&w=1500');
          }
          .home-card-content3 {
            margin: var(--dl-space-space-fiveunits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text16 {
            color: var(--dl-color-gray-white);
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text17 {
            color: var(--dl-color-primary-700);
            display: none;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-button3 {
            color: var(--dl-color-gray-white);
            width: 80%;
            display: none;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-about-us {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tenunits);
            justify-content: center;
          }
          .home-heading-container1 {
            width: 35%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text18 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-secondary-text {
            color: var(--dl-color-gray-black);
            font-size: 20px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-tripleunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-link13 {
            color: var(--dl-color-gray-white);
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .home-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text19 {
            color: var(--dl-color-gray-black);
            font-size: 1.25em;
          }
          .home-link14 {
            color: var(--dl-color-gray-white);
            width: 80%;
            display: none;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-testimonials {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-text24 {
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-cards-container1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-testimonial-card {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card-heading {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name-and-position {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-stars-container {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon02 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon04 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon06 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon08 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text25 {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            text-align: left;
          }
          .home-testimonial-card1 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card-heading1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name-and-position1 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-stars-container1 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon10 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon12 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon14 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon16 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon18 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .home-text26 {
            color: var(--dl-color-gray-black);
            text-align: left;
          }
          .home-testimonial-card2 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card-heading2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name-and-position2 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-stars-container2 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon20 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon22 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon24 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon26 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon28 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text27 {
            color: var(--dl-color-gray-black);
            text-align: left;
          }
          .home-contact {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-content-container {
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: stretch;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            flex-direction: column;
            justify-content: flex-start;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text28 {
            margin-top: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-locations-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-location-1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading4 {
            font-size: 24px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon30 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-email {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon32 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-link15 {
            text-decoration: none;
          }
          .home-phone {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon34 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-image4 {
            width: 50%;
            object-fit: cover;
          }
          @media (max-width: 1200px) {
            .home-container1 {
              width: 60%;
              margin-left: var(--dl-space-space-tenunits);
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column-reverse;
            }
            .home-hero-text-container {
              width: 100%;
            }
            .home-cta-btn1 {
              width: 40%;
            }
            .home-feature-card {
              align-self: center;
            }
            .home-about-us {
              flex-direction: column;
            }
            .home-heading-container1 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-link13 {
              width: 40%;
              display: none;
            }
            .home-text-container {
              width: 100%;
            }
            .home-link14 {
              width: 280px;
              display: block;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .home-locations-container {
              flex-wrap: wrap;
            }
            .home-location-1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-image4 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              width: 100%;
              height: auto;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-container1 {
              width: 100%;
              margin-left: 0px;
            }
            .home-hero-text-container {
              width: auto;
              flex-direction: column;
            }
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-feature-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-feature-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-feature-card2 {
              width: 70%;
            }
            .home-card-content {
              margin: 0px;
            }
            .home-card-content1 {
              margin: 0px;
            }
            .home-card-content2 {
              margin: 0px;
            }
            .home-card-content3 {
              margin: 0px;
            }
            .home-about-us {
              align-items: center;
            }
            .home-heading-container1 {
              align-items: center;
            }
            .home-text18 {
              text-align: center;
            }
            .home-text24 {
              text-align: center;
            }
            .home-cards-container1 {
              align-items: center;
              flex-direction: column;
            }
            .home-testimonial-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-stars-container {
              justify-content: flex-end;
            }
            .home-testimonial-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-stars-container1 {
              justify-content: flex-end;
            }
            .home-testimonial-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-stars-container2 {
              justify-content: flex-end;
            }
            .home-contact {
              padding-right: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .home-content-container {
              width: 100%;
            }
            .home-image4 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-link02 {
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-link04 {
              display: none;
            }
            .home-link06 {
              display: none;
            }
            .home-text {
              display: none;
            }
            .home-link07 {
              display: none;
            }
            .home-link08 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-hero-text-container {
              width: 100%;
            }
            .home-feature-card {
              width: 100%;
            }
            .home-feature-card1 {
              width: 100%;
            }
            .home-feature-card2 {
              width: 100%;
            }
            .home-service-card {
              width: 100%;
            }
            .home-service-card1 {
              width: 100%;
            }
            .home-service-card2 {
              width: 100%;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-service-card3 {
              width: 100%;
            }
            .home-text24 {
              text-align: center;
            }
            .home-testimonial-card {
              width: 100%;
            }
            .home-testimonial-card1 {
              width: 100%;
            }
            .home-testimonial-card2 {
              width: 100%;
            }
            .home-content-container {
              align-items: center;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text28 {
              text-align: center;
            }
            .home-locations-container {
              margin-bottom: 0px;
              justify-content: center;
            }
            .home-location-1 {
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
