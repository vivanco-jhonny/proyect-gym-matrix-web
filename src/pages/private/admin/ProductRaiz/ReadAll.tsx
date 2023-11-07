import { Box, SxProps } from "@mui/material";
import { useEffect, useState } from "react";
import { ProductInterface } from "types";

interface BoxProductProps {
    product: ProductInterface
}

export const BoxProduct = ({ product }: BoxProductProps) => {
    const eliminarProducto = (id: string) => {
    
        fetch(`http://localhost/apimatrixgym/Main.php/products?id=${id}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (response.ok) {
              console.log('Producto eliminado con éxito.');
            } else {
              console.error('No se pudo eliminar el producto.');
            }
          })
          .catch((error) => {
            console.error('Error al eliminar el producto:', error);
          });
      };
    return (
        <div style={{ width: "300px", height: "auto", background: "white", padding: "20px" }}>
            <img src={product?.image} alt={"imagen obtenida: " + product?.image} style={{ width: "100%" }} />
            <label style={{ color: "black", fontWeight: "300" }}>{product?.name}</label>
            <br />
            <label style={{ fontWeight: "500", color: "black", fontSize: "16px" }}>{product?.mark}</label>
            <br />
            <label style={{ fontWeight: "500", color: "black", fontSize: "12px" }}>{product?.state}</label>
            <br />
            <div style={{width: "100%", position: "relative"}}>
                <label style={{ fontWeight: "500", color: "black", fontSize: "14px" }}>{product?.datein}</label>
                <label style={{ position: "absolute", bottom: "0px", right: "0px", fontWeight: "500", color: "black", fontSize: "14px" }}>{product?.dateregister}</label>
            </div>
            <br />
            <center>
                <label style={{fontSize: "18px", color: "black"}}>{product?.stock}</label>
            </center>
            <label style={{ fontWeight: "800", color: "black", fontSize: "24px" }}>Total: S/ {product?.price}</label>
            <div style={{width: "100%", height: "64px", position: "relative", display: "grid", gridTemplateRows: "1fr 1fr"}}>
                <button style={{background: "yellow", border: "none"}}>Editar</button>
                <button style={{background: "red", border: "none"}} onClick={() => eliminarProducto(product?.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export const ReadAll = () => {
    const [products, setProducts] = useState<ProductInterface[] | null>();
    const urlDeLaAPI = "http://localhost/apimatrixgym/Main.php/products";
    const styleselect: SxProps = {
        height: "32px",
        borderRadius: "20px",
        "section": {
            padding: "20px",
            "label": {
                color: "black",
            },
            "select": {
                width: "150px",
                marginLeft: "10px",
                border: "solid 2px black",
                borderRadius: "10px",
                background: "none",
                "option": {
                    background: "rgb(255,230,0)",
                    "&:hover": {
                        background: "black",
                    }
                }
            }
        }
    }
    useEffect(() => {
        fetch(urlDeLaAPI)
            .then((response) => response.json())
            .then((data) => setProducts(data as ProductInterface[]))
            .catch(() => {
                console.log("No hay productos");
            });
    }, [products])
    return (
        <div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "50px", left: "0px", top: "0px", width: "100%", height: "100px", background: "rgb(255,230,0)" }}>
                <Box sx={styleselect}>
                    <section>
                        <label>Ordenar por: </label><select name="select">
                            <option value="Nombre" selected>Nombre</option>
                            <option value="Marca">Marca</option>
                            <option value="Precio">Precio</option>
                            <option value="Fecha Registro">Fecha Registro</option>
                            <option value="Fecha Entrada">Fecha Entrada</option>
                        </select>
                    </section>
                </Box>
                <Box sx={styleselect}>
                    <section>
                        <label>Ver: </label><select name="select">
                            <option value="Lista" selected>Lista</option>
                            <option value="Tabla">Tabla</option>
                            <option value="Caja">Caja</option>
                        </select>
                    </section>
                </Box>
                <Box sx={styleselect}>
                    <section>
                        <label>Orden: </label><select name="select">
                            <option value="asc" selected>Ascendente</option>
                            <option value="desc">Descendente</option>
                        </select>
                    </section>

                </Box>
                <Box sx={styleselect}>
                    <section>
                        <label>Cantidad: </label><select name="select">
                            <option value="+10" selected>mas de 10</option>
                            <option value="+50">mas de 50</option>
                            <option value="+100">mas de 100</option>
                            <option value="todos">Todos</option>
                        </select>
                    </section>
                </Box>
            </div>
            <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))" }}>
                {products?.map((product) => {
                    return (
                        <BoxProduct key={product.id} product={product} />
                    )
                })}
            </div>
        </div>
    )
}