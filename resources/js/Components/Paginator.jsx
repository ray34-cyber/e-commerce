import { Link } from "@inertiajs/react";

const Paginator = ({ products }) => {
    const links = products.links;

    const previous = links[0].url;
    const currentPage = products.current_page;
    const next = links[links.length - 1].url;

    return (
        <div className="join">
            {previous && (
                <Link href={previous} className="join-item btn">
                    «
                </Link>
            )}
            <button className="join-item btn">Page {currentPage}</button>
            {next && (
                <Link href={next} className="join-item btn">
                    »
                </Link>
            )}
        </div>
    );
};

export default Paginator;
