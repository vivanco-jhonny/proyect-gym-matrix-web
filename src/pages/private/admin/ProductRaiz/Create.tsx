import { useRef } from "react";
import { Product } from "@models/ProductClass";
import "./Create.css";

export const Create = () => {
    const nameRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const markRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const priceRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const imageRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const stockRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const dateinRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const stateRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const urlDeLaAPI = "http://localhost/apimatrixgym/Main.php/products";

    const insertar = () => {
        const ProductNew = new Product(
            nameRef.current.value,
            Number.parseFloat(priceRef.current.value),
            imageRef.current.value,
            Number.parseInt(stockRef.current.value),
            new Date().getFullYear().toString() + "-" + new Date().getMonth().toString() + "-" + new Date().getDate().toString(),
            dateinRef.current.value,
            markRef.current.value,
            stateRef.current.value
        );
        // Opciones de la solicitud, incluyendo el método POST y el cuerpo
        const opcionesDeSolicitud: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Tipo de contenido JSON
            },
            body: JSON.stringify(ProductNew), // Convierte el objeto a JSON
        };

        // Realiza la solicitud POST utilizando fetch
        fetch(urlDeLaAPI, opcionesDeSolicitud)
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('Error al enviar la solicitud.');
                }
                return respuesta.json(); // Si esperas una respuesta JSON
            })
            .then((datos) => {
                console.log('Datos insertados con éxito:', datos);
            })
            .catch((error) => {
                console.error('Error al insertar datos:', error);
            });
    }

    return (
        <div style={{position: "absolute", height: "100%", left: "50%", transform: "translateX(-50%)"}}>
            <label style={{ fontWeight: "900", fontSize: "46px", color: "black" }}>Productos</label>
            <div style={{ width: "550px", marginBottom: "20px" }}>
                <label style={{ fontSize: "32px", marginBottom: "20px", fontWeight: "100" }}>Crear Nuevo</label>
                <div className="form-create-products" style={{ display: "grid", gridTemplateColumns: "180px calc(100% - 180px)", gridTemplateRows: "repeat(7, 80px)", background: "rgb(255,230,0)" }}>
                    <label>Nombre: </label><input type="text" ref={nameRef} />
                    <label>Marca: </label><input type="text" ref={markRef} />
                    <label>Precio: </label><input type="number" ref={priceRef} />
                    <label>Imagen: </label><input type="url" ref={imageRef} />
                    <label>Cantidad: </label><input type="number" ref={stockRef} />
                    <label>Fecha de Ingreso: </label><input type="date" ref={dateinRef} />
                    <label>Estado: </label><input type="text" ref={stateRef} />
                </div>
                <button style={{ width: "100%", border: "none", background: "black", color: "white", height: "46px", padding: "10px", borderRadius: "20px" }} onClick={() => insertar()}>Agregar Producto</button>
            </div>

        </div>
    );
}
