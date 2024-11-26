
import Icon from "./../Icon";
interface CategoryProps {
    name: string;
    icon: string;
}

export default function Category({ name, icon }: CategoryProps) {
    return (
        <div className="max-w-40 h-32 flex flex-col items-center gap-2 py-5 bg-gray-200 rounded-lg">
            <Icon name={icon} size={50} />
            <p className="text-center text-sm font-medium">{name}</p>
        </div>
    );
}
