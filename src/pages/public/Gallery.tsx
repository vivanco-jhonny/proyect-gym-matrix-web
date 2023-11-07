import image1 from "../../../public/galeria/galery-01.jpg";
import image10 from "../../../public/galeria/galery-010.jpg";
import image2 from "../../../public/galeria/galery-02.jpg";
import image3 from "../../../public/galeria/galery-03.jpg";
import image4 from "../../../public/galeria/galery-04.jpg";
import image5 from "../../../public/galeria/galery-05.jpg";
import image6 from "../../../public/galeria/galery-06.jpg";
import image7 from "../../../public/galeria/galery-07.jpg";
import image8 from "../../../public/galeria/galery-08.jpg";
import image9 from "../../../public/galeria/galery-09.jpg";
import "./Gallery.css";

export const Gallery = () => {
    return (
        <div>
            <div>
                <center>
                    <h1 style={{margin: "10px", fontWeight: "300", fontSize: "50px", color: "black"}}>
                        <i className="bi bi-camera-fill"></i> Te invitamos a ver nuestra Galeria.
                    </h1>
                    <label style={{fontSize: "20px", fontWeight: "300", width: "90%", color: "black"}}>
                        Explora nuestro santuario de fuerza y determinación. Nuestra galería captura los momentos intensos,
                        la pasión y el compromiso de aquellos que dan lo mejor de sí mismos en cada rincón de nuestro
                        gimnasio. Únete a nosotros en este viaje hacia el bienestar y descubre la energía que impulsa a
                        nuestra comunidad fitness.
                    </label>
                </center>
            </div>

            <div className="grid-gallery">
                <article><img src={image1} alt="ga-1" /></article>
                <article><img src={image2} alt="ga-2" /></article>
                <article><img src={image3} alt="ga-3" /></article>
                <article><img src={image4} alt="ga-5" /></article>
                <article><img src={image5} alt="ga-4" /></article>
                <article><img src={image6} alt="ga-6" /></article>
                <article><img src={image7} alt="ga-7" /></article>
                <article><img src={image8} alt="ga-8" /></article>
                <article><img src={image9} alt="ga-9" /></article>
                <article><img src={image10} alt="ga-10" /></article>
            </div>
        </div>
    )
}
