import "./main.css"
export default function Main () {
    return(
        <div className="main">
            <h2 className="main--heading">Fun facts about React </h2>
            <p className="main--details">
                <li className="main--listitems">was first relesed in 2013</li>
                <li className="main--listitems">was origionally created by Jorden Walke</li>
                <li className="main--listitems">is maintained by Facebook</li>
                <li className="main--listitems">has well over 100k starts on github</li>
            </p>
        </div>
    );
};