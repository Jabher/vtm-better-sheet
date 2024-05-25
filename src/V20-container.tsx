import {PropsWithChildren} from "react";
import './V20-container.css'
import {blurry} from "./components/utility/Blurry.tsx";

export const V20Container = ({children}: PropsWithChildren) => <div className="sheet">
    <div className="sheet-header">
        <div className="sheet-header-line-left"/>
        <img src="/src/assets/img.png" alt=""/>
        <div className="sheet-header-line-right"/>
    </div>
    <div className="sheet-body" style={{
        // @ts-ignore
        '--blurry-10-50': blurry(10, 50).mask
    }}>
        <div style={{width: '100%', overflow: 'hidden', padding: '20px'}}>
            {children}
        </div>
    </div>
    <div className="sheet-footer"/>
</div>
