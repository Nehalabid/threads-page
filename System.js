var button = document.querySelector('.bottom button:nth-child(2)')
var button2 = document.querySelector('.bottom button:nth-child(1)')
var followers = document.querySelector('.left h4')

var mention = 0;
button.addEventListener('click', function(){

if(mention == 0){
    button.innerHTML = "Mentioned"
    mention = 1
}
else{
    button.innerHTML = "Mention"
    mention = 0
}
}

)
mention2 = 0
button2.addEventListener('click',function(){
if(mention2 == 0){
    button2.innerHTML = 'Following'
    followers.innerHTML = '69 followers'
    mention2 = 1
}
else{ button2.innerHTML = 'Follow'
mention2 = 0;
followers.innerHTML = '68 followers'
}
})


