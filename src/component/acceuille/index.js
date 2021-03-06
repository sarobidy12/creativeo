import React  from 'react';
import nl2br from 'react-newline-to-break';
import {Link} from 'react-router-dom';
import MetaTags from 'react-meta-tags';

const Acceuille=()=>{

    return (
        <div>

        <MetaTags>
            <title>Creativeo : {JSON.parse(localStorage.getItem('bienvenu')).titre}</title>
            <meta name="description" content={JSON.parse(localStorage.getItem('bienvenu')).meta_description} />
            <meta property="og:title" content={JSON.parse(localStorage.getItem('bienvenu')).titre} />
            <meta property="og:image" content="/images/contenu/home_hero.jpeg" />
        </MetaTags>

            <div className='hero_home'>
                <div className='hero_gb float-left'>
                    <img src='/images/contenu/home_hero.jpeg'  alt="home_hero"  data-aos='fade-right'/>
                </div>
                <div className='hero_content float-left'>
                    <h1 className='Playball' data-aos='fade-left' >
                        {JSON.parse(localStorage.getItem('bienvenu')).titre}
                    </h1>
                    <p className='Engagement' data-aos='fade-left'>
                        {nl2br(JSON.parse(localStorage.getItem('bienvenu')).contenu.substring(0,250)+'...')}
                        <Link to='/bienvenu'>
                            Lire la suite 
                        </Link>
                    </p>
                </div>
            </div>

            <h1 className='Playball slogant' >
                {nl2br(JSON.parse(localStorage.getItem('website')).slogant)}
            </h1>
            

            <div className='activite'>

                <div className='bg_right'>

                </div>

                <div className='active_content'>

                        <div className='active_link' data-aos='fade-up'>
                            <Link to='/formation-et-ateliers'>
                                    <img src='/images/formation_atelier.jpeg'  alt="formation_atelier" />
                                    <div className='bar_activite'></div>
                                    <h1 className='Engagement'>
                                        FORMATIONS ET ATELIERS
                                    </h1>
                            </Link>
                        </div>
                
                        <div className='active_link' data-aos='fade-up'>
                            <Link to='/conference'>
                                    <img src='/images/conference.jpeg' alt="conference"/>
                                    <div className='bar_activite'></div>
                                    <h1 className='Engagement'>
                                        CONFERENCES ET RETRAITES
                                    </h1>
                            </Link>
                        </div>
 
                        <div className='active_link' data-aos='fade-up'>
                            <Link to='/webinar'>
                                    <img src='/images/webinar.jpg'  alt="webinar" />
                                    <div className='bar_activite'></div>
                                    <h1 className='Engagement'>
                                        WEBINAR ET APPLICATION DEVELOPPEMENT PERSONNEL
                                    </h1>
                            </Link>
                        </div>

                </div>
            </div>

            <div className='apropos'>

                    <div className='img_apropos float-left' data-aos='fade-right'>
                        <img src='/images/nathalie.jpg'  alt="nathalie" />
                    </div>

                    <div className='apropos_content float-left' >
                        <h1  className='Playball' data-aos='fade-left'>
                           {nl2br(JSON.parse(localStorage.getItem('nathalie')).titre)}
                        </h1>
                       <p className='Engagement'  data-aos='fade-left'>
                           {nl2br(JSON.parse(localStorage.getItem('nathalie')).contenu.substring(0,250)+'...')}
                            <Link to='/apropos'>
                                Lire la suite 
                            </Link>
                       </p>
                    </div>
            </div>

        </div>
    ); 

  }
export default Acceuille;
