"use client";

import {
    type CSSProperties,
    type ReactNode,
    useRef,
    useEffect,
    useState,
    useCallback,
} from "react";

type AllowedTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface ResizableTextProps {
    /** The HTML element to render. Defaults to "h1". */
    as?: AllowedTag;
    /** Additional CSS class names. */
    className?: string;
    /** Inline styles. */
    style?: CSSProperties;
    children?: ReactNode;
}

/**
 * Scales text to fill the full width of its container.
 * Uses a hidden measurement span inside the element to detect when text overflows.
 */
const ResizableText = ({
    as: Tag = "h1",
    className,
    style,
    children,
}: ResizableTextProps) => {
    const containerRef = useRef<HTMLHeadingElement | null>(null);
    const measureRef = useRef<HTMLSpanElement | null>(null);
    const [fontSizePx, setFontSizePx] = useState<number | null>(null);

    const recalculate = useCallback(() => {
        const container = containerRef.current;
        const measure = measureRef.current;
        if (!container || !measure) return;

        // Available width is the container's inner width
        const availableWidth = container.clientWidth;
        if (availableWidth <= 0) return;

        // Binary search for the largest font size where the
        // measurement span's scrollWidth fits within availableWidth.
        let lo = 1;
        let hi = 500;

        while (hi - lo > 1) {
            const mid = Math.floor((lo + hi) / 2);
            measure.style.fontSize = `${mid}px`;

            if (measure.offsetWidth > availableWidth) {
                hi = mid;
            } else {
                lo = mid;
            }
        }

        // Clean up measurement style
        measure.style.fontSize = "";
        setFontSizePx(lo);
    }, []);

    useEffect(() => {
        recalculate();

        const container = containerRef.current;
        if (!container) return;

        const ro = new ResizeObserver(() => {
            recalculate();
        });
        ro.observe(container);

        return () => ro.disconnect();
    }, [recalculate, children]);

    return (
        <Tag
            ref={containerRef}
            className={className}
            style={{
                ...style,
                fontSize: fontSizePx ? `${fontSizePx}px` : undefined,
                overflow: "hidden",
                lineHeight: 1.1,
            }}
        >
            {/* Inline measurement span — white-space:nowrap forces single line,
                visibility:hidden keeps it invisible but measurable,
                position:absolute prevents it from affecting layout. */}
            <span
                ref={measureRef}
                aria-hidden
                style={{
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                }}
            >
                {children}
            </span>
            {children}
        </Tag>
    );
};

export default ResizableText;
