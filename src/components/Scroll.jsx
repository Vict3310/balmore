import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function Scroll({ children }) {
    const ref = useRef(null)

    useEffect(() => {
        const lenis = new Lenis({
            element: document.documentElement,
            duration: 1.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        })

        lenis.on('scroll', () => { })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return <div ref={ref}>{children}</div>
}
