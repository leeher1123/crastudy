import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import PhotoItem from "../components/Items/PhotoItem";

const Photos = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        getPhotos();
    }, [])

    const getPhotos = async () => {
        const config = {
            method: 'get',
            url: 'https://api.unsplash.com/photos',
            params: {
                page: 1,
                per_page: 30,
                client_id: 'ru5TsUnyXPAqSAbjWb1h5zi6LnOI3qCQEvauSn2UkB4'
            }
        }
        const result = await axios(config);
        setPhotos(result.data);
    }

    return (
        <Container>
            <Grid>
                {
                    photos.map((item, index) =>(
                        <GridItem>
                            <PhotoItem item={item}/>
                        </GridItem>
                    ))
                }
            </Grid>
        </Container>
    )
}

const Container = styled.div`

`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = styled.div`
  width: 33.33%;
  padding: 15px;
  box-sizing: border-box;
`;

export default Photos;