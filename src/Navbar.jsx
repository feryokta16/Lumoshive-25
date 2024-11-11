import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto bg-black text-white flex justify-between px-2 ">
      <div className="hidden lg:flex gap-2 text-xs">
        <p>Jual beli</p>
        <p>Official Store</p>
        <p>Product Digital</p>
        <p>Tiket Kereta api</p>
        <p>Tiket pesawat</p>
        <p>Donasi</p>
      </div>
      <div className="flex gap-4 ">
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-youtube"></i>
      </div>
    </div>
  );
};

export default Navbar;
