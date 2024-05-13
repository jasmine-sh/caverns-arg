import react from "react";
import { useParams } from "react-router-dom";
import {articles as items} from "../assets/articleData.json"


const Article = () =>
{
    const { slug } = useParams();

    const item = items.find((x) => x.slug === slug);

    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
        </div>

    );
}

export default Article;