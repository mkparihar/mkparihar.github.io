import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/Mohit.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Mohith K Parihar</h2>
        <p><a href="mailto:mohitparihar1969@gmail.com">mohitparihar1969@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mohith. I like building things. Undergrad at PES Institute of Technology. Passionate about Electronics and Space. </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      {/* <p className="copyright">&copy; /home/accts/lhn7/canoe/intern-project/Yolo/darknet/darknet detector test /home/accts/lhn7/canoe/intern-project/Yolo/darknet/trainBlurredTB/blurred.data /home/accts/lhn7/canoe/intern-project/Yolo/darknet/trainBlurredTB/blurred.cfg /home/accts/lhn7/canoe/intern-project/Yolo/darknet/trainBlurredTB/backup/original_best.weights -thresh 0.25 static/test.png D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p> */}
    </section>
  </section>
);

export default Nav;
