import React,{useState} from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const Contact = ({img}) => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Контакты" des="Контакты" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg
     shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src="https://avatars.githubusercontent.com/u/116020635?v=4"
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-white">Ырысдаулет Амангелді</h3>
              <p className="text-lg font-normal text-gray-400">
                React Stack Developer
              </p>
              <p className="text-base text-gray-400 tracking-wide">Мне 19 лет и учусь я в университете Нархоз в городе Алматы. Обучаюсь специальности It, на данный момент 3 курс из 4 года обучения.</p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Phone: <span className="text-lightText">+7776 442 54 67</span>
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Email: <span className="text-lightText">yrysdaulet.amangeldi@narxoz.kz</span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">Соц сети</h2>
              <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
                <span className="bannerIcon">
            <FaTwitter />
          </span>
                <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact