function Time() {
    // let date = new Date().toLocaleString() + ""
    let time = new Date().toLocaleTimeString() + "";
    return(
        <h2>
            {time}
        </h2>
    );
}

export default Time;