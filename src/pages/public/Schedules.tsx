export const Schedules = () => {
    return (
        <div>
            <section>
                <center>
                    <h1 style={{margin: "10px", fontWeight: "300", fontSize: "50px", color: "black"}}>
                        Este el nuevo horario de la semana.
                    </h1>
                    <label style={{fontSize: "20px", fontWeight: "300", width: "90%", color: "black"}}>
                        ¡Dale la bienvenida a una nueva semana llena de oportunidades para superarte! Enciende tu
                        determinación, alimenta tu energía y prepárate para conquistar cada desafío en el gimnasio. ¡Que
                        estos días sean una poderosa inyección de motivación en tu camino hacia el éxito fitness!
                    </label>
                </center>
                <table className="table table-borderless table-dark"
                    style={{width: "calc(100% - 40px)", marginLeft: "20px", height: "600px"}}>
                    <thead>
                        <tr>
                            <th>HORA</th>
                            <th>LUNES</th>
                            <th>MARTES</th>
                            <th>MIERCOLES</th>
                            <th>JUEVES</th>
                            <th>VIERNES</th>
                            <th>SABADO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>7:00 - 8:00</td>
                            <td>Funcional</td>
                            <td>Funcional</td>
                            <td>Funcional</td>
                            <td>Funcional</td>
                            <td>Funcional</td>
                            <td>Funcional</td>
                        </tr>
                        <tr>
                            <td>8:00 - 9:00</td>
                            <td>Baile</td>
                            <td>Spinning</td>
                            <td>Baile</td>
                            <td>Spinning</td>
                            <td>Baile</td>
                            <td>Spinning</td>
                        </tr>
                        <tr>
                            <td>9:00 - 10:00</td>
                            <td>Localizado</td>
                            <td>Baile</td>
                            <td>Baile</td>
                            <td>Baile</td>
                            <td>Localizado</td>
                            <td>Baile</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>T</td>
                            <td>A</td>
                            <td>R</td>
                            <td>D</td>
                            <td>E</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6:00 - 7:00</td>
                            <td>Funcional</td>
                            <td>Funcional</td>
                            <td>Funcional</td>
                            <td>Funcional</td>
                            <td>Funcional</td>
                            <td>Funcional</td>
                        </tr>
                        <tr>
                            <td>7:00 - 8:00</td>
                            <td>Top Fighter</td>
                            <td>Full Body</td>
                            <td>Combate</td>
                            <td>Full Body</td>
                            <td>Top Fighter</td>
                            <td>Baile</td>
                        </tr>
                        <tr>
                            <td>7:30 - 8:30</td>
                            <td>Funcional</td>
                            <td></td>
                            <td>Funcional</td>
                            <td></td>
                            <td>Funcional</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8:30 - 9:00</td>
                            <td>Baile</td>
                            <td>Baile</td>
                            <td>Baile</td>
                            <td>Baile</td>
                            <td>Baile</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9:00 - 9:30</td>
                            <td>Spinning</td>
                            <td>Spinning</td>
                            <td>Spinning</td>
                            <td>Spinning</td>
                            <td>Spinning</td>
                            <td>Spinning</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}
