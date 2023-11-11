import { Link } from "react-router-dom";

const BackButton = ({ to }) => {
    return (
        <Link to={to}>
            <button type='button' >Go back</button>
        </Link>
    )
};

export default BackButton;