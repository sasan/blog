import React from "react";
import { Card, Button } from 'react-bootstrap';

const Post = ({ image, title, excerpt, readMore }) => (
    <div className='pt-2'>
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title dangerouslySetInnerHTML={{__html:title}} />
                <Card.Text dangerouslySetInnerHTML={{__html:excerpt}} />
                <Button variant="warning" href={readMore}>Read More</Button>
            </Card.Body>
        </Card>
    </div>

);
export default Post;