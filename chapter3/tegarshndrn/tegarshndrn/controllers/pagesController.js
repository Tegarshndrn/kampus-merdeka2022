exports.home = (req,res) => {
    const title = "Hello World",
        subtitle = "Welcome to the world";

    res.render("index", { title, subtitle });
};