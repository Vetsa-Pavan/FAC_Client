import img_1 from "../../public/Images/clean_img.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Image src={img_1}></Image>
      <Image src={img_1}></Image>
    </section>
  );
}
