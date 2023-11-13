import React, { useState } from "react";

export function FormContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requestSubject: "",
    message: "",
    agreeTerms: false,
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="text-[#f8f8f8]">
      <div className="flex gap-x-5">
        <label>
          <h4 className="text-xl md:text-2xl">Prénom:</h4>
          <input
            className="rounded-[5px] text-[#404040] w-[128px] 2xl:w-[368px] 2xl:h-8 sm:w-[215px]"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <h4 className="text-xl md:text-2xl">Nom:</h4>
          <input
            className="rounded-[5px] text-[#404040] w-[128px] 2xl:w-[368px] 2xl:h-8 sm:w-[215px]"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <label>
        <h4 className="text-xl mt-3 md:text-2xl">Téléphone:</h4>
        <input
          className="rounded-[5px] text-[#404040] w-[270px] 2xl:w-[756px] 2xl:h-8 sm:w-[450px]"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        <h4 className="text-xl mt-3 md:text-2xl">Email:</h4>
        <input
          className="rounded-[5px] text-[#404040] w-[270px] 2xl:w-[756px] 2xl:h-8 sm:w-[450px]"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        <h4 className="text-xl mt-3 md:text-2xl">Objet de la demande:</h4>
        <input
          className="rounded-[5px] text-[#404040] w-[270px] 2xl:w-[756px] 2xl:h-8 sm:w-[450px]"
          type="text"
          name="requestSubject"
          value={formData.requestSubject}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        <h4 className="text-xl mt-3	md:text-2xl">Message:</h4>
        <textarea
          className="rounded-[5px] text-[#404040] w-[270px] h-24 2xl:w-[756px] 2xl:h-60 sm:h-40 sm:w-[450px]"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className="flex mt-2 gap-0.5">
        <input
          className="2xl:w-5 sm:w-4"
          type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleInputChange}
        />
        <p className="ml-1 w-[255px] 2xl:w-[730px] sm:w-[430px]">
          J'autorise BEAULIEU ARCHITECTES à conserver mes données personnelles
          afin de pouvoir répondre à ma demande.
        </p>
      </label>
      <div className="flex flex-col items-center gap-2.5 mt-[35px] 2xl:gap-5 2xl:max-w-[756px] sm:w-[450px] sm:gap-5 sm:flex-row">
        <label className="flex flex-col items-center gap-2.5 2xl:gap-5 sm:gap-5 sm:flex-row ">
          <div className="flex flex-col text-center sm:text-start">
            <h4 className="text-xl font-medium  2xl:w-[227px] sm:w-[133px] sm:text-[22px] ">
              Envoyer Une Photo:
            </h4>
            (Optionel)
          </div>
          <input
            className="2xl:h-6 w-[140px]
            "
            type="file"
            name="images"
            accept="image/*"
            onChange={handleInputChange}
          />
        </label>
        <button
          className="font-medium text-[#404040]  text-base px-[32.2px] py-[11px] rounded-lg hover:scale-110 xl:text-lg 2xl:text-xl bg-[#dcb854] xl:px-[32.2px] xl:py-[11px] xl:rounded-lg"
          type="submit"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}
