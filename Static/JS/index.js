
 let session = new Map();

 function sessionHandler() {

    session.set('UserAgent', window.navigator.userAgent);
    session.set('date', new Date().toLocaleString());

   
}

 function checkAge(){
   session.set('age',prompt("Пожалуйста, введите ваш возраст"));
    if (session.get('age') >= 18) {
        //Те, кто старше 18, увидят приветствие и будут направлены на сайт

        alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());

    }
    else {
        // Выполним проверку. Если введенное число < 18, либо если введено не число -
        // пользователь будет перенаправлен

        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
     
 }
 function contentFilter() {

  let videoNames = document.getElementsByClassName('video-container')

    for (let i = 0; i < videoNames.length; i++) {

        if (videoNames[i].innerText.toLowerCase().includes(inputParseFunction())) {

            videoNames[i].style.display = 'inline-block';
            
        } else {
            videoNames[i].style.display = 'none'
            
        }

    }
}
 
let sessionLog = function printSession(){
    for (let result of session){
        console.log(result)

    }
}


