import Header from "../components/Header";
import SearchBar from "../components/SearchBar";


function MainPage() {
    const handleSearch = (value: string) => {
        console.log('Searching for:', value);
    };
    return (
        <div className="screen">
            <Header />
            <div className="main-introduction">
                <h1>Book your next wellness session in seconds!</h1>
                <p className="text">Trusted service professionals near you.</p>
                {/* will be added after */}
                <SearchBar onSearch={handleSearch} />
                {/* <div>SEARCH BAR + OPTIONS</div> */}

                {/* other things, will be done after it will be done in figma */}
                {/* footer */}
            </div>
        </div>
    )
}

export default MainPage;