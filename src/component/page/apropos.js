import React , {useEffect} from 'react';
import nl2br from 'react-newline-to-break';
import MetaTags from 'react-meta-tags';

const Bienvenu=()=>{
 
    useEffect(()=>{ 

        window.scrollTo({
            top:0,
            behavior:'smooth'
        })

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
                    <img src='/images/nathalie.jpg' data-aos='zoom-in'  alt="nathalie view"/>
                </div>

                <div className='welcome_content'>
                    <h1 className='Playball' data-aos='fade-up' >
                        {nl2br(JSON.parse(localStorage.getItem('nathalie')).titre)}
                    </h1>
                    <p className='Engagement' data-aos='fade-up'>
                        {nl2br(JSON.parse(localStorage.getItem('nathalie')).contenu)}
                    </p>
                </div>

               
        </div>
    ); 

  }
export default Bienvenu;
