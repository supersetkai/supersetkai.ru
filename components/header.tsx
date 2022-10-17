// Next
import Image from "next/future/image";
import Link from "next/link";

// Configs
// Конфиги
import headerConfig from "../configs/components/header.json";

import { useState } from 'react';
import { Burger } from "@mantine/core";

// Логотип
function Title() {
    return (
        <Link href={headerConfig.Designation.Link}>
            <a id="logo">
                <Image
                    src={headerConfig.Designation.Logo}
                    alt={headerConfig.Designation.Name}
                    sizes="128px"
                    style={{
                        width: "100%",
                        height: "auto"
                    }}
                    width={128}
                    height={50}
                />
            </a>
        </Link>
    )
}

// Ссылки в хедере
function Links() {
    let links: any = [];
    Object.keys(headerConfig.Links).forEach(function (item) {
        links.push((
            <Link href={(headerConfig.Links as any)[item]} key={item}>
                <a>{item}</a>
            </Link>
        ));
    });
    return (
        <div className="links">
            {links}
        </div>
    )
}

export default function MainHeader() {

    const [opened, setOpened] = useState(false);

    function Menu() {
        setOpened((o) => !o);
        const header = document.querySelector('header')
        header?.classList.toggle('active');
    }

    return (
        <header>
            <Title />
            <Links />
            <Burger
                opened={opened}
                onClick={Menu}
                id="menu"
            />
        </header>
    );
}