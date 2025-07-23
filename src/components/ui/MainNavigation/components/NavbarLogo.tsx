interface NavbarLogoProps {
  image: string;
}
export const NavbarLogo = ({ image }: NavbarLogoProps) => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
    >
      <img src={image} alt="logo" width={50} height={50} />
    </a>
  );
};
