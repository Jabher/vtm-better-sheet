import {PropsWithChildren} from "react";
import './V20-container.css'

export const V20Container = ({children}: PropsWithChildren) => <div className="sheet">
    <div className="sheet-header">
        <div className="sheet-header-line-left"/>
        <img src="/src/assets/img.png" alt=""/>
        <div className="sheet-header-line-right"/>
    </div>
    <div className="sheet-body">
        <div style={{width: '100%', overflow: 'hidden', padding: '20px'}}>
            {children}
        </div>
    </div>
    <div className="sheet-footer"/>
</div>
