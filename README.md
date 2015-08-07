#idiottype - пишем в вк как школьницы
##Использование (Usage)
* Открываем переписку в ВК
* Копируем строку ниже в адресную строку, жмем enter
```
javascript:function idiottype(){var e,n,t=document.getElementsByClassName("im_editable");for(n=0;n<t.length;n++)if(t[n].innerHTML){e=t[n].innerHTML;break}e=e.toLocaleUpperCase();for(var i=e.split(""),o=0;o<e.length;o++)o%2&&(i[o]=i[o].toLocaleLowerCase());e=i.join(""),t[n].innerHTML=e}var __send=document.getElementById("im_send");__send.onclick=function(){idiottype(),IM.send()};
```
* Пишем сообщение, жмем кнопку отправить и наслаждаемся
* Чтобы писать нормально, можно нажимать ctrl+enter