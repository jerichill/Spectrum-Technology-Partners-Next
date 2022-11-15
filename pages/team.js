import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import BlogPostCard1 from '../components/blog-post-card1'

const Team = (props) => {
  return (
    <>
      <div className="team-container">
        <Head>
          <title>
            Team - Spectrum Partners | Denver Cybersecurity, IT, VoIP, and Cloud
            Services
          </title>
          <meta
            name="description"
            content="Spectrum Partners was formed to solve the problem of poor IT project management. We pride ourselves on our commitment to delivering secure technology solutions."
          />
          <meta
            property="og:title"
            content="Team - Spectrum Partners | Denver Cybersecurity, IT, VoIP, and Cloud Services"
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
        <div data-role="Header" className="team-navbar-container">
          <div className="team-navbar">
            <Link href="/">
              <a className="team-link">
                <div className="team-logo">
                  <img
                    alt="image"
                    src="/playground_assets/spectrum%20logo-200h.png"
                    className="team-image"
                  />
                </div>
              </a>
            </Link>
            <div className="team-links-container">
              <Link href="/solutions">
                <a className="team-link02 Anchor">Solutions</a>
              </Link>
              <Link href="/why">
                <a className="team-link04 Anchor">Why Spectrum?</a>
              </Link>
              <Link href="/why">
                <a className="team-link06 Anchor">Team</a>
              </Link>
              <a href="#contact" className="team-link07 Anchor">
                contact
              </a>
            </div>
            <div className="team-cta-container">
              <Link href="/support">
                <a className="team-link08 Anchor button">Customer Support</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="team-hero">
          <div className="team-container1">
            <div className="team-hero-text-container">
              <h1 className="team-heading">
                <span>Our Team</span>
                <br></br>
              </h1>
              <span className="team-text02">
                We pride ourselves on our commitment to our clients, our
                expertise, and our tightly integrated team approach to our
                projects.
              </span>
              <a
                href="https://zfrmz.com/PW4MJU6QtrNdjnhepCJu"
                target="_blank"
                rel="noreferrer noopener"
                className="team-cta-btn1 button Anchor"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
        <div className="team-testimonials">
          <h2 className="team-text03 Section-Heading">Leadership</h2>
          <div className="team-blog">
            <div className="team-container2">
              <a
                href="https://www.linkedin.com/in/stephen-crockett-111b2215b/"
                target="_blank"
                rel="noreferrer noopener"
                className="team-link09"
              >
                <BlogPostCard1
                  title="Stephen Crockett"
                  image_src="https://media-exp1.licdn.com/dms/image/C5603AQHkExd84WYz2w/profile-displayphoto-shrink_200_200/0/1605887741961?e=1674086400&amp;v=beta&amp;t=K3erQC_gKLXUlfutulKsHRAWmXBHSlBgvwRB3x-Kc-g"
                  description="VoIP &amp; Communications"
                  rootClassName="rootClassName3"
                  className="team-component"
                ></BlogPostCard1>
              </a>
            </div>
            <div className="team-container3">
              <a
                href="https://www.linkedin.com/in/ericdjones-denver/"
                target="_blank"
                rel="noreferrer noopener"
                className="team-link10"
              >
                <BlogPostCard1
                  title="Eric Jones"
                  image_src="https://media-exp1.licdn.com/dms/image/C4E03AQGsx5pjuT3Uew/profile-displayphoto-shrink_200_200/0/1548962251636?e=1674086400&amp;v=beta&amp;t=T-VTyJ9pglOjWIzCUN1mjcCWZj_7soL_usnNDRCObFg"
                  description="Cybersecurity"
                  rootClassName="rootClassName2"
                  className="team-component1"
                ></BlogPostCard1>
              </a>
            </div>
            <div className="team-container4">
              <a
                href="https://www.linkedin.com/in/rajevs/"
                target="_blank"
                rel="noreferrer noopener"
                className="team-link11"
              >
                <BlogPostCard1
                  title="Rajev Sivarasa"
                  image_src="https://media-exp1.licdn.com/dms/image/C5603AQFd3tw5-TCeig/profile-displayphoto-shrink_200_200/0/1632145253944?e=1674086400&amp;v=beta&amp;t=mwwECcIBF9peqzc1MqjKhGn6JBSN8B0peu2SY5ido1Y"
                  description="IT &amp; Networking"
                  rootClassName="rootClassName2"
                  className="team-component2"
                ></BlogPostCard1>
              </a>
            </div>
            <div className="team-container5">
              <a
                href="https://www.linkedin.com/in/jerichill/"
                target="_blank"
                rel="noreferrer noopener"
                className="team-link12"
              >
                <BlogPostCard1
                  title="Eric Hill"
                  image_src="https://media-exp1.licdn.com/dms/image/C5603AQGzxI14uUp7NA/profile-displayphoto-shrink_200_200/0/1651642816593?e=1674086400&amp;v=beta&amp;t=PxJEUdvlazNaKmh97hu9GRi4bIZ28Nbj07UYPXu57xU"
                  description="Websites &amp; Hosting"
                  rootClassName="rootClassName1"
                  className="team-component3"
                ></BlogPostCard1>
              </a>
            </div>
          </div>
        </div>
        <div className="team-testimonials1">
          <h2 className="team-text04 Section-Heading">Our Customers Love Us</h2>
          <div className="team-cards-container">
            <div className="team-testimonial-card">
              <div className="team-card-heading">
                <div className="team-name-and-position">
                  <span className="Card-Heading">Mark H.</span>
                </div>
                <div className="team-stars-container">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon02"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon04"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon06"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon08"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="team-text05">
                They were able to initiate and complete our project with minimum
                turnaround time. Our project manager saw the process through
                from start to finish and helped keep us informed with bi-weekly
                updates.
              </span>
            </div>
            <div className="team-testimonial-card1">
              <div className="team-card-heading1">
                <div className="team-name-and-position1">
                  <span className="Card-Heading">James M.</span>
                </div>
                <div className="team-stars-container1">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon10"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon12"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon14"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon16"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon18"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="team-text06">
                I am always super impressed with their ability to think outside
                the box, build a solid strategy, and execute. We most certainly
                would not be where we are today if it were not for their hard
                work.
              </span>
            </div>
            <div className="team-testimonial-card2">
              <div className="team-card-heading2">
                <div className="team-name-and-position2">
                  <span className="Card-Heading">Kandy K.</span>
                </div>
                <div className="team-stars-container2">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon20"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon22"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon24"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon26"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon28"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="team-text07">
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
          <div className="team-cards-container1">
            <div className="team-testimonial-card3">
              <div className="team-card-heading3">
                <div className="team-name-and-position3">
                  <span className="Card-Heading">Jackie S.</span>
                </div>
                <div className="team-stars-container3">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon30"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon32"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon34"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon36"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon38"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="team-text08">
                Attentive and responsive. Definitely knows their stuff, on the
                cutting edge. Perfect for reducing our infrastructure costs and
                moving to the cloud. Having a virtual CIO assisting me on
                planning my IT has saved significant budget.
              </span>
            </div>
            <div className="team-testimonial-card4">
              <div className="team-card-heading4">
                <div className="team-name-and-position4">
                  <span className="Card-Heading">Joanne V.</span>
                </div>
                <div className="team-stars-container4">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon40"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon42"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon44"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon46"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon48"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="team-text09">
                They got us up and running in no time. My website is beautiful
                and I receive compliments daily. Even more important than the
                beauty of my site is the fact that it NEVER goes down. What a
                relief! I am able to devote my time to the aspects of my
                business I do well.
              </span>
            </div>
            <div className="team-testimonial-card5">
              <div className="team-card-heading5">
                <div className="team-name-and-position5">
                  <span className="Card-Heading">Dave P.</span>
                </div>
                <div className="team-stars-container5">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon50"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon52"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon54"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon56"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon58"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="team-text10">
                Professional, courteous, and ultimately just a great team to
                work with. They act as if our  platforms are their own, and take
                great care to ensure our users get a great experience
              </span>
            </div>
          </div>
        </div>
        <div className="team-section-separator"></div>
        <div id="about" className="team-about-us">
          <div className="team-heading-container">
            <h2 className="team-text11 Section-Heading">
              Our Unique Value Proposition
            </h2>
            <span className="team-secondary-text">
              {' '}
              A single point of truth for your business systems and technology
              stack.
            </span>
            <button className="team-cta-btn2 button Anchor">
              Request a quote
            </button>
          </div>
          <div className="team-text-container">
            <span className="team-text12">
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
          <button className="team-cta-btn3 Anchor button">
            START BUILDING
          </button>
        </div>
        <div id="contact" className="team-contact">
          <div className="team-content-container">
            <h2 className="team-text17 Section-Heading">Contact Us</h2>
            <div className="team-locations-container">
              <div className="team-location-1">
                <span className="team-heading1">
                  We are located in beautiful Denver, CO.
                </span>
                <div className="team-adress">
                  <svg viewBox="0 0 1024 1024" className="team-icon60">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="Section-Text">
                    https://www.spectrumpartners.com
                  </span>
                </div>
                <div className="team-email">
                  <svg viewBox="0 0 1024 1024" className="team-icon62">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="https://zfrmz.com/PW4MJU6QtrNdjnhepCJu"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="team-link13 Section-Text"
                  >
                    Request a Quote
                  </a>
                </div>
                <div className="team-phone">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="team-icon64"
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
            className="team-image1"
          />
        </div>
        <div className="team-container6">
          <div className="team-container7">
            <span className="team-text20">
              Copyright 2022 Evolve Network Solutions, Fortify IT, Clarity IT,
              and OpenMedium | All rights reserved. | Privacy Policy
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .team-navbar-container {
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
          .team-navbar {
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
          .team-link {
            display: contents;
          }
          .team-logo {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .team-image {
            width: 80px;
            height: auto;
            object-fit: cover;
          }
          .team-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .team-link02 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .team-link04 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .team-link06 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .team-link07 {
            text-decoration: none;
          }
          .team-cta-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-link08 {
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
          .team-hero {
            width: 100%;
            display: flex;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 3%,
                rgba(0, 0, 0, 0.5) 99%
              ),
              url('https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHx0ZWNofGVufDB8fHx8MTY2NTUyNDYzOQ&ixlib=rb-1.2.1&w=1500');
            background-position: top left, center;
          }
          .team-container1 {
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
          .team-hero-text-container {
            display: flex;
            flex-direction: column;
          }
          .team-heading {
            color: var(--dl-color-gray-white);
            font-size: 2.75em;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .team-text02 {
            color: var(--dl-color-gray-white);
            font-size: 1.5em;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .team-cta-btn1 {
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
          .team-testimonials {
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
          .team-text03 {
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .team-blog {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: row;
          }
          .team-container2 {
            display: flex;
            align-items: center;
            margin-right: 32px;
            justify-content: space-between;
          }
          .team-link09 {
            display: contents;
          }
          .team-component {
            text-decoration: none;
          }
          .team-container3 {
            display: flex;
            align-items: center;
            margin-right: 32px;
            justify-content: space-between;
          }
          .team-link10 {
            display: contents;
          }
          .team-component1 {
            text-decoration: none;
          }
          .team-container4 {
            display: flex;
            align-items: center;
            margin-right: 32px;
            justify-content: space-between;
          }
          .team-link11 {
            display: contents;
          }
          .team-component2 {
            text-decoration: none;
          }
          .team-container5 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .team-link12 {
            display: contents;
          }
          .team-component3 {
            text-decoration: none;
          }
          .team-testimonials1 {
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
          .team-text04 {
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .team-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-testimonial-card {
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
          .team-card-heading {
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
          .team-name-and-position {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .team-stars-container {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .team-icon {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon02 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon04 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon06 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon08 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-text05 {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            text-align: left;
          }
          .team-testimonial-card1 {
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
          .team-card-heading1 {
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
          .team-name-and-position1 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .team-stars-container1 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .team-icon10 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon12 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon14 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon16 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon18 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .team-text06 {
            color: var(--dl-color-gray-black);
            text-align: left;
          }
          .team-testimonial-card2 {
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
          .team-card-heading2 {
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
          .team-name-and-position2 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .team-stars-container2 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .team-icon20 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon22 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon24 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon26 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon28 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-text07 {
            color: var(--dl-color-gray-black);
            text-align: left;
          }
          .team-cards-container1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-testimonial-card3 {
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
          .team-card-heading3 {
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
          .team-name-and-position3 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .team-stars-container3 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .team-icon30 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon32 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon34 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon36 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon38 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-text08 {
            color: var(--dl-color-gray-black);
            text-align: left;
          }
          .team-testimonial-card4 {
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
          .team-card-heading4 {
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
          .team-name-and-position4 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .team-stars-container4 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .team-icon40 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon42 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon44 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon46 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon48 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .team-text09 {
            color: var(--dl-color-gray-black);
            text-align: left;
          }
          .team-testimonial-card5 {
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
          .team-card-heading5 {
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
          .team-name-and-position5 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .team-stars-container5 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .team-icon50 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon52 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon54 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon56 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-icon58 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .team-text10 {
            color: var(--dl-color-gray-black);
            text-align: left;
          }
          .team-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .team-about-us {
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
          .team-heading-container {
            width: 35%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .team-text11 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .team-secondary-text {
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
          .team-cta-btn2 {
            color: var(--dl-color-gray-white);
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .team-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .team-text12 {
            color: var(--dl-color-gray-black);
            font-size: 1.25em;
          }
          .team-cta-btn3 {
            color: var(--dl-color-gray-white);
            width: 80%;
            display: none;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .team-contact {
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
          .team-content-container {
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
          .team-text17 {
            margin-top: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .team-locations-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .team-location-1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-heading1 {
            font-size: 24px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .team-adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .team-icon60 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .team-email {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .team-icon62 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .team-link13 {
            text-decoration: none;
          }
          .team-phone {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .team-icon64 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .team-image1 {
            width: 50%;
            object-fit: cover;
          }
          .team-container6 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .team-container7 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .team-text20 {
            font-size: 12px;
          }
          @media (max-width: 991px) {
            .team-hero {
              flex-direction: column-reverse;
            }
            .team-hero-text-container {
              width: 80%;
            }
            .team-cta-btn1 {
              width: 40%;
            }
            .team-blog {
              flex-direction: column;
            }
            .team-container2 {
              margin-right: 0px;
              margin-bottom: 48px;
            }
            .team-container3 {
              margin-right: 0px;
              margin-bottom: 48px;
            }
            .team-container4 {
              margin-right: 0px;
              margin-bottom: 48px;
            }
            .team-about-us {
              flex-direction: column;
            }
            .team-heading-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .team-cta-btn2 {
              width: 40%;
              display: none;
            }
            .team-text-container {
              width: 100%;
            }
            .team-cta-btn3 {
              width: 280px;
              display: block;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .team-locations-container {
              flex-wrap: wrap;
            }
            .team-location-1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .team-image1 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .team-container1 {
              width: auto;
              margin-left: var(--dl-space-space-tripleunit);
            }
            .team-text03 {
              text-align: center;
            }
            .team-blog {
              padding-left: 32px;
              padding-right: 32px;
            }
            .team-text04 {
              text-align: center;
            }
            .team-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .team-testimonial-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .team-stars-container {
              justify-content: flex-end;
            }
            .team-testimonial-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .team-stars-container1 {
              justify-content: flex-end;
            }
            .team-testimonial-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .team-stars-container2 {
              justify-content: flex-end;
            }
            .team-cards-container1 {
              align-items: center;
              flex-direction: column;
            }
            .team-testimonial-card3 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .team-stars-container3 {
              justify-content: flex-end;
            }
            .team-testimonial-card4 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .team-stars-container4 {
              justify-content: flex-end;
            }
            .team-testimonial-card5 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .team-stars-container5 {
              justify-content: flex-end;
            }
            .team-about-us {
              align-items: center;
            }
            .team-heading-container {
              align-items: center;
            }
            .team-text11 {
              text-align: center;
            }
            .team-contact {
              padding-right: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .team-content-container {
              width: 100%;
            }
            .team-image1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .team-link02 {
              margin-right: var(--dl-space-space-halfunit);
            }
            .team-link04 {
              display: none;
            }
            .team-link06 {
              display: none;
            }
            .team-link07 {
              display: none;
            }
            .team-link08 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .team-hero {
              padding-right: var(--dl-space-space-doubleunit);
            }
            .team-hero-text-container {
              width: 100%;
            }
            .team-text03 {
              text-align: center;
            }
            .team-blog {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .team-text04 {
              text-align: center;
            }
            .team-testimonial-card {
              width: 100%;
            }
            .team-testimonial-card1 {
              width: 100%;
            }
            .team-testimonial-card2 {
              width: 100%;
            }
            .team-testimonial-card3 {
              width: 100%;
            }
            .team-testimonial-card4 {
              width: 100%;
            }
            .team-testimonial-card5 {
              width: 100%;
            }
            .team-content-container {
              align-items: center;
              padding-left: 0px;
              padding-right: 0px;
            }
            .team-text17 {
              text-align: center;
            }
            .team-locations-container {
              margin-bottom: 0px;
              justify-content: center;
            }
            .team-location-1 {
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Team
