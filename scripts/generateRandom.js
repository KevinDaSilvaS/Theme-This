const generate = async () => {
    const ids = ["bckgnd", "main", "h1", "h2_h5", "links"];
    ids.map((id) => {
        saveProps({id, value: getColor() });
    });
}

const getColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}