import { useState, useEffect } from "react";
import { Button, Alert } from "@heroui/react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Importa useNavigate
import noAvatarImage from "../../images/noAvatar.png"; // Corrige la ruta de la imagen
import { CameraIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../context/AuthContext"; // Corrige la ruta de AuthContext

function EditProfileSection() {
  const { userId } = useParams();
  const navigate = useNavigate(); // Inicializa useNavigate
  console.log("User ID:", userId); // Verifica que el ID se reciba correctamente

  const { setUser, triggerNavbarRefresh } = useAuth(); // Obtén la función para refrescar el navbar

  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ visible: false, message: "", type: "", variant: "faded" });

  // Obtener datos del usuario al cargar el componente
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        const { name, email, profile_photo } = response.data;

        setName(name);
        setEmail(email);
        if (profile_photo) {
          setProfilePicture(profile_photo); // Establece la URL de la imagen existente
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
        setAlert({ visible: true, message: "Error al cargar los datos del usuario", type: "error", variant: "faded" });
      }
    };

    fetchUserData();
  }, [userId]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfilePicture(file); // Establece el archivo seleccionado
    } else {
      setAlert({ visible: true, message: "Por favor selecciona una imagen válida.", type: "error", variant: "faded" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (profilePicture instanceof File) {
        formData.append("profilePhoto", profilePicture); // Solo agrega si es un archivo
      }
      formData.append("name", name);
      formData.append("email", email);
      if (password) formData.append("password", password);

      const response = await axios.patch(`http://localhost:3000/users/${userId}/update`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const updatedUser = response.data; // Obtén los datos actualizados del usuario

      // Actualiza el estado global del usuario
      setUser((prevUser) => ({
        ...prevUser,
        name: updatedUser.name,
        avatar: updatedUser.profile_photo, // Actualiza la foto de perfil
      }));

      triggerNavbarRefresh(); // Notifica al navbar que debe actualizarse

      setAlert({ visible: true, message: "Perfil actualizado correctamente 🎉", type: "success", variant: "faded" });

      // Redirige al usuario al home después de guardar los cambios
      navigate("/");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error al conectar con el servidor";
      setAlert({ visible: true, message: errorMessage, type: "error", variant: "faded" });
      console.error(error);
    }
  };

  // Ocultar la alerta automáticamente después de 3 segundos
  useEffect(() => {
    if (alert.visible) {
      const timer = setTimeout(() => {
        setAlert({ visible: false, message: "", type: "", variant: "faded" });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alert.visible]);

  return (
    <div className="flex min-h-[calc(100vh-4.1rem)] items-center justify-center bg-gray-100 pt-5 overflow-hidden relative">
      {/* Mostrar alerta si está visible */}
      {alert.visible && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-50">
          <Alert
            color={alert.type === "success" ? "success" : "danger"}
            description={alert.message}
            isVisible={alert.visible}
            title={alert.type === "success" ? "¡Éxito!" : "Error"}
            variant={alert.variant}
          />
        </div>
      )}

      <div className="flex w-full max-w-4xl h-3/4 bg-white rounded-lg shadow-2xl overflow-hidden mx-auto">
        {/* Left Side */}
        <div className="w-2/4 flex flex-col items-center justify-center bg-gradient-to-br from-cafeAvellana to-cafeCacao">
          <h1 className="text-white text-5xl font-bold max-w-56 text-center mb-4">
            Edit Your Profile!
          </h1>
          <div className="relative">
            {profilePicture ? (
              <img
                src={profilePicture instanceof File ? URL.createObjectURL(profilePicture) : profilePicture}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-lg">
                <UserIcon className="w-20 h-20 text-gray-400" />
              </div>
            )}
            <label
              htmlFor="profilePicture"
              className="absolute bottom-0 right-0 bg-cafeCacao text-white p-2 rounded-full cursor-pointer"
            >
              <CameraIcon className="w-6 h-6" />
            </label>
            <input
              id="profilePicture"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-3/5 flex items-center justify-center bg-transparent">
          <div className="w-96 p-4">
            <h2 className="text-2xl font-semibold mb-2">Edit Profile</h2>
            <p className="text-gray-500 mb-6">Update your profile information below.</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafeCacao"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafeCacao"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafeCacao"
                  placeholder="Enter a new password (optional)"
                />
              </div>

              <Button type="submit" className="bg-cafeCacao text-white px-36 py-2 rounded-full">
                Save Changes
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfileSection;