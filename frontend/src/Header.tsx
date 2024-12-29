export default function Header() {
    return (
        <header className="flex justify-between px-8 py-4 sticky top-0">
            <div><h3 className="font-bold text-xl"><a href="">BLOAT</a></h3></div>
            <ul className="flex flex-row justify-center gap-10">
                <li><a href="">Home</a></li>
                <li><a href="">Formats</a></li>
                <li><a href="">Discussions</a></li>
                <li><a href="">About</a></li>
            </ul>
            <div>
                <a href="#">Sign In</a>
            </div>
        </header>
    )
};