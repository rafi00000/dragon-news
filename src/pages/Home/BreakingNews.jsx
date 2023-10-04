import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-slate-200 p-3">
            <button className="btn btn-neutral">Latest</button>
            <Marquee speed={200} pauseOnHover={true}>
                kichu na
            </Marquee>
        </div>
    );
};

export default BreakingNews;