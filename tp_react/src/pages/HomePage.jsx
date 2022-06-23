/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from "react";
import { Card, Row, Col , Input } from "antd";


import MenuNav from "../components/Menu/Menu";
import SearchService from "../services/search.services";

export default function HomePage() {
  const { Meta } = Card;
const { Search } = Input;
  const [searchValue, setSearchValue] = useState("");
  const [Searchval, setSearchval] = useState([]);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      const result = await SearchService.Searchall("https://api.uprodit.com/v1/search/all?usecase=perso&startIndex=0&maxResults=1");
      const resultF =await SearchService.fetchSearch(searchValue , result);
      if (!didCancel) {
        setSearchval(resultF);
        console.log(Searchval.image_id)
      }     
    };
    fetchData();
   
    return () => {
      didCancel = true;
    };
  }, [searchValue]
    
  );
   async function getImage (id){
  const image = await SearchService.Searchall(`https://api.uprodit.com/v2/profile/picture/f/${ id}`);
  await SearchService.SearchImage( id,image).then((data)=>{
    setPhoto(data.b64Content)
   })
 }
    return (
    <MenuNav id="0" title="">
      <Row gutter={16}>
     
        <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        className="seancesearch"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {
        Searchval.map((user) =>
        
       (
 <div> 

       {/* { getImage(user.image_id)} */}
          <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt={user.image_id}
        src= {`data:image/png;base64,${photo}`}
        
      />
    }  
  >
    <Meta
      title={user.denomination
      }
     
    />
  </Card>
  </div>

        ))
          }
      </Row>
    </MenuNav>
    

    
  );
  
}