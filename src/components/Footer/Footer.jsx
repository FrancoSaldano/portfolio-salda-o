import logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="row-span-1 col-span-2 col-start-2 row-start-6 flex justify-end my-auto select-none">
      <p className=" w-max my-auto font-title-hammer text-stone-100 text-xl font-black tracking-tighter">
        CODER COMPANY
      </p>
      <img src={logo} alt="" className="p-1 my-10 w-12 h-12" />
    </div>
  );
};
export default Footer;
