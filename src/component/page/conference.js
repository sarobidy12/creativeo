import React , {useEffect, useState} from 'react';
import nl2br from 'react-newline-to-break';
import {Link} from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import AnimateHeight from 'react-animate-height';

const Conference=()=>{
 
    useEffect(()=>{ 
        
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })

        // document.getElementById("hero_bg").animate([
        //     { height: '0px' }, 
        //     { height: '30vh' }
        //   ], { 
        //     duration: 1000,
        //   });
    })
   
    return (
        <div>

        <MetaTags>
            <title>Creativeo : {JSON.parse(localStorage.getItem('conference')).titre}</title>
            <meta name="description" content={JSON.parse(localStorage.getItem('conference')).meta_description} />
            <meta property="og:title" content={JSON.parse(localStorage.getItem('conference')).titre} />
            <meta property="og:image" content="/images/formation_atelier.jpeg" />
        </MetaTags>

            <div className='hero_home'>

                <div className='hero_gb float-left'>
                    <img src='/images/formation_atelier.jpeg' data-aos='fade-right'/>
                </div>

                <div className='hero_content float-left '>
                    <h1 className='Playball' data-aos='fade-left' >
                        {JSON.parse(localStorage.getItem('conference')).titre}
                    </h1>
                </div>

            </div>

            <div className='bg_contenu' style={{
                backgroundImage: "url('/images/formation_atelier.jpeg')"
            }}>
                <div style={{
                    width:'100%',
                    height:'100%',
                    backgroundColor:'#aaaaaa85',
                    padding:'20vh 0'

                }} >
                        <p className='Engagement' data-aos='zoom-in'>
                            {nl2br(JSON.parse(localStorage.getItem('conference')).contenu)}
                        </p>
                </div>
            </div>
        </div>
    ); 

  }
export default Conference;
