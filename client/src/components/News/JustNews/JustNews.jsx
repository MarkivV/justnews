import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Avatar, Card, Col, Row} from "antd";
import moment from "moment";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import styles from './JustNews.css'
const JustNews = () => {
    const [name, setName] = useState([]);
    const [resultText, setResultText] = useState('');


    useEffect(()=>{
        axios.get('http://localhost:3001/api/get')
            .then((response)=>{
                setName(response.data)
            })
    }, [])

    const translateText = (inputText) => {

        let data = {
            q : inputText,
            source: 'ru',
            target: 'en'
        }
        axios.post(`https://libretranslate.de/translate`, data)
            .then((response) => {
                return(response.data.translatedText)
            })
    }

    return (
        <>
            <Row gutter={[24,24]}>
                {
                    name.map((news)=>(
                        <Col xs={24} sm={12} lg={6} key={news.id}>
                            <Card hoverable className={"news-card"}>
                                <a href={news.url} target={"_blank"} rel={"noreferrer"}>
                                    <div className="news-image-container">
                                        <Title className={"news-title"} level={4}>{news.name}</Title>
                                        <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news.image} alt={"news"}/>
                                    </div>
                                    <p>
                                        {
                                            news.description > 100 ? `${news.description.substring(0, 100)}...`
                                                :news.description
                                        }
                                    </p>
                                    <div className="provider-container">
                                        <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                    </div>
                                </a>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
};

export default JustNews;
