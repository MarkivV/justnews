import React, {useState} from 'react';
import CardM from "../../Card/Card";
import {language} from "../../../services/langFun";
const NewsTop = ({lang}) => {
    return(
        <>
            <CardM newsCat={language(lang, 'latest', 'последнее', 'останнє')}/>
        </>
    )
};

export default NewsTop;
