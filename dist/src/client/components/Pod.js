"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Popover_1 = __importDefault(require("@mui/material/Popover"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const k8sPod = require('./Kubernetes_Pod.jpg');
const Pod = ({ info, nodeNum }) => {
    console.log('nodeNum', nodeNum);
    // popover
    const [anchorEl, setAnchorEl] = react_1.default.useState(null);
    // popover open
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    // popover close
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (react_1.default.createElement("div", { id: `pod${nodeNum}` },
        react_1.default.createElement("img", { src: "https://banner2.cleanpng.com/20180329/qjq/kisspng-google-cloud-platform-google-compute-engine-kubern-container-5abc828e10c6a8.2707130315223036300687.jpg", id: `pod${nodeNum}_image`, width: "100px", height: "100px" }),
        react_1.default.createElement(Typography_1.default, { "aria-owns": open ? 'mouse-over-popover' : undefined, "aria-haspopup": "true", onMouseEnter: handlePopoverOpen, onMouseLeave: handlePopoverClose },
            react_1.default.createElement("div", { id: `pod${nodeNum}_text` }, info.Name)),
        react_1.default.createElement(Popover_1.default, { id: "mouse-over-popover", sx: {
                pointerEvents: 'none',
            }, open: open, anchorEl: anchorEl, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
            }, onClose: handlePopoverClose, disableRestoreFocus: true },
            react_1.default.createElement(Typography_1.default, { sx: { p: 1 } },
                react_1.default.createElement("div", { className: 'pod-popOver' },
                    react_1.default.createElement("ul", null,
                        react_1.default.createElement("li", null,
                            "CPU Requests: ",
                            info.CPU_Requests,
                            " "),
                        react_1.default.createElement("li", null,
                            "CPU Limits: ",
                            info.CPU_Limits,
                            " "),
                        react_1.default.createElement("li", null,
                            "Memory Requests: ",
                            info.Memory_Requests),
                        react_1.default.createElement("li", null,
                            "Memory Limits: ",
                            info.Memory_Limits),
                        react_1.default.createElement("li", null,
                            "Age: ",
                            info.Age)))))));
};
exports.default = Pod;
