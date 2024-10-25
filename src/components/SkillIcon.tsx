export const SkillIcon = ({
    techInfo,
}: {
    techInfo: { name: string; description: string; imageUrl: string; bgColor: string };
}) => {
    return (
        <div>
            <div>
                <img src={techInfo.imageUrl} alt={`${techInfo.name} logo`} />
            </div>
            <div>
                <h4 className="text-lg font-medium">{techInfo.name}</h4>
                <p className="text-sm">{techInfo.description}</p>
            </div>
        </div>
    );
};
