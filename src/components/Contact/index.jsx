import React, { forwardRef } from 'react';
import './Contact.scss';

const Contact = (_props, ref) => (
  <section id='contact' ref={ref}>
    <h2 className='heading'>Contact Me</h2>
    <div className='content'>
      <a className='contact' href='mailto:huangeric.j@gmail.com'>
        <span className='icon'><i className='bi bi-envelope-fill' /></span>
        <span>Email: huangeric.j@gmail.com</span>
      </a>
      <a className='contact' href='https://github.com/iRiceCrispy' target='_blank' rel='noreferrer'>
        <span className='icon'><i className='bi bi-github' /></span>
        <span>GitHub</span>
      </a>
      <a className='contact' href='https://www.linkedin.com/in/erichuang-97/' target='_blank' rel='noreferrer'>
        <span className='icon'><i className='bi bi-linkedin' /></span>
        <span>LinkedIn</span>
      </a>
    </div>
  </section>
);

export default forwardRef(Contact);
