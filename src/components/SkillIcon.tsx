export const SkillIcon = ({
    techInfo,
}: {
    techInfo: { name: string; description: string; imageUrl: string; bgColor: string };
}) => {
    return (
        <div className="flex flex-1 gap-5 rounded-xl border border-dark-500 p-2.5">
            <div className={`w-fit rounded-lg p-3`}>
                <img src={techInfo.imageUrl} alt={`${techInfo.name} logo`} className="size-8" />
            </div>
            <div>
                <h4 className="text-lg font-medium">{techInfo.name}</h4>
                <p className="text-sm">{techInfo.description}</p>
            </div>
        </div>
    );
};
