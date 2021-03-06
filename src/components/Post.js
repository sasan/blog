import React from "react";
import { Card, Button } from 'react-bootstrap';

const Post = ({ image, title, excerpt, readMore, alt }) => (
    <post>
        <div className='pt-2'>
            <Card>
                <Card.Img variant="top" src={image} alt={alt || "default alt"}/>
                <Card.Body>
                    <Card.Title dangerouslySetInnerHTML={{ __html: title }} />
                    <Card.Text>
                        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                    </Card.Text>
                    <Button variant="warning" href={readMore}>Read More</Button>
                </Card.Body>
            </Card>
        </div>
    </post>
);
export default Post;