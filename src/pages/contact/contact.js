import React, {useState} from "react";
import DropDownSelect from "../../components/Form/DropDownSelect";
import Input from "../../components/Form/Input";
import CustomButton from './../../components/Button/CustomButton';
import './contact.css'

export default function Contact() {
    const [priceFocus, setPriceFocus] = useState();
    const [residencesFocus, setResidencesFocus] = useState();
    const [agentFocus, setAgentFocus] = useState();
    const [textInput, setTextInput] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);


    const handleTextChange = (event) => {
        setTextInput(event.target.value);
    };
    const handleDropdownChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const priceOptions = [
        { value: '1', label: 'STUDIO' },
        { value: '2', label: 'BEDROOM 1' },
        { value: '3', label: 'BEDROOM 2' },
        { value: '4', label: 'BEDROOM 3' },
        { value: '5', label: 'BEDROOM 4' },
    ];
    const residencesOptions = [
        { value: 'option1', label: '$500K-$1M' },
        { value: 'option2', label: '$1M-$2M' },
        { value: 'option3', label: '$2M-$3M' },
        { value: 'option3', label: '$3M+' },
    ];
    const agentOptions = [
        { value: true , label: 'Yes' },
        { value: false, label: 'No' }
    ];






    return (
        <div className="bg-[#F1ECE2] py-32">
            <div className="md:flex md:flex-wrap md:max-w-[1180px] m-auto content-center justify-between">
                <div className="px-4 md:w-1/5">
                    <p className="text-[#153644] font-SctoGroteskADemo-Regular text-4xl py-5">
                        GET ON THE LIST
                    </p>
                    <p className="text-[#153644] font-SctoGroteskADemo-Regular py-5">
                        Please complete the form and one of our team members will be in touch with you soon.
                    </p>
                </div>
                <div className="px-4 md:w-1/2 mb-6">
                    <form className='space-y-0'>
                        <div className="w-full py-1">
                            <Input 
                                placeholder="FIRST NAME*"
                            />
                        </div>
                        <div className="w-full py-1">
                            <Input 
                                placeholder="LAST NAME*"
                            />
                        </div>
                        <div className="w-full py-1">
                            <Input 
                                placeholder="EMAIL*"
                            />
                        </div>
                        <div className="w-full py-1">
                            <DropDownSelect 
                                options={priceOptions}
                            />
                        </div>
                        
                        <div className="w-full py-1">
                            <DropDownSelect 
                                options={residencesOptions}
                            />
                        </div>
                        
                        <div className="w-full py-1">
                            <DropDownSelect 
                                options={agentOptions}
                            />
                        </div>
                        
                        <div className="w-full py-1">
                            <Input 
                                placeholder="COMMENT*"
                            />
                        </div>
                        
                        <div className="w-full py-1">
                            <Input 
                                placeholder="INSTAGRAM HANDLE*"
                            />
                        </div>
                        <CustomButton 
                            backgroundColor="#153644"
                            outline={false}
                            label="Submit"
                            fontColor="#F1ECE2"
                            width={150}
                        />
                    </form>
                </div>
                <div className="px-4 md:w-1/5">
                    <div className='border-l border-[#153644] border-r-0 border-t-0 border-b-0  px-4 pb-4'>
                        <div>
                            <p className='text-[#153644] py-1 font-GTPressura-Bold'>
                                SALES GALLERY 
                            </p>
                            <p className='text-[#153644] text-sm py-2'>
                            29 HURON STREET, BROOKLYN, NY 11222   
                            </p>
                            <a href="tel:+646.863.1846"><p className="text-[#153644] flex flex-col hover-after after:bg-[#153644] after:transition-all after:h-[1px]"> 646.863.1846</p></a>
                        </div>
                    </div>
                    <div className='border-l border-[#153644] border-r-0 border-t-0 border-b-0  px-4 py-4'>
                        <div>
                            <p className='text-[#153644] py-1 font-GTPressura-Bold'>
                                BUILDING ADDRESS 
                            </p>
                            <p className='text-[#153644] text-sm py-2'>
                            29 HURON STREET, BROOKLYN, NY 11222   
                            </p>
                        </div>
                    </div>
                    <div className='border-l border-[#153644] border-r-0 border-t-0 border-b-0  px-4 py-4'>
                        <div>
                            <p className='text-[#153644] py-1 font-GTPressura-Bold'>
                                GENERAL INQUIRIES 
                            </p>
                            <a href="tel:+646.863.1846"><p className="text-[#153644] flex flex-col email1-hover-after after:bg-[#153644] after:transition-all after:h-[1px]"> thehuron@serhant.com</p></a>
                        </div>
                    </div>
                    <div className='border-l border-[#153644] border-r-0 border-t-0 border-b-0  px-4 pt-4'>
                        <div>
                            <p className='text-[#153644] py-1 font-GTPressura-Bold'>
                                PRESS INQUIRIES
                            </p>
                            <a href="tel:+646.863.1846"><p className="text-[#153644] flex flex-col email2-hover-after after:bg-[#153644] after:transition-all after:h-[1px]"> tierney@augustprny.com</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}