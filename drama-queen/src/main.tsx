import('./bootstrap').then(
  ({ mount }) => {
    const localRoot = document.getElementById('drama-queen');

    mount({
      mountPoint: localRoot!,
      routingStrategy: 'browser',
    });
  }
);

export { };