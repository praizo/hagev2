import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import backIcon from '../../../assests/backIcon.svg';
import facebook from '../../../assests/blackFacebook.svg';
import copyLink from '../../../assests/copyLink.svg';
import twitter from '../../../assests/blackTwitter.svg';
import linkedin from '../../../assests/blackLinkedIn.svg';
import noImage from '../../../assests/noBlogImage.png';
import secondImage from '../../../assests/IMG-20250311-WA0003.jpg';

const BlogPostContentFeatures = ({ post }) => {
  const [showCopyPopup, setShowCopyPopup] = useState(false);

  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopyPopup(true);
    setTimeout(() => {
      setShowCopyPopup(false);
    }, 2000); // Popup will disappear after 2 seconds
  };

  const imageUrl =
    post.attributes &&
    post.attributes.coverImage &&
    post.attributes.coverImage.data
      ? post.attributes.coverImage.data.attributes.url
      : noImage;

  return (
    <div className=" pt-40 xl:pt-44 ">
      <div className="px-4 md:px-8 xl:px-16 md:py-4">
        <div className="flex flex-col items-center w-full">
          <div className="xl:w-[70%]">
            <button
              onClick={goBackHandler}
              className="flex items-center font-light mb-6"
            >
              <img src={backIcon} alt="back" />
              <span className="px-2">Back</span>
            </button>
            <h1 className="font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
              {post.attributes && post.attributes.blogTitle}
            </h1>
            <div className="md:flex justify-between my-8 md:my-12">
              <div>
                <h4 className="text-sm font-semibold mb-1.5">
                  {post.attributes && post.attributes.author}
                </h4>

                <div className="flex items-center text-sm font-light">
                  <span>
                    {post.attributes && post.attributes.publishedDate}
                  </span>

                  <div className="w-1 h-1 bg-black rounded-full mx-2"></div>

                  <span>{post.attributes && post.attributes.readTime}</span>
                </div>
              </div>

              <ul className="mt-6">
                <div className="flex  items-center">
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <img src={copyLink} alt="copy" onClick={handleCopyLink} />
                  </li>
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <a
                      href="https://www.instagram.com/tryhage/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={facebook} alt="facebook" />
                    </a>
                  </li>
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <a
                      href="https://x.com/tryhagetoday"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={twitter} alt="twitter" />
                    </a>
                  </li>
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <a
                      href="https://www.linkedin.com/company/naijawaysglobal/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} alt="linkedin" />
                    </a>
                  </li>
                </div>

                {showCopyPopup && (
                  <div className="text-xs text-secondary-200 mt-2">
                    Link copied!
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>

        <img
          src={imageUrl}
          alt="blog"
          className="w-full md:h-[37.5rem] object-cover object-center"
        />

        <div className="flex justify-center items-center mb-12">
          <div className="">
            <div className="prose prose-lg">
              {/* <ReactMarkdown>{post.attributes.blogContent}</ReactMarkdown> */}

              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <h2>Building the Bridge: How Unity and Connectivity Can Empower Africa and Its Diaspora</h2>
                    <p>As the founder and CEO of Hage Technologies, my mission is clear: to contribute to a united and empowered Africa. I believe in the transformative power of a connected supply chain and logistics ecosystem to bridge gaps, foster trade, and strengthen the ties between Africa and its diaspora. This vision is not just aspirational; it is achievable...</p>
                    <h3>Lessons from North America and Europe</h3>
                    <p>North America and Europe offer compelling examples of how regional unity and connectivity can drive growth and prosperity...</p>
                  <ul class="green-list">
                      <li><strong>Trade Integration:</strong> The European Union (EU) has demonstrated how removing barriers to trade can unlock unprecedented economic potential...</li>
                      <li><strong>Infrastructure Development:</strong> Europe’s transnational transportation networks, like the Trans-European Transport Network (TEN-T), have strengthened connectivity...</li>
                      <li><strong>Diaspora Engagement:</strong> North America and Europe have successfully leveraged their diaspora populations...</li>
                    </ul>
                    <img src="${secondImage}" alt="Second Image" style="width: 100%; height: auto; margin-top: 20px;"/>
                    <h3>How Africa and Its Diaspora Can Thrive Through Unity and Connectivity</h3>
                   <ul class="green-list">
                      <li><strong>Technology as a Catalyst:</strong> Digital platforms can bridge the gap between Africa and its diaspora by enabling seamless communication...</li>
                      <li><strong>Logistics Ecosystems:</strong> Efficient logistics are the backbone of trade and connectivity...</li>
                      <li><strong>Collaborative Policy Frameworks:</strong> Governments, private sectors, and international organizations must work together...</li>
                      <li><strong>Diaspora-Led Initiatives:</strong> Programs like Ethiopia’s diaspora bond and Nigeria’s diaspora commission are excellent examples...</li>
                    </ul>
                    <p>This is more than a vision—it’s a movement. At Hage Technologies, we are proud to contribute to this transformation by empowering African businesses...</p>
                    <p><a href="mailto:hello@hage.com">Join us on this journey</a> to make a difference. Follow @tryhage and explore our work at  <a href="https://tryhage.com/">www.tryhage.com</a>  .</p>
                    <h4>Instagram caption</h4>
                    <p>🌍  Africa’s future is bright, but unity and connectivity are the keys to unlocking its full potential. At Hage Technologies, we’re building sustainable logistics and trade solutions to bridge gaps, foster growth, and connect Africa to the world.</p>

                    <p>
                    From empowering African businesses to strengthening ties with our diaspora, this is more than a mission—it’s a movement. Let’s learn from the success of others and create a future where Africa thrives.
                    </p>

                    <p>
                    Join us on this journey—follow @tryhage and visit <a href="https://tryhage.com/">www.tryhage.com</a>. Together, we’ll shape the future Africa deserves. ✨ #UnitedAfrica #EmpowerAfrica #HageTechnologies
                    </p>
                  `,
                }}
              />
            </div>
            <div className="mt-12 md:mt-20">
              <h3 className="text-lg font-semibold">Share this post</h3>

              <ul className="mt-6">
                <div className="flex  items-center">
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <img src={copyLink} alt="copy" onClick={handleCopyLink} />
                  </li>
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <a
                      href="https://www.instagram.com/tryhage/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={facebook} alt="facebook" />
                    </a>
                  </li>
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <a
                      href="https://x.com/tryhagetoday"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={twitter} alt="twitter" />
                    </a>
                  </li>
                  <li className="p-1 bg-[#F4F4F4] rounded-full mx-2 cursor-pointer">
                    <a
                      href="https://www.linkedin.com/company/naijawaysglobal/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} alt="linkedin" />
                    </a>
                  </li>
                </div>

                {showCopyPopup && (
                  <div className="text-xs text-secondary-200 mt-2">
                    Link copied!
                  </div>
                )}
              </ul>
            </div>

            <div className="border-t border-black my-12 md:my-16"></div>

            <div>
              <div>
                <h4 className="text-sm font-semibold mb-1.5">
                  {post.attributes && post.attributes.author}
                </h4>

                <div className="flex items-center text-sm font-light">
                  <span>CEO/Founder, Hage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContentFeatures;
