import logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="row-span-1 col-span-2 flex justify-end select-none">
      <p className=" w-max mt-28 font-title-hammer text-stone-100 text-xl font-black tracking-tighter">
        CODER COMPANY
      </p>
      <img src={logo} alt="" className="p-1 mt-24 w-12 h-12" />
    </div>
  );
};
export default Footer;
