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
            onComplete: function() {
                document.getElementById(aC).style.position = "absolute";
                document.getElementById(bC).style.position = "relative";
            }
        });

        gsap.to(`#${bC}`, {
            rotate: 0,
            y: "0%",
            opacity: 1
        });
        gsap.to(`#${btn}`, {
            opacity: 0,
            duration: 1,
            onComplete: function() {
                document.getElementById(btn).innerText = "Mer Avansert";
    
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
            onComplete: function() {
                document.getElementById(bC).style.position = "absolute";
                document.getElementById(aC).style.position = "relative";
            }
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
                document.getElementById(btn).innerText = "Simplifiser";
    
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

const timeline = gsap.timeline({ default: { duration: .3 }})
    timeline
        .from(`.overlay`, {
            duration: 2,
            opacity: 0
        })
        .from(`.mScale`, {
            duration: 1,
            y: "50%",
            scale: 2,
            ease: "expo.out",
        }, .2)
        .from(`.mHeader`, {
            rotate: 180
        }, .2)
        .from(`nav`, {
            duration: 2,
            x: "-100%",
            ease: "elastic.out(1,0.3)"
        }, 1);


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.HVDL', {
        duration: 1.5,
        scrollTrigger: '.HVDL',
        x: "-100%",
        ease: "slow(0.7,0.7,false)"
    });
    gsap.from('.IPANI', {
        duration: 1.5,
        scrollTrigger: '.IPANI',
        opacity: 0,
        x: "100%",
        ease: "slow(0.7,0.7,false)"
    });
    gsap.from('.RoutANI', {
        duration: 1.5,
        scrollTrigger: '.RoutANI',
        opacity: 0,
        rotateY: "-100%",
        ease: "slow(0.7,0.7,false)"
    });
    gsap.from('.SwichANI', {
        duration: 1.5,
        scrollTrigger: '.SwichANI',
        scale: 1.2,
        opacity: 0,
        ease: "slow(0.7,0.7,false)"
    });
    gsap.from('.DNSANI', {
        duration: 1.5,
        scrollTrigger: '.DNSANI',
        x: "-100%",
        ease: "slow(0.7,0.7,false)"
    });
    gsap.from('.DHCPANI', {
        duration: 1.5,
        scrollTrigger: '.DHCPANI',
        x: "100%",
        ease: "slow(0.7,0.7,false)"
    });
    gsap.from('footer', {
        duration: 1,
        scrollTrigger: '.footer-bt',
        y: "100%",
        rotateY: 180,
        ease: "back.out(3)",
    });
});