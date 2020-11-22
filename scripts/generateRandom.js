const generate = async () => {
    const response = await (await fetch("http://www.colr.org/json/scheme/random")).json();
    const colors = response.schemes[0].colors;
    const ids = ["bckgnd", "main", "h1", "h2_h5", "links"];
    ids.map((id, index) => {
        console.log(id,colors[index])
        saveProps({id, value: `#${colors[index]}`});
    });
}