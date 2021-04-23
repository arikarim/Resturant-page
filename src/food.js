import Kabab from './img/kababb.jpg'

const foodpage = (() => {
  const contentContainer = document.querySelector("#content");
  const food = document.createElement("div");
  food.classList.add('container-fluid')
  food.setAttribute("id", "menu");
  food.setAttribute("data-tab-content", "");
  food.innerHTML = `
  <div class='row'>
    <div class='col-12 col-md-6 d-flex'>
      <div class='col-6 image-food'>
        <img class='img-fluid' src="./img/kuba.jpg" alt="" />
      </div>
      <div class='col-6'>
        <h3 class='text-center'>KABAB</h3>
        <p>Kebabs are various cooked meat dishes with their origins in Middle Eastern cuisine. Numerous variants are popular around the world. In many parts of Asia, the Muslim world, and in Indian English and the languages of the Middle East, a kebab is any of a wide variety of grilled meat dishes. </p>
      </div>
    </div>
  </div>`;
  contentContainer.appendChild(food)
})();
export {foodpage};