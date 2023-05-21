'use client'
import { useContext } from "react";
import { DesignContext } from "./DesignContext";
import { DesignContextInterface } from "./DesignContextInterface";


export const useDesign = () => {
    const context = useContext(DesignContext) as DesignContextInterface;
    if(!context) throw new Error('useTasks must used within a provider')
    return context;
}