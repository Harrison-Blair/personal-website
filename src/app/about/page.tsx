import { Github } from "lucide-react";
import CircularButton from "../components/ui/CircularButton";
import ImageCarousel from "../components/ui/ImageCarousel";

export default function About() {
  const aboutGalleryImages: string[] = [
    "/images/about-gallery/Harrison-Birthday.png",
    "/images/about-gallery/Harrison-Graduation.png",
    // Add more image URLs as needed
  ];
  
  return (
    <div className="grid grid-rows-[1fr_8fr] h-[90vh] w-[90vw]">
      <h1 className="text-[6.5vh]">
        Harrison Blair
      </h1>
      <div className="grid grid-rows-[1.5fr_0.5fr] gap-4">
        <div className="flex gap-4">
          <div className="relative w-[33%] bg-[var(--muted)] rounded-[5rem] p-8">
            <p className="text-[0.75vw]">
              Ever since I was a kid, I have always been enamored with technology and how things work. I started doing graph coding in elementary school while a part of my school’s Lego Mindstorms Robotics club. I can still remember the first time I successfully solved a task on that year’s challenge board. That same feeling of accomplishment and pride still helps fuel me to finish projects and solve hard problems. Once reaching middle school I was introduced to python, and then my fate was truly sealed. Provided a computer, keyboard, monitor, and an internet connection it felt the only limits were my imagination and the time I was able to spend on a project. Since then I have let my passion run wild. In high school I led the programming team in our game development class. I created code standards, taught others to use git, and implemented features for the game. I originally went to college for the same, video game programming, however upon further consideration I decided to switch to a traditional B.S. in Computer Science.
            </p>
          </div>
          <ImageCarousel
            imageUrls={aboutGalleryImages}
            boarder="border-[var(--primary)] border-4"
            styling="relative w-[44%] h-full rounded-[2rem]"
          />
          <div className="relative w-[22%] bg-[var(--muted)] rounded-[5rem] p-8">
            <p className="text-[0.75vw]">
              If I didn&apos;t become a software engineer, I would have become a cook. In fact, I still hold out hopes of going to culinary school and opening a restaurant of my own one day. I used to be very indifferent about what I ate, and preferred consistency over anything else in my diet. Then, on a trip to New York City with my mom we had dinner at a restaurant called Butter. I had the “Barbecued Boneless Beef Short Ribs” which blew my thirteen year old mind away. In the words of one of my childhood friends, I am on the never-ending hunt for “food that makes you emotional”.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative w-[33%] bg-[var(--muted)] rounded-[5rem] p-8">
            <p className="text-[0.75vw]">
              I also really enjoy problem solving through any physical medium. While in high school I worked for my school&apos;s theatre, helping to run after hours events with third parties who rented out our spaces. I did everything from carpentry, to lighting, to audio engineering. It brings me a lot of joy to help others see their desires come to fruition. I have recently also bought a 3D printer in the hopes to both elegantly and rapidly build things to help people’s everyday lives.
            </p>
          </div>
          <div className="relative w-[44%] bg-[var(--muted)] rounded-[5rem] p-8 flex">
            <p className="text-[0.75vw]">
              As I have grown older I have also grown a great fondness for physical media. Within the past few years I have been beginning to read more regularly again and have found that there is truly no substitute for a physical book. While I have tried reading digitally, I always find my eyes strained and my concentration waning. For those wondering, my favorite genres at the moment are Historical Non-fiction, Scientific Non-fiction, Fantasy, and Philosophy. In the age of digital licensing it also feels very nice to own the things you purchase. I also find that physical items tend to hold a more individual story, rather than files on a hard drive or digital assets.
            </p>
          </div>
            <div className="relative w-[22%] flex justify-center items-center">
            <CircularButton
            href="https://www.github.com/Harrison-Blair"
            icon={Github}
            bgColor="bg-[var(--primary)]"
            hoverColor="hover:bg-[var(--accent)]"
            isExternal={true}
            size= '25vh'
            />
            </div>
        </div>
      </div>
    </div>
  );
}
