import React from "react";

const Footer = () => {
  return (
    <div className="p-4 bg-gray-200">
      <div className="flex justify-between items-center container mx-auto">
        <div>
          <p>© 2009-2024, PT Tokopedia</p>
        </div>
        <div className=" hidden lg:flex flex-row justify-between gap-2 text-xs text-gray-400">
          <p>tentang kami</p>
          <p>pusat penjualan</p>
          <p>tokopedia</p>
          <p>monile apps</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
