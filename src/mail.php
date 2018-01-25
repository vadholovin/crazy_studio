<?php

// email address
$to = "vadim@crazy.studio"; //получатель spheric.zoo@gmail.com vadim@crazy.studio
$email = "noreply@crazy.studio"; //отправитель
$subject = $_POST['subject'];


if($to) {
  $name = $_POST['name'];
  
  $message = "<strong>1 Общая информация</strong><br>\n";
  $message .= "<strong>Имя контактного лица:</strong> {$name}<br>\n";
  $message .= "<strong>Полное название компании и адрес сайта (если есть):</strong> {$_POST['company']}<br>\n";
  $message .= "<strong>Телефон:</strong> {$_POST['phone']}<br>\n";
  $message .= "<strong>Viber:</strong> {$_POST['viber']}<br>\n";
  $message .= "<strong>Whatsapp:</strong> {$_POST['whatsapp']}<br>\n";
  $message .= "<strong>Telegram:</strong> {$_POST['telegram']}<br>\n";
  $message .= "<strong>Email:</strong> {$_POST['email']}<br>\n";
  $message .= "<strong>Skype:</strong> {$_POST['skype']}<br>\n";
  $message .= "<strong>Каковы планируемые сроки проекта?:</strong> {$_POST['days']}<br>\n";
  $message .= "<strong>Бюджет проекта:</strong> {$_POST['budget']}<br>\n";
  $message .= "<strong>Работать по договору с юр. лицом:</strong> {$_POST['contract']}<br>\n";
  $message .= "_________________________________________________________________<br>\n";
  $message .= "<strong>2 Информация о компании</strong><br>\n";
  $message .= "<strong>Укажите область деятельности компании:</strong> {$_POST['area']}<br>\n";
  $message .= "<strong>Укажите ссылки на сайты ваших прямых или косвенных конкурентов:</strong> {$_POST['competitors-link']}<br>\n";
  $message .= "<strong>Оцените их:</strong> {$_POST['competitors']}<br>\n";
  $message .= "<strong>Какие есть ключевые отличия от конкурентов, которые надо выделить?:</strong> {$_POST['differences']}<br>\n";
  $message .= "<strong>География работы компании:</strong> {$_POST['geo']}<br>\n";
  $message .= "_________________________________________________________________<br>\n";
  $message .= "<strong>3 Целевая аудитория</strong><br>\n";
  $message .= "<strong>Должны ли мы сами определить целевую аудиторию?:</strong> {$_POST['is-target']}<br>\n";
  $message .= "<strong>Если нет, опишите группы целевой аудитории:</strong> {$_POST['audience']}<br>\n";
  $message .= "<strong>Каких результатов вы хотите добиться с помощью нового сайта?:</strong> {$_POST['results']}<br>\n";
  $message .= "<strong>Что хотят получить от вашего сайта посетители?:</strong> {$_POST['client-desires']}<br>\n";
  $message .= "_________________________________________________________________<br>\n";
  $message .= "<strong>4 Техническое задание</strong><br>\n";
  $message .= "<strong>Есть ли у вас дизайн сайта?:</strong> {$_POST['site-design']}<br>\n";
  $message .= "<strong>CMS сайта?:</strong> {$_POST['cms']}<br>\n";
  $message .= "------<br>\n";
  $message .= "<strong>Функциональные возможности сайта:</strong><br>\n";
  $message .= "<strong>a) Электронная коммерция</strong><br>\n";
  $message .= "<strong>Онлайн-платежи:</strong> {$_POST['online-pay']}<br>\n";
  $message .= "<strong>Акции и скидки:</strong> {$_POST['stock']}<br>\n";
  $message .= "<strong>Корзина:</strong> {$_POST['basket']}<br>\n";
  $message .= "<strong>Интеграция 1С:</strong> {$_POST['include-1c']}<br>\n";
  $message .= "<strong>Информация о доставке:</strong> {$_POST['delivery']}<br>\n";
  $message .= "<strong>б) Взаимодействие с клиентом</strong><br>\n";
  $message .= "<strong>Публикация статей (блог):</strong> {$_POST['blog']}<br>\n";
  $message .= "<strong>Подписка на рассылку новостей:</strong> {$_POST['subscribe']}<br>\n";
  $message .= "<strong>Формы обратной связи:</strong> {$_POST['feedback']}<br>\n";
  $message .= "<strong>Калькулятор:</strong> {$_POST['calc']}<br>\n";
  $message .= "<strong>Отзывы:</strong> {$_POST['reviews']}<br>\n";
  $message .= "<strong>Чат:</strong> {$_POST['chat']}<br>\n";
  $message .= "<strong>Личный кабинет:</strong> {$_POST['personal-area']}<br>\n";
  $message .= "<strong>в) Другое</strong><br>\n";
  $message .= "<strong>Размещение файлов для скачивания:</strong> {$_POST['downloads']}<br>\n";
  $message .= "<strong>Фотогалерея:</strong> {$_POST['gallery']}<br>\n";
  $message .= "<strong>Поиск по сайту:</strong> {$_POST['search']}<br>\n";
  $message .= "<strong>Система помощи:</strong> {$_POST['helper']}<br>\n";
  $message .= "<strong>Интеграция CRM:</strong> {$_POST['crm']}<br>\n";
  $message .= "<strong>Мультиязычный сайт:</strong> {$_POST['multi-lang']}<br>\n";
  $message .= "------<br>\n";
  $message .= "<strong>Перечислите все информационные блоки, которые обязательно должны присутствовать на главной и на внутренних страницах сайта:</strong> {$_POST['info-blocks']}<br>\n";
  $message .= "<strong>Есть ли у вас готовый контент для наполнения сайта?:</strong> {$_POST['own-content']}<br>\n";
  $message .= "<strong>Количество товаров на сайте:</strong> {$_POST['goods']}<br>\n";
  $message .= "<strong>Добавление товара:</strong> {$_POST['add-goods']}<br>\n";
  $message .= "<strong>Укажите все, что, по-вашему мнению, может уточнить задачу по созданию сайта:</strong> {$_POST['tech-notes']}<br>\n";
  $message .= "_________________________________________________________________<br>\n";
  $message .= "<strong>5 Компоновка и дизайн</strong><br>\n";
  $message .= "<strong>Укажите адреса сайтов, дизайн которых вам нравится:</strong> {$_POST['cool-design']}<br>\n";
  $message .= "<strong>Укажите адреса сайтов, дизайн которых вам НЕ нравится:</strong> {$_POST['shit-design']}<br>\n";
  $message .= "<strong>Общая композиция сайта:</strong> {$_POST['composition']}<br>\n";
  $message .= "<strong>Другое:</strong> {$_POST['composition-other']}<br>\n";
  $message .= "<strong>Настроение и ассоциации, которые должен вызывать дизайн:</strong> {$_POST['mood']}<br>\n";
  $message .= "<strong>Другое:</strong> {$_POST['mood-other']}<br>\n";
  $message .= "<strong>Цветовая гамма и насыщенность:</strong> {$_POST['gamma']}<br>\n";
  $message .= "<strong>Другое:</strong> {$_POST['gamma-other']}<br>\n";
  $message .= "<strong>Укажите все, что, по-вашему мнению, может уточнить задачу по созданию дизайна:</strong> {$_POST['multi-lang']}<br>\n";
  
    
  $headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
  $headers .= "From: noreply@crazy.studio\r\n";
  $headers .= "X-Priority: 1\r\n";
  // $headers .= "Reply-To: noreply@crazy.studio\r\n";


  $sentMail = mail($to, $subject, $message, $headers);
  if($sentMail) //output success or failure messages
  { 
    echo 'done';
  }else{
    echo 'error';
  }
} else {
  echo "Don't access this file directly"; 
}
