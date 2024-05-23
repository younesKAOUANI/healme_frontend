import React from 'react';

export const ButtonBase = ({ children, className, href, ...props }) => {
    const ButtonComponent = href ? 'a' : 'button';

    return (
        <ButtonComponent className={[className].join(' ')} href={href} {...props}>
            {children}
        </ButtonComponent>
    );
};

export const ButtonPrimary = ({ children, className, href, ...props }) => {
    return <ButtonBase className={['bg-secondaryLight text-white  rounded-xl shadow-lg shadow-slate-400 py-3 px-6 hover:scale-95  hover:bg-secondary hover:shadow-xl', className].join(' ')} href={href} {...props}>
        {children}
    </ButtonBase>;
};
export const ButtonDanger = ({ children, className, href, ...props }) => {
    return <ButtonBase className={['bg-red-600 hover:bg-red-800 text-white py-2 px-4', className].join(' ')} href={href} {...props}>
        {children}
    </ButtonBase>;
};
export const ButtonOutline = ({ children, className, href, ...props }) => {
    return <ButtonBase className={['border-2 text-black py-2 px-4', className].join(' ')} href={href} {...props}>
        {children}
    </ButtonBase>;
};
export const IconButton = ({ children, className, href, ...props }) => {
    return <ButtonBase className={['border-2 text-black p-3', className].join(' ')} href={href} {...props}>
        {children}
    </ButtonBase>;
};

export const Button = ({ variant = "primary", className, ...props }) => {
    switch (variant) {
        case "primary":
            return <ButtonPrimary className={className} {...props} />;
        case "danger":
            return <ButtonDanger className={className} {...props} />;
        case "outline":
            return <ButtonOutline className={className} {...props} />;
        case "icon":
            return <IconButton className={className} {...props} />;
        default:
            return null;
    }
};
