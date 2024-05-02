import React, { useState } from "react";
import DropDownSelect from "../../components/Form/DropDownSelect";
import Input from "../../components/Form/Input";
import CustomButton from "./../../components/Button/CustomButton";
import "./contact.css";

export default function Contact() {
  const [agent, setAgent] = useState("");
  const [price, setPrice] = useState("");
  const [residences, setResidences] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [instagram, setInstagram] = useState("");
  const [errors, setErrors] = useState({});

  const onValueChange = (value, id) => {
    switch (id) {
      case "firstname":
        setFirstName(value);
        break;
      case "lastname":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "comment":
        setComment(value);
        break;
      case "instagram":
        setInstagram(value);
        break;
      default:
        return;
    }
    if (!value.trim()) {
      setErrors({ ...errors, [id]: "" });

      setErrors({ ...errors, [id]: "This field is required." });
    }
  };
  const handleDropdownChange = (event) => {
    switch (event.target.id) {
      case "agent":
        setAgent(event.target.value);
        break;
      case "price":
        setPrice(event.target.value);
        break;
      case "residences":
        setResidences(event.target.value);
        break;
      default:
        return;
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const requiredFields = ["firstname", "lastname", "email", "comment"];
    const allRequiredFilled = requiredFields.every((id) => {
      switch (id) {
        case "firstname":
          return firstname.trim() !== "";
        case "lastname":
          return lastname.trim() !== "";
        case "email":
          return email.trim() !== "";
        case "comment":
          return comment.trim() !== "";
        default:
          return true;
      }
    });

    if (!allRequiredFilled) {
      alert("Please fill out all required fields.");
      return;
    }

    console.log(agent, price, residences);
  };
  const priceOptions = [
    { value: "", label: "Price" },
    { value: "1", label: "STUDIO" },
    { value: "2", label: "BEDROOM 1" },
    { value: "3", label: "BEDROOM 2" },
    { value: "4", label: "BEDROOM 3" },
    { value: "5", label: "BEDROOM 4" },
  ];
  const residencesOptions = [
    { value: "", label: "Residences" },
    { value: "1", label: "$500K-$1M" },
    { value: "2", label: "$1M-$2M" },
    { value: "3", label: "$2M-$3M" },
    { value: "3", label: "$3M+" },
  ];
  const agentOptions = [
    { value: "", label: "Agent" },
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  return (
    <div className="bg-[#F1ECE2] py-32">
      <div className="md:flex md:flex-wrap md:max-w-[1180px] m-auto content-center justify-between">
        <div className="px-4 md:w-1/5">
          <p className="text-[#153644] font-SctoGroteskADemo-Regular text-4xl py-5">
            GET ON THE LIST
          </p>
          <p className="text-[#153644] font-SctoGroteskADemo-Regular py-5">
            Please complete the form and one of our team members will be in
            touch with you soon.
          </p>
        </div>
        <div className="px-4 md:w-1/2 mb-6">
          <form className="space-y-0">
            <div className="w-full py-1">
              <Input
                placeholder="FIRST NAME*"
                onValueChange={onValueChange}
                id={"firstname"}
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div className="w-full py-1">
              <Input
                placeholder="LAST NAME*"
                onValueChange={onValueChange}
                id={"lastname"}
              />
            </div>
            <div className="w-full py-1">
              <Input
                placeholder="EMAIL*"
                onValueChange={onValueChange}
                type={"email"}
                id={"email"}
              />
            </div>
            <div className="w-full py-1">
              <DropDownSelect
                options={priceOptions}
                onChange={handleDropdownChange}
                id={"price"}
              />
            </div>

            <div className="w-full py-1">
              <DropDownSelect
                options={residencesOptions}
                onChange={handleDropdownChange}
                id={"residences"}
              />
            </div>

            <div className="w-full py-1">
              <DropDownSelect
                options={agentOptions}
                onChange={handleDropdownChange}
                id={"agent"}
              />
            </div>

            <div className="w-full py-1">
              <Input
                placeholder="COMMENT*"
                onValueChange={onValueChange}
                id={"comment"}
              />
            </div>

            <div className="w-full py-1">
              <Input
                placeholder="INSTAGRAM HANDLE*"
                onValueChange={onValueChange}
                id={"instagram"}
              />
            </div>
            <CustomButton
              backgroundColor="#153644"
              outline={false}
              label="Submit"
              fontColor="#F1ECE2"
              width={150}
              onClick={onSubmit}
            />
          </form>
        </div>
        <div className="px-4 md:w-1/5">
          <div className="border-l border-[#153644] border-r-0 border-t-0 border-b-0  px-4 pb-4">
            <div>
              <p className="text-[#153644] py-1 font-GTPressura-Bold">
                SALES GALLERY
              </p>
              <p className="text-[#153644] text-sm py-2">
                29 HURON STREET, BROOKLYN, NY 11222
              </p>
              <a href="tel:+646.863.1846">
                <p className="text-[#153644] flex flex-col hover-after after:bg-[#153644] after:transition-all after:h-[1px]">
                  {" "}
                  646.863.1846
                </p>
              </a>
            </div>
          </div>
          <div className="border-l border-[#153644] border-r-0 border-t-0 border-b-0  px-4 py-4">
            <div>
              <p className="text-[#153644] py-1 font-GTPressura-Bold">
                BUILDING ADDRESS
              </p>
              <p className="text-[#153644] text-sm py-2">
                29 HURON STREET, BROOKLYN, NY 11222
              </p>
            </div>
          </div>
          <div className="border-l border-[#153644] border-r-0 border-t-0 border-b-0  px-4 py-4">
            <div>
              <p className="text-[#153644] py-1 font-GTPressura-Bold">
                GENERAL INQUIRIES
              </p>
              <a href="tel:+646.863.1846">
                <p className="text-[#153644] flex flex-col email1-hover-after after:bg-[#153644] after:transition-all after:h-[1px]">
                  {" "}
                  thehuron@serhant.com
                </p>
              </a>
            </div>
          </div>
          <div className="border-l border-[#153644] border-r-0 border-t-0 border-b-0  px-4 pt-4">
            <div>
              <p className="text-[#153644] py-1 font-GTPressura-Bold">
                PRESS INQUIRIES
              </p>
              <a href="tel:+646.863.1846">
                <p className="text-[#153644] flex flex-col email2-hover-after after:bg-[#153644] after:transition-all after:h-[1px]">
                  {" "}
                  tierney@augustprny.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
