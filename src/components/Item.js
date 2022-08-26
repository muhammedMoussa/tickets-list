import React from 'react'

export const Item = React.memo(({ index, subject, priority, description, status }) => (
    <>
        <div className="card">
            <img alt={index} src={`https://picsum.photos/id/${(index % 10) + 1}/200/300`} />
            <div className="container">
                <h4>
                    <b>{subject}</b>
                </h4>
                <p>{priority}</p>
                <p style={{padding: '10px'}}>{description}</p>
                <p>{status}</p>
            </div>
        </div>
    </>
))
