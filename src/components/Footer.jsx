
function Footer() {


    const currentYear = new Date().getFullYear();

    return (

        <footer>
            <p>
                Juvielone Lagos © {currentYear}
            </p>
        </footer>
    );

}

export default Footer;