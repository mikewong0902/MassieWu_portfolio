import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import ExpList from '../components/ExpList/components/ExpList.js'

const HomeIndex = () => {
  const siteTitle = 'Massie'
  const siteDescription = 'Math teacher Massie Wu'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h3>
              ✨6-year UK Life, A-LEVEL Math highest score A*, More than 3 years
              teaching experience, HKU Master Electrical Engineering 👩🏻‍🏭
            </h3>
          </header>
          <p>
            🐱 OCR A level/GCSE Math; YCT Mandarin; Given Materials from
            students
            <br />
            <br />
            🤗 Based on the Material and student levels to customize the study
            plan, Mainly focused on the part which student would like to achieve
            most, Explain with Real-life applications, Student may better get
            involve and understand the key points, Learn interestingly and
            funnily ^ ^
          </p>
        </section>

        <section id="two">
          <h2>Qualifications</h2>
          <Gallery />
        </section>

        <section id="Experience">
          <h2>Experience</h2>
          <ExpList />
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <div className="row">
            <div className="12u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Hong Kong Island, Hong Kong
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:massiew97@gmail.com">massiew97@gmail.com</a>
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  +852 9605 7932
                </li>
                <li>
                  <h3 className="icon fa-whatsapp">
                    <span className="label">Whatsapp</span>
                  </h3>
                  +852 9605 7932
                </li>
                <li>
                  <h3 className="icon fa-weixin">
                    <span className="label">Wechat</span>
                  </h3>
                  MassieMQ97
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
