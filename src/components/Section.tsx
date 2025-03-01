import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children }: React.PropsWithChildren<Props>) => {
    return (
        <section id={id} className="py-10 lg:py-20 ">
            <SectionTitle>
                <h2 className="text-center mb-4 text-themeNavy font-title">{title}</h2>
            </SectionTitle>
            <p className="mb-12 text-center text-themeNavy font-text">{description}</p>
            {children}
        </section>
    )
}

export default Section