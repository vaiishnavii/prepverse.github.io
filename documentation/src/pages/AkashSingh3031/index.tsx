import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import { Fireworks } from "fireworks-js";
import { CommonFooter } from "@site/src/prepverse-theme/common-footer";
import { CommonHeader } from "@site/src/prepverse-theme/common-header";
import { CommonLayout } from "@site/src/prepverse-theme/common-layout";
import { useColorMode } from "@docusaurus/theme-common";
import { CommonThemedImage } from "@site/src/prepverse-theme/common-themed-image";
import { AboutMeProfile } from "@site/src/prepverse-theme/about-me-profile";
import BackToTopButton from '@theme/BackToTopButton';

const About: React.FC = () => {
    const { colorMode } = useColorMode();

    return (
        <>
            <Head title="About | AkashSingh3031">
                <html data-page="about" data-customized="true" />
            </Head>
            <CommonLayout description="Explore AkashSingh3031's future goals and aspirations. Learn about his plans for web development and Machine Learning. Click to see his vision.">
                <div className={clsx()}>
                    <CommonHeader />
                    <div
                        className={clsx(
                            "flex flex-col",
                            "gap-12 landing-sm:gap-20 landing-md:gap-28 landing-lg:gap-40",
                            "pb-12 landing-sm:pb-16 landing-md:pb-20 landing-lg:pb-40",
                            "mx-auto",
                        )}
                    >
                        <AboutMeProfile
                            className={clsx(
                                "h-auto landing-md:h-[432px]",
                                "mt-4 landing-sm:mt-8 landing-lg:mt-8",
                                "px-4 landing-sm:px-0",
                                "landing-lg:pr-12",
                            )}
                        />
                    </div>
                    <CommonFooter />
                </div>
            </CommonLayout>
        </>
    );
};

export default function AboutPage() {
    const ref = React.useRef<HTMLDivElement>(null);
    const [showFireworks, setShowFireworks] = React.useState(true);
    
    React.useEffect(() => {
        setShowFireworks(true);
        
        const fireworks = new Fireworks(ref.current, {
            intensity: 38,
            explosion: 8,
        });

        fireworks.start();

        const timeout = setTimeout(() => {
            setShowFireworks(false);
            setTimeout(() => {
            fireworks.pause();
            fireworks.clear();
            fireworks.stop();
            }, 500);
        }, 8000);
        
        return () => {
            setShowFireworks(false);
            setTimeout(() => {
            fireworks.pause();
            fireworks.clear();
            fireworks.stop();
            }, 500);
            clearTimeout(timeout);
        };
    }, []);
    
    return (
        <CommonLayout>
            <About />
            <div
                ref={ref}
                style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                position: "fixed",
                zIndex: 99999,
                pointerEvents: "none",
                opacity: showFireworks ? 1 : 0,
                transition: "opacity 500ms ease-in-out",
                }}
            />
            <BackToTopButton />
        </CommonLayout>
    );
}