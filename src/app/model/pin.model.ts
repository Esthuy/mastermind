

import { Color } from "./color.model";


export interface Pin{
    color: Color, 
    status: 'correct' | 'wrong-color' | 'wrong-position' | undefined, 
}