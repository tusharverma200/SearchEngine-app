import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
    const apiKey = import.meta.env.GOOGLE_SEARCH_API_KEY;
    const cx = import.meta.env.GOOGLE_SEARCH_CX;
    console.log(apiKey, cx);

    return (
        <AppContext>

            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route
                        path="/:query/:startIndex"
                        exact
                        element={<SearchResult />}
                    />
                </Routes>
            </BrowserRouter>
        </AppContext>


    );
}

export default App;
