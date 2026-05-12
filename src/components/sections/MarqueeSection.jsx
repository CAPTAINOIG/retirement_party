import { MARQUEE_ITEMS } from "../../utils/constants";

const Separator = () => (
  <span className="mx-6 text-primary-700 opacity-50 select-none">◆</span>
);

const Item = ({ before, after }) => (
  <span className="inline-flex items-baseline gap-3 whitespace-nowrap">
    <span className="text-gray-500 text-lg">{before}</span>
    <span className="text-primary-500 opacity-40 text-sm">→</span>
    <span className="text-gray-300 text-lg">{after}</span>
    <Separator />
  </span>
);

const MarqueeSection = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative py-7 bg-dark-800 border-y border-primary-500/10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="marquee-track">
        <div className="marquee-inner">
          {items.map((item, i) => (
            <Item key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;