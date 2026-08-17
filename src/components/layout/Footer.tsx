function Footer() {

  return (

    <footer
      className="
        h-16
        bg-white/80
        backdrop-blur-xl
        border-t
        border-gray-200
        flex
        items-center
        justify-center
        px-8
      "
    >

      <p
        className="
          text-sm
          text-gray-500
          text-center
        "
      >
        © {new Date().getFullYear()} One Enterprise Cloud.
        All rights reserved.
      </p>


    </footer>

  );

}


export default Footer;