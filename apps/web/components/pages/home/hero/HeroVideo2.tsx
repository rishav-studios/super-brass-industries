const HeroVideo = () => {
    return (
        <div className="w-full overflow-hidden relative">
            <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover z-"
            >
                <source src="/output.webm" type="video/webm" />
            </video>
            {/* <div className="absolute w-full h-full top-0 left-0 z-1 bg-linear-to-t from-foreground via-foreground/50 to-transparent" /> */}
        </div>
    )
}

export default HeroVideo