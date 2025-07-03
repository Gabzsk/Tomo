interface ShelfProps {
  title: string;
}

export function Shelf({ title }: ShelfProps) {
  return (
    <div
      className="
        w-full 
        h-6 
        rounded-b-md 
        bg-gradient-to-b 
        from-[#776248] 
        to-[#6b491c] 
        shadow-inner 
        flex 
        items-center 
        justify-center
        select-none
      "
      style={{
        fontFamily: "'Cinzel', serif",
      }}
    >
      <span
        className="text-sm text-[#ffb813] drop-shadow-[0_1px_0_rgba(0,0,0,0.3)] uppercase tracking-widest"
        style={{
          textShadow:
            "1px 1px 2px rgba(255,255,255,0.3), -1px -1px 0 rgba(0,0,0,0.7)",
        }}
      >
        {title}
      </span>
    </div>
  );
}
