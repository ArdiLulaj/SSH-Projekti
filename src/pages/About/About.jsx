import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About LEXO</h2>
            <p className='fs-17'>Mirë se vini në LEXO, destinacioni juaj i preferuar për të gjitha gjërat që lidhen me librat! Faqja jonë e internetit është e përkushtuar për të ndihmuar adhuruesit e librave të zbulojnë lexime të reja dhe emocionuese, të lidhen me lexues të tjerë dhe të eksplorojnë botën e letërsisë.</p>
            <p className='fs-17'>Pra, pse të presim? Shfletoni faqen tonë, eksploroni përmbajtjen tonë dhe zbuloni gëzimin e leximit me LEXO.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
