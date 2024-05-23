// Head.js

export default function Head({ title = "HealMe" }) {
    return (
        <head>
            <meta charset="utf-8" />
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />
        </head>
    );
}
