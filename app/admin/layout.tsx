import React, { JSX } from "react";

export default function Adminlayout({children}: {children: React.ReactNode}): JSX.Element{
    return (
        <div>
            {children}
        </div>
    )
}