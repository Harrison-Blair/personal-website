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
          <div className="bg-[var(--muted)] rounded-[2.5rem] m-4 p-4 ">
            <div className="flex flex-col p-4 gap-2">
              <h2 className="text-[2.5vh] text-[var(--primary)]">
                Education
              </h2>
              <a
                href="https://www.champlain.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] text-[1.5vh]"
              >
                Champlain College - Burlington, VT
              </a>
              <p className="text-[1.5vh]">
                B.S. in Computer Science, Minor in Cybersecurity
              </p>
            </div>
          </div>
          <div className="bg-[var(--muted)] rounded-[2.5rem] m-4 p-4 ">
            <div className="flex flex-col m-4 gap-2">
              <h2 className="text-[2.5vh] text-[var(--primary)]">
                Skills
              </h2>

            </div>
          </div>
        </div>
        <div> {/* Main Content - 2/3 of Screen */}
          <div className="bg-[var(--muted)] rounded-[2.5rem] m-4 p-4 ">
            <div className="flex flex-col m-4">
              <p>
                Description....
              </p>
            </div>
          </div>
          <div className="m-4 p-4 ">
            <h2 className="text-[4vh] text-[var(--primary)]">
              Experience
            </h2>
            <hr className="border-[var(--primary)] border-[1.5px]" />

          </div>
        </div>
      </div>
    </div>
  );
}
