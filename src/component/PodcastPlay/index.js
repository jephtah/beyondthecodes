import styled from "styled-components";

const Card = styled.div`
  background-image: url("./images/podcast-card-bg.png");
  padding: 2rem;
  margin: 2rem 0;
`;
const PodcastPlay = () => {
  return (
    <Card>
      <div>
        <img src="./images/gym-mini.png" alt="" />
      </div>
    </Card>
  );
};

export { PodcastPlay };
