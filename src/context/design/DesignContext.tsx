'use client'
import {createContext} from 'react'
import { DesignContextInterface } from './DesignContextInterface';

export const DesignContext = createContext<DesignContextInterface | null>(null);