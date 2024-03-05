import "reactflow/dist/style.css"

import { useCallback, useEffect } from "react"
import ReactFlow, { Controls, useReactFlow } from "reactflow"

import ELK from "elkjs/lib/elk.bundled.js"
import ColorChooserNode from "./ColorChooserNode"
import useStore from "./store"

const nodeTypes = { colorChooser: ColorChooserNode }

const elk = new ELK()

const defaultOptions = {
  "elk.algorithm": "layered",
  "elk.layered.spacing.nodeNodeBetweenLayers": 50,
  "elk.spacing.nodeNode": 5,
}

const useLayoutedElements = () => {
  const { setNodes, getEdges, fitView, getNodes } = useReactFlow()

  const getLayoutedElements = useCallback(async () => {

    const graph = {
      id: "root",
      children: getNodes(),
      edges: getEdges(),
    }

    const { children } = await elk.layout(graph, {
      layoutOptions: defaultOptions,
    })

    children.forEach((node) => {
      node.position = { x: node.x, y: node.y }
    })

    const data = children?.map((node) => {
      const { id, position, data, targetPosition, sourcePosition, type } = node
      return { id, position, data, targetPosition, sourcePosition, type }
    })

    // necesitamos crear un array de objetos para pegarlo directo en nodes.ts

    console.log(data)

    setNodes(children)

    window.requestAnimationFrame(() => {
      fitView()
    })
  }, [])

  return { getLayoutedElements }
}

function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange } = useStore((state) => state)
  const { getLayoutedElements } = useLayoutedElements()

  useEffect(() => {
    setTimeout(() => {
      getLayoutedElements()
    }, 1000)
  }, [])

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        defaultEdgeOptions={{
          type: "smoothstep", style: {
            stroke: "gray", strokeWidth: 5,
          }
        }}
        style={{
          backgroundColor: "#2d3142",
        }}
      >
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default Flow
