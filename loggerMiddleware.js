const logger = (req, res, next) => {
    let url = req.url;
    let method = req.method;
    let time = new Date().getTime();
    console.log(method, url, time);
    next()
}

export default logger;