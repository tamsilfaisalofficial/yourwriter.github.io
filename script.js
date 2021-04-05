console.Log('Its working')

Let theme = localStorage.getItem('theme')
if(theme == null){
    setTheme('light')
}else{ 
    setTheme(theme)
}

Let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        Let mode = this.dataset.mode
        console.log('option clicked:', mode)
        setTheme(mode)
    })
}

function  setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }
    function  setTheme(mode){
        if(mode == 'blue'){
            document.getElementById('theme-style').href = 'default.css'
        }
        function  setTheme(mode){
            if(mode == 'green'){
                document.getElementById('theme-style').href = 'default.css'
            }
            function  setTheme(mode){
                if(mode == 'purple'){
                    document.getElementById('theme-style').href = 'default.css'
                }

       localStorage.setItem('theme' mode)

}








