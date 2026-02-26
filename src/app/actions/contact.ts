"use server";

interface ContactResult {
  success: boolean;
  message: string;
}

export async function submitContact(formData: FormData): Promise<ContactResult> {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    service: formData.get("service") as string,
    quantity: formData.get("quantity") as string,
    message: formData.get("message") as string,
  };

  // Validate server-side
  if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
    return {
      success: false,
      message: "Todos los campos requeridos deben ser completados.",
    };
  }

  // Log the data (ready to integrate with email service later)
  console.log("=== Nueva solicitud de contacto ===");
  console.log("Nombre:", data.name);
  console.log("Email:", data.email);
  console.log("Teléfono:", data.phone);
  console.log("Servicio:", data.service);
  console.log("Cantidad:", data.quantity || "No especificada");
  console.log("Mensaje:", data.message);
  console.log("Fecha:", new Date().toISOString());
  console.log("===================================");

  return {
    success: true,
    message: "Mensaje enviado exitosamente.",
  };
}
