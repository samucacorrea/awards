export const OtherServices ={
    getIp(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET",'http://meuip.com/api/meuip.php');
        xmlhttp.send();
        xmlhttp.onload = function(e){
            return xmlhttp.response;
        }
    }
}