$(function () {
    $(document).ready(function () {
        $(".cont_reclame").owlCarousel({
            items: 5,
            autoplay: true,
            loop: true,
            autoplayTimeout: 1500,
            responsive: {
                0: {
                    items: 1
                },
                480:{
                    items: 3,
                }
            }
        });
    });
    var threeLine = $(".three_line")
    var mobileNav = $(".mobile_nav")
    $(threeLine).on('click', function () {
        mobileNav.slideToggle(400)
    })
})