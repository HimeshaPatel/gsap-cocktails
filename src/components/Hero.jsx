import React, { useRef, useEffect, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Hero = () => {

    const videoRef = useRef();

    // Generate a version string once to bypass browser cache
    const videoVersion = useMemo(() => `v=${Date.now()}`, []);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    // Force video reload and ensure it's visible on mobile
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            // On mobile, show the first frame immediately and try to play
            if (isMobile) {
                const video = videoRef.current;
                
                // Set to first frame
                video.currentTime = 0;
                
                // Try to play, but ensure first frame is visible even if autoplay is blocked
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(err => {
                        console.log('Video autoplay prevented:', err);
                        // Even if autoplay fails, ensure first frame is visible
                        video.currentTime = 0;
                    });
                }
                
                // Ensure video is visible after metadata loads
                const ensureVisible = () => {
                    video.currentTime = 0;
                    video.style.opacity = '1';
                };
                
                if (video.readyState >= 2) {
                    // Video has frame data
                    ensureVisible();
                } else {
                    video.addEventListener('loadeddata', ensureVisible, { once: true });
                }
            }
        }
    }, [isMobile]);

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' })
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => { char.classList.add('text-gradient') });

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })

            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)

        const startValue = isMobile ? 'top top' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';


        //video animation timeline

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        })
        
        // Ensure video is visible and ready
        if (videoRef.current) {
            const handleLoadedMetadata = () => {
                // On mobile, start from the beginning
                if (isMobile) {
                    videoRef.current.currentTime = 0;
                }
                tl.to(videoRef.current, {
                    currentTime: videoRef.current.duration
                })
            };
            
            if (videoRef.current.readyState >= 1) {
                // Metadata already loaded
                handleLoadedMetadata();
            } else {
                videoRef.current.onloadedmetadata = handleLoadedMetadata;
            }
        }


    }, [isMobile])
    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">Perfume</h1>
                <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
                <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
                <div className="body">
                    <div className="content">
                        <div className="space-y-5 mt-20 md:block">
                            <p>Elegant. Luxurious. Timeless.</p>
                            <p className="subtitle">
                                Discover the Essence <br /> of Luxury
                            </p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every perfume in our collection is a blend of premium ingredients, creative artistry, and timeless fragrances - designed to captivate your senses.
                            </p>
                            <a href='#cocktails'>View Perfumes</a>
                        </div>

                    </div>
                </div>
            </section>
            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    src={`/videos/output.mp4?${videoVersion}`}
                    muted
                    playsInline
                    preload="auto"
                    autoPlay={isMobile}
                    loop={false}
                />
            </div>
        </>
    )
}

export default Hero;
