document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("scroll", function(){
        if(this.window.scrollY > 200){
            document.getElementById('navbar-top').classList.add('fixed-top');
            navbar_height = document.querySelector('.header-box').offsetHeight;
            this.document.body.style.paddingTop = navbar_height + 'px';
        }
        else{
            this.document.getElementById('navbar-top').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    })
})
