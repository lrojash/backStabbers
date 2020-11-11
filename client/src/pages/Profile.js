import React from 'react'
import Card from '../components/InfoCard'
import PostCard from '../components/PostsCard'

export default () => {
    return (
        <div>
            <Card>
                <h2>picture</h2>
                <h2>username</h2>
                <h2>connections</h2>
                <h2>other stuff</h2>
            </Card>

            <PostCard>
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
            </PostCard>
        </div>
    )
}