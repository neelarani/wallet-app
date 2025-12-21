const objectToSearchParams = (obj: Record<string, string | undefined>) =>
  new URLSearchParams(JSON.parse(JSON.stringify(obj))).toString();

export default objectToSearchParams;
