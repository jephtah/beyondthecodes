import styled from "styled-components";
import { OverflowFooter } from "@/layout/OverflowFooter";
import {
  AnchorFM,
  ApplePodcast,
  GooglePodcast,
  SoundCloud,
  Spotify,
  YoutubeWhite,
} from "../icons";
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1000px) {
    & > * {
      margin: 1rem 0;
    }
  }
`;
const PodcastOverflow = () => {
  return (
    <OverflowFooter>
      <Div>
        <ApplePodcast />
        <Spotify />
        <GooglePodcast />
        <AnchorFM />
        <SoundCloud />
        <YoutubeWhite />
      </Div>
    </OverflowFooter>
  );
};

export { PodcastOverflow };
