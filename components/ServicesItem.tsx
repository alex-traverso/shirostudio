import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

interface ServiceItemProps {
  title: string;
  content: {
    description: string;
    items?: string[];
  };
  isOpen: boolean;
  onToggle: () => void;
}

export default function ServiceItem({
  title,
  content,
  isOpen,
  onToggle,
}: ServiceItemProps) {
  return (
    <div
      className="border-t border-text-100/20 py-7.5 flex flex-col w-full cursor-pointer transition-all"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between w-full group">
        <div className="flex items-center gap-3">
          <div className="w-3.25 h-3.25 rounded-full bg-accent-main shrink-0" />
          <h4
            className="text-body-md-bold leading-10 text-text-100 tracking-[-0.3px]"
            style={{
              textShadow:
                "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
            }}
          >
            {title}
          </h4>
        </div>
        <span className="text-text-100 group-hover:text-accent-main transition-colors shrink-0">
          {isOpen ? (
            <MinusIcon className="w-6 h-6" />
          ) : (
            <PlusIcon className="w-6 h-6" />
          )}
        </span>
      </div>

      {/* Toggle Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 pl-6.25">
          <p className="text-text-300 text-[18px] leading-7">
            {content.description}
          </p>
          <ul className="flex flex-col gap-2">
            {content.items &&
              content.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-text-300 text-font-size-xl leading-7"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-background-200 shrink-0" />
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
