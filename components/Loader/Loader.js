



import React from 'react'

export default function Loader() {
    return (
        <div>
            <svg
                class="loader-container"
                x="0px"
                y="0px"
                viewBox="0 0 50 31.25"
                height="31.25"
                width="50"
                preserveAspectRatio='xMidYMid meet'
            >
                <path
                    class="loader-track"
                    stroke-width="4"
                    fill="none"
                    pathlength="100"
                    d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
                />
                <path
                    class="loader-car"
                    stroke-width="4"
                    fill="none"
                    pathlength="100"
                    d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
                />
            </svg>
        </div>
    )
}
