import React from "react";

export default function useLocalStorage(key: string, initial?: " " | boolean) {
    const [value, setvalue] = React.useState(() => {
        let getItem = localStorage.getItem(key)
        if (getItem) {
            return JSON.parse(getItem)
        }
        return initial
    })
    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    return [value, setvalue]
}
