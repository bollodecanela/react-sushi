import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

function Delivery() {
  return (
    <div className="container">
      <div className="delivery">
        <h1>
          Доставка еды в Невельске из ресторана японской кухни "Fuji Sushi"
        </h1>
        <div className="info">
          <div className="delivery_text">
            <p>
              Бывают дни, когда для получения удовольствия достаточно бургера
              навынос. Мы считаем это нормальным, но одновременно понимаем – для
              особых моментов необходим совершенно иной формат. Поэтому открывай
              для себя настоящую высокую кухню «Fuji Sushi», где в комплекте к
              изысканному меню прилагается бесплатная доставка!
            </p>
            <p>Привезем ваш заказ в любую точку города!</p>
            <p>Часы работы доставки:</p>
            <p>Вс-Чт С 10:00 до 23:00, Пт-Сб С 10:00 до 24:00</p>
          </div>
          <div className="map">
            <h1>Мы находимся:</h1>
            <YMaps>
              <Map
                defaultState={{
                  center: [46.674021, 141.856023],
                  zoom: 18,
                }}
                height={400}
                width={500}
              >
                <Placemark geometry={[46.674021, 141.856023]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
