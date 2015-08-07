function idiottype() {
  var __msg=document.getElementsByClassName("im_editable");
  var txt;
  var k;
  for(k=0; k<__msg.length; k++) {
    if (__msg[k].innerHTML) {
      txt=__msg[k].innerHTML;
      break;
    }
  }
  txt=txt.toLocaleUpperCase();
  var temp=txt.split('');
  for(var i=0; i<txt.length; i++) {
    if (i%2) temp[i]=temp[i].toLocaleLowerCase();
  }
  txt=temp.join('');
  __msg[k].innerHTML=txt;
}
var __send=document.getElementById("im_send");
__send.onclick=function() {
  idiottype();
  IM.send();
};