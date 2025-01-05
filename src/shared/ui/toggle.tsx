'use client'

import { useCallback, useState } from "react";

const themeMap = {
    dark: 'dark',
    light: 'light',
}

export const Toggle = () => {
    const [themeMode, setThemeMode] = useState(themeMap['light']);

    const onClick = useCallback(() => {
        document.documentElement.classList.toggle('dark');
        setThemeMode((currentTheme) => currentTheme === themeMap['light'] ? themeMap['dark'] : themeMap['light'])
    }, [])

    return <button onClick={onClick}>{themeMode}</button>
}