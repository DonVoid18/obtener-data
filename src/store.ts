import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useReactFlow,
} from "reactflow"

import { create } from "zustand"
import initialEdges from "./edges"
import initialNodes from "./nodes"

export type NodeData = {
  finished: boolean
  label: string
  creditos: number
  tipoCurso: string
}

export type RFState = {
  nodes: Node<NodeData>[]
  edges: Edge[]
  fitView: () => void
  onNodesChange: OnNodesChange
  onEdgesChange: OnEdgesChange
  onConnect: OnConnect
  setNodes: (nodes: Node[]) => void
  setEdges: (edges: Edge[]) => void
  getNodes: () => Node[]
  getEdges: () => Edge[]
  handleActivateCurso: (nodeId: string) => void
}

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  fitView: useReactFlow,
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    })
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    })
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    })
  },
  setNodes: (nodes: Node[]) => {
    set({ nodes })
  },
  setEdges: (edges: Edge[]) => {
    set({ edges })
  },
  getNodes: () => get().nodes,
  getEdges: () => get().edges,
  handleActivateCurso: (nodeId: string) => {
    // cambiar de color y agregar la animación
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, finished: !node.data.finished }
        }
        return node
      }),
      edges: get().edges.map((edge) => {
        if (edge.source === nodeId) {

          if (edge.animated === true) {
            const newEdge = { ...edge, animated: false }
            delete newEdge.style
            edge = { ...newEdge }
          } else {
            edge = { ...edge, animated: true, style: { stroke: "#3772ff", strokeWidth: 5} }
          }
        }
        return edge
      }),
    })
  }
}))

export default useStore
