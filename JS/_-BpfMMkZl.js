import {j as o} from "./jsx-runtime-Cw0GR0a5.js";
import {r as t} from "./index-CTjT7uj6.js";
import {J as e, T as s} from "./index-DhRMlFiG.js";
import {z as i} from "./index-D3Di-s2P.js";
import "./index-Ab3reo-t.js";
function p() {
    const r = i();
    return t.useEffect(() => {
        r && e.error(
            "An error occurred while processing your request! Please contact system adminis" +
            "trator."
        )
    }, [r]),
    o.jsx(s, {
        position: "top-center",
        richColors: !0,
        theme: "light",
        closeButton: !0,
        duration: 3e3,
        visibleToasts: 6
    })
}
export {
    p as ErrorBoundary
};
