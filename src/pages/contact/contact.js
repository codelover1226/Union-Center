import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import DropDownSelect from "../../components/Form/DropDownSelect";
import Input from "../../components/Form/Input";
import CustomButton from "./../../components/Button/CustomButton";
import { isEmail, isEmpty, getLength, isValidName } from "../../utils/validation";
import contactData from './../../utils/form.json'
import "./contact.css";

export default function Contact() {
  
  const [forms, setForms] = useState({
    first_name : "",
    last_name: "",
    email: "",
    comment: "",
    instagram: "",
    agent: "",
    price: "",
    residences: ""
  })
  const [errors, setErrors] = useState({
  });
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const [severity, setSeverity] = React.useState("success");

  const priceOptions = contactData.data.priceOptions
  const residencesOptions = contactData.data.residencesOptions
  const agentOptions = contactData.data.agentOptions
  
  const emailTemplate =`
  <!DOCTYPE html>
  <html>
  <head>
    <title>New Contact Arrived</title>
    <style>
      a { font-style: italic; font-weight: bold; color: black !important; }
    </style>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
    <div style="width: 100%; max-width: 750px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; font-size: 33px; color: #333; margin-bottom:40px;">New contact arrived</div>
      <div style="background-color: #F3EBDD; border-radius: 20px; width:100%; padding: 20px">
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">First Name: ${forms.first_name}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Last Name: ${forms.last_name}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Email: ${forms.email}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Price: ${ forms.price }</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Agent: ${ forms.agent}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Residences: ${ forms.residences }</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Comment: ${forms.comment}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Instagram: ${forms.instagram}</div>
      </div>
      <div style="padding: 35px 0px; width: 100%;">
        <div style="width: 100%; max-width: 400px; margin: 0 auto;">
          <div style="font-size:14px; color: #BC9067; text-align: center"> This is newsletter from union center.</div>
        </div>
      </div>
    </div>
  </body>
  </html>
`

  const onValueChange = (value, id) => {
    setForms(prevForms => ({...prevForms, [id]: value }));

    if (!isEmpty(value)) {
      setErrors(prevErrors => ({...prevErrors, [id]: "" }));
    }
    if (id === "email") {
      if (!isEmail(value)) {
        setErrors(prevErrors => ({...prevErrors, [id]: "Input Valid Email" }));
      }
    }
    if (!value.trim()) {
      setErrors(prevErrors => ({...prevErrors, [id]: "This field is required." }));
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
  const onSubmit = async (event) => {
    event.preventDefault();
    for (let key in forms) {
      if(key === "first_name" || key === "last_name"){
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
        try {
          const formData = new FormData();
          formData.append("from", 'onboarding@resend.dev');
          formData.append("to", 'simonxmachine@gmail.com');
          formData.append("subject", 'New Subscriber');
          formData.append("html", emailTemplate);
        
          const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/send`, {
            method: 'POST',
            body: formData,
          });
        
          if (!response.ok) throw new Error('Network response was not ok');
          setSeverity("success");
          setMessage("You have been successfully subscribed.");
          setOpen(true);
        } catch (error) {
          setSeverity("error");
          setMessage("Network Error");
          setOpen(true);
        }
      }
    }
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div className="bg-[#F1ECE2] py-32">
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
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
                id={"first_name"}
              />
              {errors.first_name && <p className="float-right text-red-600 text-[12px] absolute -bottom-3 left-0">{errors.first_name}</p>}
            </div>
            <div className="w-full py-1 relative">
              <Input
                placeholder="LAST NAME*"
                onValueChange={onValueChange}
                id={"last_name"}
              />
              {errors.last_name && <p className="float-right text-red-600 text-[12px] absolute -bottom-3 left-0">{errors.last_name}</p>}
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
                backgroundColor="#F3EBDD"
                outline={true}
                label="Submit"
                fontColor="#212529"
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
                3716 UNION STREET, FLUSHING, NY 11354
              </p>
              <a href="tel:+646.889.9988">
                <p className="text-[#153644] flex flex-col hover-after after:bg-[#153644] after:transition-all after:h-[1px]">
                  {" "}
                  646.889.9988
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
              3716 UNION STREET, FLUSHING, NY 11354
              </p>
            </div>
          </div>
          <div className="border-l border-[#153644] border-r-0 border-t-0 border-b-0  px-4 py-4">
            <div>
              <p className="text-[#153644] py-1 font-GTPressura-Bold">
                GENERAL INQUIRIES
              </p>
              <a href="tel:+646.889.9988">
                <p className="text-[#153644] flex flex-col email1-hover-after after:bg-[#153644] after:transition-all after:h-[1px]">
                  {" "}
                  info@barbieliteam.com
                </p>
              </a>
            </div>
          </div>
          <div className="border-l border-[#153644] border-r-0 border-t-0 border-b-0  px-4 pt-4">
            <div>
              <p className="text-[#153644] py-1 font-GTPressura-Bold">
                PRESS INQUIRIES
              </p>
              <a href="tel:+646.889.9988">
                <p className="text-[#153644] flex flex-col email2-hover-after after:bg-[#153644] after:transition-all after:h-[1px]">
                  {" "}
                  info@barbieliteam.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
