import './App.css';
import img1 from "../src/img/R.jpg";
import img2 from "../src/img/Bike-Monster.jpg";
import img3 from "../src/img/sm.jpg";
import img4 from "../src/img/OIP.jpg";
import img5 from "../src/img/guy.jpg";
import img6 from "../src/img/dude.jpg";

export default function App() {

  var gif = [
    img1, img2, img3, img4, img5, img6
  ];

  let counter = 0
  const setImage = () => {
    document.getElementById("carousel-gif").src = gif[counter];
    counter = (counter+1) % gif.length;
  }

    const pixelate = () => {
      if(document.getElementById("carousel-gif")) {
        document.getElementById("carousel-gif").style.border = '5px solid black';
      }
      clearInterval(pixelate, 2000);
}

  setInterval(setImage, 3000);
  setInterval(pixelate, 1500);
  clearInterval(pixelate, 2000);

return (<>
  <div className='App'>
    <div className='App-header'>
    <section>
      <img className='gifImg' id="carousel-gif"></img>
    </section>
    </div>
  </div>
  </>)
}
