import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard1 = (props) => {
  return (
    <>
      <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="blog-post-card1-image"
        />
        <div className="blog-post-card1-container">
          <h3 className="blog-post-card1-text Card-Heading">{props.title}</h3>
          <span className="blog-post-card1-text1 Content">
            {props.description}
          </span>
          <div className="blog-post-card1-container1">
            <div className="blog-post-card1-profile">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="blog-post-card1-icon"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <span className="blog-post-card1-text2 Card-Text">
                {props.author}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card1-blog-post-card {
            width: auto;
            display: flex;
            overflow: hidden;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-post-card1-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card1-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
          }
          .blog-post-card1-container {
            display: flex;
            padding: 32px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-post-card1-text {
            margin-bottom: 32px;
          }
          .blog-post-card1-text1 {
            color: var(--dl-color-gray-black);
            margin-bottom: 32px;
          }
          .blog-post-card1-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card1-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-post-card1-icon {
            width: 50px;
            height: 50px;
          }
          .blog-post-card1-text2 {
            margin-left: var(--dl-space-space-halfunit);
          }

          @media (max-width: 991px) {
            .blog-post-card1-image {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard1.defaultProps = {
  rootClassName: '',
  author: 'LinkedIn',
  image_src:
    'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI4fHxhdmF0YXJ8ZW58MHx8fHwxNjY4NDkzNDE0&ixlib=rb-4.0.3&h=400',
  description: 'dfgdgdfg',
  image_alt: 'image',
  title: 'Jane Doe',
}

BlogPostCard1.propTypes = {
  rootClassName: PropTypes.string,
  author: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
}

export default BlogPostCard1
