var foo = ((id) => {
  const change = () => {
    publicAPI.identify = identify2;
  }

  const identify1 = () => {
    console.log(id);
  }

  const identify2 = () => {
    console.log(id.toUpperCase());
  }

  let publicAPI = {
    change,
    identify: identify1,
  };
  return publicAPI;
})('foo bar');

foo.identify();
foo.change();
foo.identify();