let toggles = {};

function maAnimate(bC, aC, btn) {
    if (!toggles[bC]) {
        toggles[bC] = false;
    }

    if (toggles[bC]) {
        gsap.to(`#${aC}`, {
            rotate: 10,
            y: "200%",
            opacity: 0,
        });

        gsap.to(`#${bC}`, {
            rotate: 0,
            y: "0%",
            opacity: 1,
        });
        gsap.to(`#${btn}`, {
            opacity: 0,
            duration: 1,
            onComplete: function() {
                document.getElementById(btn).innerText = "More Advanced";
    
                gsap.to(`#${btn}`, {
                    opacity: 1,
                    duration: 1
                });
            }
        });
    } else {
        gsap.to(`#${bC}`, {
            rotate: -10,
            y: "-100%",
            opacity: 0,
        });

        gsap.to(`#${aC}`, {
            rotate: 0,
            y: "0%",
            opacity: 1,
            delay: 0.3
        });
        gsap.to(`#${btn}`, {
            opacity: 0,
            duration: 1,
            onComplete: function() {
                document.getElementById(btn).innerText = "Simplify";
    
                gsap.to(`#${btn}`, {
                    opacity: 1,
                    duration: 1
                });
            }
        });
    }

    toggles[bC] = !toggles[bC];
    console.log(toggles);
}