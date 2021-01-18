import React, { ReactNode } from "react"
import { WrapRootElementNodeArgs } from "gatsby"
import "./src/styles/global.css"

export const wrapRootElement: React.FC<WrapRootElementNodeArgs> = ({
  element
}) => {
  return <>{element}</>
}
