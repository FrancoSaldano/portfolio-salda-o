import logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="row-span-1 col-span-2 flex justify-end select-none">
      <p className=" w-max my-auto font-title-hammer text-stone-100 text-4xl font-black tracking-tighter">
        CODER COMPANY
      </p>
      <img src={logo} alt="" className="p-1 w-36 h-36" />
    </div>
  );
};
export default Footer;
