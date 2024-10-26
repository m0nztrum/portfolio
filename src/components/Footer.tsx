export const Footer = () => {
    return (
        <footer className="flex flex-row justify-between p-2">
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
