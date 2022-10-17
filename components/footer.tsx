import footerConfig from "../configs/components/footer.json";
import Link from "next/link";

function List(props: any) {
    let links: any = [];
    Object.keys((footerConfig.Sections as any)[props.item]).forEach(function (listItem) {
        links.push((
            <li key={listItem}>
                <Link href={(footerConfig.Sections as any)[props.item][listItem]}>
                    <a>
                        {listItem}
                    </a>
                </Link>
            </li>
        ));
    });
    return (
        <ul>
            {links}
        </ul>
    );
}

function Sections() {
    let sections: object[] = [];
    Object.keys(footerConfig.Sections).forEach(function (item) {
        sections.push((
            <section key={item}>
                <h4>
                    {item}
                </h4>
                <List item={item} />
            </section>
        ));
    });
    return (
        <>
            {sections}
        </>
    );
}

function LowerInformation() {
    return (
        <>
            {footerConfig.Information}
        </>
    )
}

export default function Footer() {
    return (
        <footer>
            <div id="primary-footer">
                <Sections />
            </div>
            <div id="secondary-footer">
                <LowerInformation />
            </div>
        </footer>
    );
}