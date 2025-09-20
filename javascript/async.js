let res = fetch('https://fakestoreapi.com/products/1')
  // console.log(res);

  .then((res) => {
    const data = res.json()
    return data
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('Promise Done')
  })
