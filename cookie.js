Cookies.set('Cookies!!!', 'true', { expires: 7 });

var myCookie = Cookies.get('Cookies!!!');
var title = document.querySelector('h1')

console.log(myCookie);

if(myCookie){
    title.classList.add('cookie')
}

if(myCookie == "false"){
    title.classList.remove('cookie')
}
