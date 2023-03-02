import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "./Context";

const ShortenUrl = () => {
    const {
        url,
        setUrl,
        setShorten
    } = useGlobalState();
    const nav = useNavigate();
    // const [url, setUrl] = useState('');
    // const [shorten, setShorten] = useState('');
    const handleChange = ({ target }) => {
        setUrl(target.value)
    }

    const onClick = async () => {
        const url2 = 'https://api.rebrandly.com/v1/links';
        const api_key = "edd6c23bb90049cda8f17903c246d2d7";
        try {
            const request = await fetch(url2, {
                method: 'POST',
                body: JSON.stringify({ destination: url }),
                headers: {
                    'Content-type': 'application/json',
                    'apikey': api_key
                }
            });
            if (request.ok) {
                const json = await request.json()
                setShorten(`https://${json['shortUrl']}`)
                nav('/copy');
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <main>
            <h1 className='logo'>Short URL</h1>

            <section className='container'>
                <h1>Paste the URL to be shortened</h1>

                <div>
                    <input className='text' placeholder='Enter the link here' value={url} onChange={handleChange} />
                    <button onClick={onClick}>Shorten URL</button>
                </div>

                <div>
                    <p style={{ textAlign: 'center' }}>
                        ShortURL.at is a free tool to shorten a URL or reduce a link
                        <br />
                        Use our URL Shortener to create a shortened link making it easy to remember
                    </p>
                </div>

            </section>
{/* 
            <h2>Shortened URL: <a href={shorten} target='_blank' rel="noreferrer">
                {shorten}</a>
            </h2> */}
        </main>
    )
}
export default ShortenUrl;