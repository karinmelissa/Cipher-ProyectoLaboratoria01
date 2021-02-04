const cipher = {
  encode : function(offset, string){
    var txt = "";
    for (var i=0; i<string.length;i++){
      let valor = string.charCodeAt(i);
      if (valor >= 65 && valor <= 90) {
        txt += String.fromCharCode((valor - 65 + parseInt(offset)) % 26 + 65);
      } else if (valor >= 97 && valor <= 122) {
        txt += String.fromCharCode((valor - 97 + parseInt(offset)) % 26 + 97);
      } else {                            
        txt += string[i];
      }
    } 
    return txt;
  },
  decode : function (offset, string){
    var txt = "";
    for (var i=0; i<string.length;i++){
      let valor = string.charCodeAt(i);
      if (valor >= 65 && valor <= 90) {
        txt += String.fromCharCode((valor - 90 + parseInt(offset)) % 26 + 90);
      } else if (valor >= 97 && valor <= 122) {
        txt += String.fromCharCode((valor - 122 + parseInt(offset)) % 26 + 122);
      } else {                            
        txt += string[i];
      }
    }
    console.log(txt);
    return txt;
  }
}
export default cipher;