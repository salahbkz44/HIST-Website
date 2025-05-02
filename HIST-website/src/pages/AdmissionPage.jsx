import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import admissionLogo from "../assets/admissionLogo.png";
import histAcademy from "../assets/hist-academy.png";

export default function Admission() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, navigate]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    province: "",
    postal_code: "",
    has_bac: false,
    bac_year: "",
    bac_type: "",
    license: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "radio"
          ? value === "yes"
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Combine address components
      const fullAddress = `${formData.address}, ${formData.city}, ${formData.province} ${formData.postal_code}`;

      const payload = {
        ...formData,
        address: fullAddress,
        has_bac: formData.has_bac, // Keep as boolean, PHP will convert
      };

      const response = await fetch("/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Student registered successfully!");
        // Reset form
        setFormData({
          first_name: "",
          last_name: "",
          dob: "",
          phone: "",
          email: "",
          address: "",
          city: "",
          province: "",
          postal_code: "",
          has_bac: false,
          bac_year: "",
          bac_type: "",
          license: "",
        });
      } else {
        alert("Error: " + (result.error || "Registration failed"));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(`Failed to submit: ${error.message}\n\nPlease check:
        1. Is your PHP server running?
        2. Check browser console (F12) for details`);
    }
  };

  return (
    <div className="bg-[#F9F5F0] relative w-full !mb-0 flex !pt-10 !px-10 md:!px-35 items-center justify-end font-rubik">
      <div className="md:hidden rounded-t-full absolute bottom-0 z-10 bg-[#CCB29030] -right-14 h-2/3 w-2/3"></div>
      <div className="flex flex-col items-start !mb-10 w-full md:w-1/2 max-w-2xl">
        <img src={admissionLogo} alt="" className="w-2/3 !ml-0 !mb-2" />
        <h1 className="text-hist-green font-bold text-4xl !mb-8">
          PRÉ-INSCRIPTION
        </h1>

        {successMessage && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md">
            {successMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="w-full text-hist-green md:z-0 z-10"
        >
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-bold !mb-2">Prénom*</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Prénom"
                className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                required
              />
            </div>
            <div>
              <label className="block font-bold !mb-2">Nom*</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Nom"
                className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                required
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="!mt-3">
            <label className="block font-bold !mb-2">Date de Naissance*</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="!mt-3">
            <label className="block font-bold !mb-2">
              Numéro De Téléphone*
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Numéro De Téléphone"
              className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
              required
            />
          </div>

          {/* Email */}
          <div className="mt-3">
            <label className="block font-bold !mb-2">E-mail*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
              required
            />
          </div>

          {/* Address */}
          <div className="flex flex-col !mt-3">
            <div className="col-span-4 md:col-span-2">
              <label className="block font-bold !mb-2">Adresse*</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <div className="md:col-span-4">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Adresse de la rue"
                  className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ville"
                  className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  placeholder="Province"
                  className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="postal_code"
                  value={formData.postal_code}
                  onChange={handleChange}
                  placeholder="Code Postal"
                  className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                  required
                />
              </div>
            </div>
          </div>

          {/* BAC Status */}
          <div className="flex justify-between !mt-3">
            <label className="block font-bold !mb-2">BAC :</label>
            <div className="flex items-center justify-center gap-5 !ml-5 space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="has_bac"
                  value="yes"
                  checked={formData.has_bac === true}
                  onChange={handleChange}
                  className="mr-2 w-4 h-4 text-hist-green focus:ring-hist-green border-gray-300"
                />
                OUI, je l'ai
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="has_bac"
                  value="no"
                  checked={formData.has_bac === false}
                  onChange={handleChange}
                  className="mr-2 w-4 h-4 text-hist-green focus:ring-black border-gray-300"
                />
                NON, je n'ai pas
              </label>
            </div>
          </div>

          {/* BAC Details */}
          {formData.has_bac && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 !mt-3">
              <div>
                <label className="block font-bold !mb-2">Année du BAC</label>
                <select
                  name="bac_year"
                  value={formData.bac_year}
                  onChange={handleChange}
                  className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                >
                  <option value="" disabled>
                    Sélectionnez l'année
                  </option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>
              <div>
                <label className="block font-bold !mb-2">Type de BAC</label>
                <select
                  name="bac_type"
                  value={formData.bac_type}
                  onChange={handleChange}
                  className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
                >
                  <option value="" disabled>
                    Sélectionnez le type
                  </option>
                  <option value="Technical mathematics">
                    Mathématiques techniques
                  </option>
                  <option value="mathematics">Mathématiques</option>
                  <option value="Science">Science</option>
                  <option value="Literature">Littérature</option>
                  <option value="Economics">Économie</option>
                </select>
              </div>
            </div>
          )}

          {/* License */}
          <div className="!mt-3">
            <label className="block font-bold !mb-2">Licence*</label>
            <select
              name="license"
              value={formData.license}
              onChange={handleChange}
              className="w-full !p-2 border border-[#1F4B43CC] rounded-md bg-transparent placeholder-[#CCB29091]"
              required
            >
              <option value="" disabled>
                Sélectionnez une licence
              </option>
              <option value="Management">Management</option>
              <option value="Marketing">Marketing</option>
              <option value="Informatique et Intelligence Artificielle">
                Informatique et Intelligence Artificielle
              </option>
              <option value="Gestion des Ressources Humaines">
                Gestion des Ressources Humaines
              </option>
              <option value="Licence en Langue Anglaise">
                Licence en Langue Anglaise
              </option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#D5BB97] text-hist-green !py-3 !px-8 rounded-md font-bold hover:bg-[#c2aa89] transition-colors !mt-8 w-full"
          >
            S'inscrire
          </button>
        </form>
      </div>

      {/* Right Side Image */}
      <div className="hidden md:flex items-end justify-end w-10/12">
        <div className="flex bg-[#CCB29052] rounded-t-full w-2/3 justify-start !pl-10 !pr-15 !pt-20 !pb-60">
          <img src={histAcademy} alt="" />
        </div>
      </div>
    </div>
  );
}
