function closeMenu() {
    // Select the menu and remove the 'active' class
    $(".navbar .menu").removeClass("active");
    $(".menu-btn i").removeClass("active");
}
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        }
        else
        {
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu bars (new)
    function myFunction(x) {
        x.classList.toggle("change");
      }
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
    $(".navbar .menu li a").click(function () {
        closeMenu();
    });
});