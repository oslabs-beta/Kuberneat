"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Popover_1 = __importDefault(require("@mui/material/Popover"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Pod = ({ info }) => {
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
    //React.ChangeEvent<HTMLInputElement>
    // const openModal = (e: any) => {
    // 	// determining where to place modal
    // 	const top = e.pageY;
    // 	const left = e.pageX;
    // 	modalDetail = (
    // 		<ul className="modalList">
    // 			<li className="modalDetail">CPU Requests: {info.CPU_Requests}</li>
    // 			<li className="modalDetail">CPU Limits: {info.CPU_Limits}</li>
    // 			<li className="modalDetail">Memory Requests: {info.Memory_Requests}</li>
    // 			<li className="modalDetail">Memory Limits: {info.Memory_Limits}</li>
    // 			<li className="modalDetail">Age: {info.Age}</li>
    // 		</ul>
    // 	);
    // };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Typography_1.default, { "aria-owns": open ? 'mouse-over-popover' : undefined, "aria-haspopup": "true", onMouseEnter: handlePopoverOpen, onMouseLeave: handlePopoverClose }, info.Name),
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
                "CPU Requests: ",
                info.CPU_Requests,
                "CPU Limits: ",
                info.CPU_Limits,
                "Memory Requests: ",
                info.Memory_Requests,
                "Memory Limits: ",
                info.Memory_Limits,
                "Age: ",
                info.Age))));
};
exports.default = Pod;
