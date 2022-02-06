const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default forFade