// Archivo: postapi.js

(async () => {
  const fetch = (await import("node-fetch")).default;

  const url = "http://localhost:3000/api/areas/";

  const regtrUser = async () => {
    const data = JSON.stringify({
      nombre:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAzNTUwN2IxLWZmNjgtNDFkMi04NjUzLWUwZGU2ZDliYmU4OSIsIm5hbWUiOiJVc2VyMSoiLCJwc3ciOiJQYXNzd0AxIiwiaXNzdWVkQXQiOiIyMDI1LTAxLTI2VDAxOjA0OjI1LjAxM1oiLCJpYXQiOjE3Mzc4NTM0NjUsImV4cCI6MTczNzg1NzA2NSwiaXNzIjoiUm91c2UifQ.UD-WHJUAYlk2EX0m3FCjps6JK3jyxLxi_5aZiLye2ZI",
      ccosto: "matriz",
      dimension: "av siempre viva 53",
      id_dpto: 300272839,
      id_branch: "ahsy@cci.com",
      id_user: true,
      state: "hoy",
    });

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
