import React, {useEffect, useState} from 'react';
import styles from "./Navbar.css"
import {Link} from "react-router-dom";
import {Button, Col, Row} from "antd";
import {MenuOutlined} from "@ant-design/icons";

const Navbar = () => {


    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);


    useEffect(() => {
        const handleResizeFunc = () =>{
            setScreenSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResizeFunc)

        handleResizeFunc()
        return () => window.removeEventListener('resize', handleResizeFunc)

    }, []);


    useEffect(()=> {
        if(screenSize < 768){
            setActiveMenu(false)
        }else{
            setActiveMenu(true)
        }
    }, [screenSize])

    return (
        <>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Button className={"menu-control-container"} onClick={()=>setActiveMenu(!activeMenu)}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <MenuOutlined/>
            </Button>
        {activeMenu && (
            <Row justify="end">
                <Col span={4} >
                    <Link to={"/"}><h3>Latest</h3></Link>
                </Col>
                <Col span={4} >
                    <Link to={"/client"}><h3 style={{color: "red"}}>JustNews</h3></Link>
                </Col >
                <Col span={4} >
                    <Link to={"/war"}><h3>War</h3></Link>
                </Col>
                <Col span={4} >
                    <Link to={"/covid"}><h3>covid-19</h3></Link>
                </Col>
                <Col span={4} >
                    <Link to={"/about"}><h3>about</h3></Link>
                </Col>
            </Row>
        )}
        </>

    );
};

export default Navbar;
