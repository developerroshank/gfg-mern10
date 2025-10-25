const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

export default fetchData