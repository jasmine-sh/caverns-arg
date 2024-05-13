import React from "react";
import {Link} from "react-router-dom";
import {articles} from "../assets/articleData.json";


export default function About()
{
    return(
        <>
        <div>
            <h1>About Crystal Caves</h1>
            <p> cave or cavern is a natural void in the ground,[1][2] specifically a space large enough for a human to enter. Caves often form by the weathering of rock and often extend deep underground. The word cave can refer to smaller openings such as sea caves, rock shelters, and grottos, that extend a relatively short distance into the rock and they are called exogene caves. Caves which extend further underground than the opening is wide are called endogene caves.[3][4]</p>
            <ul>
                {
                    articles.map((x) =>
                        (
                            <li key={x.id}>
                                <Link to={x.slug}>{x.article}</Link>
                                <Link to={x.slug}>{x.article}</Link>
                            </li>
                        ))
                }

            </ul>
        </div>
        </>
    );
}