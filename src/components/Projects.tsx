import ContentCard, { IContentCard } from "./ui/ContentCard";

const projects: IContentCard[] = [
    {
        title: "Arbiswap Dapp",
        description: "Decentralized Exchange (DEX) on arbitrum",
        url: "https://arbiswap-lovat.vercel.app/",
        src: "/arbiswap.png"
    },
    {
        title: "NFT Marketplace",
        description: "Web3 NFT Marketplace Dapp on arbitrum sepolia",
        url: "https://nft-marketplace-front-chi.vercel.app/",
        src: "/nftMarketplace.png"
    },
    {
        title: "Other Projects",
        description: "Compilation of personal projects",
        url: "https://github.com/stars/RicardoMuchacho",
        src: "/githubBg.jpg"
    },
]

export default function Projects() {
    return (
        <div className="flex flex-col gap-10 justify-center items-center w-full sm:flex-row">
            {projects.map((project) => (
                <ContentCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    src={project.src}
                    url={project.url}
                />
            ))}
        </div>
    );
}
