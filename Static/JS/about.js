function getAnswer(){
    let answer = {}
    answer['userName'] = prompt('What`s your name?')
    if (answer['userName'] == null) {
        return
    }

    answer["com"] = prompt('Enter your comment')
       if(answer["com"] == null){
        return
       }

       answer['date'] = new Date().toLocaleString();

       writeComment(answer);
}

const  writeComment = answer  =>{

    document.getElementsByClassName('commit')[0].innerHTML += `<p><i><b>${answer['userName']}</b> ${answer['date']}</i><br><em>${answer['com']}</em></p>`;
}



