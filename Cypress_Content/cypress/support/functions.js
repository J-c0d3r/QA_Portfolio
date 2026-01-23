//trying to decouple the function used in api_users to here

function criarUsuario(){

    let hours = new Date().getHours.toString();
    let minutes = new Date().getMinutes.toString();
    let sec = new Date().getSeconds.toString();

    let user = 'testID' + hour + minutes + sec;
    let password = 'testPass';
    let email = 'test' + hour + minutes + sec + '@qa.com.br';

    let userInfo = [user, password, email];

    return userInfo;

}