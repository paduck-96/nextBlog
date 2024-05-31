'use client';

import { useEffect, useState } from 'react';

interface VisitData {
    visitCount: number;
    date: string;
}

export default function Footer() {
    const [data, setData] = useState<VisitData>({ visitCount: 0, date: new Date().toLocaleDateString() })

    useEffect(() => {
        fetch('/api/countVisitor')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <>
            <p>오늘 날짜: {data.date}</p>
            <p>오늘 접속자 수: {data.visitCount}</p>
            <p>
                Game data and images courtesy of <a href="https://rawg.io/" target="_blank" rel="noopener noreferrer">RAWG</a>
            </p>
        </>
    );
}
