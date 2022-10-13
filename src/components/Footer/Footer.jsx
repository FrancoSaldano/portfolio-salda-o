import logo from "../../assets/img/logo.png";
import Code from "@heroicons/react/solid/CodeIcon";

const Footer = () => {
  return (
    <div className="row-span-1 col-span-2 col-start-2 row-start-6 flex justify-between my-auto select-none">
      <div className="flex my-auto p-0">
        <p className=" w-max my-auto font-detail-roboto text-stone-400 text-md font-black">
          by Franco Saldaño
        </p>
        <a href="https://github.com/critical-dmg/portfolio-salda-o.git" target="blank"> <Code className="text-stone-400 h-7 ml-3 hover:text-amber-200"></Code></a>
      </div>

      <div className="flex justify-end">
        <p className=" w-max my-auto font-title-hammer text-stone-100 text-xl font-black tracking-tighter">
          CODER COMPANY
        </p>
        <img src={logo} alt="" className="p-1 my-10 w-12 h-12" />
      </div>
    </div>
  );
};
export default Footer;
