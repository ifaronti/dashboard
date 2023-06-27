let buton = document.querySelector("input[name=chek]");
var currentTheme = localStorage.getItem('theme')

buton.addEventListener('change', function(){
    if(buton.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
})

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme=== 'dark'){
        buton.checked = true;
    }
}