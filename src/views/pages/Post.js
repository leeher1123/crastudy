import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

import PageTitle from "../components/Title/PageTitle";

const Post = () => {

    const[posts, setPosts] = useState([]);

    useEffect(() => {
        getPost();
    }, [])

    const getPost = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(result.data);
    }

    return (
        <Container>
            <PageTitle title={"page posts"}/>
            {
                posts.map((item, index) => {
                    return (
                        <div>{item.id} : {item.title}</div>
                    )
                })
            }
        </Container>
    )
}

const Container = styled.div`
  
`;

export default Post;