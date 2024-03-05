import { Handle, NodeProps, Position } from "reactflow"
import useStore, { NodeData } from "./store"

import { TbCoinFilled } from "react-icons/tb"

function ColorChooserNode({ id, data }: NodeProps<NodeData>) {
  const handleActivateCurso = useStore((state) => state.handleActivateCurso)

  return (
    <div onClick={() => {
      handleActivateCurso(id)
    }} style={{
      width: 300,
      height: 100,
      border: "5px solid #777",
      borderRadius: 5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 3,
      padding: "0 10px",
      boxShadow: "0px 10px 10px -10px rgba(33, 35, 38, 0.1)",
      color: "white"
    }}>
      <Handle type="target" position={Position.Left} />
      <span
        style={{
          fontSize: 15,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {data.label}
      </span>
      <div style={{
        fontSize: 13
      }}>
        Angelo Patrick Rios Nolasco
      </div>
      {
        !data.finished && <div
          style={{
            position: "absolute",
            top: 5,
            right: 5,
          }}
        >
          {
            Array.from({ length: data.creditos }).map((_, index) => (
              <TbCoinFilled key={index} style={{
                color: "gold",
                // alternando el movimiento

                animation: `coinAnimation 1s infinite  ${index * 100}ms`,
              }} />
            ))
          }
        </div>
      }

      {
        data.finished && <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            color: "red",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            backdropFilter: "blur(5px)",
            borderRadius: 5,
          }}
        >
          <span
            style={{
              transform: "rotate(-25deg)"
            }}
          >Terminado</span>
        </div>
      }
      <Handle type="source" position={Position.Right} />
      <style>
        {/* animation de rebote */}
        {`
          @keyframes coinAnimation {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-3px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  )
}

export default ColorChooserNode
