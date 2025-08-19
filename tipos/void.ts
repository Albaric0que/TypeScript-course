(() => {
  function first(): void {
    return;
  }

  const second = (): void => {
    return;
  };

  const a = first();
  console.log(a);
})();
