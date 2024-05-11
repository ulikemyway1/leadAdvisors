const accordgionIMG: AccordionData = [
  { title: "Hawaiian party", src: require("../UI/img/1.png") },
  { title: "Мafia party", src: require("../UI/img/2.png") },
  { title: "Party", src: require("../UI/img/3.png") },
  { title: "Party on the beach", src: require("../UI/img/4.png") },
  { title: "Home Security", src: require("../UI/img/5.png") },
  { title: "Network Design & Implementation", src: require("../UI/img/6.png") },
  { title: "System Design & Engineering", src: require("../UI/img/7.png") },
  { title: "Client Care Plans", src: require("../UI/img/8.png") },
];

export type AccordionItem = {
  title: string;
  src: string;
};

export type AccordionData = AccordionItem[];

export default accordgionIMG;
