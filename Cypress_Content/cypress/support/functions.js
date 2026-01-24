export function createUser(){

    let hours = new Date().getHours().toString();
    let minutes = new Date().getMinutes().toString();
    let sec = new Date().getSeconds().toString();

    let user = "testID" + hours + minutes + sec;
    let password = 'testPassword';
    let email = 'test' + hours + minutes + sec + '@qa.com.br';

    let userInfo = [user, password, email];

    return userInfo;

}