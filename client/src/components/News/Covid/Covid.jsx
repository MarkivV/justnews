import React, {useState} from 'react';
import CardM from "../../Card/Card";
import {language} from "../../../services/langFun";

const Covid = ({lang}) => {
    return(
        <CardM newsCat={language(lang, 'Covid', 'Ковид', "Ковід")}/>
    )
};

export default Covid;
