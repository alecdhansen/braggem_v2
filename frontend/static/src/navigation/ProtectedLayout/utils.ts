export const whoseHandIsItAnyway = (user: any) => {
  if (user?.right_handed) {
    return "end";
  }
  return "start";
};
