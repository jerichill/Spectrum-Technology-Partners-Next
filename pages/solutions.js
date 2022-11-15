import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Solutions = (props) => {
  return (
    <>
      <div className="solutions-container">
        <Head>
          <title>
            Solutions - Spectrum Partners | Denver Cybersecurity, IT, VoIP, and
            Cloud Services
          </title>
          <meta
            name="description"
            content="Spectrum Partners was formed to solve the problem of poor IT project management. We pride ourselves on our commitment to delivering secure technology solutions."
          />
          <meta
            property="og:title"
            content="Solutions - Spectrum Partners | Denver Cybersecurity, IT, VoIP, and Cloud Services"
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
        <div data-role="Header" className="solutions-navbar-container">
          <div className="solutions-navbar">
            <Link href="/">
              <a className="solutions-link">
                <div className="solutions-logo">
                  <img
                    alt="image"
                    src="/playground_assets/spectrum%20logo-200h.png"
                    className="solutions-image"
                  />
                </div>
              </a>
            </Link>
            <div className="solutions-links-container">
              <Link href="/solutions">
                <a className="solutions-link2 Anchor"> Solutions</a>
              </Link>
              <Link href="/why">
                <a className="solutions-link4 Anchor">Why Spectrum?</a>
              </Link>
              <a href="#contact" className="solutions-link5 Anchor">
                contact
              </a>
            </div>
            <div className="solutions-cta-container">
              <Link href="/support">
                <a className="solutions-link6 button Anchor">
                  Customer Support
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="solutions-hero">
          <div className="solutions-container01">
            <div className="solutions-hero-text-container">
              <h1 className="solutions-heading">
                <span>Our Solutions</span>
                <br></br>
              </h1>
              <span className="solutions-text002">
                We provide a single point of management for IT projects that
                demand expertise and accountability.
              </span>
              <a
                href="https://zfrmz.com/PW4MJU6QtrNdjnhepCJu"
                target="_blank"
                rel="noreferrer noopener"
                className="solutions-cta-btn1 Anchor button"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
        <div className="solutions-section-separator"></div>
        <div id="cyber" className="solutions-security">
          <div className="solutions-container02">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1603985529862-9e12198c9a60?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxjeWJlciUyMHNlY3VyaXR5fGVufDB8fHx8MTY2NTU4OTQ1NA&amp;ixlib=rb-1.2.1&amp;w=700"
              className="solutions-image1"
            />
          </div>
          <div className="solutions-container03">
            <h2 className="solutions-text003">
              Cybersecurity &amp; Compliance
            </h2>
            <span className="solutions-text004">
              Unified cybersecurity and compliance solutions for growing
              businesses.
            </span>
            <span className="solutions-text005">
              <span>• Compliance audits (HIPAA, NIST, PCI, CMMC)</span>
              <br></br>
              <span>• </span>
              <span>
                Vulnerability assessment
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>• Risk mitigation &amp; </span>
              <span>
                cyber-attack response
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>• </span>
              <span>Data backup and recovery</span>
              <br></br>
              <span>• </span>
              <span>Firewall and web filter protection</span>
              <br></br>
              <span>• </span>
              <span>
                External penetration testing
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>• </span>
              <span>Email, data, and endpoint security</span>
              <br></br>
              <span>• Threat response (MTR) and </span>
              <span>disaster recovery</span>
              <br></br>
            </span>
          </div>
        </div>
        <div id="solutions" className="solutions-features">
          <div className="solutions-heading-container">
            <h2 className="solutions-text029 Section-Heading">
              IT &amp; Network Infrastructure
            </h2>
            <h3 className="solutions-text030">
              Unified IT managed services for your business.
            </h3>
          </div>
          <div className="solutions-cards-container">
            <div className="solutions-feature-card">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1619548683455-23b17c3ddc30?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                className="solutions-image2"
              />
              <span className="solutions-heading1 Card-Heading">Why</span>
              <span className="solutions-text031 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
            <div className="solutions-feature-card1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1619547871672-b6562e042c1e?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                className="solutions-image3"
              />
              <span className="solutions-heading2 Card-Heading">What</span>
              <span className="solutions-text032 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
            <div className="solutions-feature-card2">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1619555241737-9c364cf1fbce?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                className="solutions-image4"
              />
              <span className="solutions-heading3 Card-Heading">How</span>
              <span className="solutions-text033 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
        <div id="it" className="solutions-i-t">
          <div className="solutions-container04">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1620843002805-05a08cb72f57?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxtaWNyb3NvZnR8ZW58MHx8fHwxNjY1NTg4MjE2&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=700"
              className="solutions-image5"
            />
          </div>
          <div className="solutions-container05">
            <h2 className="solutions-text034">IT &amp; Network</h2>
            <span className="solutions-text035">
              We strongly believe that the simplest solution is often the best
              solution but if that doesn’t end up to be true, we will work to
              find you the right solution for whatever you’re facing.
            </span>
            <span className="solutions-text036">
              <span>• Server &amp; desktop monitoring</span>
              <br></br>
              <span>• </span>
              <span>Server &amp; desktop patching</span>
              <br></br>
              <span>• </span>
              <span>Advanced endpoint protection</span>
              <br></br>
              <span>• </span>
              <span>Network device support</span>
              <br></br>
              <span>• </span>
              <span>Firewall maintenance &amp; support</span>
              <br></br>
              <span>• </span>
              <span>Microsoft 365 cloud backups</span>
              <br></br>
              <span>• </span>
              <span>Network vulnerability scans</span>
              <br></br>
              <span>• </span>
              <span>Security awareness training</span>
              <br></br>
            </span>
          </div>
        </div>
        <div id="voip" className="solutions-vo-i-p">
          <div className="solutions-container06">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHZpZGVvJTIwY29uZmVyZW5jZXxlbnwwfHx8fDE2NjU1ODk2MDM&amp;ixlib=rb-1.2.1&amp;w=700"
              className="solutions-image6"
            />
          </div>
          <div className="solutions-container07">
            <h2 className="solutions-text060">
              VoIP &amp; Video Communications
            </h2>
            <span className="solutions-text061">
              Everything your business needs for a fully integrated, feature
              rich phone system. No need for on-premise equipment and no more
              expensive on-site technician calls.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="solutions-text062">
              <span>• Enterprise PBX phone systems</span>
              <br></br>
              <span>• </span>
              <span>Unified communication on PC, Mac, and Mobile</span>
              <br></br>
              <span>• Calendar and contact integration</span>
              <br></br>
              <span>• </span>
              <span>
                Teams, Google, Zapier, and other third-party integrations
              </span>
              <br></br>
              <span>• SD-WAN support</span>
              <br></br>
              <span>• </span>
              <span>Includes end user, device, and network support</span>
              <br></br>
            </span>
          </div>
        </div>
        <div id="web" className="solutions-web">
          <div className="solutions-container08">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1573164713712-03790a178651?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHx3ZWIlMjBzZXJ2ZXJ8ZW58MHx8fHwxNjY1NTg5OTgx&amp;ixlib=rb-1.2.1&amp;w=700"
              className="solutions-image7"
            />
          </div>
          <div className="solutions-container09">
            <h2 className="solutions-text078">Managed Cloud &amp; WebOps</h2>
            <span className="solutions-text079">
              Gain access to frictionless, 24/5 cloud support to run your
              mission-critical web and mobile applications.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="solutions-text080">
              <span>• Hosting infrastructure planning and implementation</span>
              <br></br>
              <span>• Website, web app, and mobile app managed services</span>
              <br></br>
              <span>• Design, development, and deployment services</span>
              <br></br>
              <span>• Website performance, security audits and patching</span>
              <br></br>
              <span>
                • All-inclusive WordPress hosting and maintenance packages
              </span>
              <br></br>
              <span>
                • Headless CMS and static sites; React, Next.js, and Tailwind
                CSS
              </span>
              <br></br>
              <span>• </span>
              <span>Enterprise CMS and open source application management</span>
              <br></br>
            </span>
          </div>
        </div>
        <div id="about" className="solutions-about-us">
          <div className="solutions-heading-container1">
            <h2 className="solutions-text096 Section-Heading">
              About Spectrum
            </h2>
            <span className="solutions-secondary-text">
              {' '}
              A single point of truth for your business systems and technology
              stack.
            </span>
            <button className="solutions-cta-btn2 button Anchor">
              Request a quote
            </button>
          </div>
          <div className="solutions-text-container">
            <span className="solutions-text097">
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
          <button className="solutions-cta-btn3 Anchor button">
            START BUILDING
          </button>
        </div>
        <div className="solutions-testimonials">
          <h2 className="solutions-text102 Section-Heading">
            Our Happy Customers
          </h2>
          <div className="solutions-cards-container1">
            <div className="solutions-testimonial-card">
              <div className="solutions-card-heading">
                <div className="solutions-name-and-position">
                  <span className="Card-Heading">Jackie S.</span>
                </div>
                <div className="solutions-stars-container">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon02"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon04"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon06"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon08"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="solutions-text103">
                Attentive and responsive. Definitely knows their stuff, on the
                cutting edge. Perfect for reducing our infrastructure costs and
                moving to the cloud. Having a virtual CIO assisting me on
                planning my IT has saved significant budget.
              </span>
            </div>
            <div className="solutions-testimonial-card1">
              <div className="solutions-card-heading1">
                <div className="solutions-name-and-position1">
                  <span className="Card-Heading">Joanne V.</span>
                </div>
                <div className="solutions-stars-container1">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon10"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon12"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon14"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon16"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon18"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="solutions-text104">
                They got us up and running in no time. My website is beautiful
                and I receive compliments daily. Even more important than the
                beauty of my site is the fact that it NEVER goes down. What a
                relief! I am able to devote my time to the aspects of my
                business I do well.
              </span>
            </div>
            <div className="solutions-testimonial-card2">
              <div className="solutions-card-heading2">
                <div className="solutions-name-and-position2">
                  <span className="Card-Heading">Dave P.</span>
                </div>
                <div className="solutions-stars-container2">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon20"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon22"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon24"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon26"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="solutions-icon28"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="solutions-text105">
                Professional, courteous, and ultimately just a great team to
                work with. They act as if our  platforms are their own, and take
                great care to ensure our users get a great experience
              </span>
            </div>
          </div>
        </div>
        <div id="contact" className="solutions-contact">
          <div className="solutions-content-container">
            <h2 className="solutions-text106 Section-Heading">Contact Us</h2>
            <div className="solutions-locations-container">
              <div className="solutions-location-1">
                <span className="solutions-heading4">
                  We are located in beautiful Denver, CO.
                </span>
                <div className="solutions-adress">
                  <svg viewBox="0 0 1024 1024" className="solutions-icon30">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="Section-Text">
                    https://www.spectrumpartners.com
                  </span>
                </div>
                <div className="solutions-email">
                  <svg viewBox="0 0 1024 1024" className="solutions-icon32">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="https://zfrmz.com/PW4MJU6QtrNdjnhepCJu"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="solutions-link7 Section-Text"
                  >
                    Request a Quote
                  </a>
                </div>
                <div className="solutions-phone">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="solutions-icon34"
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
            className="solutions-image8"
          />
        </div>
        <div className="solutions-container10">
          <div className="solutions-container11">
            <span className="solutions-text109">
              Copyright 2022 Evolve Network Solutions, Fortify IT, Clarity IT,
              and OpenMedium | All rights reserved. | Privacy Policy
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .solutions-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .solutions-navbar-container {
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
          .solutions-navbar {
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
          .solutions-link {
            display: contents;
          }
          .solutions-logo {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .solutions-image {
            width: 80px;
            height: auto;
            object-fit: cover;
          }
          .solutions-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .solutions-link2 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .solutions-link4 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .solutions-link5 {
            text-decoration: none;
          }
          .solutions-cta-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .solutions-link6 {
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
          .solutions-hero {
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
              url('https://images.unsplash.com/photo-1612521564730-62fc7691cd85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjeWJlcnxlbnwwfHx8fDE2NjU1MjYzNTg&ixlib=rb-1.2.1&w=1500');
            background-position: top left, center;
          }
          .solutions-container01 {
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
          .solutions-hero-text-container {
            display: flex;
            flex-direction: column;
          }
          .solutions-heading {
            color: var(--dl-color-gray-white);
            font-size: 2.75em;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .solutions-text002 {
            color: var(--dl-color-gray-white);
            font-size: 1.5em;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .solutions-cta-btn1 {
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
          .solutions-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .solutions-security {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            max-width: var(--dl-size-size-maxcontent);
            align-self: center;
            margin-top: var(--dl-space-space-tenunits);
            align-items: center;
            flex-direction: row;
          }
          .solutions-container02 {
            flex: 0 0 auto;
            width: 45%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .solutions-image1 {
            width: 100%;
            height: 480px;
            object-fit: cover;
          }
          .solutions-container03 {
            flex: 0 0 auto;
            width: 45%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .solutions-text003 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .solutions-text004 {
            font-size: 20px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .solutions-text005 {
            line-height: 2em;
            margin-left: var(--dl-space-space-tripleunit);
          }
          .solutions-features {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
          }
          .solutions-heading-container {
            width: 75%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .solutions-text029 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .solutions-text030 {
            color: var(--dl-color-gray-black);
            font-size: 20px;
            text-align: center;
          }
          .solutions-cards-container {
            width: 100%;
            display: none;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .solutions-feature-card {
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
          .solutions-image2 {
            width: 100px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .solutions-heading1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .solutions-text031 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .solutions-feature-card1 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .solutions-image3 {
            width: 100px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .solutions-heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .solutions-text032 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .solutions-feature-card2 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .solutions-image4 {
            width: 100px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .solutions-heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .solutions-text033 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .solutions-i-t {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            max-width: var(--dl-size-size-maxcontent);
            align-self: center;
            margin-top: var(--dl-space-space-tenunits);
            align-items: center;
            flex-direction: row;
          }
          .solutions-container04 {
            flex: 0 0 auto;
            width: 45%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .solutions-image5 {
            width: 100%;
            height: 480px;
            object-fit: cover;
          }
          .solutions-container05 {
            flex: 0 0 auto;
            width: 45%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .solutions-text034 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .solutions-text035 {
            font-size: 20px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .solutions-text036 {
            line-height: 2em;
            margin-left: var(--dl-space-space-tripleunit);
          }
          .solutions-vo-i-p {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            max-width: var(--dl-size-size-maxcontent);
            align-self: center;
            margin-top: var(--dl-space-space-tenunits);
            align-items: center;
            flex-direction: row;
          }
          .solutions-container06 {
            flex: 0 0 auto;
            width: 45%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .solutions-image6 {
            width: 100%;
            height: 480px;
            object-fit: cover;
          }
          .solutions-container07 {
            flex: 0 0 auto;
            width: 45%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .solutions-text060 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .solutions-text061 {
            font-size: 20px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .solutions-text062 {
            line-height: 2em;
            margin-left: var(--dl-space-space-tripleunit);
          }
          .solutions-web {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            max-width: var(--dl-size-size-maxcontent);
            align-self: center;
            margin-top: var(--dl-space-space-tenunits);
            align-items: center;
            flex-direction: row;
          }
          .solutions-container08 {
            flex: 0 0 auto;
            width: 45%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .solutions-image7 {
            width: 100%;
            height: 480px;
            object-fit: cover;
          }
          .solutions-container09 {
            flex: 0 0 auto;
            width: 45%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .solutions-text078 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .solutions-text079 {
            font-size: 20px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .solutions-text080 {
            line-height: 2em;
            margin-left: var(--dl-space-space-tripleunit);
          }
          .solutions-about-us {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tenunits);
            justify-content: center;
          }
          .solutions-heading-container1 {
            width: 35%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .solutions-text096 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .solutions-secondary-text {
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
          .solutions-cta-btn2 {
            color: var(--dl-color-gray-white);
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .solutions-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .solutions-text097 {
            color: var(--dl-color-gray-black);
            font-size: 1.25em;
          }
          .solutions-cta-btn3 {
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
          .solutions-testimonials {
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
          .solutions-text102 {
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .solutions-cards-container1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .solutions-testimonial-card {
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
          .solutions-card-heading {
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
          .solutions-name-and-position {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .solutions-stars-container {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .solutions-icon {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-icon02 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-icon04 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-icon06 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-icon08 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-text103 {
            color: var(--dl-color-gray-black);
            text-align: left;
          }
          .solutions-testimonial-card1 {
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
          .solutions-card-heading1 {
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
          .solutions-name-and-position1 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .solutions-stars-container1 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .solutions-icon10 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-icon12 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-icon14 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-icon16 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-icon18 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .solutions-text104 {
            color: var(--dl-color-gray-black);
            text-align: left;
          }
          .solutions-testimonial-card2 {
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
          .solutions-card-heading2 {
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
          .solutions-name-and-position2 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .solutions-stars-container2 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .solutions-icon20 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-icon22 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-icon24 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-icon26 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-icon28 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .solutions-text105 {
            color: var(--dl-color-gray-black);
            text-align: left;
          }
          .solutions-contact {
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
          .solutions-content-container {
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
          .solutions-text106 {
            margin-top: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .solutions-locations-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .solutions-location-1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .solutions-heading4 {
            font-size: 24px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .solutions-adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .solutions-icon30 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .solutions-email {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .solutions-icon32 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .solutions-link7 {
            text-decoration: none;
          }
          .solutions-phone {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .solutions-icon34 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .solutions-image8 {
            width: 50%;
            object-fit: cover;
          }
          .solutions-container10 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .solutions-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .solutions-text109 {
            font-size: 12px;
          }
          @media (max-width: 1200px) {
            .solutions-container01 {
              margin-left: var(--dl-space-space-tenunits);
            }
          }
          @media (max-width: 991px) {
            .solutions-hero {
              flex-direction: column-reverse;
            }
            .solutions-hero-text-container {
              width: 80%;
            }
            .solutions-cta-btn1 {
              width: 40%;
            }
            .solutions-feature-card {
              align-self: center;
            }
            .solutions-about-us {
              flex-direction: column;
            }
            .solutions-heading-container1 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .solutions-cta-btn2 {
              width: 40%;
              display: none;
            }
            .solutions-text-container {
              width: 100%;
            }
            .solutions-cta-btn3 {
              width: 280px;
              display: block;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .solutions-locations-container {
              flex-wrap: wrap;
            }
            .solutions-location-1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .solutions-image8 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .solutions-container01 {
              width: auto;
              margin-left: var(--dl-space-space-tripleunit);
              justify-content: flex-start;
            }
            .solutions-security {
              flex-direction: column;
            }
            .solutions-container02 {
              width: auto;
            }
            .solutions-container03 {
              width: auto;
              margin-top: var(--dl-space-space-fourunits);
              margin-left: var(--dl-space-space-fiveunits);
              margin-right: var(--dl-space-space-fiveunits);
            }
            .solutions-heading-container {
              width: 100%;
            }
            .solutions-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .solutions-feature-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .solutions-feature-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .solutions-feature-card2 {
              width: 70%;
            }
            .solutions-i-t {
              flex-direction: column;
            }
            .solutions-container04 {
              width: auto;
            }
            .solutions-image5 {
              height: auto;
            }
            .solutions-container05 {
              width: auto;
              margin-top: var(--dl-space-space-fourunits);
              margin-left: var(--dl-space-space-fiveunits);
              margin-right: var(--dl-space-space-fiveunits);
            }
            .solutions-vo-i-p {
              flex-direction: column;
            }
            .solutions-container06 {
              width: auto;
            }
            .solutions-image6 {
              height: auto;
            }
            .solutions-container07 {
              width: auto;
              margin-top: var(--dl-space-space-fourunits);
              margin-right: var(--dl-space-space-fiveunits);
            }
            .solutions-web {
              flex-direction: column;
            }
            .solutions-container08 {
              width: auto;
            }
            .solutions-image7 {
              height: auto;
            }
            .solutions-container09 {
              width: auto;
              margin-top: var(--dl-space-space-fourunits);
              margin-right: var(--dl-space-space-fiveunits);
            }
            .solutions-about-us {
              align-items: center;
            }
            .solutions-heading-container1 {
              align-items: center;
            }
            .solutions-text096 {
              text-align: center;
            }
            .solutions-text102 {
              text-align: center;
            }
            .solutions-cards-container1 {
              align-items: center;
              flex-direction: column;
            }
            .solutions-testimonial-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .solutions-stars-container {
              justify-content: flex-end;
            }
            .solutions-testimonial-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .solutions-stars-container1 {
              justify-content: flex-end;
            }
            .solutions-testimonial-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .solutions-stars-container2 {
              justify-content: flex-end;
            }
            .solutions-contact {
              padding-right: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .solutions-content-container {
              width: 100%;
            }
            .solutions-image8 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .solutions-link2 {
              margin-right: var(--dl-space-space-halfunit);
            }
            .solutions-link4 {
              display: none;
            }
            .solutions-link5 {
              display: none;
            }
            .solutions-link6 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .solutions-hero-text-container {
              width: 100%;
            }
            .solutions-feature-card {
              width: 100%;
            }
            .solutions-feature-card1 {
              width: 100%;
            }
            .solutions-feature-card2 {
              width: 100%;
            }
            .solutions-text102 {
              text-align: center;
            }
            .solutions-testimonial-card {
              width: 100%;
            }
            .solutions-testimonial-card1 {
              width: 100%;
            }
            .solutions-testimonial-card2 {
              width: 100%;
            }
            .solutions-content-container {
              align-items: center;
              padding-left: 0px;
              padding-right: 0px;
            }
            .solutions-text106 {
              text-align: center;
            }
            .solutions-locations-container {
              margin-bottom: 0px;
              justify-content: center;
            }
            .solutions-location-1 {
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Solutions
