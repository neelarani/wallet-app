const waitForElements = (
  selectors: string[],
  interval = 50,
  timeout = 4000
) => {
  return new Promise<void>((resolve) => {
    const start = Date.now();
    const check = setInterval(() => {
      const allExist = selectors.every((sel) => document.querySelector(sel));
      if (allExist || Date.now() - start > timeout) {
        clearInterval(check);
        resolve();
      }
    }, interval);
  });
};

export default waitForElements;
