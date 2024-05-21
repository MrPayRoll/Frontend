import React, { useState } from 'react';
import axios from 'axios';

function DetailForm() {
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [image, setImage] = useState(null);
const [error, setError] = useState(null);

const handleSubmit = async (e) => {
e.preventDefault();

try {
let imageData = null;
if (image) {
// Конвертировать изображение в base64
const reader = new FileReader();
reader.readAsDataURL(image);
reader.onload = () => {
imageData = reader.result.split(',')[1]; // Получаем только данные base64 без заголовка
// Отправить данные на сервер
sendData(imageData);
};
reader.onerror = () => {
console.error('Ошибка при чтении изображения.');
setError('Ошибка при чтении изображения.');
};
} else {
// Если изображение не выбрано, отправить без изображения
sendData(imageData);
}
} catch (error) {
console.error('Ошибка при создании детали:', error);
setError('Ошибка при создании детали');
// Обработка ошибки при создании детали
}
};

const sendData = async (imageData) => {
try {
const dataToSend = {
name: name,
price: price,
img: imageData
};

const response = await axios.post('https://393b-94-141-124-60.ngrok-free.app/api/detail/create', dataToSend);

console.log('Response:', response.data);
// Дополнительные действия после успешного создания детали
} catch (error) {
console.error('Ошибка при создании детали:', error);
setError('Ошибка при создании детали');
// Обработка ошибки при создании детали
} 
};

return (
<form onSubmit={handleSubmit}>
<label>
Название:
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>
</label>
<label>
Цена:
<input
type="number"
value={price}
onChange={(e) => setPrice(e.target.value)}
required
/>
</label>
<label>
Фото:
<input
type="file"
onChange={(e) => setImage(e.target.files[0])}
/>
</label>
<button type="submit">Создать деталь</button>
{error && <p style={{ color: 'red' }}>{error}</p>}
</form>
);
}

export default DetailForm;