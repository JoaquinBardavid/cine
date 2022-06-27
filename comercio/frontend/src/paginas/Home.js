import '../App.css'
import image from '../img/Joaco.jpeg'
import imageGero from '../img/Gero.jfif'
import imageNacho from '../img/Nacho.jpg'



export default function Home (){
    return (
      <>
      <div className='body'>
        <div className='Slider'>
          <ul>
            <li>
              <a href='https://github.com/JoaquinBardavid' target='_blank'>
                <img src = {image} alt='Joaquin Bardavid'
                style={{
                  width: 500,
                  height: 500,
              }} ></img>
              </a>
              </li>
              <li>
                <a href='https://github.com/Geox' target='_blank'>
                  <img src = {imageGero} alt='Geronimo Leon' 
                  style={{
                    width: 500,
                    height: 500,
                }}></img>
                </a>
              </li>
              <li>
                <a href='https://github.com/IgnacioJabif' target='_blank'>
                  <img src = {imageNacho} alt='Ignacio Jabif' 
                  style={{
                    width: 500,
                    height: 500,
                }}></img>
                </a>
              </li>
          </ul>
          </div>
      </div>
      </>
    );
  };