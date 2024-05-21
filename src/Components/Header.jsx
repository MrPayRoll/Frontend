import React, { useState } from 'react';
import '../Components/Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

function Header() {
const [isLoginOpen, setIsLoginOpen] = useState(false);
const [isRegisterOpen, setIsRegisterOpen] = useState(false);
const [loginEmail, setLoginEmail] = useState('');
const [loginPassword, setLoginPassword] = useState('');
const [registerEmail, setRegisterEmail] = useState('');
const [registerPassword, setRegisterPassword] = useState('');
const [username, setUsername] = useState('');

const toggleLogin = () => {
setIsLoginOpen(!isLoginOpen);
};

const toggleRegister = () => {
setIsRegisterOpen(!isRegisterOpen);
};

const handleLoginEmailChange = (e) => {
setLoginEmail(e.target.value);
};

const handleLoginPasswordChange = (e) => {
setLoginPassword(e.target.value);
};

const handleRegisterEmailChange = (e) => {
setRegisterEmail(e.target.value);
};

const handleRegisterPasswordChange = (e) => {
setRegisterPassword(e.target.value);
};
const handleLoginSubmit = (e) => {
e.preventDefault();
axios.post('https://5be5-94-141-124-60.ngrok-free.app/api/user/login', { email: loginEmail, password: loginPassword })
.then(response => {
console.log('Success:', response.data);
console.log('Username:', response.data.name);
setUsername(response.data.name);
setIsLoginOpen(false);
})
.catch(error => {
console.error('Error:', error);
});
};

const handleRegisterSubmit = (e) => {
e.preventDefault();
axios.post('https://5be5-94-141-124-60.ngrok-free.app/api/user/registration', { email: registerEmail, password: registerPassword })
.then(response => {
console.log('Success:', response.data);
console.log('Username:', response.data.name);
setUsername(response.data.name);
setIsRegisterOpen(false);
})
.catch(error => {
console.error('Error:', error);
});
};



return (
<body>
<header className="header">
<div className="logo">
<span>РекАвто</span>
<small>Автозапчасти</small>
</div>
<button className="catalog-button">Каталог</button>
<div className="search-bar">
<input type="text" placeholder="Артикул или номер детали" />
<button className="search-button">Найти</button>
</div>
<div className="icon-links">
<a href="#">
<i className="fas fa-info-circle"></i>
<span>о нас</span>
</a>
<a href="#">
<i className="fas fa-address-book"></i>
<span>контакты</span>
</a>
<a href="#">
<i className="fas fa-shopping-cart"></i>
<span>корзина</span>
</a>
{username ? ( // Проверка наличия имени пользователя
<span>{username}</span>
) : (
<a href="#" onClick={toggleLogin}>
<i className="fas fa-sign-in-alt"></i>
<span>войти</span>
</a>
)}

</div>
{isLoginOpen && (
<div className="popup-container">
<div className="popup login-popup">
<span className="close-button" onClick={() => setIsLoginOpen(false)}>
<i className="fas fa-times"></i>
</span>
<form onSubmit={handleLoginSubmit}>
<input type="email" placeholder="Email" value={loginEmail} onChange={handleLoginEmailChange} />
<input type="password" placeholder="Пароль" value={loginPassword} onChange={handleLoginPasswordChange} />
<button type="submit">Войти</button>
</form>
<p onClick={toggleRegister} className="register-link">Не зарегистрированы?</p>
</div>
</div>
)}
{isRegisterOpen && (
<div className="popup-container">
<div className="popup register-popup">
<span className="close-button" onClick={() => setIsRegisterOpen(false)}>
<i className="fas fa-times"></i>
</span>
<form onSubmit={handleRegisterSubmit}>
<input type="email" placeholder="Email" value={registerEmail} onChange={handleRegisterEmailChange} />
<input type="password" placeholder="Пароль" value={registerPassword} onChange={handleRegisterPasswordChange} />
<button type="submit">Зарегистрироваться</button>
</form>
</div>
</div>
)}
</header>
</body>
);
}

export default Header; 