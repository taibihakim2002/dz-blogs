const navTheme = {
    root: {
        base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-darkBg sm:px-4",
        rounded: {
            on: "rounded",
            off: "",
        },
        bordered: {
            on: "border",
            off: "",
        },
        inner: {
            base: "mx-auto flex flex-wrap items-center justify-between",
            fluid: {
                on: "",
                off: "container",
            },
        },
    },
    brand: {
        base: "flex items-center",
    },
    collapse: {
        base: "w-full md:block md:w-auto",
        list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
        hidden: {
            on: "hidden",
            off: "",
        },
    },
    link: {
        base: "block py-2 pl-3 pr-4 md:p-0",
        active: {
            on: "bg-primary text-white dark:text-white md:bg-transparent md:text-primary",
            off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-primary md:dark:hover:bg-transparent md:dark:hover:text-white",
        },
        disabled: {
            on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
            off: "",
        },
    },
    toggle: {
        base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
        icon: "h-6 w-6 shrink-0",
    },
};

const btnTheme = {
    "base": "group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none",
    "fullSized": "w-full",
    "color": {
        "black": "border border-transparent bg-darkBg text-white dark:text-darkBg focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-600 dark:border-gray-700 dark:bg-white dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-400",
        "primary": "border border-transparent bg-primary text-white focus:ring-4 focus:ring-gray-300 enabled:hover:bg-blue-800 dark:border-gray-700 dark:focus:ring-gray-800 dark:enabled:hover:bg-blue-800",
        "reverse": "border border-[1px] hover:border-transparent hover:bg-primary text-white focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-900 dark:border-gray-700 dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-700",
        "gray": ":ring-cyan-700 border border-gray-200 bg-white text-gray-900 focus:text-cyan-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white",
    },
    "disabled": "cursor-not-allowed opacity-50",
    "isProcessing": "cursor-wait",
    "spinnerSlot": "absolute top-0 flex h-full items-center",
    "spinnerLeftPosition": {
        "xs": "left-2",
        "sm": "left-3",
        "md": "left-4",
        "lg": "left-5",
        "xl": "left-6"
    },

    "inner": {
        "base": "flex items-stretch transition-all duration-200",
        "position": {
            "none": "",
            "start": "rounded-r-none",
            "middle": "rounded-none",
            "end": "rounded-l-none"
        },
        "outline": "border border-transparent",
        "isProcessingPadding": {
            "xs": "pl-8",
            "sm": "pl-10",
            "md": "pl-12",
            "lg": "pl-16",
            "xl": "pl-20"
        }
    },
    "label": "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
    "outline": {
        "color": {
            "gray": "border border-gray-900 dark:border-white",
            "default": "border-0",
            "light": ""
        },
        "off": "",
        "on": "flex w-full justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white",
        "pill": {
            "off": "rounded-md",
            "on": "rounded-full"
        }
    },
    "pill": {
        "off": "rounded-lg",
        "on": "rounded-full"
    },
    "size": {
        "xs": "px-2 py-1 text-xs",
        "sm": "px-3 py-1.5 text-sm",
        "md": "px-4 py-2 text-sm",
        "lg": "px-5 py-2.5 text-base",
        "xl": "px-6 py-3 text-base"
    }
}

export default { btnTheme, navTheme }