import React from 'react'

interface Props {
    className?: string;
}

const Container: React.FC<React.PropsWithChildren<Props>> =({ children, className }: React.PropsWithChildren<Props>) => {
    return (
        <div className={`w-full mx-auto ${className ? className : ""}`}>{children}</div>
    )
}

export default Container