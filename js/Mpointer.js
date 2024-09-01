    gsap.to(".cursor-example", {
    duration: 0.0085,
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 8;
        posY += (mouseY - posY) / 8;

        gsap.set(".cursor-example", {
            css: {
                left: posX - 1,
                top: posY - 2
            }
        });
    }
});
