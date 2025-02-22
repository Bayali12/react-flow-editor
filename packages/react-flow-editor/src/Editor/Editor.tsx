import React from "react"

import type { EditorProps } from "@/types"

import { Canvas } from "./Canvas"
import { EditorContext } from "./editor-context"
import "../_style.scss"
import { StoreUpdater } from "./StoreUpdater"

const Editor: React.FC<EditorProps> = ({
  nodes,
  NodeComponent,
  ScaleComponent,
  MenuComponent,
  OutputComponent,
  SelectionZoneComponent,
  importantNodeIds,
  onNodesChange,
  connectorStyleConfig
}) => (
  <EditorContext.Provider
    value={{
      NodeComponent,
      OutputComponent,
      importantNodeIds,
      connectorStyleConfig
    }}
  >
    <Canvas
      SelectionZoneComponent={SelectionZoneComponent}
      ScaleComponent={ScaleComponent}
      MenuComponent={MenuComponent}
    />

    <StoreUpdater nodes={nodes} onNodesChange={onNodesChange} />
  </EditorContext.Provider>
)

export default Editor
