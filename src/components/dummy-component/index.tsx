import React from "react"

interface IProps {
    title?: string;
    fruits?: Array<string>; // string[]
    user?: Record<string, string>; //{[key:string]: string}
    type?: "french" | "spanish" | "italian";
  }


function isFrench(leanProps: Required<IProps>){
    return leanProps.user
}

{
    login: {
        success: "le login areussi",
        failed: "le login a foiré à mort"
    }
}

export default function DummyComponent(props:IProps){
const {title, age} = props
    return <div>{T("login.failed")}</div>
}
