import React from "react";

function Footer() {
    return (
        <div className="py-5 text-center">
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} <a href="https://www.linkedin.com/in/mauro-nahuel-chapero/">Mauro Chapero</a>. Todos los derechos reservados.
            </p>
        </div>
    )
}

export default Footer;