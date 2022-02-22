import React, {useState} from 'react';
import CardM from "../../Card/Card";
import {language} from "../../../services/langFun";

const War = ({lang}) => {
return(
    <>
        <CardM newsCat={language(lang, 'War', 'война', 'Війна')}/>
    </>
)
};

export default War;
