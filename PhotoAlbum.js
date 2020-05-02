import React, { useState } from 'react'
import memoryData from './db.json'
import { Link } from 'react-router-dom'


export default function () {
    const [happiness] = useState(memoryData.happiness)
    return (
        <div>
            <ul>
                {happiness.map(album => {
                    return (
                        <li>
                            <Link to={'/happiness/' + album.id}>
                            <div>
                            <img src={album.thumbnail} />
                            </div>
                            <p>{album.name}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}