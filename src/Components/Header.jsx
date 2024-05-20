import '../Components/Header.css';
function Header() {
    return (
      <body>
      <header class="header">
          <div class="logo">
              <span>РекАвто</span>
              <small>Автозапчасти</small>
          </div>
          <button class="catalog-button">Каталог</button>
          <div class="search-bar">
              <input type="text" placeholder="Артикул или номер детали"/>
              <button class="search-button">Найти</button>
          </div>
          <div class="icon-links">
              <a href="#">о нас</a>
              <a href="#">контакты</a>
              <a href="#">корзина</a>
              <a href="#">войти</a>
          </div>
      </header>
  </body>
    );
}
 
export default Header;