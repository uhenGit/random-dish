import "./sceleton.css"
export default function Sceleton() {
    return (
        <div className="main">
            <div className="sceleton-wrap flex f-column f-center">
                <div className="sceleton header"></div>
                <div className="sceleton-recipe flex f-center">
                    <div className="sceleton img"></div>
                    <div className="ul-wrap flex">
                        <div className="sceleton ul"></div>
                        <div className="sceleton ul"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}