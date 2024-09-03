import { ReactNode } from "react";
import "./index.scss"
import { X } from 'lucide-react';
import { AlertTypes } from "../../../types";
interface Iprops{
title:string,
icon:ReactNode,
description?:string,
type:AlertTypes,
children?:ReactNode
}

function Alert({title,icon,description,type,children}:Iprops) {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>

        <X className="close" size={20} />
      </div>

      {children ? children : <p>{description}</p>}
    </div>
  )
}

export default Alert
