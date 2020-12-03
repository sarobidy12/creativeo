import React , {  useEffect,useState } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import axios from 'axios';
import localhost from './_config';
import './App.css';

import Acceuille from './component/acceuille/index';
import Bienvenu from './component/page/bienvenu';
import Apropos from './component/page/apropos';

import Conference from './component/page/conference';
import Formation from './component/page/formation';
import Webinar from './component/page/webinar';

function App() {

  const [stop1,setStop1]= useState(0);
  const [loader,setloader]= useState(0);
  const [contenu,setContenu]= useState([]);

  useEffect(()=>{
    Aos.init({
      duration : 1500
    });

  },[])
  
  useEffect(()=>{
    
    if(stop1 === 0){

      let formData= new FormData();
      formData.append("text",'text');
      const url= localhost+'getData.php'; 
      axios.post(url,formData)
      .then((res)=>{

              setContenu(res.data);
              setStop1(1);
      })
      .catch((error) => {
              setloader(2);
      })

    }

    separationCotenu();
     
  })
     

    const separationCotenu = ()=>{

      if(stop1 === 1){

        var website={};
        var header={};
        var contact={};
        var linkSocial={};
        var bienvenu={};
        var formation={};
        var webinar={};
        var conference={};
        var nathalie={};

        contenu.forEach(element=>{
 
          if(element.type === 'website'){
            
              website[element.position]=element.contenu;
              localStorage.setItem('website',JSON.stringify(website));

          }else if(element.type === 'header'){//
 
              header[element.position]=element.contenu;
              localStorage.setItem('header',JSON.stringify(header));

          }else if(element.type === 'contact'){//

              contact[element.position]=element.contenu;
              localStorage.setItem('contact',JSON.stringify(contact));

          }else if(element.type === 'linkSocial'){//

              linkSocial[element.position]=element.contenu;
              localStorage.setItem('linkSocial',JSON.stringify(linkSocial));

          }else if(element.type === 'bienvenu'){
 
              bienvenu[element.position]=element.contenu;
              localStorage.setItem('bienvenu',JSON.stringify(bienvenu));

          }else if(element.type === 'formation'){
 
              formation[element.position]=element.contenu;
              localStorage.setItem('formation',JSON.stringify(formation));

          }else if(element.type === 'webinar'){
              
              webinar[element.position]=element.contenu;
              localStorage.setItem('webinar',JSON.stringify(webinar));

          }else if(element.type === 'conference'){
              
              conference[element.position]=element.contenu;
              localStorage.setItem('conference',JSON.stringify(conference));

          }else if(element.type === 'nathalie'){
              
              nathalie[element.position]=element.contenu;
              localStorage.setItem('nathalie',JSON.stringify(nathalie));

          }

        })

        setloader(1);

      }

    }

    const ViewRender =()=>{

        if(loader === 1){
 
          return  <BrowserRouter>
                      <Route path="/" component={Acceuille} exact />
                      <Route path="/bienvenu" component={Bienvenu}  />
                      <Route path="/apropos" component={Apropos}  />
                      <Route path="/formation-et-ateliers" component={Formation}  />
                      <Route path="/conference" component={Conference}  />
                      <Route path="/webinar" component={Webinar}  />
                  </BrowserRouter>

        }else if(loader === 2){

          return <div className='gif_home'>
                    <img src='/images/error.gif'/>
                    <h1>
                        Une erreur est suvernu
                    </h1>
                    <button   onClick={()=>{window.location.reload()}}>
                          Recharger la page
                    </button>
                 </div>

        }else{

          return <div className='gif_home'>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <img src='/images/logo.png'/>
                  <br/>
                  <br/>
                  <img src='/images/loader_io.gif' style={{
                      width:'7.5%'
                  }}/>
                </div>

        }
        
    }

      return (
          <div>
            {ViewRender()}
          </div>
        ); 
  
  }

export default App;

