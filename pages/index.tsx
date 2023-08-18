import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import Facebook from "../components/icons/Facebook";
import Linkedin from "../components/icons/Linkedin";
import Github from "../components/icons/Github";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nicolás Anelli - WebDev & S.E.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="author" content="Nicolas Anelli" />
        <meta name="description" content="Nicolas Anelli is a web developer and software
  engineer that works with nodejs, react, java and php" />
      </Head>

      <main>
        <div className="background" />
        <section className="card">
          <div className="card-header" />
          <div className="card-profile">
            <Image src="/avatar.jpg" alt="Nicolas Anelli's avatar" width={100} height={100} />
          </div>
          <div className="card-content">
            <h1>Nicolás Anelli</h1>
            <h3>Web Developer | Software Engineer</h3>
            <p>Currently working on web development using technologies such as node.js, react, and java.
              In love for CI and CD integrations, docker for dev, stage and prod environments.</p>
          </div>
          <div className="card-links">
            <ul className="links">
              <li>
                <a href="https://www.linkedin.com/in/nicolasanelli/" target="_blank" rel="noreferrer">
                  <Linkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/nicolasanelli" target="_blank" rel="noreferrer">
                  <Github />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/nicolas.anelli.1" target="_blank" rel="noreferrer">
                  <Facebook />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
