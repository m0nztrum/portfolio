export const Footer = () => {
    return (
        <footer className="p-2 text-center text-sm text-dark-500 md:text-base">
            <div>
                <span>
                    Copyright© - {new Date().getFullYear()} | Designed and Developed by:{' '}
                    <a
                        href="https://github.com/m0nztrum"
                        className="font-normal hover:font-bold hover:underline"
                    >
                        m0nztrum
                    </a>{' '}
                    💓
                </span>
            </div>
        </footer>
    );
};
