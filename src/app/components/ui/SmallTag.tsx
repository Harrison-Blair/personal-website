export default function SmallTag({ text }: { text: string }) {
    return (
        <span className="px-3 py-1 bg-[var(--primary)] text-[var(--foreground)] rounded-full text-[1.2vh]">
            {text}
        </span>
    );
}