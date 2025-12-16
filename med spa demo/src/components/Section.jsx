import clsx from 'clsx';

const Section = ({
    children,
    className,
    id,
    noPadding = false,
    bg = 'transparent' // transparent, white, soft, primary
}) => {
    const bgClasses = {
        transparent: 'bg-transparent',
        white: 'bg-white',
        soft: 'bg-secondary-light/30',
        primary: 'bg-primary/5',
    };

    return (
        <section
            id={id}
            className={clsx(
                bgClasses[bg],
                !noPadding && 'py-16 md:py-24',
                className
            )}
        >
            <div className="container-custom">
                {children}
            </div>
        </section>
    );
};

export default Section;
