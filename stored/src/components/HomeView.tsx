import Image from "next/image";
import storedLogoBlack from "../../public/stored-black-transparent.png";

export default function HomeView() {
  return (
    <Image
      src={storedLogoBlack}
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );
}
