
hands.onResults(results => {
  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    const hand = results.multiHandLandmarks[0];
    const indexFinger = hand[8];

    player.x = indexFinger.x * canvas.width;
  }
});
