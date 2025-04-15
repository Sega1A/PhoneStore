const APIURL = "http://localhost:3000/api";

export async function sendPhone(model, marc, specs, price, photo) {
  const formData = new FormData();
  formData.append("model", model);
  formData.append("marc", marc);
  formData.append("specs", specs);
  formData.append("price", price);
  formData.append("photo", photo);

  try {
    const response = await fetch(`${APIURL}/phone/addPhone`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error al enviar el teléfono:", error);
    throw error;
  }
}

export async function getPhones() {
  try {
    const response = await fetch(`${APIURL}/phone/getPhones`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
