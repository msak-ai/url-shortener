import React from "react";
import { useGlobalState } from "./Context";
const CopyShortenUrl = () => {
    const {
        url,
        shorten,
    } = useGlobalState();

    return (
        <main>
            <h1 className='logo' style={{ textAlign: 'start' }}>Your shortened URL</h1>
            <p>Copy the shortened link and share it in messages, texts, posts, websites and other locations.</p>
            <Comp value={shorten} url={url} />
        </main>
    )
}

const Comp = (props) => {
    const onClick = () => {
        navigator.clipboard.writeText(props.value);
        alert('Url Copied')
    }
    return (
        <section className='container' style={{ width: '600px', alignItems: 'flex-start' }}>
            <div style={{ margin: '20px' }} ></div>
            <div style={{ alignSelf: 'center' }}>
                <input className='text' value={props.value} readOnly style={{ width: '250px' }} />
                <button onClick={onClick}>Copy Url</button>
            </div>

            <div style={{ textAlign: 'flex-start', marginLeft: '90px', }}>
                <p>Long Url: <a href={props.url}>{props.url}</a></p>
                <p>Create other <a href="http://localhost:3000/">shortened URL.</a></p>
            </div>
        </section>

    )
}

export default CopyShortenUrl;