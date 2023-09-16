import { useState } from "react";

export default function GettingDom(){
    const [firstName , setfirstName] = useState(null);

    const inputFirstName = document.querySelector('#firstName');

    return (
        <h1>{inputFirstName.value}</h1>
    )
} 