"use client";

import {useState} from "react";
import Container from "../components/Container";

export default function Home() {

    const [click, setClick] = useState(false);

    function handleClick() {
        setClick(!click)
    }

    return (
        <Container>
            <button onClick={handleClick}>
                {click ? "Click" : "Clicked"}
            </button>
        </Container>);
}
