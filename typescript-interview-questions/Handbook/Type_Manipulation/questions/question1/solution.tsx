const identity = <Type extends unknown>(arg: Type): Type => {
  return arg;
};

export default identity;
