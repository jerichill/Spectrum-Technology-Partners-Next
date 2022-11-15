import React from 'react'

import PropTypes from 'prop-types'

const Legal = (props) => {
  return (
    <>
      <div className={`legal-container ${props.rootClassName} `}>
        <div className="legal-container1">
          <span className="legal-text">
            <span>
              Copyright 2022
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://evolvesolutionsinc.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="legal-link"
            >
              Evolve Network Solutions
            </a>
            <span>
              ,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.fortifyits.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="legal-link1"
            >
              Fortify IT Services
            </a>
            <span>
              ,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://clarity5280.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="legal-link2"
            >
              Clarity IT
            </a>
            <span>
              , and
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.openmedium.biz"
              target="_blank"
              rel="noreferrer noopener"
              className="legal-link3"
            >
              OpenMedium  
            </a>
            <span>|  All rights reserved.</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .legal-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .legal-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .legal-text {
            font-size: 12px;
          }
          .legal-link {
            text-decoration: underline;
          }
          .legal-link1 {
            text-decoration: underline;
          }
          .legal-link2 {
            text-decoration: underline;
          }
          .legal-link3 {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  )
}

Legal.defaultProps = {
  rootClassName: '',
}

Legal.propTypes = {
  rootClassName: PropTypes.string,
}

export default Legal
