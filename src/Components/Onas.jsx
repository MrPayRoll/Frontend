import React from 'react';
import '../Components/Onas.css';

const Onas = () => {
    return (
        <div className="container-onas">
            <h1>О Нас</h1>
            <p>
                Добро пожаловать в РекАвто!
                Мы - команда профессионалов в мире автомобильных запчастей, преданная идеалу обеспечить ваш автомобиль всем необходимым для бесперебойного функционирования. С момента нашего основания мы поставили перед собой цель стать надежным партнером для каждого владельца автомобиля, предлагая самые качественные и надежные запчасти на рынке.
            </p>
            <h2>Наша Миссия</h2>
            <p>
                Миссия РекАвто - сделать процесс приобретения автозапчастей простым, удобным и доступным для каждого клиента. Мы стремимся предложить не только широкий ассортимент товаров, но и создать доверительные отношения с нашими клиентами, основанные на качественном обслуживании и превосходном опыте покупки.
            </p>
            <h2>Наши Принципы</h2>
            <ul>
                <li>
                    Качество Превыше Всего: Мы тщательно отбираем поставщиков и предлагаем только те запчасти, которые прошли наши строгие критерии качества.
                </li>
                <li>
                    Профессионализм и Экспертиза: Наша команда состоит из опытных специалистов, готовых помочь вам подобрать идеальное решение для вашего автомобиля.
                </li>
            </ul>
            <h2>Преимущества нашей компании</h2>
            <ul className="advantages">
                <li>Только сертифицированный товар</li>
                <li>Высокие стандарты обслуживания</li>
                <li>Широкий ассортимент в наличии и под заказ</li>
                <li>Мультиканальный контакт центр *****</li>
                <li>Бесплатный подбор запчастей</li>
                <li>Расширенное гарантийное обслуживание</li>
                <li>Доставка в самые оптимальные сроки</li>
                <li>Контроль качества продукции</li>
            </ul>
        </div>
    );
};

export default Onas;
