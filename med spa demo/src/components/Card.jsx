import clsx from 'clsx';

const Card = ({ children, className, hover = true, padding = 'p-6' }) => {
    return (
        <div
            className={clsx(
                'bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300',
                hover && 'hover:shadow-card hover:-translate-y-1',
                padding,
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;
