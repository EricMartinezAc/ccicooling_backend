// Archivo: postapi.js

(async () => {
  const fetch = (await import("node-fetch")).default;

  const url = "http://localhost:3000/api/employees/createEmployee";

  const regtrUser = async () => {
    const name = "arcontroller@climatecontrolsing.com";
    const position = "Arc2025*";
    const department = "User1*";
    const salary = 12233;

    const data = JSON.stringify({ name, position, department, salary });

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
      body: data,
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(
          `Error en la solicitud: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();
      console.log("respuesta del servidor:", result);
    } catch (error) {
      console.error("Error al enviar los datos:", error.message);
    }
  };

  // Llamar a la función para realizar la solicitud
  regtrUser();
})();
