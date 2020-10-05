import React, { useState, useEffect } from "react"
import { client } from "../../helpers/httpHelpers"
export default function Ranking() {

    const [response, setResponse] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        async function getData() {
            const response = await client(`users?page=${currentPage}`)
            setResponse(response)
            console.log(response)
        }
        getData()
    }, [currentPage])

    const previousPage = () => {
        setCurrentPage(response.pagination.previous.page)
    }

    const nextPage = () => {
        setCurrentPage(response.pagination.next.page)
    }

    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Puan</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        response ?
                            response.data.map(user => (
                                <tr key={user._id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.point}</td>
                                </tr>
                            ))
                            : null
                    }
                </tbody>
            </table>

            <nav aria-label="...">
                <ul className="pagination mt-2">

                    {
                        response ?
                            response.pagination.previous ? <li className="page-item"><p className="page-link" onClick={previousPage}> {response.pagination.previous.page} </p></li> : null
                            : null
                    }
                    {
                        response ?
                            <li className="page-item active"><p className="page-link">{response.pagination.now.page}</p></li>
                            : null
                    }
                    {
                        response ?
                            response.pagination.next ? <li className="page-item"><p className="page-link" onClick={nextPage}>{response.pagination.next.page}</p></li> : null
                            : null
                    }

                </ul>
            </nav>
        </div>
    )
}