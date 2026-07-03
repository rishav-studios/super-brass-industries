"use client"

import { useEffect, useState } from "react";

const Time = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Format to Indian Standard Time (IST) in HH:MM 24-hour format
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            };
            const formatter = new Intl.DateTimeFormat("en-US", options);
            setTime(formatter.format(now));
        };

        updateTime();
        // Update every second to ensure the minute transition is precise and responsive
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex items-center gap-1.5" suppressHydrationWarning>
            <span>{time || "--:--"}</span>
            <span className="text-neutral-400 dark:text-neutral-600">IST</span>
        </div>
    )
}

export default Time