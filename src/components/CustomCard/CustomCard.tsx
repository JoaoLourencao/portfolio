import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon?: IconProp;
  image?: string;
  title?: string;
  description?: string;
  bgColor?: string;
  iconColor?: string;
  rounded?: string;
  tags?: JSX.Element;
  bordered?: boolean;
}

export function CustomCard({ icon, title, description, bgColor = 'bg-primary', iconColor = 'white', image, rounded = "rounded-none", tags, bordered }: Props) {
  let border: string = bordered ? 'border-5 border-solid border-purple' : '';

  return (
    <div className={"custom-card p-10 text-left flex flex-col gap-2" + ' ' + bgColor + ' ' + rounded + ' ' + border}>
      {icon && <FontAwesomeIcon icon={icon} fontSize={35} className="self-start" color={iconColor} />}
      {image && <img src={image} alt="image" className="w-full object-contain h-[10vh]" />}
      {title && <p className="font-bold text-2xl">{title}</p>}
      {description && <p>{description}</p>}
      {tags && <div className="my-2 flex flex-col gap-2">{tags}</div>}
    </div>
  );
};

