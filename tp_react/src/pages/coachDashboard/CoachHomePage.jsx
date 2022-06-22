/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from "react";
import { Card, Row, Col , Input } from "antd";


import MenuNav from "../../components/Menu/Menu";
import SearchService from "../../services/search.services";

export default function CoachHomePage() {
  const { Meta } = Card;
const { Search } = Input;


  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [Searchval, setSearchval] = useState([]);

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setLoading(true);
      const result = await SearchService.fetchSearch(searchValue);
      if (!didCancel) {
        setSearchval(result);
        console.log(result)
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [searchValue]);

  const [photo, setPhoto] = useState("");
  
  const [profile, setProfile] = useState([]);
  
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      const result = await SearchService.Searchall("https://api.uprodit.com/v1/search/all?usecase=perso&startIndex=0&maxResults=1");
      const resultF =await SearchService.SearchFinal(result);
      
      console.log(resultF);

      setProfile(resultF)
    };
    fetchData();
  }, []
    
  );
  const  getimage= async (id) => {
    const image = await SearchService.Searchall(`https://api.uprodit.com/v2/profile/picture/f/${id}`);
    const resultimg = await SearchService.SearchImage(id,image).then((data)=>{
      setPhoto(data.b64Content)
    })
     return photo
  
  } 
   
  function DescriptionItem({id, title, content}) {
    return (
      <div className="site-description-item-profile-wrapper">
        <Row>
          <Col span={6}>{title}:</Col>
          <Col id={id} span={18}>
            {content}
          </Col>
        </Row>
      </div>
    );
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
        profile.map((user) =>
        
       (

          <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src= {`data:image/png;base64,${ getimage(user.image_id)}`}
        
      />
    }  
  >
    <Meta
      title={user.denomination
      }
     
    />
  </Card>
     

        ))
          }
      
    
      </Row>
    </MenuNav>
    

    
  );
  
}