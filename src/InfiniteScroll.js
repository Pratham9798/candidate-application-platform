// InfiniteScroll.js
import React, { useEffect, useRef } from 'react';

const InfiniteScroll = ({ loadMore }) => {
    const sentinelRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        });

        observer.observe(sentinelRef.current);

        return () => {
            observer.unobserve(sentinelRef.current);
        };
    }, [loadMore]);

    return <div ref={sentinelRef} />;
};

export default InfiniteScroll;

