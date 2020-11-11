import React from 'react'
import Card from '../components/InfoCard'
import ConnectionCard from '../components/ConnectionCard'

export default() => {
    return (
        <main>
            <div>
            <Card>
                <h2>picture</h2>
                <h2>username</h2>
                <h2>connections</h2>
                <h2>other stuff</h2>
            </Card>
            <ConnectionCard>
                <h3>feed</h3>
                <h3>feed</h3>
                <h3>feed</h3>
                <h3>feed</h3>
                <h3>feed</h3>
                <h3>feed</h3>
                <h3>feed</h3>
                <h3>feed</h3>
                <h3>feed</h3>
                <h3>feed</h3>
                <h3>feed</h3>
                <h3>feed</h3>
            </ConnectionCard>
            </div>
        </main>
    )
}