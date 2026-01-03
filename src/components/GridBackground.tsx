export function GridBackground() {
    return (
        <>
            {/* Left margin background - only visible when viewport is wider than content */}
            <div
                className="hidden lg:block fixed top-0 left-0 h-full pointer-events-none z-0"
                style={{
                    width: 'max(0px, calc((100vw - 1072px) / 2))',
                    backgroundImage: 'url(/img-1.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.8
                }}
            />

            {/* Right margin background - only visible when viewport is wider than content */}
            <div
                className="hidden lg:block fixed top-0 right-0 h-full pointer-events-none z-0"
                style={{
                    width: 'max(0px, calc((100vw - 1072px) / 2))',
                    backgroundImage: 'url(/img-1.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.8
                }}
            />
        </>
    );
}