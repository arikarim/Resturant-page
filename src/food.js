import Kabab from './img/kababb.jpg';
import Kuba from './img/kuba.jpg';
import Sarupe from './img/sarupe.jpeg';
import Yaprax from './img/yaprax.png';

const foodpage = (() => {
  const contentContainer = document.querySelector('#content');
  const food = document.createElement('div');
  food.classList.add('container-fluid');
  food.setAttribute('id', 'menu');
  food.setAttribute('data-tab-content', '');

  food.innerHTML = `
  <div class='row mt-3 main-food'>
    <div class='col-12 col-md-6 d-flex py-3'>
      <div id='img1' class='col-6 image-food  img1'>
        
      </div>
      <div class='col-6 mx-2'>
        <h3 class='text-center'>KABAB</h3>
        <p>Kebabs are various cooked meat dishes with their origins in Middle Eastern cuisine. Numerous variants are popular around the world. In many parts of Asia, the Muslim world, and in Indian English and the languages of the Middle East, a kebab is any of a wide variety of grilled meat dishes. </p>
      </div>
    </div>

    <div class='col-12 col-md-6 d-flex py-3'>
      <div id='img2' class='col-6 image-food  img1'>
        
      </div>
      <div class='col-6 mx-2'>
        <h3 class='text-center'>KUBA</h3>
        <p>Kuba is a family of dishes based on spiced ground meat, onions, and grain, popular in Middle Eastern cuisine. In Levantine cuisine, kibbeh is usually made by pounding bulgur wheat together with meat into a fine paste and forming it into balls with toasted pine nuts and spices </p>
      </div>
    </div>

    <div class='col-12 col-md-6 d-flex py-3'>
      <div id='img3' class='col-6 image-food  img1'>
        
      </div>
      <div class='col-6 mx-2'>
        <h3 class='text-center'>Yaprakh</h3>
        <p>Yaprax(Dolma-as it is called in many countries) is a favorite Middle Eastern dish. It is made up of grape leaves,pepper,zucchini,eggplant,onions and tomatoes filled with spiced up rice. Well, this kind of one of the many types of Yaprax/Dolma.</p>
      </div>
    </div>

    <div class='col-12 col-md-6 d-flex py-3'>
      <div id='img4' class='col-6 image-food  img1'>
        
      </div>
      <div class='col-6 mx-2'>
        <h3 class='text-center'>Sarupe</h3>
        <p>Pacha (Sarupe in Kurdish) is a traditional dish made out of sheep skin filled with spiced rice, especially popular in the wintertime. “It was around 2:30 in the morning when four people came to our restaurant to eat pacha.</p>
      </div>
    </div>
  </div>`;
  contentContainer.appendChild(food);

  const img1 = new Image();
  img1.src = Kabab;
  img1.classList.add('image-food');
  const img11 = document.getElementById('img1');
  img11.appendChild(img1);

  const img2 = new Image();
  img2.src = Kuba;
  img2.classList.add('image-food');
  const img22 = document.getElementById('img2');
  img22.appendChild(img2);

  const img3 = new Image();
  img3.src = Yaprax;
  img3.classList.add('image-food');
  const img33 = document.getElementById('img3');
  img33.appendChild(img3);

  const img4 = new Image();
  img4.src = Sarupe;
  img4.classList.add('image-food');
  const img44 = document.getElementById('img4');
  img44.appendChild(img4);
})();
export default foodpage;