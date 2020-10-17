import React from 'react'
export type LoadingIconProps = {
    className?: string
}
export default function LoadingIcon(props: LoadingIconProps) {
    const {className} = props

    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
