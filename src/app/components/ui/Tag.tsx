export default function Tag({ 
    text,
    styling = ''
 }: { text: string, styling?: string }) {
    return (
        <span className={`px-3 py-1 bg-[var(--primary)] text-[white] rounded-full text-[1.2vh] ${styling}`}>
            {text}
        </span>
    );
}