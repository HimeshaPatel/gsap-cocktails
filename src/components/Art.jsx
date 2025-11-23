
import React from "react";
import gsap from "gsap";
import {featureLists, goodLists} from "../../constants/index.js";
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";

const Art = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top'

        const maskTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })

        maskTimeLine
            .to('.will-fade', {
            opacity: 0, stagger: 0.2, ease: 'power1.inOut',
        })
            .to('.masked-img', {
                scale: 1.3, maskPosition:'center', maskSize: '400%', duration: 1, ease:'power1.inOut'
            })
            .to('#masked-content', {opacity: 1, duration: 1, ease: 'power1.inOut'})

        // Floating animation for left and right images
        gsap.to('.floating-left-img', {
            y: -30,
            duration: 3,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true
        })

        gsap.to('.floating-right-img', {
            y: -30,
            duration: 3.5,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
            delay: 0.5
        })

    })

    return (
        <div id="art">
            {/* Floating left image */}
            <img 
                src="/images/art-left.png" 
                alt="floating left" 
                className="floating-left-img"
            />
            
            {/* Floating right image */}
            <img 
                src="/images/art-right.png" 
                alt="floating right" 
                className="floating-right-img"
            />
            
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade z-10">The ART</h2>

                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <img src="/images/check.png" alt="check" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="cocktail-img">
                        <img
                            src="/images/under-img.jpg"
                            alt="perfume"
                            className="abs-center masked-img size-full object-contain"
                        />
                    </div>

                    <ul className="space-y-4 will-fade">
                        {featureLists.map((feature, index) => (
                            <li key={index} className="flex items-center justify-start gap-2">
                                <img src="/images/check.png" alt="check" />
                                <p className="md:w-fit w-60">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="masked-container">
                    <h2 className="will-fade">Scent-Worthy Perfection</h2>
                    <div id="masked-content" className="mt-5">
                        <h3>Made with Craft, Bottled with Passion</h3>
                        <p>This isn't just a fragrance. It's a carefully crafted essence made just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art;