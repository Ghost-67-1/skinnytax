import React from 'react'

export default function ErrorMassage({ error, visible, }) {
    console.log("🚀 ~ ErrorMassage ~ error, visible:", error, visible)
    if (!error || !visible) {
        return null
    } else {
        return (
                <span
                    style={{ color: "#FF9494", fontSize: 11, letterSpacing: 0, marginLeft: "10px", marginTop: "6px" }}
                >{error}</span>
        )
    }
}
