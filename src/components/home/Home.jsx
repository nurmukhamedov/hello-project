import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../cards/Card';



const Home = () => {

    const [data, setData] = useState([]);

    const [searchTitle, setSearchTitle] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles');
            setData(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchData();

    }, []);


    const filteredData = data.filter((value) => {
        if (searchTitle === '') {
            return value;
        } else if (value.title.toLowerCase().includes(searchTitle.toLowerCase())) {
            return value;
        }
    }).map((news) => (
        <Card key={news.id} id={news.id} data={news.publishedAt} title={news.title} img={news.imageUrl} summary={news.summary} />
    ));

    return (
        <div>

            <input
                className="home__text--input"
                placeholder="Search"
                onChange={(e) => setSearchTitle(e.target.value)}
            />
            {filteredData}
        </div>
    )
}

export default Home