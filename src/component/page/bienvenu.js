import React , {useEffect, useState} from 'react';
import nl2br from 'react-newline-to-break';
import {Link} from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import AnimateHeight from 'react-animate-height';

const Bienvenu=()=>{
 
    useEffect(()=>{ 
        document.getElementById("hero_bg").animate([
            { height: '0px' }, 
            { height: '30vh' }
          ], { 
            duration: 1000,
          });
    })
   
    return (
        <div>

            <MetaTags>
                <title>Creativeo : {JSON.parse(localStorage.getItem('bienvenu')).titre}</title>
                <meta name="description" content={JSON.parse(localStorage.getItem('bienvenu')).meta_description} />
                <meta property="og:title" content={JSON.parse(localStorage.getItem('bienvenu')).titre} />
                <meta property="og:image" content="/images/contenu/home_hero.jpeg" />
            </MetaTags>
    
                <div id='hero_bg'>
                    <img src='/images/contenu/home_hero.jpeg' data-aos='fade-up'/>
                </div>

                <div className='welcome_content'>
                    <h1 className='Playball' data-aos='fade-up' >
                        {JSON.parse(localStorage.getItem('bienvenu')).titre}
                    </h1>
                    <p className='Engagement' data-aos='fade-up'>
                        {nl2br(JSON.parse(localStorage.getItem('bienvenu')).contenu)}
                    </p>
                </div>

        </div>
    ); 

  }
export default Bienvenu;
