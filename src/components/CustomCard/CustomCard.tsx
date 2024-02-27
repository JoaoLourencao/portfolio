import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconProp;
  title: string;
  description: string;
  bgColor?: string;
  color?: string;
}

export function CustomCard({ icon, title, description, bgColor = 'bg-primary', color = 'white' }: Props) {
  return (
    <div className={"custom-card p-10 text-left flex flex-col gap-2" + ' ' + bgColor}>
      <FontAwesomeIcon icon={icon} fontSize={35} className="self-start" color={color} />
      <p className="font-bold text-2xl">{title}</p>
      <p>{description}</p>
    </div>
  );
};

