import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import CircularButton from "../components/ui/CircularButton";

export default function Work() {
  return (
    <div>
      <h1 className="text-[6.5vh]">
        Harrison Blair
      </h1>
      <div className="grid grid-cols-[1fr_2fr] gap-4">
        <div> {/* Sidebar - 1/3 of Screen */}
            <div className="flex flex-row gap-4 justify-center">
            <CircularButton
              href="https://github.com/Harrison-Blair"
              icon={Github}
              bgColor="bg-[var(--primary)]"
              hoverColor="hover:bg-[var(--accent)]"
              isExternal={true}
            />
            <CircularButton
              href="https://www.linkedin.com/in/harrison-blair/"
              icon={Linkedin}
              bgColor="bg-[var(--primary)]"
              hoverColor="hover:bg-[var(--accent)]"
              isExternal={true}
            />
            <CircularButton
              href="/contact"
              icon={Mail}
              bgColor="bg-[var(--primary)]"
              hoverColor="hover:bg-[var(--accent)]"
              isExternal={false}
            />
            <CircularButton
              href="/images/Website-Homepage.png"
              icon={FileDown}
              bgColor="bg-[var(--primary)]"
              hoverColor="hover:bg-[var(--accent)]"
              isDownload={true}
            />
          </div>
        </div>
        <div> {/* Main Content - 2/3 of Screen */}
          
        </div>
      </div>
    </div>
  );
}
