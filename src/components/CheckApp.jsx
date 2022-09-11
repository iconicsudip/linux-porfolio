import React from 'react'
import Chrome from './Apps/Chrome'

export default function CheckApp(props) {
    if(props.appname==="chrome"){
        return <Chrome />
    }
}
