import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return ( 
    
    <>
    <section className='my-5'>
            <h1 id='about'> Who am I?</h1>
        </section><img src={coverImage} className='my-2' style={{ widht: "100%" }} alt="cover" />
    </>
    );
}
export default About;