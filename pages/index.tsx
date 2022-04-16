import type { NextPage } from 'next'
import Terminal from '../components/term'
import term from "../components/term"

const html = (
    <div className="wrapper">
        <pre>
            <Terminal>
                <div className="user-input">
                    <span className="incentive">
                        $&gt;
                    </span>
                    <input type="text" />
                </div>
            </Terminal>
        </pre>
    </div>
)

const Home: NextPage = () => {
    return (html)
}

export default Home;
