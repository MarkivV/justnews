import React, {useState} from 'react';
import {useGetCryptoNewsQuery} from "../../services/newsApi";
import {Avatar, Card, Col, Row, Typography, Select} from "antd";
import moment from "moment";
import axios from "axios";
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const {Text, Title} = Typography
const {Option} = Select

const CardM = ({newsCat}) => {
    const {data: worldNews} = useGetCryptoNewsQuery({newsCategory: newsCat, count: 20, market: 'Russia'})
    // const [resultText, setResultText] = useState('');


    if(!worldNews?.value){
        return ''
    }


    // const translateText = (inputText) => {
    //
    //     let data = {
    //         q : inputText,
    //         source: 'en',
    //         target: 'ru'
    //     }
    //     axios.post(`https://libretranslate.de/translate`, data)
    //         .then((response) => {
    //             console.log(response.data.translatedText)
    //             return(response.data.translatedText)
    //         })
    // }


    console.log(worldNews)
    return (

        <Row gutter={[24,24]}>
            {
                worldNews.value.map((news)=>(
                    <Col xs={24} sm={12} lg={6} key={news.id}>
                        <Card hoverable className={"news-card"}>
                            <a href={news.url} target={"_blank"} rel={"noreferrer"}>
                                <div className="news-image-container">
                                    <Title className={"news-title"} level={4}>{news.name}</Title>
                                    <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt={"news"}/>
                                </div>
                                <p>
                                    {
                                        news.description > 100 ? `${news.description.substring(0, 100)}...`
                                            :news.description
                                    }
                                </p>
                                <div className="provider-container">
                                    <div className="">
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt={"news"}/>
                                        <Text className={"provider-name"}>{news.provider[0]?.name}</Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    );
};

export default CardM;
