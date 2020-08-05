//https://alexwohlbruck.github.io/cat-facts/docs/
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

function RandomCatFact(props) {
  const [catFactUrl, setCatFactUrl] = React.useState(null);

  React.useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatFactUrl(data.all[Math.floor(Math.random() * Math.floor(230))].text);

      });
  }, []);

  if (catFactUrl == null) return <div> Loading</div>;

  return (
    <MainContainer>
      <div>{catFactUrl}</div>
    </MainContainer>
  );
}

export default RandomCatFact;