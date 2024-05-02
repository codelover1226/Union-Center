import React, { useState } from "react";
import DropDownSelect from "../../components/Form/DropDownSelect";
import Input from "../../components/Form/Input";
import CustomButton from "./../../components/Button/CustomButton";
import { isEmail, isEmpty, getLength, isValidName } from "../../utils/validation";
import "./contact.css";

export default function Contact() {

  const [forms, setForms] = useState({
    firstname : "",
    lastname: "",
    email: "",
    comment: "",
    instagram: "",
    agent: "",
    price: "",
    residences: ""
  })
  const [errors, setErrors] = useState({
  });

  const onValueChange = (value, id) => {
    switch (id) {
      case "firstname":
        setForms({...forms, [id]: value});
        if(!isEmpty(value)){
          setErrors({ ...errors, [id]: "" });
        }
        break;
      case "lastname":
        setForms({...forms, [id]: value});
        if(!isEmpty(value)){
          setErrors({ ...errors, [id]: "" });
        }
        break;
      case "email":
        if(!isEmpty(value)) {
          if(isEmail(value)){
            setErrors({ ...errors, [id]: "" });
          } else {
            setErrors({ ...errors, [id]: "Input Valid Email"})
          }
        }
          
        setForms({...forms, [id]: value});
        break;
      case "comment":
        setForms({...forms, [id]: value});
        if(!isEmpty(value)){
          setErrors({ ...errors, [id]: "" });
        }
        break;
      case "instagram":
        if(!isEmpty(value)){
          setErrors({ ...errors, [id]: "" });
        }
        setForms({...forms, [id]: value});
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
        setForms({...forms, [event.target.id]: event.target.value});
        break;
      case "price":
        setForms({...forms, [event.target.id]: event.target.value});
        break;
      case "residences":
        setForms({...forms, [event.target.id]: event.target.value});
        break;
      default:
        return;
    }
    
    if(!isEmpty(event.target.value)){
      setErrors({ ...errors, [event.target.id]: ""})
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    for (let key in forms) {
      if(key === "firstname" || key === "lastname"){
        if(!isValidName(forms[key])){
          setErrors(prevErrors => ({...prevErrors, [key]: "Input valid name" }));
        }
      }
      if(key === "email"){
        if(!isEmail(forms[key])){
          setErrors(prevErrors => ({...prevErrors, [key]: "Input valid email" }));
        }
      }
      if (isEmpty(forms[key])) {
        setErrors(prevErrors => ({...prevErrors, [key]: "This field is required" }));
      }
    }
    const allValid = Object.values(forms).every((field) =>!isEmpty(field));
    if(allValid){
      if (Object.values(errors).every(value => isEmpty(value))) {
        console.log("success");
      }
    }
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
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
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
          <form className="space-y-2">
            <div className="w-full py-1 relative">
              <Input
                placeholder="FIRST NAME*"
                onValueChange={onValueChange}
                id={"firstname"}
              />
              {errors.firstname && <p className="float-right text-red-600 text-[12px] absolute -bottom-3 left-0">{errors.firstname}</p>}
            </div>
            <div className="w-full py-1 relative">
              <Input
                placeholder="LAST NAME*"
                onValueChange={onValueChange}
                id={"lastname"}
              />
              {errors.lastname && <p className="float-right text-red-600 text-[12px] absolute -bottom-3 left-0">{errors.lastname}</p>}
            </div>
            <div className="w-full py-1 relative">
              <Input
                placeholder="EMAIL*"
                onValueChange={onValueChange}
                type={"email"}
                id={"email"}
              />
              {errors.email && <p className="float-right text-red-600 text-[12px] absolute -bottom-3 left-0">{errors.email}</p>}
            </div>
            <div className="w-full py-1 relative">
              <DropDownSelect
                options={priceOptions}
                onChange={handleDropdownChange}
                id={"price"}
              />
              {errors.price && <p className="float-right text-red-600 text-[12px] absolute -bottom-3 left-0">{errors.price}</p>}
            </div>

            <div className="w-full py-1 relative">
              <DropDownSelect
                options={residencesOptions}
                onChange={handleDropdownChange}
                id={"residences"}
              />
              {errors.residences && <p className="float-right text-red-600 text-[12px] absolute -bottom-3 left-0">{errors.residences}</p>}
            </div>

            <div className="w-full py-1 relative">
              <DropDownSelect
                options={agentOptions}
                onChange={handleDropdownChange}
                id={"agent"}
              />
              {errors.agent && <p className="float-right text-red-600 text-[12px] absolute -bottom-3 left-0">{errors.agent}</p>}
            </div>

            <div className="w-full py-1 relative">
              <Input
                placeholder="COMMENT*"
                onValueChange={onValueChange}
                id={"comment"}
              />
              {errors.comment && <p className="float-right text-red-600 text-[12px] absolute -bottom-3 left-0">{errors.comment}</p>}
            </div>

            <div className="w-full py-1 relative">
              <Input
                placeholder="INSTAGRAM HANDLE*"
                onValueChange={onValueChange}
                id={"instagram"}
              />
              {errors.instagram && <p className="float-right text-red-600 text-[12px] absolute -bottom-3 left-0">{errors.instagram}</p>}
            </div>
            <div className="pt-5">
              <CustomButton
                backgroundColor="#153644"
                outline={false}
                label="Submit"
                fontColor="#F1ECE2"
                width={150}
                onClick={onSubmit}
              />
            </div>
            
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
