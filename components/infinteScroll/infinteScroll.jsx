import React, { useEffect, useState } from 'react';
import './infinite.css';
import ScrollData from './scrollData';

function InfiniteScroll() {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(1);

    async function fetchData() {
        try {
            const response = await fetch(`https://dummyjson.com/posts?limit=${limit * 10}`);
            const newData = await response.json();
            const filteredNewData = newData.posts.filter(newPost => !data.find(existingPost => existingPost.id === newPost.id));

            setData(prevData => [...prevData, ...filteredNewData]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [limit]);

    useEffect(() => {
        function handleScroll() {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setLimit((prevLimit) => prevLimit + 1);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run this effect only once

    return (
        <>
            <div>
                {data.map((item) => (
                    <ScrollData item={item} key={item.id} />
                ))}
            </div>
        </>
    );
}

export default InfiniteScroll;
