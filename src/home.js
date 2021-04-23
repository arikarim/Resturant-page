const renderHome = (() =>{
  //container ===>
  const container = document.getElementById('content');

  const home = document.createElement('div');

  home.classList.add('home-content');
  home.innerHTML = `
  <div class='container'>
    <div class='row col-6 mx-auto'>
      <h1 class='mx-auto'>Kurdistan Resturant</h1>
      <h4>Come and tase some delicious local foods</h4>
    </div>
  </div>`;

  container.appendChild(home)
})();

export {renderHome};