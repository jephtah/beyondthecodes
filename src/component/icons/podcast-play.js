const PodcastPlay = (props) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26 32v-8.083l7 4.041L40 32l-7 4.041-7 4.042V32Z"
      fill="#1C2135"
      stroke="#1C2135"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <rect
      x={0.75}
      y={0.75}
      width={62.5}
      height={62.5}
      rx={31.25}
      stroke="#1C2135"
      strokeWidth={1.5}
    />
  </svg>
);

export default PodcastPlay;
