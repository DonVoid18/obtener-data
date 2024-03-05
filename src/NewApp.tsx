import "reactflow/dist/style.css"

import ReactFlow, { Controls } from 'reactflow'

import ColorChooserNode from './ColorChooserNode'
import useStore from './store'

const nodeTypes = { colorChooser: ColorChooserNode }

const NewApp = () => {
    const { nodes, edges } = useStore(state => state)
    return (
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                defaultEdgeOptions={{ type: "smoothstep", style: { stroke: "black", strokeWidth: 5 } }}
            >
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default NewApp