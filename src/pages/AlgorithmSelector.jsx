import React from 'react'
import { useParams } from "react-router-dom"

function AlgorithmSelector() {
    const { algorithmId } = useParams();

    const renderVisualizer = () => {
        switch (algorithmId) {
            case "bfs":
                return <BFSVisualizer />;
            case "dfs":
                return <DFSVisualizer />;
            case "tree":
                return <TreeVisualizer />;
            default:
                return <div>Algorithm not found</div>;
        }
    };
    return (
        <div>
            {renderVisualizer()}
        </div>
    )
}

export default AlgorithmSelector
