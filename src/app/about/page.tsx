import { Github, Linkedin, Mail } from "lucide-react";
import CircularButton from "../components/ui/CircularButton";
import ImageCarousel from "../components/ui/ImageCarousel";

export default function About() {
  const aboutGalleryImages: string[] = [
    "/images/about-gallery/Harrison-Birthday.png",
    "/images/about-gallery/Harrison-Graduation.png",
    // Add more image URLs as needed
  ];

  return (
    <div className='p-4'>
      <h1>
        About Me
      </h1>
      <div className='grid grid-cols-1 gap-4
                      lg:grid-cols-[3fr_2fr_1fr]'>
        <div>
          <div className='w-full mb-4'>
            <ImageCarousel
              imageUrls={aboutGalleryImages}
              border="border-[var(--primary)] border-4"
              styling="relative h-[25rem] rounded-3xl
                      lg:h-[35rem]"
            />
          </div>
          <div className='bg-[var(--muted)] rounded-3xl p-4'>
            <h3>Physical Media</h3>
            <hr className='border-[var(--secondary)] mb-3' />
            <p>
              As I have grown older I have also grown a great fondness for physical media. Within the past few years I have been beginning to read more regularly again and have found that there is truly no substitute for a physical book. While I have tried reading digitally, I always find my eyes strained and my concentration waning. For those wondering, my favorite genres at the moment are Historical Non-fiction, Scientific Non-fiction, Fantasy, and Philosophy. In the age of digital licensing it also feels very nice to own the things you purchase. I also find that physical items tend to hold a more individual story, rather than files on a hard drive or digital assets.
            </p>
          </div>
        </div>
        <div>
          <div className='bg-[var(--muted)] rounded-3xl p-4 mb-4'>
            <h3>Why Computer Science?</h3>
            <hr className='border-[var(--secondary)] mb-3' />
            <p>
              I started doing graph coding in elementary school while a part of my school&apos;s Lego Mindstorms Robotics club. I can still remember the first time I successfully solved a task on that year&apos;s challenge board. That same feeling of accomplishment and pride still helps fuel me to finish projects and solve complex problems. I love being able to solve the same problem countless number of ways using countless number of tools.
            </p>
          </div>
          <div className='bg-[var(--muted)] rounded-3xl p-4 mb-4'>
            <h3>If <span className='italic'>NOT</span> Computer Science?</h3>
            <hr className='border-[var(--secondary)] mb-3' />
            <p>
              If I didn&apos;t become a software engineer, I would have become a cook. In fact, I still hold out hopes of going to culinary school and opening a restaurant of my own one day. I used to be very indifferent about what I ate, and preferred consistency over anything else in my diet. Then, on a trip to New York City with my mom we had dinner at a restaurant called Butter. I had the “Barbecued Boneless Beef Short Ribs” which blew my thirteen year old mind away. In the words of one of my childhood friends, I am on the never-ending hunt for “food that makes you emotional”.
            </p>
          </div>
          <div className='bg-[var(--muted)] rounded-3xl p-4'>
            <h3>Problem Solving</h3>
            <hr className='border-[var(--secondary)] mb-3' />
            <p>
              I also really enjoy problem solving through any physical medium. While in high school I worked for my school&apos;s theatre, helping to run after hours events with third parties who rented out our spaces. I did everything from carpentry, to lighting, to audio engineering. It brings me a lot of joy to help others see their desires come to fruition. I have recently also bought a 3D printer in the hopes to both elegantly and rapidly build things to help people&apos;s everyday lives.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4
                        lg:flex-col lg:items-center">
          <CircularButton
            href="https://github.com/Harrison-Blair"
            icon={Github}
            bgColor="bg-[var(--primary)]"
            hoverColor="hover:bg-[var(--accent)]"
            isExternal={true}
            size='6rem'
          />
          <CircularButton
            href="https://www.linkedin.com/in/harrison-blair/"
            icon={Linkedin}
            bgColor="bg-[var(--primary)]"
            hoverColor="hover:bg-[var(--accent)]"
            isExternal={true}
            size='6rem'
          />
          <CircularButton
            href="/contact"
            icon={Mail}
            bgColor="bg-[var(--primary)]"
            hoverColor="hover:bg-[var(--accent)]"
            size='6rem'
          />
        </div>
      </div>
    </div>
  );
}
