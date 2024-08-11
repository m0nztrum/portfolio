export const Footer = () => {
    return (
        <footer className="bg-neutral-900 p-2 text-center">
            <div>
                <span className="text-sm">
                    Copyright© - {new Date().getFullYear()} | Designed and
                    Developed by:{' '}
                    <a
                        href="https://github.com/m0nztrum"
                        target="_blank"
                        className="font-normal hover:underline hover:font-semibold"
                    >
                        m0nztrum
                    </a>{' '}
                    💓
                </span>
            </div>
        </footer>
    );
};
