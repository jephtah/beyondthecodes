import styled from "styled-components";
import { Comment, Download, Headset, Like, PodcastPlay } from "../icons";

const Card = styled.div`
  background-color: rgba(217, 217, 217, 0.15);
  display: flex;
  //   align-items: center;
  padding: 2rem;
  margin: 2rem 0;
  & > div:nth-child(2) {
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 5rem;
    & > div:last-child {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        margin-right: 2rem;
        cursor: pointer;
        & > * {
          margin-right: 0.5rem;
        }
      }
    }
    & > p:nth-child(1) {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      & > span {
        margin: 0 0.5rem;
        padding: 3px;
        border-radius: 50%;
        background-color: rgba(28, 33, 53, 0.8);
        height: fit-content;
      }
    }
    & > p:nth-child(2) {
      font-size: 24px;
      font-weight: 500;
    }
    & > p:nth-child(3) {
      color: rgba(28, 33, 53, 0.4);
    }
  }
  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    > * {
      cursor: pointer;
    }
  }
`;
const PodcastCard = () => {
  return (
    <Card>
      <img src="./images/robot.png" alt="" />
      <div>
        <div>
          <p>
            Jeph + guest <span />
            46 min
            <span />
            EPISODE 10
          </p>
        </div>
        <p>How to build your personal resilience</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
          neque sagittis, viverra ligula id, mattis ex. Sed sagittis ligula ac
          lacus auctor, quis blandit mi finibus.
        </p>
        <div>
          <span>
            <Headset /> 8.9k
          </span>
          <span>
            <Like /> 2.1k
          </span>
          <span>
            <Comment /> 982k
          </span>
          <span>
            <Download /> 284k
          </span>
        </div>
      </div>
      <div>
        <PodcastPlay />
      </div>
    </Card>
  );
};

export { PodcastCard };
