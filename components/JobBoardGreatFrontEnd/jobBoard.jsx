import React, { useEffect, useState } from 'react';
import './jobboard.css';

function JobBoard() {
    const [jobIdStore, setJobIdStore] = useState([]);
    const [orignalData, setOrignalData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showPerMoreData, setShowPerMoreData] = useState(1);

    useEffect(() => {
        async function fetchDataWithId() {
            setLoading(true);
            try {
                const response = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
                const itemsList = await response.json();
                setJobIdStore(itemsList);
            } catch (error) {
                console.error('Error fetching job IDs:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchDataWithId();
    }, []);

    useEffect(() => {
        if (jobIdStore.length > 0) {
            async function fetchJobData() {
                setLoading(true);
                try {
                    const itemsForPage = await Promise.all(jobIdStore.slice(6 * showPerMoreData - 6, 6 * showPerMoreData).map((itemId) =>
                        fetch(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`).then((res) => res.json())
                    ));
                    setOrignalData(prevData => [...prevData, ...itemsForPage]);
                } catch (error) {
                    console.error('Error fetching job data:', error);
                } finally {
                    setLoading(false);
                }
            }

            fetchJobData();
        }
    }, [showPerMoreData, jobIdStore]);

    return (
        <div>
            <>
                <div>
                    {orignalData.map((job) => (
                        <div key={job.id} className='jobBox'>
                            <a href={`https://jobs.lever.co/juniperplatform/${job.id}`}>{job.title}</a>
                            <div className='jobBy text-black'>
                                <p>By {job.by}</p>
                                <p className=''>{new Date(1000 * job.time).toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={() => setShowPerMoreData(prev => prev + 1)}
                        style={{ backgroundColor: 'black', color: 'white' }}
                    >
                        {loading ? 'Loading Data....' : 'Load More Data'}
                    </button>
                </div>
            </>
        </div>
    );
}

export default JobBoard;
