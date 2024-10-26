export const SkillIcon = ({
    techInfo,
}: {
    techInfo: { name: string; description: string; imageUrl: string; bgColor: string };
}) => {
    const { name, description, imageUrl, bgColor } = techInfo;
    return (
        <div className="flex flex-1 gap-5 rounded-xl border border-dark-200 bg-dark-200 p-2.5 transition-colors duration-200 hover:border-[#fafafa] hover:bg-dark-300">
            <div className={`w-fit rounded-lg p-3 ${bgColor}`}>
                <img src={imageUrl} alt={`${name} logo`} className="size-8" />
            </div>
            <div>
                <h4 className="text-lg font-medium">{name}</h4>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};
